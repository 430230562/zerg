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
	return extend(BasicBulletType, {
		hitEntity(b, entity, health) {
			this.super$hitEntity(b, entity, health);
			if(entity instanceof Unit) {
				var unit = entity;
				unit.armor -= amount;
			}
		},
		speed: speed,
		damage: damage,
		pierceCap: 2,
		pierce: true,
		pierceBuilding: true,
		
		buildingDamageMultiplier: 1.5,
		
		smokeEffect: Fx.shootBigSmoke,
		shootEffect: Fx.shootBigColor,
		despawnEffect: Fx.hitBulletColor,
		hitEffect: Fx.hitBulletColor,
		
		ammoMultiplier: 2,
	});
}
exports.ReduceArmorBulletType = ReduceArmorBulletType;

function FlameBulletType(speed, damage) {
	return extend(BulletType, {
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