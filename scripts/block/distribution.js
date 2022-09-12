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

const biomassConveyor = new Conveyor("biomass-conveyor");
exports.biomassConveyor = biomassConveyor;
Object.assign(biomassConveyor, {
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		item.biomassSteel, 2,
		item.organosilicon, 1
	),
	health: 90,
	speed: 0.11,
	displayedSpeed: 15.7,
})

const railway = new StackConveyor("railway");
exports.railway = railway;
Object.assign(railway, {
	health: 125,
	speed: 5 / 60,
	itemCapacity: 75,
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		Items.thorium, 5,
		item.biomassSteel, 8,
		item.organosilicon, 5,
	),
})

const armoredBiomassConveyor = ArmoredConveyor("armored-biomass-conveyor");
exports.armoredBiomassConveyor = armoredBiomassConveyor;
Object.assign(armoredBiomassConveyor, {
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		Items.thorium, 3,
		item.biomassSteel, 2,
		item.organosilicon, 1
	),
	health: 90 * 3.5,
	speed: 0.11,
	displayedSpeed: 15.7,
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

const ossatureBridge = new ItemBridge("ossature-bridge");
exports.ossatureBridge = ossatureBridge;
Object.assign(ossatureBridge, {
	fadeIn: false,
	moveArrows: false,
	hasPower: false,
	range: 7,
	arrowSpacing: 6,
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		item.ossature, 6,
		item.nickel, 6
	),
})

const biomassConveyorBridge = new ItemBridge("biomass-conveyor-bridge");
exports.biomassConveyorBridge = biomassConveyorBridge;
Object.assign(biomassConveyorBridge, {
	fadeIn: false,
	moveArrows: false,
	hasPower: false,
	range: 10,
	arrowSpacing: 6,
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		item.nickel, 5,
		item.biomassSteel, 20,
		item.organosilicon, 15
	),
})

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

const biomassLaunchPad = new LaunchPad("biomass-launch-pad");
exports.biomassLaunchPad = biomassLaunchPad;
Object.assign(biomassLaunchPad, {
	size: 5,
	itemCapacity: 500,
	launchTime: 60 * 40,
	hasPower: true,
	health: 2400,
	researchCostMultiplier: 0.25,
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		Items.graphite, 300,
		item.ossature, 750,
		item.nickel, 500,
		item.biomassSteel, 700,
		item.organosilicon, 500,
	)
})
biomassLaunchPad.consumePower(7.5);

const heatPipe = new HeatConductor("heat-pipe")
exports.heatPipe = heatPipe;
Object.assign(heatPipe, {
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		item.ossature, 5,
		item.nickel, 5,
	),
	size: 1,
	drawer: new DrawMulti(
		new DrawDefault(),
		new DrawHeatOutput(),
		new DrawHeatInput("-heat")
	),
	regionRotated1: 1,
})