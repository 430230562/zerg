const status = require('status');
const liquid = require('liquid');
const Ef = require('effect');

function Acid(puddleSize) {
	return extend(LiquidBulletType,{
		speed: 0.1,
		damage: 0,
		liquid: liquid.acid,
		lifetime: 1,
		puddleSize: puddleSize,
		
		knockback: 0,
		
		status: status.corroding,
		statusDuration: 120,
	})
}
exports.Acid = Acid

function ReduceArmorBulletType(speed, damage, amount) {
	return extend(BasicBulletType, speed, damage, {
		hitEntity(b, entity, health) {
			this.super$hitEntity(b, entity, health);
			if(entity instanceof Unit) {
				var unit = entity;
				unit.armor -= amount;
			}
		},
		pierceCap: 2,
		pierce: true,
		pierceBuilding: true,
		
		buildingDamageMultiplier: 1.5,
		
		smokeEffect: Fx.shootBigSmoke,
		shootEffect: Fx.shootBigColor,
		despawnEffect: Fx.hitBulletColor,
		hitEffect: Fx.hitBulletColor,
		
		shrinkX: 0,
        shrinkY: 0,
		
		ammoMultiplier: 2,
	});
}
exports.ReduceArmorBulletType = ReduceArmorBulletType;

function FlameBulletType(speed, damage) {
	return extend(BulletType, speed, damage, {
		speed: speed,
		damage: damage,
		hitSize: 7,
		lifetime: 18,
		pierce: true,
		collidesAir: false,
		hitEffect: Fx.hitFlameSmall,
		despawnEffect: Fx.none,
		status: StatusEffects.burning,
		keepVelocity: false,
		hittable: false,
	});
}
exports.FlameBulletType = FlameBulletType;

//原代码by miner 20230607 
//pardon 修改

function BounceBulletType(speed,damage,range){
    return extend(BasicBulletType, speed, damage, {
        
        hitEntity(b, entity, health){
            this.super$hitEntity(b, entity, health);
            
            let {team, x, y, vel} = b;
            let target = null;
            if(entity instanceof Unit){
                target = Units.closestEnemy(team, x, y, range, unit => !b.hasCollided(unit.id));
            }else{
                target = Units.findEnemyTile(team, x, y, range, build => !b.hasCollided(build.id));
            }
            
            if(target != null){
                vel.setAngle(Angles.angle(x, y, target.x, target.y));
                b.damage -= b.damage / 10
            }else{
                b.remove()
            }
        },
    });
}
exports.BounceBulletType = BounceBulletType;