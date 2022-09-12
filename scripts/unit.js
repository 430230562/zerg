const status = require('status');
const liquid = require('liquid');
const Ef = require('effect');
const bulletType = require('base/bulletType')

const ArmorReductionBulletType = bulletType.ArmorReductionBulletType;
const VenomMissileBulletType = bulletType.VenomMissileBulletType;
const Venom = bulletType.Venom

let controlThreshold = Stat("controlThreshold");

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
	shootSound: Sounds.swish,
	heatColor: Color.valueOf("84a94b"),
	bullet: Object.assign(new VenomMissileBulletType(3, 9, 2), {
		recoil: 0.8,
		lifetime: 45,
		homingRange: 80,
		homingPower: 0.05,
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
		fragBullet:new Venom(18)
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
	shootSound: Sounds.swish,
	heatColor: Color.valueOf("84a94b"),
	bullet: Object.assign(new VenomMissileBulletType(3, 8, 3), {
		recoil: 0.8,
		lifetime: 45,
		homingRange: 80,
		homingPower: 0.05,
	})
})
)

const acid = new UnitType("acid");
exports.acid = acid;
Object.assign(acid, {
	constructor: () => new UnitEntity.create(),
	outlineColor: Pal.neoplasmOutline,
	envDisabled: Env.none,
	healFlash: true,
	healColor: Pal.neoplasm1,
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
	circleTarget: true,
	
	engineOffset: 7.8,
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
		fragBullet: new Venom(18)
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
	bullet: new ExplosionBulletType(90, 48),
})
)

const egg = new UnitType("egg")
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

const testVehicle = new TankUnitType("test-vehicle");
exports.testVehicle = testVehicle;
Object.assign(testVehicle, {
	outlineColor: Pal.neoplasmOutline,
	envDisabled: Env.none,
	healFlash: true,
	healColor: Pal.neoplasm1,
	lightColor: Pal.techBlue,
	squareShape: true,
	omniMovement: false,
	rotateMoveFirst: true,
	targetAir: false,
	speed: 0.75,
	hitSize: 14,
	treadPullOffset: 3,
	treadRects: [new Rect(24, -32, 8, 64)],
	outlineRadius: 1,
	rotateSpeed: 6,
	health: 600,
	armor: 3,
	itemCapacity: 0,
	researchCostMultiplier: 20,
	constructor: () => new TankUnit.create(),
})
testVehicle.weapons.add(
Object.assign(new Weapon("bugs-test-vehicle-weapon"), {
	layerOffset: 0.0001,
	reload: 50,
	shootY: 10.75,
	recoil: 1,
	rotate: true,
	rotateSpeed: 5.7,
	mirror: false,
	x: 0,
	y: -0.75,
	heatColor: Color.valueOf("f9350f"),
	cooldownTime: 50,
	shootSound: Sounds.shootBig,
	
	bullet: Object.assign(new ArmorReductionBulletType(4, 65, 3), {
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
		
		status: status.poisoning,
		statusDuration: 600,
		
		pierce: true,
		pierceBuilding: true,
		pierceCap: 3,
	})
})
)
testVehicle.abilities.add(
	Object.assign(new RegenAbility(), {
		percentAmount: 1 / (120 * 60) * 100,
	}),
)

const alter = extend(TankUnitType, "alter", {
	setStats() {
		this.super$setStats();
		this.stats.add(controlThreshold, Core.bundle.format("controlThreshold", 50));
	}
});
exports.alter = alter;
Object.assign(alter, {
	outlineColor: Pal.neoplasmOutline,
	envDisabled: Env.none,
	healFlash: true,
	healColor: Pal.neoplasm1,
	squareShape: true,
	omniMovement: false,
	rotateMoveFirst: true,
	speed: 0.9,
	hitSize: 10,
	treadRects: [new Rect(16, -24, 8, 48)],
	outlineRadius: 1,
	treadPullOffset: 3,
	rotateSpeed: 5.3,
	health: 400,
	armor: 2,
	itemCapacity: 0,
	researchCostMultiplier: 20,
	targetAir: false,
	constructor: () => new TankUnit.create()
})
alter.abilities.add(
	Object.assign(new RegenAbility(), {
		percentAmount: 1 / (120 * 60) * 100,
	})
)
alter.weapons.add(
Object.assign(new Weapon("bugs-alter-weapon"), {
	layerOffset: 0.0001,
	reload: 120,
	shootY: 0,
	recoil: 0,
	rotate: true,
	rotateSpeed: 5.7,
	mirror: false,
	x: 0,
	y: -1,
	heatColor: Color.valueOf("f9350f"),
	cooldownTime: 90,
	shootSound: Sounds.lasershoot,
	
	bullet: Object.assign(extend(BasicBulletType, {
		hitEntity(b, entity, health) {
			this.super$hitEntity(b, entity, health);
			if(entity instanceof Unit) {
				var unit = entity;
				if (unit.health <= 50) {
					unit.team = b.team,
					unit.heal(),
					this.damage += 1
				}
			}
		}
	}), {
		speed: 3.5,
		damage: 20,
		sprite: "bugs-wave",
		width: 10,
		height: 13,
		lifetime: 52,
		despawnEffect: Ef.interfere,
		hitEffect: Ef.interfere,
		backColor: Color.valueOf("afffff"),
		frontColor: Color.valueOf("ffffff"),
		hittable: false,
		pierceArmor: true,
		homingRange: 60,
		homingPower: 0.1,
	})
})
)

const embers = new TankUnitType("embers")
exports.embers = embers;
Object.assign(embers, {
	squareShape: true,
	omniMovement: false,
	rotateMoveFirst: true,
	envDisabled: 0,
	speed: 1.1,
	outlineColor: Color.valueOf("2d2f39"),
	hitSize: 14,
	treadRects: [new Rect(24, -32, 8, 64)],
	outlineRadius: 1,
	treadPullOffset: 4,
	rotateSpeed: 3.5,
	health: 1200,
	armor: 4,
	itemCapacity: 0,
	researchCostMultiplier: 20,
	targetAir: false,
	constructor: () => new TankUnit.create()
})
embers.weapons.add(
Object.assign(new Weapon("bugs-embers-weapon"), {
	layerOffset: 0.0001,
	reload: 6,
	shootY: 12,
	rotate: true,
	rotateSpeed: 5,
	mirror: false,
	x: 0,
	y: 0,
	heatColor: Color.valueOf("f9350f"),
	cooldownTime: 10,
	recoil: 0,
	shootSound: Sounds.flame,
	bullet: Object.assign(new BulletType(), {
		speed: 4,
		damage: 60,
		hitSize: 7,
		lifetime: 18,
		pierce: true,
		collidesAir: false,
		statusDuration: 600,
		shootEffect: Fx.shootPyraFlame,
		hitEffect: Fx.hitFlameSmall,
		despawnEffect: Fx.none,
		status: StatusEffects.burning,
		hittable: false,
		pierceArmor: true,
	})
})
)
embers.abilities.add(
	Object.assign(new RegenAbility(), {
		percentAmount: 1 / (120 * 60) * 100,
	})
)

const hurricane = new TankUnitType("hurricane");
exports.hurricane = hurricane;
Object.assign(hurricane, {
	squareShape: true,
	omniMovement: false,
	rotateMoveFirst: true,
	envDisabled: 0,
	speed: 8 * 8 / 60,
	treadRects: [new Rect(24, -32, 8, 64)],
	outlineRadius: 1,
	outlineColor: Color.valueOf("2d2f39"),
	hitSize: 12,
	treadPullOffset: 3,
	rotateSpeed: 5,
	health: 400,
	armor: 1,
	itemCapacity: 0,
	researchCostMultiplier: 20,
	targetAir: true,
	constructor: () => new TankUnit.create()
})
hurricane.weapons.add(
Object.assign(new Weapon("bugs-hurricane-weapon"), {
	x: 0,
	y: 0,
	rotate: true,
	rotateSpeed: 5,
	mirror: false,
	layerOffset: 0.0001,
	shootY: 2,
	reload: 30,
	shootSound:	Sounds.missile,
	shoot: new ShootAlternate(14 / 2),
	bullet: Object.assign(new MissileBulletType(), {
		hitEffect: Fx.blastExplosion,
		speed: 4,
		lifetime: 64,
		width: 8,
		damage: 10,
		splashDamageRadius: 24,
		splashDamage: 80,
		trailChance: 0.1,
		hitColor: Color.valueOf("7e8ae6"),
		backColor: Color.valueOf("7e8ae6"),
		trailColor: Color.valueOf("7e8ae6"),
		frontColor: Color.white,
	})
})
)

hurricane.abilities.add(
	Object.assign(new RegenAbility(), {
		percentAmount: 1 / (120 * 60) * 100,
	})
)