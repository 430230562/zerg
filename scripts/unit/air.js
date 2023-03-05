const b = require('base/bulletType');
const item = require('item');

const mist = new UnitType("mist");
exports.mist = mist;
Object.assign(mist,{
	health: 130,
	speed: 2,
	flying: true,
	hitSize: 8,
	engineOffset: 5.75,
	armor: 1,
	accel: 0.08,
	drag: 0.04,
	targetFlags: [BlockFlag.generator,null],
	itemCapacity: 0,
	outlineRadius: 1,
	constructor: () => new UnitEntity.create(),
})
mist.weapons.add(
	Object.assign(new Weapon("bugs-mist-weapon"),{
		x: -18 / 4,
		y: -0.5,
		shootY: 0,
		layerOffset : -0.0001,
		reload: 20,
		shootSound: Sounds.missile,
		bullet:	Object.assign(new MissileBulletType(3,14),{
			width: 8,
			height: 8,
			shrinkY: 0,
			homingRange: 60,
			keepVelocity: false,
			lifetime: 50,
			trailChance: 0.1,
			hitColor: Color.valueOf("d99f6b"),
			backColor: Color.valueOf("d99f6b"),
			trailColor: Color.valueOf("d99f6b"),
			frontColor: Color.white,
		})
	})
)

const thoud = new UnitType("thoud");
exports.thoud = thoud;
Object.assign(thoud,{
	health: 680,
	speed: 1.85,
	flying: true,
	hitSize: 11,
	engineOffset: 7.8,
	armor: 4,
	accel: 0.08,
	drag: 0.016,
	targetFlags: [BlockFlag.factory,null],
	itemCapacity: 0,
	constructor: () => new UnitEntity.create(),
})
thoud.weapons.add(
	Object.assign(new Weapon("bugs-thoud-weapon"),{
		x: 4,
		y: 0,
		shootY: 0,
		reload: 45,
		shoot: Object.assign(new ShootPattern(), {
			shotDelay: 5,
			shots: 3,
		}),
		shootSound: Sounds.missile,
		bullet: Object.assign(new MissileBulletType(4,19),{
			width: 8,
			height: 8,
			shrinkY: 0,
			homingRange: 60,
			keepVelocity: false,
			lifetime: 50,
			splashDamage: 24,
			splashDamageRadius: 16,
			trailChance: 0.1,
			hitColor: Color.valueOf("d99f6b"),
			backColor: Color.valueOf("d99f6b"),
			trailColor: Color.valueOf("d99f6b"),
			frontColor: Color.white,
		})
	})
)

const couldMissile = new MissileUnitType("cloud-missile");
Object.assign(couldMissile, {
	hitSize: 8,
	constructor: () => new TimedKillUnit.create(),
	trailColor: Color.valueOf("d99f6b"),
	engineColor: Color.valueOf("d99f6b"),
	engineSize: 1.75,
	engineLayer: Layer.effect,
	speed: 4,
	maxRange: 6,
	lifetime: 60,
	health: 125,
	lowAltitude: true,
})
couldMissile.parts.add(
Object.assign(new FlarePart(),{
	progress: DrawPart.PartProgress.life.slope().curve(Interp.pow2In),
	color1: Color.valueOf("d99f6b"),
	radius: 0,
	radiusTo: 35,
	stroke: 3,
	rotation: 45,
	y: -5,
	followRotation: true,
}))
couldMissile.weapons.add(
Object.assign(new Weapon(), {
	shootCone: 360,
	mirror: false,
	reload: 1,
	shootOnDeath: true,
	bullet: Object.assign(new ExplosionBulletType(110, 35), {
		shootEffect: new MultiEffect(
			Fx.massiveExplosion,
			new WrapEffect(
				Fx.dynamicSpikes,
				Color.valueOf("d99f6b"), 24
			),
			Object.assign(new WaveEffect(),{
				colorFrom: Color.valueOf("d99f6b"),
				colorTo: Color.valueOf("d99f6b"),
				sizeTo: 40,
				lifetime: 12,
				strokeFrom: 4,
			})
		)
	})
})
)

const cloud = new UnitType("cloud");
exports.cloud = cloud;
Object.assign(cloud,{
	health: 1200,
	speed: 1.85,
	flying: true,
	hitSize: 19,
	engineOffset: 7.8,
	armor: 6,
	accel: 0.08,
	drag: 0.016,
	targetFlags: [BlockFlag.factory,null],
	itemCapacity: 0,
	constructor: () => new UnitEntity.create(),
})
cloud.weapons.add(
	Object.assign(new Weapon("bugs-cloud-weapon"),{
		layerOffset: 0.0001,
		reload: 15,
		shootY: 10,
		recoil: 3,
		rotate: false,
		mirror: false,
		x: 0,
		y: 6,
		heatColor: Color.valueOf("d99f6b"),
		cooldownTime: 50,
		shootSound: Sounds.bolt,
		shoot: new ShootAlternate(3.5),
	
		bullet: Object.assign(new b.ArmorReductionBulletType(4, 15, 1), {
			width: 7,
			height: 9,
			lifetime: 45,
			hitSize: 12,
			hitColor: Color.valueOf("d99f6b"),
			backColor: Color.valueOf("d99f6b"),
			trailColor: Color.valueOf("d99f6b"),
			frontColor: Color.white,
			trailWidth: 1.7,
			trailLength: 5,
		
			pierceCap: 2,
		})
	}),
	Object.assign(new Weapon(),{
		x: 5,
		y: -1,
		shootY: 0,
		reload: 90,
		shootSound: Sounds.missileSmall,
		baseRotation: -15,
		shootCone: 360,
		bullet: Object.assign(new BulletType(), {
			spawnUnit: couldMissile,
			smokeEffect: Fx.shootBigSmoke2,
			speed: 0,
			keepVelocity: false,
		}),
	})
)

const electron = new UnitType("electron");
exports.electron = electron;
Object.assign(electron,{
	health: 75,
	speed: 3.75,
	flying: true,
	hitSize: 6,
	engineOffset: 5.75,
	armor: 0,
	accel: 0.08,
	drag: 0.04,
	targetAir: false,
	range: 140,
	faceTarget: false,
	circleTarget: true,
	crashDamageMultiplier: 5,
	targetFlags: [BlockFlag.generator,null],
	itemCapacity: 0,
	constructor: () => new UnitEntity.create(),
})
electron.abilities.add(
	new MoveLightningAbility(12,9,0.25,-2,1,4,Pal.lancerLaser)
)
electron.weapons.add(
	Object.assign(new Weapon(),{
		x: 0,
		y: -2,
		reload: 15,
		bullet: Object.assign(new LightningBulletType(), {
			damage: 12,
			lightningLength: 9,
			collidesAir: false,
			pierceArmor: true,
			ammoMultiplier: 1,
		})
	})
)

const inductance = new UnitType("inductance");
exports.inductance = inductance;
Object.assign(inductance,{
	health: 480,
	speed: 2.95,
	flying: true,
	hitSize: 11,
	engineOffset: 7.8,
	armor: 3,
	accel: 0.08,
	drag: 0.016,
	targetFlags: [BlockFlag.generator,null],
	itemCapacity: 0,
	constructor: () => new UnitEntity.create(),
})
inductance.weapons.add(
	Object.assign(new Weapon(),{
		shootSound: Sounds.blaster,
		reload: 35,
		x: 0,
		y: 6.5,
		shootY: 5,
		recoil: 1,
		top: false,
		layerOffset: -0.01,
		rotate: false,
		mirror: false,
		shoot: Object.assign(new ShootHelix(),{
			mag: 2,
			scl: 3,
		}),

		bullet: Object.assign(new BasicBulletType(4, 30),{
			width: 7,
			height: 12,
			lifetime: 50,
			shootEffect: Fx.sparkShoot,
			smokeEffect: Fx.shootBigSmoke,
			hitColor: Pal.lancerLaser,
			backColor: Pal.lancerLaser,
			trailColor: Pal.lancerLaser,
			frontColor: Color.white,
			trailWidth: 1.5,
			trailLength: 5,
			hitEffect: Fx.hitBulletColor,
			despawnEffect: Fx.hitBulletColor,
			intervalBullet: Object.assign(new LightningBulletType(),{
				damage: 9,
				collidesAir: false,
				ammoMultiplier: 1,
				lightningColor: Pal.lancerLaser,
				lightningLength: 3,
				lightningLengthRand: 6,
		
				lightningType: Object.assign(new BulletType(0.0001, 0),{
					lifetime: Fx.lightning.lifetime,
					hitEffect: Fx.hitLancer,
					despawnEffect: Fx.none,
					status: StatusEffects.shocked,
					statusDuration: 10,
					hittable: false,
					lightColor: Color.white,
					buildingDamageMultiplier: 0.25,
				})
			}),
			bulletInterval: 4,
			lightningColor: Pal.lancerLaser,
			lightningDamage: 9,
			lightning: 9,
			lightningLength: 1,
			lightningLengthRand: 6,
		})
	})
)

const ampere = new UnitType("ampere");
exports.ampere = ampere;
Object.assign(ampere,{
	health: 880,
	speed: 2.5,
	flying: true,
	hitSize: 16,
	engineOffset: 7.8,
	armor: 4,
	accel: 0.08,
	drag: 0.016,
	targetFlags: [BlockFlag.generator,null],
	itemCapacity: 0,
	constructor: () => new UnitEntity.create(),
})
ampere.weapons.add(
	Object.assign(new Weapon("bugs-ampere-weapon"),{
		layerOffset: 0.0001,
		reload: 60,
		shootY: 0.75,
		recoil: 3,
		shootCone: 30,
		rotate: false,
		mirror: false,
		x: 0,
		y: 6,
		heatColor: Pal.lancerLaser,
		cooldownTime: 50,
		shootSound: Sounds.shockBlast,
		bullet: Object.assign(new BasicBulletType(3,125), {
			shootEffect: new MultiEffect(
				Fx.shootTitan,
				Object.assign(new WaveEffect(), {
					colorTo: Pal.lancerLaser,
					sizeTo: 26,
					lifetime: 14,
					strokeFrom: 4,
				})
			),
			smokeEffect: Fx.shootSmokeTitan,
			hitColor: Pal.lancerLaser,
			despawnSound: Sounds.spark,
		
			sprite: "large-orb",
			trailEffect: Fx.missileTrail,
			trailInterval: 3,
			trailParam: 4,
			lifetime: 75,
			homingPower: 0.08,
			width: 15,
			height: 15,
			backColor: Pal.lancerLaser,
			frontColor: Pal.lancerLaser,
			shrinkX: 0,
			shrinkY: 0,
			trailColor: Pal.lancerLaser,
			trailLength: 12,
			trailWidth: 2.2,
			despawnEffect: Object.assign(new ExplosionEffect(),{
				waveColor: Pal.lancerLaser,
				smokeColor: Color.gray,
				sparkColor: Pal.lancerLaser,
				waveStroke: 4,
				waveRad: 40,
			}),
			hitEffect: Object.assign(new ExplosionEffect(),{
				waveColor: Pal.lancerLaser,
				smokeColor: Color.gray,
				sparkColor: Pal.lancerLaser,
				waveStroke: 4,
				waveRad: 40,
			}),
			intervalBullet: Object.assign(new LightningBulletType(),{
				damage: 21,
				collidesAir: false,
				ammoMultiplier: 1,
				lightningColor: Pal.lancerLaser,
				lightningLength: 3,
				lightningLengthRand: 6,
		
				lightningType: Object.assign(new BulletType(0.0001, 0),{
					lifetime: Fx.lightning.lifetime,
					hitEffect: Fx.hitLancer,
					despawnEffect: Fx.none,
					status: StatusEffects.shocked,
					statusDuration: 10,
					hittable: false,
					lightColor: Color.white,
					buildingDamageMultiplier: 0.25,
				})
			}),
			bulletInterval: 4,
			lightningColor: Pal.lancerLaser,
			lightningDamage: 19,
			lightning: 12,
			lightningLength: 2,
			lightningLengthRand: 8,
		})
	})
)

const phantom = new UnitType("phantom");
exports.phantom = phantom;
Object.assign(phantom,{
	targetPriority: -0.5,
	
	speed: 15 * 8 / 60,
	accel: 0.06,
	drag: 0.017,
	
	health: 220,
	armor: 2,
	hitSize: 11,
	itemCapacity: 30,
	mineTier: 3,
	mineSpeed: 3,
	mineWalls: true,
	buildSpeed: 3,
	controller: UnitTypes.poly.controller,
	defaultCommand: UnitTypes.poly.defaultCommand,
	flying: true,
	constructor: () => new UnitEntity.create()
})
phantom.mineItems.addAll(
    item.ossature,
    item.nickel,
    item.manganese,
    item.crystal
    //item.uranium
);
phantom.weapons.add(
	Object.assign(new Weapon("bugs-phantom-weapon"), {
		x: 14 / 4,
		y: 9 / 4,
		top: false,
		reload: 30,
		ejectEffect: Fx.none,
		inaccuracy: 0,
		alternate: true,
		shoot: Object.assign(new ShootPattern(), {
			shots:2,
			shotDelay: 7.5,
		}),
		shootSound: Sounds.missile,
		bullet: Object.assign(new MissileBulletType(3, 9), {
			homingPower: 0,
			lifetime: 50,
			keepVelocity: false,
			shootEffect: Fx.shootHeal,
			smokeEffect: Fx.hitLaser,
			hitEffect: Fx.hitLaser,
			despawnEffect: Fx.hitLaser,
			frontColor: Color.valueOf("98ffa9"),
			hitSound: Sounds.none,
		
			healPercent: 3,
			collidesTeam: true,
			backColor: Color.valueOf("98ffa9"),
			trailColor: Color.valueOf("98ffa9"),
		})
	})
)
phantom.abilities.add(
	new RepairFieldAbility(15,60 * 10,8 * 10)
)

const shadow = new UnitType("shadow");
exports.shadow = shadow;
Object.assign(shadow,{
    targetPriority: -0.5,
	
	speed: 12 * 8 / 60,
	accel: 0.06,
	drag: 0.017,
	
	health: 460,
	armor: 3,
	hitSize: 13,
	itemCapacity: 260,
	mineTier: 4,
	mineSpeed: 10,
	mineWalls: true,
	buildSpeed: 1.2,
	controller: UnitTypes.mono.controller,
	defaultCommand: UnitTypes.mono.defaultCommand,
	flying: true,
	constructor: () => new UnitEntity.create(),
	payloadCapacity: 64
})
shadow.mineItems.addAll(
    item.ossature,
    item.nickel,
    item.manganese,
    item.crystal,
    item.uranium
);