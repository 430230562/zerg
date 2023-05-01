const item = require("item");

const repairer = new MendProjector("repairer");
exports.repairer = repairer;
Object.assign(repairer, {
	size: 1,
	reload: 120,
	range: 40,
	healPercent: 4,
	phaseBoost: 2,
	phaseRangeBoost: 20,
	health: 80,
	buildVisibility: BuildVisibility.shown,
	category: Category.effect,
	requirements: ItemStack.with(
		item.nickel, 55,
	)
})
repairer.consumePower(0.15);
repairer.consumeItem(Items.silicon, 1).boost();

const catalyzer = new OverdriveProjector("catalyzer");
exports.catalyzer = catalyzer;
Object.assign(catalyzer, {
	reload: 60,
	range: 80,
	speedBoost: 1.35,
	speedBoostPhase: 0.35,
	useTime: 120,
	phaseRangeBoost: 0,
	hasBoost: true,
	size: 2,
	buildVisibility: BuildVisibility.shown,
	category: Category.effect,
	requirements: ItemStack.with(
	    Items.silicon, 75,
		item.nickel, 100,
		item.manganese, 75,
	)
})
catalyzer.consumeItem(item.manganese, 1).boost();
catalyzer.consumePower(2.5);

const wire = new ForceProjector("wire");
exports.wire = wire;
Object.assign(wire, {
	radius: 32,
	shieldHealth: 400,
	consumeCoolant: true,
	hasLiquids: true,
	cooldownNormal: 40 / 60,
	cooldownLiquid: 20 / 60,
    coolantConsumption: 0.05,
	cooldownBrokenBase: 20 / 60,
	size: 1,
	buildVisibility: BuildVisibility.shown,
	category: Category.effect,
	requirements: ItemStack.with(
	    Items.silicon, 25,
		item.nickel, 50,
		item.crystal, 25,
	)
})
wire.consumePower(0.8);

const matrix = new ForceProjector("matrix");
exports.matrix = matrix;
Object.assign(matrix,{
    radius: 64,
	shieldHealth: 1200,
	consumeCoolant: true,
	hasLiquids: true,
	cooldownNormal: 80 / 60,
	cooldownLiquid: 40 / 60,
    coolantConsumption: 0.1,
	cooldownBrokenBase: 40 / 60,
	size: 2,
	buildVisibility: BuildVisibility.shown,
	category: Category.effect,
	requirements: ItemStack.with(
	    Items.silicon, 75,
		item.nickel, 100,
		item.manganese, 50,
		item.crystal, 125,
	)
})
matrix.consumePower(2.4)

const curtain = new ForceProjector("curtain");
exports.curtain = curtain
Object.assign(curtain,{
    radius: 128,
	shieldHealth: 2400,
	consumeCoolant: true,
	hasLiquids: true,
	cooldownNormal: 150 / 60,
	cooldownLiquid: 60 / 60,
    coolantConsumption: 0.15,
	cooldownBrokenBase: 100 / 60,
	size: 3,
	buildVisibility: BuildVisibility.shown,
	category: Category.effect,
	requirements: ItemStack.with(
	    Items.silicon, 125,
		item.nickel, 120,
		item.manganese, 75,
		item.chromium, 25,
		item.crystal, 205,
	)
})
curtain.consumePower(3.4)

const box = new StorageBlock("box");
exports.box = box;
Object.assign(box, {
	size: 2,
	itemCapacity: 375,
	scaledHealth: 65,
	buildVisibility: BuildVisibility.shown,
	category: Category.effect,
	requirements: ItemStack.with(
	    item.nickel, 25,
		item.manganese, 75,
	)
})

const unloader = new Unloader("unloader");
exports.unloader = unloader;
Object.assign(unloader, {
	speed: 60 / 16,
	group: BlockGroup.transportation,
	buildVisibility: BuildVisibility.shown,
	category: Category.effect,
	requirements: ItemStack.with(
	    Items.silicon, 20,
		item.manganese, 30,
	)
})

const launchPad = new LaunchPad("launch-pad");
exports.launchPad = launchPad;
Object.assign(launchPad,{
	size: 3,
	itemCapacity: 120,
	launchTime: 60 * 20,
	hasPower: true,
	buildVisibility: BuildVisibility.shown,
	category: Category.effect,
	requirements: ItemStack.with(
	    Items.silicon, 150,
		item.nickel, 550,
		item.manganese, 150,
	),
})
launchPad.consumePower(4);

const lamp = new LightBlock("lamp");
exports.lamp = lamp;
Object.assign(lamp, {
	size: 2,
	brightness: 0.65,
	radius: 210,
	buildVisibility: BuildVisibility.shown,
	category: Category.effect,
	requirements: ItemStack.with(
		Items.graphite, 12,
		item.nickel, 8,
	)
})
lamp.consumePower(0.1);