const status = require('status');
const liquid = require('liquid');

const spider = new UnitType("spider");
exports.spider = spider;
Object.assign(spider, {
	outlineColor: Pal.neoplasmOutline,
	envDisabled: Env.none,
	healFlash: true,
	healColor: Pal.neoplasm1,
	speed: 0.72,
	drag: 0.11,
	hitSize: 11,
	rotateSpeed: 3,
	health: 160,
	armor: 1,
	legStraightness: 0.3,
	stepShake: 0,
	
	legCount: 6,
	legLength: 8,
	lockLegBase: true,
	legContinuousMove: true,
	legExtension: -2,
	legBaseOffset: 3,
	legMaxLength: 1.1,
	legMinLength: 0.2,
	legLengthScl: 0.96,
	legForwardScl: 1.1,
	legGroupSize: 3,
	rippleScale: 0.2,
	
	legMoveSpace: 1,
	allowLegStep: true,
	hovering: true,
	legPhysicsLayer: false,
	
	shadowElevation: 0.1,
	groundLayer: 74,
	
	constructor: () => new LegsUnit.create()
})
spider.abilities.add(
	Object.assign(new LiquidExplodeAbility(), {
		liquid: Liquids.neoplasm,
		amount: 60,
		radAmountScale: 8,
		radScale: 2,
		noiseMag: 6.5,
		noiseScl: 5,
	}),
	Object.assign(new RegenAbility(), {
		percentAmount: 1 / (120 * 60) * 100,
	}),
	Object.assign(new LiquidRegenAbility(), {
		liquid: Liquids.neoplasm,
		slurpEffect: Fx.neoplasmHeal,
	})
);
spider.immunities.addAll(status.poisoning);
spider.weapons.add(
Object.assign(new Weapon("bugs-spider-weapon"), {
	mirror: false,
	x: 0,
	y: 1,
	shootY: 4,
	reload: 60,
	cooldownTime: 42,
	shootSound: Vars.tree.loadSound("venomMissile"),
	heatColor: Color.valueOf("84a94b"),
	bullet: Object.assign(new MissileBulletType(3,9), {
		recoil: 0.8,
		backColor: Color.valueOf("84a94b"),
		frontColor: Color.valueOf("84a94b"),
		lifetime: 45,
		hitEffect: Fx.none,
		despawnEffect: Fx.none,
		trailColor: Color.valueOf("84a94b"),
		trailWidth: 0.8,
		trailLength: 14,
		trailChance: 0,
		homingRange: 80,
		homingPower: 0.05,
		status: status.poisoning,
		statusDuration: 600,
		hitSound: Sounds.none,
		fragBullets: 2,
		fragBullet: Object.assign(new LiquidBulletType(), {
			speed: 0.5,
			damage: 0,
			liquid: liquid.venom,
			lifetime: 3,
			puddleSize: 18,
			orbSize: 2,
			status: status.poisoning,
			statusDuration: 600,
		})
	})
})
)

const tarantula = new UnitType("tarantula")
exports.tarantula = tarantula;
Object.assign(tarantula, {
	constructor: () => new LegsUnit.create(),
	outlineColor: Pal.neoplasmOutline,
	envDisabled: Env.none,
	healFlash: true,
	healColor: Pal.neoplasm1,
	
	speed: 0.63,
	drag: 0.4,
	hitSize: 12,
	rotateSpeed: 3,
	health: 440,
	legCount: 6,
	legLength: 13,
	legMoveSpace: 1.4,
	legBaseOffset: 2,
	legContinuousMove: true,
	hovering: true,
	armor: 3,
	targetAir: false,
	
	range: 8 * 28,
})
tarantula.abilities.add(
	Object.assign(new LiquidExplodeAbility(), {
		liquid: Liquids.neoplasm,
		amount: 80,
		radAmountScale: 8,
		radScale: 2,
		noiseMag: 6.5,
		noiseScl: 5,
	}),
	Object.assign(new RegenAbility(), {
		percentAmount: 1 / (120 * 60) * 100,
	}),
	Object.assign(new LiquidRegenAbility(), {
		liquid: Liquids.neoplasm,
		slurpEffect: Fx.neoplasmHeal,
	})
);
tarantula.immunities.addAll(status.poisoning);
tarantula.weapons.add(
Object.assign(new Weapon(), {
	mirror: false,
	x: 0,
	y: 1,
	shootY: 4,
	reload: 120,
	cooldownTime: 42,
	shoot: Object.assign(new ShootPattern(), {
		shots: 4,
		shotDelay: 4,
	}),
	inaccuracy: 1,
	shootSound: Sounds.artillery,
	heatColor: Color.valueOf("84a94b"),
	bullet: Object.assign(new ArtilleryBulletType(3, 20), {
		knockback: 0.8,
		lifetime: 80,
		width: 11,
		height: 11,
		collidesTiles: false,
		splashDamageRadius: 8 * 2.25,
		splashDamage: 40,
		
		backColor: Color.valueOf("84a94b"),
		frontColor: Color.valueOf("84a94b"),
		trailColor: Color.valueOf("84a94b"),
		
		status: status.poisoning,
		statusDuration: 600,
		
		fragBullets: 2,
		fragBullet: Object.assign(new LiquidBulletType(), {
			speed: 0.5,
			damage: 0,
			liquid: liquid.venom,
			lifetime: 3,
			puddleSize: 18,
			orbSize: 2,
			status: status.poisoning,
			statusDuration: 600,
		})
	}),
	shootStatus: StatusEffects.slow,
	shootStatusDuration: 130,
})
)

const mosquito = new UnitType("mosquito");
exports.mosquito = mosquito;
Object.assign(mosquito, {
	constructor: () => new UnitEntity.create(),
	outlineColor: Pal.neoplasmOutline,
	envDisabled: Env.none,
	drawCell: false,
	healFlash: true,
	healColor: Pal.neoplasm1,
	health: 140,
	speed: 2.4,
	flying: true,
	lowAltitude: true,
	hitSize: 6,
	engineOffset: 5.5,
	armor: 1,
})
mosquito.abilities.add(
	Object.assign(new LiquidExplodeAbility(), {
		liquid: Liquids.neoplasm,
		amount: 50,
		radAmountScale: 8,
		radScale: 2,
		noiseMag: 6.5,
		noiseScl: 5,
	}),
	Object.assign(new RegenAbility(), {
		percentAmount: 1 / (120 * 60) * 100,
	}),
	Object.assign(new LiquidRegenAbility(), {
		liquid: Liquids.neoplasm,
		slurpEffect: Fx.neoplasmHeal,
	})
);
mosquito.immunities.addAll(status.poisoning);
mosquito.weapons.add(
Object.assign(new Weapon("bugs-mosquito-weapon"), {
	mirror: false,
	x: 0,
	y: 1,
	shootY: 4,
	reload: 60,
	cooldownTime: 42,
	shootSound: Vars.tree.loadSound("venomMissile"),
	heatColor: Color.valueOf("84a94b"),
	bullet: Object.assign(new MissileBulletType(3,9), {
		recoil: 0.8,
		backColor: Color.valueOf("84a94b"),
		frontColor: Color.valueOf("84a94b"),
		lifetime: 45,
		hitEffect: Fx.none,
		despawnEffect: Fx.none,
		trailColor: Color.valueOf("84a94b"),
		trailWidth: 0.8,
		trailLength: 14,
		trailChance: 0,
		homingRange: 80,
		homingPower: 0.05,
		status: status.poisoning,
		statusDuration: 600,
		hitSound: Sounds.none,
		fragBullets: 2,
		fragBullet: Object.assign(new LiquidBulletType(), {
			speed: 0.5,
			damage: 0,
			liquid: liquid.venom,
			lifetime: 3,
			puddleSize: 18,
			orbSize: 2,
			status: status.poisoning,
			statusDuration: 600,
		})
	})
})
)

const acid = new UnitType("acid");
exports.acid = acid;
Object.assign(acid, {
	constructor: () => new UnitEntity.create(),
	health: 340,
	speed: 1.85,
	accel: 0.08,
	drag: 0.016,
	flying: true,
	hitSize: 10,
	targetAir: false,
	range: 140,
	faceTarget: false,
	armor: 3,
	itemCapacity: 0,
	circleTarget: true
})
acid.abilities.add(
	Object.assign(new LiquidExplodeAbility(), {
		liquid: Liquids.neoplasm,
		amount: 70,
		radAmountScale: 8,
		radScale: 2,
		noiseMag: 6.5,
		noiseScl: 5,
	}),
	Object.assign(new RegenAbility(), {
		percentAmount: 1 / (120 * 60) * 100,
	}),
	Object.assign(new LiquidRegenAbility(), {
		liquid: Liquids.neoplasm,
		slurpEffect: Fx.neoplasmHeal,
	})
);
acid.immunities.addAll(status.poisoning);
acid.weapons.add(
Object.assign(new Weapon(), {
	x: 0,
	y: 0,
	mirror: false,
	shootCone: 360,
	shootY: 0,
	reload: 60,
	minShootVelocity: 0.55,
	ignoreRotation: true,
	ejectEffect: Fx.none,
	shootSound: Sounds.none,
	shoot: Object.assign(new ShootPattern(), {
		shots: 3,
		shotDelay: 7.5,
	}),
	bullet: Object.assign(new BombBulletType(27, 25), {
		width: 10,
		height: 14,
		hitEffect: Fx.flakExplosion,
		shootEffect: Fx.none,
		smokeEffect: Fx.none,
		backColor: Color.valueOf("84a94b"),
		frontColor: Color.valueOf("84a94b"),
		fragBullets: 4,
		fragBullet: Object.assign(new LiquidBulletType(), {
			speed: 0.5,
			damage: 0,
			liquid: liquid.venom,
			lifetime: 3,
			puddleSize: 18,
			orbSize: 2,
			status: status.poisoning,
			statusDuration: 600,
		})
	})
})
)

const buffer = new UnitType("buffer");
exports.buffer = buffer;
Object.assign(buffer, {
	constructor: () => new MechUnit.create(),
	outlineColor: Pal.neoplasmOutline,
	envDisabled: Env.none,
	healFlash: true,
	healColor: Pal.neoplasm1,
	speed: 1.2,
	hitSize: 6,
	health: 200,
	mechSideSway: 0.25,
	range: 40,
})
buffer.abilities.add(
	Object.assign(new LiquidExplodeAbility(), {
		liquid: Liquids.neoplasm,
		amount: 150,
		radAmountScale: 8,
		radScale: 2,
		noiseMag: 6.5,
		noiseScl: 5,
	})
)
buffer.immunities.addAll(status.poisoning);
buffer.weapons.add(
Object.assign(new Weapon(), {
	shootOnDeath: true,
	reload: 24,
	shootCone: 180,
	ejectEffect: Fx.none,
	shootSound: Sounds.explosion,
	x: 0,
	shootY: 0,
	mirror: false,
	shoot: Object.assign(new ShootPattern(), {
		firstShotDelay: 7.5
	}),
	bullet: Object.assign(new ExplosionBulletType(90, 48), {})
})
)

const egg = new UnitType("egg");
//exports.egg = egg;
Object.assign(egg, {
	outlineColor: Pal.neoplasmOutline,
	envDisabled: Env.none,
	drawCell: false,
	healFlash: true,
	healColor: Pal.neoplasm1,
	constructor: () => new MechUnit.create(),
	speed: 0,
	hitSize: 6,
	targetable: false,
	hittable: false,
	canAttack: false,
	hidden: true,
	isEnemy: false,
	playerControllable: false,
	logicControllable: false,
	allowedInPayloads: false,
})
egg.abilities.add(
	new SpawnDeathAbility(buffer, 1, 1),
	Object.assign(new RegenAbility(), {
		percentAmount: - 1 / (40 * 60) * 100
	})
)
egg.immunities.addAll(status.poisoning,status.dissimilation);

const pildelet = new UnitType("pildelet");
exports.pildelet = pildelet;
Object.assign(pildelet, {
	targetPriority: -1,
	outlineColor: Pal.neoplasmOutline,
	envDisabled: Env.none,
	healFlash: true,
	healColor: Pal.neoplasm1,
	speed: 0.25,
	drag: 0.1,
	hitSize: 14,
	rotateSpeed: 3,
	health: 400,
	armor: 1,
	stepShake: 0,
	
	legCount: 4,
	legLength: 14,
	lockLegBase: true,
	legContinuousMove: true,
	legExtension: -3,
	legBaseOffset: 5,
	legMaxLength: 1.1,
	legMinLength: 0.2,
	legLengthScl: 0.95,
	legForwardScl: 0.7,

	legMoveSpace: 1,
	hovering: true,
	allowLegStep: false,

	shadowElevation: 0.2,
	groundLayer: 74,
	constructor: () => new LegsUnit.create()
})
pildelet.abilities.add(
	Object.assign(new RegenAbility(), {
		percentAmount: 1 / (90 * 60) * 100,
	}),
	Object.assign(new LiquidRegenAbility(), {
		liquid: Liquids.neoplasm,
		slurpEffect: Fx.neoplasmHeal,
	}),
	new UnitSpawnAbility(egg, 60 * 20, 0, 0),
	new SpawnDeathAbility(egg, 3, 10)
);
pildelet.immunities.addAll(status.poisoning);

const earlyTestVehicle = new TankUnitType("early-test-vehicle");
exports.earlyTestVehicle = earlyTestVehicle;
Object.assign(earlyTestVehicle, {
	outlineColor: Pal.neoplasmOutline,
	envDisabled: Env.none,
	healFlash: true,
	healColor: Pal.neoplasm1,
	lightColor: Pal.techBlue,
	squareShape: true,
	omniMovement: false,
	rotateMoveFirst: true,
	speed: 1.2,
	hitSize: 12,
	treadPullOffset: 3,
	treadRects: [new Rect(16, 8-32, 8, 48)],
	outlineRadius: 1,
	rotateSpeed: 3.5,
	health: 400,
	armor: 3,
	itemCapacity: 0,
	researchCostMultiplier: 20,
	constructor: () => new TankUnit.create(),
})
earlyTestVehicle.weapons.add(
Object.assign(new Weapon("bugs-early-test-vehicle-weapon"), {
	layerOffset: 0.0001,
	reload: 25,
	shootY: 8.5,
	recoil: 1,
	rotate: true,
	rotateSpeed: 5.7,
	mirror: false,
	x: 0,
	y: -0.75,
	heatColor: Color.valueOf("f9350f"),
	cooldownTime: 30,
	shootSound: Vars.tree.loadSound("venomMissile"),
	
	shoot: new ShootAlternate(2),
	
	bullet: Object.assign(new BasicBulletType(4, 15), {
		sprite: "missile-large",
		smokeEffect: Fx.shootBigSmoke,
		shootEffect: Fx.shootBigColor,
		width: 5,
		height: 7,
		lifetime: 40,
		hitSize: 4,
		hitColor: Color.valueOf("98ba53"),
		backColor: Color.valueOf("98ba53"),
		trailColor: Color.valueOf("98ba53"),
		frontColor: Color.white,
		trailWidth: 1.7,
		trailLength: 5,
		despawnEffect: Fx.hitBulletColor,
		hitEffect: Fx.hitBulletColor,
		
		status: status.poisoning,
		statusDuration: 600,
		
		splashDamageRadius: 8 * 2.25,
		splashDamage: 20,
	})
})
)
earlyTestVehicle.abilities.add(
	Object.assign(new RegenAbility(), {
		percentAmount: 1 / (120 * 60) * 100,
	}),
)
earlyTestVehicle.immunities.addAll(status.poisoning);