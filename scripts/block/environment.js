const item = require('item')
const liquid = require('liquid')
const status = require('status')

Attribute.add("biomass");
Attribute.add("hypha");
Attribute.add("organic");

Blocks.arkyicStone.attributes.set(Attribute.get("biomass"), 0.35);

Blocks.ice.attributes.set(Attribute.water, 0.6);
Blocks.iceSnow.attributes.set(Attribute.water, 0.55);
Blocks.snow.attributes.set(Attribute.water, 0.5);

//tundra
const tundraWall = new StaticWall("tundra-wall");
tundraWall.attributes.set(Attribute.get("organic"), 1);

const tundra = new Floor("tundra");
tundra.attributes.set(Attribute.water, 0.35);

//arkycite
const arkyciteSandWall = new StaticWall("arkycite-sand-wall");

const arkyciteSand = new Floor("arkycite-sand");
Object.assign(arkyciteSand, {
	itemDrop: Items.sand,
	playerUnmineable: true,
	speedMultiplier: 0.95,
	variants: 3,
	wall: arkyciteSandWall,
})
arkyciteSand.attributes.set(Attribute.get("biomass"), 0.35);

//neoplasm
const neoplasmWall = new StaticWall("neoplasm-wall");

const neoplasmStone = new Floor("neoplasm-stone");
neoplasmStone.attributes.set(Attribute.get("biomass"), 0.45);

const neoplasmSand = new Floor("neoplasm-sand")
Object.assign(neoplasmSand, {
	itemDrop: Items.sand,
	playerUnmineable: true,
	speedMultiplier: 0.95,
	variants: 3,
})
neoplasmSand.attributes.set(Attribute.get("biomass"), 0.45);

const sandNeoplasm = new Floor("sand-neoplasm");
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

//hypha
const hyphaWall = new StaticWall("hypha-wall");
hyphaWall.attributes.set(Attribute.get("hypha"), 1);
hyphaWall.attributes.set(Attribute.get("organic"), 3);

const hyphaFloor = new Floor("hypha-floor");
Object.assign(hyphaFloor,{
    status: status.infecting,
	statusDuration: 120,
})
hyphaFloor.attributes.set(Attribute.get("hypha"), 1);

//crystal
const crystallineWall = new StaticWall("crystalline-wall");
Object.assign(crystallineWall,{
    itemDrop: item.crystal,
})

const crystallineFloor = new Floor("crystalline-floor");
Object.assign(crystallineFloor, {
	variants: 3,
	wall: crystallineWall,
})

const acidPool = new Floor("acid-pool");
Object.assign(acidPool,{
    speedMultiplier: 0.5,
	variants: 0,
	status: status.corroding,
	statusDuration: 120,
	liquidDrop: liquid.acid,
	isLiquid: true,
	cacheLayer: CacheLayer.water,
	albedo: 0.9,
	supportsOverlay: true,
	liquidMultiplier: 0.5,
})

new OreBlock("ore-nickel",item.nickel);
new OreBlock("ore-manganese",item.manganese);
new OreBlock("ore-chromium",item.chromium);