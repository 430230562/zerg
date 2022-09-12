const item = require('item')
const status = require('status')

//arkycite
const arkyciteSandWall = new StaticWall("arkycite-sand-wall");
exports.arkyciteSandWall = arkyciteSandWall;

const arkyciteSandBoulder = new Prop("arkycite-sand-boulder");
exports.arkyciteSandBoulder = arkyciteSandBoulder;
Object.assign(arkyciteSandBoulder, {
	variants: 2,
})

const arkyciteSand = new Floor("arkycite-sand");
exports.arkyciteSand = arkyciteSand;
Object.assign(arkyciteSand, {
	itemDrop: item.organosand,
	playerUnmineable: true,
	speedMultiplier: 0.95,
	variants: 3,
	decoration: arkyciteSandBoulder,
	wall: arkyciteSandWall,
})
arkyciteSand.attributes.set(Attribute.water, -0.2);

//neoplasm
const neoplasmSandWall = new StaticWall("neoplasm-sand-wall");
exports.neoplasmSandWall = neoplasmSandWall;

const neoplasmSandBoulder = new Prop("neoplasm-sand-boulder")
exports.neoplasmSandBoulder = neoplasmSandBoulder;
Object.assign(neoplasmSandBoulder, {
	variants: 2
})

const neoplasmSand = new Floor("neoplasm-sand")
exports.neoplasmSand = neoplasmSand;
Object.assign(neoplasmSand, {
	itemDrop: item.organosand,
	playerUnmineable: true,
	speedMultiplier: 0.95,
	variants: 3,
	decoration: neoplasmSandBoulder,
	wall: neoplasmSandWall,
})
neoplasmSand.attributes.set(Attribute.water, -0.5);

const sandNeoplasm = new Floor("sand-neoplasm");
exports.sandNeoplasm = sandNeoplasm;
Object.assign(sandNeoplasm, {
	speedMultiplier: 0.8,
	variants: 0,
	status: status.dissimilation,
	statusDuration: 90,
	liquidDrop: Liquids.neoplasm,
	isLiquid: true,
	cacheLayer: CacheLayer.water,
	albedo: 0.9,
	supportsOverlay: true,
	liquidMultiplier: 0.35,
})

const neoplasm = new Floor("neoplasm");
exports.neoplasm = neoplasm;
Object.assign(neoplasm, {
	speedMultiplier: 0.5,
	variants: 0,
	status: status.dissimilation,
	statusDuration: 120,
	liquidDrop: Liquids.neoplasm,
	isLiquid: true,
	cacheLayer: CacheLayer.water,
	albedo: 0.9,
	supportsOverlay: true,
	liquidMultiplier: 0.5,
	drownTime: 60 * 1.2,
})

const oreOssature = new OreBlock("ore-ossature",item.ossature);
const oreNickel = new OreBlock("ore-nickel", item.nickel);

const WallOreCrystal = new OreBlock("wall-ore-crystal", item.crystal)
Object.assign(WallOreCrystal, {
	wallOre: true
})