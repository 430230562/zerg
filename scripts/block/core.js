const item = require("item");
const status = require("status");

//Election Atom Molecule
const election = new UnitType("election");
Object.assign(election, {
	aiController: UnitTypes.alpha.aiController,
	isEnemy: false,

	lowAltitude: true,
	flying: true,
	mineSpeed: 8.5,
	mineHardnessScaling: false,
	mineTier: 2,
	buildSpeed: 1,
	drag: 0.05,
	speed: 3,
	rotateSpeed: 15,
	accel: 0.1,
	itemCapacity: 30,
	health: 150,
	engineOffset: 4,
	hitSize: 8,
	alwaysUnlocked: true,
	constructor: () => new UnitEntity.create(),
})
election.weapons.add(
Object.assign(new RepairBeamWeapon(), {
	mirror: false,
	x: 0,
	y: 0,
	targetBuildings: true,
	targetUnits: true,
	beamWidth: 0.5,
	shootCone: 15,
	rotate: false,
	repairSpeed: 0.5,
}),
Object.assign(new Weapon("bugs-election-weapon"), {
	top: false,
	y: 5 / 4,
	x: 10 / 4,
	reload: 30,
	ejectEffect: Fx.none,
	recoil: 2,
	shootSound: Sounds.missile,
	inaccuracy: 3,
	alternate: true,
	bullet: Object.assign(new MissileBulletType(4, 12), {
		homingPower: 0.08,
		lifetime: 50,
		keepVelocity: false,
		smokeEffect: Fx.hitLaser,
		hitEffect: Fx.hitLaser,
		despawnEffect: Fx.hitLaser,
		frontColor: Color.white,
		hitColor: Color.valueOf("00c49b"),
		backColor: Color.valueOf("00c49b"),
		trailColor: Color.valueOf("00c49b"),
		hitSound: Sounds.none,
		buildingDamageMultiplier: 0.001,
	})
})
)
election.abilities.add(
	Object.assign(new RegenAbility(), {
		percentAmount: 1 / (120 * 60) * 100,
	}),
)

const atom = new UnitType("atom");
Object.assign(atom, {
	aiController: UnitTypes.alpha.aiController,
	isEnemy: false,

	lowAltitude: true,
	flying: true,
	mineSpeed: 10,
	mineHardnessScaling: false,
	mineTier: 2,
	buildSpeed: 1.5,
	drag: 0.05,
	speed: 3.3,
	rotateSpeed: 17,
	accel: 0.1,
	itemCapacity: 50,
	health: 170,
	engineOffset: 6,
	hitSize: 9,
	alwaysUnlocked: true,
	constructor: () => new UnitEntity.create(),
})
atom.weapons.add(
Object.assign(new Weapon("bugs-atom-weapon"), {
	reload: 60,
	x: 0,
	y: 0,
	shootY: 5,
	recoil: 1,
	top: false,
	layerOffset: -0.01,
	rotate: false,
	mirror: false,
	shoot: new ShootHelix(),

	bullet: Object.assign(new BasicBulletType(5, 34), {
		width: 7,
		height: 12,
		lifetime: 25,
		shootEffect: Fx.sparkShoot,
		smokeEffect: Fx.shootBigSmoke,
		hitColor: Color.valueOf("00c49b"),
		backColor: Color.valueOf("00c49b"),
		trailColor: Color.valueOf("00c49b"),
		frontColor: Color.white,
		trailWidth: 1.5,
		trailLength: 5,
		hitEffect: Fx.hitBulletColor,
		despawnEffect: Fx.hitBulletColor,
		buildingDamageMultiplier: 0.001,
		healPercent: 7.5,
		collidesTeam: true,
	})
})
)
atom.abilities.add(
	Object.assign(new RegenAbility(), {
		percentAmount: 1 / (120 * 60) * 100,
	}),
)

//to do Albus and Annular
const ash = CoreBlock("ash");
exports.ash = ash
Object.assign(ash, {
	alwaysUnlocked: true,
	isFirstTier: true,
	unitType: election,
	health: 1500,
	itemCapacity: 5000,
	size: 3,
	unitCapModifier: 12,
	buildVisibility: BuildVisibility.shown,
	category: Category.effect,
	requirements: ItemStack.with(
		item.ossature, 1000,
		item.nickel, 500,
		item.biomassSteel, 200,
	)
})

const albus = CoreBlock("albus");
exports.albus = albus;
Object.assign(albus, {
	unitType: atom,
	health: 4500,
	armor: 5,
	itemCapacity: 12000,
	size: 4,
	
	unitCapModifier: 24,
	researchCostMultiplier: 0.1,
	
	buildVisibility: BuildVisibility.shown,
	category: Category.effect,
	requirements: ItemStack.with(
		item.ossature, 3000,
		item.nickel, 3000,
		item.biomassSteel, 1000,
		item.organosilicon, 1500,
	)
})