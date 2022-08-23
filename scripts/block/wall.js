const item = require('item');

const biomassWall = new Wall("biomass-wall");
exports.biomassWall = biomassWall;
Object.assign(biomassWall, {
	chanceDeflect: 7.2,
	flashHit: true,
	flashColor: Color.valueOf("98ba53"),
	deflectSound: Sounds.none,
	health: 600,
	armor: 11,
	size: 1,
	buildCostMultiplier: 4,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.biomassSteel, 12,
	),
})

const biomassWallLarge = new Wall("biomass-wall-large");
exports.biomassWallLarge = biomassWallLarge;
Object.assign(biomassWallLarge, {
	chanceDeflect: 7.2,
	flashHit: true,
	flashColor: Color.valueOf("98ba53"),
	deflectSound: Sounds.none,
	health: 600 * 4,
	armor: 11,
	size: 2,
	buildCostMultiplier: 4,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.biomassSteel, 12 * 4,
	),
})

const biomassDoor = new AutoDoor("biomass-door");
exports.biomassDoor = biomassDoor;
Object.assign(biomassDoor, {
	chanceDeflect: 7.2,
	flashHit: true,
	flashColor: Color.valueOf("98ba53"),
	deflectSound: Sounds.none,
	health: 720,
	armor: 11,
	size: 1,
	buildCostMultiplier: 4,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.biomassSteel, 12,
		item.organosilicon, 8,
	),
})

const biomassDoorLarge = new AutoDoor("biomass-door-large");
exports.biomassDoorLarge = biomassDoorLarge;
Object.assign(biomassDoorLarge, {
	chanceDeflect: 7.2,
	flashHit: true,
	flashColor: Color.valueOf("98ba53"),
	deflectSound: Sounds.none,
	health: 720 * 4,
	armor: 11,
	size: 2,
	buildCostMultiplier: 4,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.biomassSteel, 12 * 4,
		item.organosilicon, 8 * 4,
	),
})