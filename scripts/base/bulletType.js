const status = require('status');
const liquid = require('liquid');
const Ef = require('effect');

function Venom(puddleSize) {
	var b = extend(LiquidBulletType, {
		speed: 0.1,
		damage: 0,
		liquid: liquid.venom,
		lifetime: 1,
		puddleSize: puddleSize,
			
		knockback: 0,
			
		status: status.poisoning,
		statusDuration: 600,
	});
	return b
}
exports.Venom = Venom

function ArmorReductionBulletType(speed, damage, armorReduction) {
	var b = extend(BasicBulletType, {
		hitEntity(b, entity, health) {
			this.super$hitEntity(b, entity, health);
			if(entity instanceof Unit) {
				var unit = entity;
				unit.armor -= armorReduction;
			}
		},
		speed: speed,
		damage: damage,
		sprite: "missile-large",
		pierce: true,
		buildingDamageMultiplier: 1.25,
		
		smokeEffect: Fx.shootBigSmoke,
		shootEffect: Fx.shootBigColor,
		despawnEffect: Fx.hitBulletColor,
		hitEffect: Fx.hitBulletColor,
		
		ammoMultiplier: 2,
	});
	return b
}
exports.ArmorReductionBulletType = ArmorReductionBulletType;

function VenomMissileBulletType(speed, damage, amount) {
	var b = extend(MissileBulletType, {
		speed: speed,
		damage: damage,
		backColor: Color.valueOf("84a94b"),
		frontColor: Color.valueOf("84a94b"),
		hitEffect: Fx.none,
		despawnEffect: Fx.none,
		trailColor: Color.valueOf("84a94b"),
		trailWidth: 0.8,
		trailLength: 14,
		trailChance: 0,
		
		status: status.poisoning,
		statusDuration: 600,
		
		buildingDamageMultiplier: 1.25,
		
		hitSound: Sounds.none,
		fragBullets: amount,
		fragBullet: new Venom(18)
	});
	return b
}
exports.VenomMissileBulletType = VenomMissileBulletType;

function FlameBulletType(speed, damage) {
	const b = extend(BulletType, {
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
	return b
}
exports.FlameBulletType = FlameBulletType;