const item = require('item');

const ossaturePump = new Pump("ossature-pump");
exports.ossaturePump = ossaturePump;
Object.assign(ossaturePump, {
	pumpAmount: 9 / 60,
	buildVisibility: BuildVisibility.shown,
	category: Category.liquid,
	requirements: ItemStack.with(
		item.ossature, 15,
		item.crystal, 10,
	)
})

const peristalticPump = new Pump("peristaltic-pump");
exports.peristalticPump = peristalticPump;
Object.assign(peristalticPump, {
	size: 2,
	pumpAmount: 18 / 60,
	health: 240,
	liquidCapacity: 30,
	hasPower: true,
	buildVisibility: BuildVisibility.shown,
	category: Category.liquid,
	requirements: ItemStack.with(
		item.ossature, 70,
		item.crystal, 50,
		item.biomassSteel, 50,
		item.organosilicon, 35,
	)
})
peristalticPump.consumePower(0.3);

const crystalConduit = new Conduit("crystal-conduit");
exports.crystalConduit = crystalConduit;
Object.assign(crystalConduit, {
	health: 45,
	liquidCapacity: 10,
	liquidPressure: 1.05,
	buildVisibility: BuildVisibility.shown,
	category: Category.liquid,
	requirements: ItemStack.with(
		item.crystal, 1,
	)
})

const biomassConduit = new Conduit("biomass-conduit");
exports.biomassConduit = biomassConduit;
Object.assign(biomassConduit, {
	health: 90,
	liquidCapacity: 16,
	liquidPressure: 1.25,
	buildVisibility: BuildVisibility.shown,
	category: Category.liquid,
	requirements: ItemStack.with(
		item.biomassSteel, 2,
		item.crystal, 1
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
		item.ossature, 10,
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
		item.ossature, 30,
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
	range: 7,
	arrowSpacing: 6,
	buildVisibility: BuildVisibility.shown,
	category: Category.liquid,
	requirements: ItemStack.with(
		Items.graphite, 8,
		item.crystal, 15,
	),
})

const biomassConduitBridge = new LiquidBridge("biomass-conduit-bridge");
exports.biomassConduitBridge = biomassConduitBridge;
Object.assign(biomassConduitBridge, {
	fadeIn: false,
	moveArrows: false,
	hasPower: false,
	range: 10,
	arrowSpacing: 6,
	buildVisibility: BuildVisibility.shown,
	category: Category.liquid,
	requirements: ItemStack.with(
		item.nickel, 5,
		item.biomassSteel, 20,
		item.crystal, 15
	),
})