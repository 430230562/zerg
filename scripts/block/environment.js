const item = require('item')
const status = require('status')

Attribute.add("biomass");
Attribute.add("neoplasm");

Blocks.redStone.attributes.set(Attribute.get("biomass"), 0.5);
Blocks.denseRedStone.attributes.set(Attribute.get("biomass"), 0.5);
Blocks.arkyicStone.attributes.set(Attribute.get("biomass"), 0.35);

Blocks.redStone.attributes.set(Attribute.get("neoplasm"), 1.25);
Blocks.denseRedStone.attributes.set(Attribute.get("neoplasm"), 1.25);
Blocks.arkyicStone.attributes.set(Attribute.get("neoplasm"), 0.75);

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
arkyciteSand.attributes.set(Attribute.get("biomass"), 0.5);
arkyciteSand.attributes.set(Attribute.get("neoplasm"), 1);

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
neoplasmSand.attributes.set(Attribute.get("biomass"), 0.75);
neoplasmSand.attributes.set(Attribute.get("neoplasm"), 1.75);

const sandNeoplasm = new Floor("sand-neoplasm");
exports.sandNeoplasm = sandNeoplasm;
Object.assign(sandNeoplasm, {
	speedMultiplier: 0.8,
	variants: 0,
	status: status.none,
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
	status: status.none,
	statusDuration: 120,
	liquidDrop: Liquids.neoplasm,
	isLiquid: true,
	cacheLayer: CacheLayer.water,
	albedo: 0.9,
	supportsOverlay: true,
	liquidMultiplier: 0.5,
	drownTime: 60 * 1.2,
})

const crystallineWall = new StaticWall("crystalline-wall");
Object.assign(crystallineWall,{
    itemDrop: item.crystal,
})

const crystallineFloor = Object.assign(new Floor("crystalline-floor"), {
	variants: 4,
	wall: crystallineWall,
})

const denseCrystallineFloor = Object.assign(new Floor("dense-crystalline-floor"), {
	variants: 4,
	wall: crystallineWall,
})

new OreBlock("ore-ossature",item.ossature);
new OreBlock("ore-nickel",item.nickel);
new OreBlock("ore-manganese",item.manganese);
new OreBlock("ore-uranium",item.uranium);

const WallOreCrystal = new OreBlock("wall-ore-crystal", item.crystal)
Object.assign(WallOreCrystal, {
	wallOre: true
})