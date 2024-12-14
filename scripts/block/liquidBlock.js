const item = require('zerg/item');
const liquid = require('zerg/liquid');

const nickelPump = new Pump("nickel-pump");
exports.nickelPump = nickelPump;
Object.assign(nickelPump, {
	pumpAmount: 9 / 60,
	buildVisibility: BuildVisibility.shown,
	category: Category.liquid,
	requirements: ItemStack.with(
		item.nickel, 15,
		item.crystal, 10,
	)
})

const screwPump = new Pump("screw-pump");
exports.screwPump = screwPump;
Object.assign(screwPump, {
	size: 2,
	pumpAmount: 24 / 60,
	health: 240,
	liquidCapacity: 50,
	hasPower: true,
	buildVisibility: BuildVisibility.shown,
	category: Category.liquid,
	requirements: ItemStack.with(
		Items.silicon, 20,
		item.nickel, 70,
		item.manganese, 35,
		item.crystal, 50,
	)
})
screwPump.consumePower(0.8);

const centrifugalPump = new Pump("centrifugal-pump");
exports.centrifugalPump = centrifugalPump;
Object.assign(centrifugalPump,{
    size: 3,
	pumpAmount: 42 / 60,
	health: 480,
	liquidCapacity: 540,
	hasPower: true,
	buildVisibility: BuildVisibility.shown,
	category: Category.liquid,
	requirements: ItemStack.with(
		Items.silicon, 75,
		item.manganese, 110,
		item.chromium, 25,
		item.crystal, 120,
		item.organistal, 55,
	)
})
centrifugalPump.consumePower(3.15);

const syphonPump = new Pump("syphon-pump");
exports.syphonPump = syphonPump;
Object.assign(syphonPump,{
    size: 4,
	pumpAmount: 78 / 60,
	health: 1080,
	liquidCapacity: 1600,
	hasPower: true,
	buildVisibility: BuildVisibility.shown,
	category: Category.liquid,
	requirements: ItemStack.with(
		Items.silicon, 255,
		item.chromium, 210,
		item.biomassSteel, 150,
		item.iridium, 75,
		item.crystal, 350,
		item.organistal, 155,
	)
})
syphonPump.consumePower(11);
syphonPump.consumeLiquid(liquid.naturalGas, 6 / 60);

const waterExtractor = new SolidPump("water-extractor")
exports.waterExtractor = waterExtractor;
Object.assign(waterExtractor,{
	result: Liquids.water,
	pumpAmount: 0.2,
	attribute: Attribute.water,
	size: 2,
	liquidCapacity: 30,
	rotateSpeed: 1.4,
	buildVisibility: BuildVisibility.shown,
	category: Category.liquid,
	requirements: ItemStack.with(
		Items.graphite, 30,
		item.nickel, 30,
		item.crystal, 30
	)
})
waterExtractor.consumePower(1.5);

const arkyciteExtractor = new Fracker("arkycite-extractor");
Object.assign(arkyciteExtractor,{
    result: Liquids.arkycite,
	pumpAmount: 0.25,
	attribute: Attribute.get("arkycite"),
	size: 3,
	itemCapacity: 15,
	liquidCapacity: 30,
	rotateSpeed: -2.5,
	baseEfficiency: 0,
	itemUseTime: 60,
	buildVisibility: BuildVisibility.shown,
	category: Category.liquid,
	requirements: ItemStack.with(
		Items.graphite, 175,
		item.nickel, 225,
		item.crystal, 75,
		item.organistal, 125,
	)
})
arkyciteExtractor.consumeLiquid(Liquids.water, 0.2);
arkyciteExtractor.consumeItem(Items.sand, 1);
arkyciteExtractor.consumePower(3);

const crystalConduit = new Conduit("crystal-conduit");
exports.crystalConduit = crystalConduit;
Object.assign(crystalConduit, {
	health: 45,
	liquidCapacity: 10,
	liquidPressure: 1,
	buildVisibility: BuildVisibility.shown,
	category: Category.liquid,
	requirements: ItemStack.with(
		item.crystal, 1,
	)
})

const organistalConduit = new Conduit("organistal-conduit");
exports.organistalConduit = organistalConduit;
Object.assign(organistalConduit, {
	health: 55,
	liquidCapacity: 12,
	liquidPressure: 1.25,
	buildVisibility: BuildVisibility.shown,
	category: Category.liquid,
	requirements: ItemStack.with(
		item.organistal, 1
	)
})

const armoredConduit = new ArmoredConduit("armored-conduit");
exports.armoredConduit = armoredConduit;
Object.assign(armoredConduit,{
	health: 260,
	liquidCapacity: 12,
	liquidPressure: 1.25,
	buildVisibility: BuildVisibility.shown,
	category: Category.liquid,
	requirements: ItemStack.with(
		item.chromium, 2,
		item.organistal, 1,
	)
})

const crystalLiquidRouter = new LiquidRouter("crystal-liquid-router");
exports.crystalLiquidRouter = crystalLiquidRouter;
Object.assign(crystalLiquidRouter, {
	buildVisibility: BuildVisibility.shown,
	category: Category.liquid,
	requirements: ItemStack.with(
		Items.graphite, 4,
		item.crystal, 2
	),
	liquidCapacity: 30
});

const crystalLiquidContainer = new LiquidRouter("crystal-liquid-container");
exports.crystalLiquidContainer = crystalLiquidContainer;
Object.assign(crystalLiquidContainer, {
	buildVisibility: BuildVisibility.shown,
	category: Category.liquid,
	requirements: ItemStack.with(
		item.manganese, 10,
		item.crystal, 15
	),
	liquidCapacity: 850,
	size: 2,
})

const crystalLiquidTank = new LiquidRouter("crystal-liquid-tank");
exports.crystalLiquidTank = crystalLiquidTank;
Object.assign(crystalLiquidTank, {
	buildVisibility: BuildVisibility.shown,
	category: Category.liquid,
	requirements: ItemStack.with(
		item.manganese, 30,
		item.crystal, 45
	),
	liquidCapacity: 2100,
	size: 3
})

const crystalLiquidJunction = new LiquidJunction("crystal-liquid-junction");
exports.crystalLiquidJunction = crystalLiquidJunction;
Object.assign(crystalLiquidJunction, {
	buildVisibility: BuildVisibility.shown,
	category: Category.liquid,
	requirements: ItemStack.with(
		Items.graphite, 4,
		item.crystal, 8
	),
})

const crystalConduitBridge = new LiquidBridge("crystal-conduit-bridge");
exports.crystalConduitBridge = crystalConduitBridge;
Object.assign(crystalConduitBridge, {
	fadeIn: false,
	moveArrows: false,
	hasPower: false,
	range: 6,
	arrowSpacing: 6,
	buildVisibility: BuildVisibility.shown,
	category: Category.liquid,
	requirements: ItemStack.with(
		Items.graphite, 8,
		item.crystal, 15,
	),
})

const biosulfideConduitBridge = new LiquidBridge("biosulfide-conduit-bridge");
exports.biosulfideConduitBridge = biosulfideConduitBridge;
Object.assign(biosulfideConduitBridge,{
    fadeIn: false,
	moveArrows: false,
	hasPower: false,
	range: 14,
	arrowSpacing: 6,
	baseExplosiveness: 10,
	buildVisibility: BuildVisibility.shown,
	category: Category.liquid,
	requirements: ItemStack.with(
		Items.graphite, 6,
		item.crystal, 8,
		item.biosulfide, 5,
	),
})

crystalConduit.junctionReplacement = crystalLiquidJunction;
crystalConduit.bridgeReplacement = crystalConduitBridge;
organistalConduit.junctionReplacement = crystalLiquidJunction;
organistalConduit.bridgeReplacement = crystalConduitBridge;
armoredConduit.junctionReplacement = crystalLiquidJunction;
armoredConduit.bridgeReplacement = crystalConduitBridge;