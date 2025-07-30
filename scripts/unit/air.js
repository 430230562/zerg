const item = require('zerg/item');

/*const mist = new UnitType("mist");
exports.mist = mist;
Object.assign(mist,{
	health: 150,
	speed: 3.5,
	flying: true,
	hitSize: 8,
	engineOffset: 5.75,
	armor: 1,
	accel: 0.08,
	drag: 0.04,
	itemCapacity: 0,
	targetGround: false,
	physics: true,
	range: 1600,
	constructor: () => new UnitEntity.create(),
})
mist.weapons.add(
	Object.assign(new Weapon("zerg-mist-weapon"),{
		x: 1,
		y: -0.5,
		shootY: 0,
		layerOffset : -0.0001,
		reload: 20,
		mirror: false,
		shootCone: 30,
		shootSound: Sounds.missile,
		bullet: Object.assign(new MissileBulletType(4,9),{
			width: 4,
			height: 4,
			shrinkY: 0,
			homingRange: 60,
			keepVelocity: false,
			lifetime: 50,
			trailChance: 0.1,
			splashDamage: 4,
			splashDamageRadius: 16,
		})
	})
)

const cirrus = new UnitType("cirrus");
exports.cirrus = cirrus;
Object.assign(cirrus,{
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
cirrus.weapons.add(
	Object.assign(new Weapon("zerg-cirrus-weapon"),{
		x: -3.75,
		y: 0,
		shootY: 30 / 4,
		reload: 45,
		shoot: Object.assign(new ShootAlternate(), {
			shotDelay: 3,
			shots: 4,
			barrels: 2,
			spread: 2,
		}),
		shootSound: Sounds.missile,
		bullet: Object.assign(new MissileBulletType(4,11),{
			width: 8,
			height: 8,
			shrinkY: 0,
			homingRange: 60,
			keepVelocity: true,
			lifetime: 50,
			splashDamage: 6,
			splashDamageRadius: 16,
			trailChance: 0.1,
			frontColor: Color.white,
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
	Object.assign(new Weapon("zerg-cloud-weapon0"),{
		x: 4,
		y: -2,
		shootY: 0,
		reload: 45,
		shoot: Object.assign(new ShootAlternate(), {
			shotDelay: 3,
			shots: 4,
			barrels: 3,
			spread: 2,
		}),
		shootSound: Sounds.missile,
		bullet: Object.assign(new MissileBulletType(4,17),{
			width: 8,
			height: 8,
			shrinkY: 0,
			homingRange: 160,
			homingPower: 0.16,
			keepVelocity: false,
			lifetime: 60,
			splashDamage: 27,
			splashDamageRadius: 16,
			trailChance: 0.1,
			hitColor: Color.valueOf("d99f6b"),
			backColor: Color.valueOf("d99f6b"),
			trailColor: Color.valueOf("d99f6b"),
			frontColor: Color.white,
		})
	}),
	Object.assign(new Weapon("zerg-cloud-weapon1"),{
		shootSound: Sounds.blaster,
		reload: 120,
		x: 0,
		y: 6.5,
		shootY: 5,
		recoil: 1,
		top: false,
		layerOffset: -0.01,
		rotate: false,
		mirror: false,
		shoot: new ShootHelix(),

		bullet: Object.assign(new BasicBulletType(6, 40),{
			width: 7,
			height: 12,
			lifetime: 30,
			hitSize: 16,
			smokeEffect: Fx.shootBigSmoke,
			hitColor: Color.valueOf("d99f6b"),
			backColor: Color.valueOf("d99f6b"),
			trailColor: Color.valueOf("d99f6b"),
			frontColor: Color.white,
			trailWidth: 1.5,
			trailLength: 5,
			buildingDamageMultiplier: 1.5
		})
	})
)*/

const electron = new UnitType("electron");
exports.electron = electron;
Object.assign(electron,{
	health: 75,
	speed: 4,
	flying: true,
	hitSize: 6,
	engineOffset: 1,
	engineColor: Pal.lancerLaser,
	trailLength: 8,
	trailColor: Pal.lancerLaser,
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
	Object.assign(new MoveLightningAbility(12,9,0.25,-2,1,4,Pal.lancerLaser),{
	    bulletAngle: 180,
	})
)
electron.weapons.add(
	Object.assign(new Weapon(),{
		x: 0,
		y: -2,
		reload: 15,
		alwaysShooting: true,
		shootCone: 360,
		baseRotation: 180,
		bullet: Object.assign(new LightningBulletType(), {
			damage: 12,
			lightningLength: 9,
			pierceArmor: true,
			ammoMultiplier: 1,
			shootEffect: Fx.sparkShoot,
			smokeEffect: Fx.shootBigSmoke,
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
		shoot: new ShootMulti(
			Object.assign(new ShootHelix(),{
				mag: 0.5,
				scl: 6,
			}),
			Object.assign(new ShootHelix(),{
				mag: 1.5,
				scl: 4,
			})
		),

		bullet: Object.assign(new BasicBulletType(4, 15),{
			width: 7,
			height: 12,
			lifetime: 50,
			hitSize: 16,
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
			lightningColor: Pal.lancerLaser,
			lightningDamage: 9,
			lightning: 5,
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
	engineOffset: 11,
	armor: 4,
	accel: 0.08,
	drag: 0.016,
	targetFlags: [BlockFlag.generator,null],
	itemCapacity: 0,
	constructor: () => new UnitEntity.create(),
})
ampere.weapons.add(
	Object.assign(new Weapon("zerg-ampere-weapon"),{
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
		bullet: Object.assign(new BasicBulletType(3,155), {
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
			absorbable: false,
		
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

const farad = new UnitType("farad");
exports.farad = farad;
Object.assign(farad,{
    health: 6400,
	speed: 0.8,
	flying: true,
	hitSize: 24,
	engineOffset: 11,
	armor: 6,
	accel: 0.08,
	drag: 0.016,
	targetFlags: [BlockFlag.turret,BlockFlag.generator,BlockFlag.factory,null],
	itemCapacity: 0,
	constructor: () => new UnitEntity.create(),
})
farad.weapons.add(
    Object.assign(new Weapon("zerg-farad-weapon"),{
		layerOffset: 0.0001,
		reload: 240,
		shootY: 0.75,
		recoil: 3,
		shootCone: 30,
		rotate: false,
		mirror: false,
		x: 0,
		y: 6,
		heatColor: Pal.lancerLaser,
		cooldownTime: 50,
		shake: 8,
		shoot: Object.assign(new ShootPattern(), {
		    firstShotDelay: 48,
	    }),
		shootSound: Sounds.shockBlast,
		bullet: Object.assign(new BasicBulletType(8,644), {
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
			absorbable: false,
		
			sprite: "large-orb",
			trailEffect: Fx.missileTrail,
			trailInterval: 3,
			trailParam: 4,
			lifetime: 21,
			recoil: 0.8,
			width: 25,
			height: 25,
			backColor: Pal.lancerLaser,
			frontColor: Pal.lancerLaser,
			shrinkX: 0,
			shrinkY: 0,
			trailColor: Pal.lancerLaser,
			trailLength: 12,
			trailWidth: 2.2,
			keepVelocity: false,
			splashDamageRadius: 40,
		    splashDamage: 1200,
		    buildingDamageMultiplier: 0.6,
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
			lightningColor: Pal.lancerLaser,
			lightningDamage: 60,
			lightning: 8,
			lightningLength: 2,
			lightningLengthRand: 8
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
	engineOffset: 5,
	
	health: 220,
	armor: 2,
	hitSize: 11,
	itemCapacity: 30,
	mineTier: 3,
	mineSpeed: 3,
	mineWalls: true,
	buildSpeed: 2,
	controller: UnitTypes.poly.controller,
	defaultCommand: UnitTypes.poly.defaultCommand,
	flying: true,
	constructor: () => new UnitEntity.create()
})
phantom.mineItems.addAll(
	item.nickel,
	item.manganese,
);
phantom.weapons.add(
	Object.assign(new Weapon("zerg-phantom-weapon"), {
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
	armor: 2,
	hitSize: 13,
	itemCapacity: 130,
	mineTier: 4,
	mineSpeed: 7.5,
	mineRange: 160,
	engineSize: 0,
    engineOffset: 0,
	mineWalls: true,
	buildSpeed: 0.75,
	controller: UnitTypes.mono.controller,
	defaultCommand: UnitTypes.mono.defaultCommand,
	flying: true,
	constructor: () => new PayloadUnit.create(),
	
	payloadCapacity: 64 * 4,
})
shadow.setEnginesMirror(
    new UnitType.UnitEngine(8, -8, 4, -45),
);
shadow.mineItems.addAll(
	item.nickel,
	item.manganese,
	item.chromium
);