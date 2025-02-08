const item = require("zerg/item");
const status = require("zerg/status");
const ab = require('zerg/base/ability');

const frame = new ForceProjector("frame-core");
Object.assign(frame, {
	radius: 32,
	shieldHealth: 400,
	consumeCoolant: true,
	hasLiquids: true,
	cooldownNormal: 40 / 60,
	cooldownLiquid: 20 / 60,
	coolantConsumption: 0.05,
	cooldownBrokenBase: 20 / 60,
	size: 1,
})

const matrix = new ForceProjector("matrix-core");
Object.assign(matrix,{
	radius: 64,
	shieldHealth: 1200,
	consumeCoolant: true,
	hasLiquids: true,
	cooldownNormal: 80 / 60,
	cooldownLiquid: 40 / 60,
	coolantConsumption: 0.1,
	cooldownBrokenBase: 40 / 60,
	size: 2,
})

function Pay(block) {
	return new BuildPayload(block, Team.derelict)
}
function CoreBuild(build, block, liquid) {
	build.buildType = prov(() => {
		const p = Pay(block);
		return extend(CoreBlock.CoreBuild, build, {
			updateTile() {
				this.super$updateTile();
				if (p.build.team != this.team) {
					p.build.team = this.team;
				}
				p.update(null, this);
				p.build.power.status = 1;
				if(liquid != null)p.build.handleLiquid(this, Liquids.water, 1);
				p.set(this.x, this.y, p.build.payloadRotation);
			},
			draw() {
				this.super$draw();
				Draw.z(34);
				p.draw()
			},
			drawSelect() {
				this.super$drawSelect();
				if(block.range != undefined){
					Drawf.dashCircle(this.x, this.y, block.range, Pal.accent);
				}else{
					Drawf.dashCircle(this.x, this.y, block.radius, Pal.accent);
				}
			}
		})
	});
}

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
	targetPriority: -1,
	engineOffset: 4,
	hitSize: 8,
	alwaysUnlocked: true,
	constructor: () => new UnitEntity.create(),
})
election.weapons.add(
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
	bullet: Object.assign(new MissileBulletType(4, 17), {
		homingPower: 0.08,
		lifetime: 50,
		keepVelocity: false,
		hitSound: Sounds.none,
		shootEffect: Fx.sparkShoot,
		smokeEffect: Fx.shootBigSmoke,
		frontColor: Color.white,
		buildingDamageMultiplier: 0.001,
	})
})
)
election.abilities.add(
	new ab.MendFieldAbility(75,300,8 * 6)
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
	buildSpeed: 1.25,
	drag: 0.05,
	speed: 3.3,
	rotateSpeed: 17,
	accel: 0.1,
	itemCapacity: 50,
	health: 170,
	targetPriority: -1,
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

	bullet: Object.assign(new BasicBulletType(5, 42), {
		width: 7,
		height: 12,
		lifetime: 25,
		shootEffect: Fx.sparkShoot,
		smokeEffect: Fx.shootBigSmoke,
		frontColor: Color.white,
		trailWidth: 1.5,
		trailLength: 5,
		buildingDamageMultiplier: 0.001,
	})
})
)
atom.abilities.add(
	ab.MendFieldAbility(100,300,8 * 7)
)

const molecule = new UnitType("molecule");
Object.assign(molecule,{
	aiController: UnitTypes.alpha.aiController,
	isEnemy: false,

	lowAltitude: true,
	flying: true,
	mineSpeed: 12.5,
	mineHardnessScaling: false,
	mineTier: 2,
	buildSpeed: 1.5,
	drag: 0.05,
	speed: 3.4,
	rotateSpeed: 22,
	accel: 0.1,
	itemCapacity: 50,
	health: 220,
	targetPriority: -1,
	engineOffset: 7,
	hitSize: 11,
	alwaysUnlocked: true,
	constructor: () => new UnitEntity.create(),
})
molecule.weapons.add(
	Object.assign(new Weapon("bugs-molecule-weapon"), {
	top: false,
	mirror: false,
	rotate: true,
	y: -10 / 4,
	x: 0,
	reload: 50,
	ejectEffect: Fx.none,
	recoil: 2,
	shootSound: Sounds.missile,
	inaccuracy: 3,
	shoot: Object.assign(new ShootPattern(), {
		shots: 3,
		shotDelay: 5,
	}),
	bullet: Object.assign(new MissileBulletType(4, 9), {
		homingPower: 0.08,
		lifetime: 50,
		keepVelocity: false,
		smokeEffect: Fx.none,
		frontColor: Color.white,
		hitSound: Sounds.none,
		buildingDamageMultiplier: 0.001,
	})
})
)
molecule.abilities.add(
	new ab.MendFieldAbility(125,300,8 * 8)
)

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
		item.nickel, 1000,
		Items.graphite, 500,
	)
})

const albus = CoreBlock("albus");
exports.albus = albus;
Object.assign(albus, {
	unitType: atom,
	health: 5500,
	armor: 3,
	itemCapacity: 12000,
	size: 4,
	
	unitCapModifier: 18,
	researchCostMultiplier: 0.05,
	
	buildVisibility: BuildVisibility.shown,
	category: Category.effect,
	requirements: ItemStack.with(
		item.nickel, 5000,
		Items.graphite, 2000,
		Items.silicon, 2000,
	)
})
CoreBuild(albus, frame, Liquids.water)

const annular = new CoreBlock("annular");
exports.annular = annular
Object.assign(annular, {
	unitType: molecule,
	size: 5,
	health: 8800,
	armor: 5,
	itemCapacity: 15000,
	
	unitCapModifier: 24,
	researchCostMultiplier: 0.05,
	
	buildVisibility: BuildVisibility.shown,
	category: Category.effect,
	requirements: ItemStack.with(
		item.nickel, 12000,
		Items.silicon, 5000,
		item.chromium, 4000,
	)
})
CoreBuild(annular, matrix, Liquids.water)

const column = new Block("column");
Object.assign(column,{
	buildVisibility: BuildVisibility.editorOnly,
	category: Category.effect,
	update: true,
	alwaysUnlocked: true,
})
column.buildType = prov(() => extend(Building,{
	updateTile(){
		this.tile.circle(5, cons(tile => {
			if(tile.block() == Blocks.coreShard){
				tile.setBlock(ash,this.team);
			}
		}))
		this.team.core().items.add(item.nickel, 200)
		this.team.core().items.add(Items.graphite, 100)
		
		this.tile.setBlock(Blocks.air)
	}
}))