const item = require("item");
const status = require("status");
const ab = require('base/ability');
const insect = require('unit/insect');

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
	rotateSpeed: 10,
	beamWidth: 0.5,
	shootCone: 15,
	repairSpeed: 1,
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
	bullet: Object.assign(new MissileBulletType(4, 17), {
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
		percentAmount: 1 / (60 * 60) * 100,
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

	bullet: Object.assign(new BasicBulletType(5, 42), {
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
		healPercent: 12.5,
		collidesTeam: true,
	})
})
)
atom.abilities.add(
	Object.assign(new RegenAbility(), {
		percentAmount: 1 / (60 * 60) * 100,
	}),
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
	buildSpeed: 2,
	drag: 0.05,
	speed: 3.4,
	rotateSpeed: 22,
	accel: 0.1,
	itemCapacity: 50,
	health: 220,
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
	y: -14 / 4,
	x: 0,
	reload: 50,
	ejectEffect: Fx.none,
	recoil: 2,
	shootSound: Sounds.missile,
	inaccuracy: 3,
	shoot: Object.assign(new ShootPattern(), {
		shots: 3,
		shotDelay: 3,
	}),
	bullet: Object.assign(new MissileBulletType(4, 17), {
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
molecule.abilities.add(
	new ab.MendFieldAbility(125,300,8 * 8)
)

const ash = CoreBlock("ash");
exports.ash = ash
Object.assign(ash, {
	alwaysUnlocked: true,
	isFirstTier: true,
	unitType: election,
	health: 1750,
	itemCapacity: 5000,
	size: 3,
	unitCapModifier: 12,
	buildVisibility: BuildVisibility.shown,
	category: Category.effect,
	requirements: ItemStack.with(
		item.ossature, 800,
		item.nickel, 1000,
	)
})

const column = new Block("column");
Object.assign(column,{
    buildVisibility: BuildVisibility.editorOnly,
    category: Category.effect,
    update: true,
})

column.buildType = prov(() => extend(Building,{
    i:0,
    updateTile(){
        this.i += Time.delta
    
        if(this.i >= 3 * 60){
            this.tile.circle(5, cons(tile => {
                if(tile.block() == Blocks.coreShard){
                    tile.setBlock(ash,this.team);
                }
            }))
            this.i = 0
            this.remove();
        }
    }
}))

const albus = CoreBlock("albus");
exports.albus = albus;
Object.assign(albus, {
	unitType: atom,
	health: 5500,
	armor: 3,
	itemCapacity: 12000,
	size: 4,
	
	unitCapModifier: 24,
	researchCostMultiplier: 0.1,
	
	buildVisibility: BuildVisibility.shown,
	category: Category.effect,
	requirements: ItemStack.with(
		item.ossature, 3000,
		item.nickel, 3000,
		item.organosilicon, 2000,
	)
})

const annular = new CoreBlock("annular");
exports.annular = annular
Object.assign(annular, {
	unitType: molecule,
	size: 5,
	health: 8800,
	armor: 5,
	itemCapacity: 17500,
	
	unitCapModifier: 36,
	researchCostMultiplier: 0.1,
	
	buildVisibility: BuildVisibility.shown,
	category: Category.effect,
	requirements: ItemStack.with(
		item.ossature, 8000,
		item.nickel, 8000,
		item.organosilicon, 5000,
		item.uranium, 4000,
	)
})

let k = 0, unit = {};

const units = [insect.spider,insect.mosquito,insect.buffer];

const nest = extend(CoreBlock,"nest",{
	canPlaceOn(tile,team,rotation){
		return true
	},
});
Object.assign(nest,{
	update: true,
	solid: false,
	replaceable: true,
	size: 3,
	health: 1200,
	unitCapModifier: 0,
	itemCapacity: 0,
	buildVisibility: BuildVisibility.sandboxOnly,
	category: Category.effect,
})
nest.buildType = prov(() => extend(CoreBlock.CoreBuild,nest,{
    i : 0,
	updateTile(){
		this.i += Time.delta
		
		if(this.i >= 60 * 15){
			this.tile.circle(5, cons(tile => {
				if(Mathf.chance(1 / 15) && tile.block() == Blocks.air){
					k = Math.floor(Math.random() * units.length);
					
					unit = units[k];
					
					let u = unit.create(this.team);
					u.set(tile.worldx(), tile.worldy());
					u.rotation = 90;
					u.add();
				}
			}))
			
			this.i = 0
		}
		this.heal(0.25);
		if(this.health < this.maxHealth && Mathf.chance(0.1)) Fx.neoplasmHeal.at(
			this.x + Mathf.range(11),
			this.y + Mathf.range(11),
		);
	}
}))