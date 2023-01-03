const item = require('item');

const ossatureWall = new Wall("ossature-wall");
exports.ossatureWall = ossatureWall;
Object.assign(ossatureWall, {
	health: 400,
	armor: 1,
	size: 1,
	alwaysUnlocked: true,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.ossature, 6,
	),
})

const ossatureWallLarge = new Wall("ossature-wall-large");
exports.ossatureWallLarge = ossatureWallLarge;
Object.assign(ossatureWallLarge, {
	health: 400 * 4,
	armor: 1,
	size: 2,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.ossature, 6 * 4,
	),
})

const crystalWall = new Wall("crystal-wall");
exports.crystalWall = crystalWall;
Object.assign(crystalWall, {
	health: 470,
	armor: 5,
	size: 1,
	insulated: true,
	absorbLasers: true,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.crystal, 6,
	),
})

const crystalWallLarge = new Wall("crystal-wall-large");
exports.crystalWallLarge = crystalWallLarge;
Object.assign(crystalWallLarge, {
	health: 470 * 4,
	armor: 5,
	size: 2,
	insulated: true,
	absorbLasers: true,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.crystal, 6 * 4,
	),
})

const manganeseWall = new Wall("manganese-wall");
exports.manganeseWall = manganeseWall;
Object.assign(manganeseWall, {
	health: 480,
	armor: 7,
	size: 1,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.manganese, 6,
	),
})

const manganeseWallLarge = new Wall("manganese-wall-large");
exports.manganeseWallLarge = manganeseWallLarge;
Object.assign(manganeseWallLarge, {
	health: 480 * 4,
	armor: 7,
	size: 2,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.manganese, 6 * 4,
	),
})

const biomassWall = new Wall("biomass-wall");
exports.biomassWall = biomassWall;
Object.assign(biomassWall, {
	chanceDeflect: 7.2,
	flashHit: true,
	flashColor: Color.valueOf("98ba53"),
	deflectSound: Sounds.none,
	health: 600,
	armor: 13,
	size: 1,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.biomassSteel, 6,
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
	armor: 13,
	size: 2,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.biomassSteel, 6 * 4,
	),
})

const mixedWall = new Wall("mixed-wall");
exports.mixedWall = mixedWall;
Object.assign(mixedWall,{
	chanceDeflect: 14.4,
	flashHit: true,
	flashColor: Color.valueOf("9277cc"),
	deflectSound: Sounds.none,
	health: 1200,
	armor: 15,
	size: 1,
	insulated: true,
	absorbLasers: true,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.crystal, 4,
		item.biomassSteel, 4,
		item.halogenated, 4
	),
})

const mixedWallLarge = new Wall("mixed-wall-large");
exports.mixedWallLarge = mixedWallLarge;
Object.assign(mixedWallLarge,{
	chanceDeflect: 14.4,
	flashHit: true,
	flashColor: Color.valueOf("9277cc"),
	deflectSound: Sounds.none,
	health: 1200 * 4,
	armor: 15,
	size: 2,
	insulated: true,
	absorbLasers: true,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.crystal, 4 * 4,
		item.biomassSteel, 4 * 4,
		item.halogenated, 4 * 4,
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
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.biomassSteel, 6,
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
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.biomassSteel, 6 * 4,
		item.organosilicon, 8 * 4,
	),
})