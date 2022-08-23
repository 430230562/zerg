const item = require('item');

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
		Items.copper, 2,
		item.biomassSteel, 10,
		item.organosilicon, 7,
	),
})

const armoredBiomassConveyor = ArmoredConveyor("armored-biomass-conveyor");
exports.armoredBiomassConveyor = armoredBiomassConveyor;
Object.assign(armoredBiomassConveyor, {
buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		Items.plastanium, 1,
		item.biomassSteel, 4,
		item.organosilicon, 2
	),
	health: 90 * 3.5,
	speed: 0.11,
	displayedSpeed: 15.7,
})

const biomassConveyorBridge = new ItemBridge("biomass-conveyor-bridge");
exports.biomassConveyorBridge = biomassConveyorBridge;
Object.assign(biomassConveyorBridge, {
	fadeIn: false,
	moveArrows: false,
	hasPower: false,
	range: 8,
	arrowSpacing: 6,
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		Items.lead, 5,
		item.biomassSteel, 20,
		item.organosilicon, 15
	),
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
		Items.copper, 750,
		Items.lead, 500,
		Items.graphite, 300,
		item.biomassSteel, 700,
		item.organosilicon, 500,
	)
})
biomassLaunchPad.consumePower(7.5);

const peristalticPump = new Pump("peristaltic-pump");
exports.peristalticPump = peristalticPump;
Object.assign(peristalticPump, {
	pumpAmount: (6 / 60) / 0.35,
	health: 80,
	buildVisibility: BuildVisibility.shown,
	category: Category.liquid,
	requirements: ItemStack.with(
		Items.copper, 30,
		item.biomassSteel, 40,
		item.organosilicon, 40,
	)
})

const biomassConduit = new Conduit("biomass-conduit");
exports.biomassConduit = biomassConduit;
Object.assign(biomassConduit, {
	health: 90,
	liquidCapacity: 16,
	liquidPressure: 1.41,
	buildVisibility: BuildVisibility.shown,
	category: Category.liquid,
	requirements: ItemStack.with(
		item.biomassSteel, 2,
		item.organosilicon, 1
	)
})

const biomassConduitBridge = new LiquidBridge("biomass-conduit-bridge");
exports.biomassConduitBridge = biomassConduitBridge;
Object.assign(biomassConduitBridge, {
	fadeIn: false,
	moveArrows: false,
	hasPower: false,
	range: 8,
	arrowSpacing: 6,
	buildVisibility: BuildVisibility.shown,
	category: Category.liquid,
	requirements: ItemStack.with(
		Items.lead, 5,
		item.biomassSteel, 20,
		item.organosilicon, 15
	),
})

const heatPipe = new HeatConductor("heat-pipe")
exports.heatPipe = heatPipe;
Object.assign(heatPipe, {
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		Items.copper, 5,
		item.biomassSteel, 3,
	),
	size: 1,
	drawer: new DrawMulti(
		new DrawDefault(),
		new DrawHeatOutput(),
		new DrawHeatInput("-heat")
	),
	regionRotated1: 1,
})