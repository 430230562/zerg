const item = require('item');

const ossatureConveyor = new Conveyor("ossature-conveyor");
exports.ossatureConveyor = ossatureConveyor;
Object.assign(ossatureConveyor, {
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		item.ossature, 1
	),
	health: 55,
	speed: 0.05,
	displayedSpeed: 6.5,
	alwaysUnlocked: true
})

const manganeseConveyor = new Conveyor("manganese-conveyor");
exports.manganeseConveyor = manganeseConveyor;
Object.assign(manganeseConveyor, {
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		item.ossature, 1,
		item.nickel, 1,
		item.manganese, 1,
	),
	health: 80,
	speed: 0.11,
	displayedSpeed: 15.7,
})

const armoredConveyor = ArmoredConveyor("armored-conveyor");
exports.armoredConveyor = armoredConveyor;
Object.assign(armoredConveyor,{
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		item.uranium, 1,
		item.crystal, 1,
		item.biomassSteel, 1,
	),
	health: 220,
	speed: 0.11,
	displayedSpeed: 15.7,
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
		item.organosilicon, 1,
		item.biomassSteel, 1,
	),
})

const ossatureJunction = new Junction("ossature-junction");
exports.ossatureJunction = ossatureJunction;
Object.assign(ossatureJunction, {
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		item.ossature, 2,
		item.nickel, 1
	),
	speed: 20,
	capacity: 4,
	health: 55
})

const ossatureBridge = new BufferedItemBridge("ossature-bridge");
exports.ossatureBridge = ossatureBridge;
Object.assign(ossatureBridge, {
	fadeIn: false,
	moveArrows: false,
	hasPower: false,
	range: 8,
	speed: 60,
	arrowSpacing: 6,
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		item.ossature, 6,
		item.nickel, 6
	),
})

const halogenatedBridge = new ItemBridge("halogenated-bridge");
exports.halogenatedBridge = halogenatedBridge;
Object.assign(halogenatedBridge, {
	fadeIn: false,
	moveArrows: false,
	hasPower: true,
	range: 16,
	arrowSpacing: 6,
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		Items.graphite, 10,
		item.nickel, 10,
		item.organosilicon, 7,
		item.halogenated, 5
	),
})
halogenatedBridge.consumePower(18 / 60);

const ossatureSorter = new Sorter("ossature-sorter");
exports.ossatureSorter = ossatureSorter;
Object.assign(ossatureSorter, {
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		item.ossature, 2,
		item.nickel, 2
	),
})

const invertedOssatureSorter = new Sorter("inverted-ossature-sorter");
exports.invertedOssatureSorter = invertedOssatureSorter;
Object.assign(invertedOssatureSorter, {
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		item.ossature, 2,
		item.nickel, 2
	),
	invert: true
})

const ossatureOverflowGate = new OverflowGate("ossature-overflow-gate");
exports.ossatureOverflowGate = ossatureOverflowGate;
Object.assign(ossatureOverflowGate, {
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		item.ossature, 4,
		item.nickel, 2
	),
})

const ossatureUnderflowGate = new OverflowGate("ossature-underflow-gate");
exports.ossatureUnderflowGate = ossatureUnderflowGate;
Object.assign(ossatureUnderflowGate, {
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		item.ossature, 4,
		item.nickel, 2
	),
	invert: true
})

const ossatureRouter = new Router("ossature-router");
exports.ossatureRouter = ossatureRouter;
Object.assign(ossatureRouter, {
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		item.ossature, 4,
	),
})

const ossatureDistributor = new Router("ossature-distributor");
exports.ossatureDistributor = ossatureDistributor;
Object.assign(ossatureDistributor, {
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		item.ossature, 4,
		item.nickel, 4
	),
	size: 2
})

const heatPipe = new HeatConductor("heat-pipe")
exports.heatPipe = heatPipe;
Object.assign(heatPipe, {
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		item.ossature, 10,
		item.nickel, 10,
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
		item.ossature, 10,
		item.nickel, 10,
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