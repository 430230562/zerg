const item = require('zerg/item');

const nickelConveyor = new Conveyor("nickel-conveyor");
exports.nickelConveyor = nickelConveyor;
Object.assign(nickelConveyor, {
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		item.nickel, 1
	),
	health: 55,
	speed: 0.05,
	displayedSpeed: 6.5,
	alwaysUnlocked: true,
	envRequired: Env.oxygen
})

const manganeseConveyor = new Conveyor("manganese-conveyor");
exports.manganeseConveyor = manganeseConveyor;
Object.assign(manganeseConveyor, {
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		item.nickel, 1,
		item.manganese, 1,
	),
	health: 80,
	speed: 0.11,
	displayedSpeed: 15.7,
	envRequired: Env.oxygen
})

const armoredConveyor = ArmoredConveyor("armored-conveyor");
exports.armoredConveyor = armoredConveyor;
Object.assign(armoredConveyor,{
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		item.chromium, 1,
		item.crystal, 1,
		item.biomassSteel, 1,
	),
	health: 220,
	speed: 0.11,
	displayedSpeed: 15.7,
	envRequired: Env.oxygen
})

const biomassConveyor = new StackConveyor("biomass-conveyor");
exports.biomassConveyor = biomassConveyor;
Object.assign(biomassConveyor, {
	health: 125,
	speed: 4.5 / 60,
	itemCapacity: 15,
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		Items.graphite, 1,
		Items.silicon, 1,
		item.biomassSteel, 1,
	),
})

const junction = new Junction("junction");
exports.junction = junction;
Object.assign(junction, {
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		item.nickel, 10,
	),
	speed: 1,
	capacity: 1,
	health: 55,
	envRequired: Env.oxygen
})

const nickelBridge = new BufferedItemBridge("nickel-bridge");
exports.nickelBridge = nickelBridge;
Object.assign(nickelBridge, {
	fadeIn: false,
	moveArrows: false,
	hasPower: false,
	range: 6,
	speed: 30,
	arrowSpacing: 6,
	envRequired: Env.oxygen,
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		item.nickel, 20,
	),
})

const biosulfideBridge = new ItemBridge("biosulfide-bridge");
exports.biosulfideBridge = biosulfideBridge;
Object.assign(biosulfideBridge,{
    fadeIn: false,
	moveArrows: false,
	hasPower: false,
	range: 14,
	arrowSpacing: 6,
	baseExplosiveness: 10,
	envRequired: Env.oxygen,
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		item.nickel, 10,
		item.biosulfide, 5,
	),
})

const sorter = new Sorter("sorter");
exports.sorter = sorter;
Object.assign(sorter, {
    envRequired: Env.oxygen,
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		item.nickel, 10,
	),
})

const invertedSorter = new Sorter("inverted-sorter");
exports.invertedSorter = invertedSorter;
Object.assign(invertedSorter, {
    envRequired: Env.oxygen,
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		item.nickel, 10,
	),
	invert: true
})

const overflowGate = new OverflowGate("overflow-gate");
exports.overflowGate = overflowGate;
Object.assign(overflowGate, {
    envRequired: Env.oxygen,
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		item.nickel, 10,
	),
})

const underflowGate = new OverflowGate("underflow-gate");
exports.underflowGate = underflowGate;
Object.assign(underflowGate, {
    envRequired: Env.oxygen,
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		item.nickel, 10,
	),
	invert: true
})

const router = new Router("router");
exports.router = router;
Object.assign(router, {
    envRequired: Env.oxygen,
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		item.nickel, 4,
	),
})

const distributor = new Router("distributor");
exports.distributor = distributor;
Object.assign(distributor, {
    envRequired: Env.oxygen,
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		item.nickel, 12,
	),
	size: 2
})

const heatPipe = new HeatConductor("heat-pipe")
exports.heatPipe = heatPipe;
Object.assign(heatPipe, {
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		Items.graphite, 20,
		item.nickel, 15,
	),
	size: 1,
	drawer: new DrawMulti(
		new DrawDefault(),
		new DrawHeatOutput(),
		new DrawHeatInput("-heat")
	),
	regionRotated1: 1,
})

const heatRouter = new HeatConductor("heat-router");
exports.heatRouter = heatRouter;
Object.assign(heatRouter,{
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		Items.graphite, 25,
		item.nickel, 15,
	),
	size: 1,
	drawer: new DrawMulti(
		new DrawDefault(),
		new DrawHeatOutput(-1, false),
		new DrawHeatOutput(),
		new DrawHeatOutput(1, false),
		new DrawHeatInput("-heat")
	),
	regionRotated1: 1,
	splitHeat: true
})

nickelConveyor.junctionReplacement = junction;
nickelConveyor.bridgeReplacement = nickelBridge;
manganeseConveyor.junctionReplacement = junction;
manganeseConveyor.bridgeReplacement = nickelBridge;
armoredConveyor.junctionReplacement = junction;
armoredConveyor.bridgeReplacement = nickelBridge;
