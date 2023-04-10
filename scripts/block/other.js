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

const interdict = new ForceProjector("interdict");
exports.interdict = interdict;
Object.assign(interdict, {
	radius: 92,
	shieldHealth: 1400,
	phaseUseTime: 150,
	phaseShieldBoost: 350,
	phaseRadiusBoost: 47,
	consumeCoolant: false,
	hasLiquids: false,
	cooldownNormal: 70 / 60,
	cooldownBrokenBase: 28 / 60,
	size: 3,
	buildVisibility: BuildVisibility.shown,
	category: Category.effect,
	requirements: ItemStack.with(
	    Items.silicon, 75,
		item.nickel, 100,
		item.manganese, 25,
		item.crystal, 75,
	)
})
interdict.consumeItem(item.crystal, 1).boost();
interdict.consumePower(3.5);

const box = new StorageBlock("box");
exports.box = box;
Object.assign(box, {
	size: 2,
	itemCapacity: 375,
	scaledHealth: 65,
	buildVisibility: BuildVisibility.shown,
	category: Category.effect,
	requirements: ItemStack.with(
		item.manganese, 100,
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