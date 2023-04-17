const item = require('item');
const liquid = require('liquid');

const nickelDrill = new Drill("nickel-drill");
exports.nickelDrill = nickelDrill;
Object.assign(nickelDrill, {
	tier: 3,
	drillTime: 360,
	hardnessDrillMultiplier: 0,
	size: 2,
	alwaysUnlocked: true,
	buildVisibility: BuildVisibility.shown,
	category: Category.production,
	requirements: ItemStack.with(
		Items.graphite, 10,
		item.nickel, 18,
	),
})
nickelDrill.consumeLiquid(Liquids.water, 0.04).boost()

const manganeseDrill = new Drill("manganese-drill");
exports.manganeseDrill = manganeseDrill;
Object.assign(manganeseDrill, {
	tier: 4,
	drillTime: 300,
	hardnessDrillMultiplier: 0,
	size: 2,
	buildVisibility: BuildVisibility.shown,
	category: Category.production,
	requirements: ItemStack.with(
		item.nickel, 35,
		item.manganese, 10,
	),
})
manganeseDrill.consumeLiquid(Liquids.water, 0.04).boost()

const crystalDrill = new Drill("crystal-drill");
exports.crystalDrill = crystalDrill;
Object.assign(crystalDrill, {
	tier: 4,
	drillTime: 240,
	hardnessDrillMultiplier: 0,
	size: 3,
	buildVisibility: BuildVisibility.shown,
	category: Category.production,
	requirements: ItemStack.with(
		Items.graphite, 30,
		item.nickel, 35,
		item.manganese, 20,
		Items.silicon, 30,
	)
})
crystalDrill.consumeLiquid(Liquids.water, 0.04).boost();
crystalDrill.consumePower(1.2);

const crystalCollector = new BeamDrill("crystal-collector");
exports.crystalCollector = crystalCollector;
Object.assign(crystalCollector, {
	drillTime: 120 / 0.5,
	optionalBoostIntensity: 4,
	tier: 3,
	size: 2,
	range: 7,
	fogRadius: 3,
	buildVisibility: BuildVisibility.shown,
	category: Category.production,
	requirements: ItemStack.with(
		item.nickel, 50,
	)
})
crystalCollector.consumeLiquid(Liquids.water, 3 / 60).boost();
crystalCollector.consumePower(0.15);

const hyphaCutting = new WallCrafter("hypha-cutting")
exports.hyphaCutting = hyphaCutting;
Object.assign(hyphaCutting,{
    drillTime: 240,
    size: 3,
    attribute: Attribute.get("biomass"),
    output: item.hypha,
    ambientSound: Sounds.plantBreak,
    ambientSoundVolume: 0.04,
    requirements: ItemStack.with(
		item.nickel, 250,
		item.manganese, 150,
		item.crystal, 100,
		item.chromium, 125,
	)
})
hyphaCutting.consumePower(150 / 60);
hyphaCutting.consumeLiquid(liquid.dissolvant, 12 / 60);

const incubator = new AttributeCrafter("incubator");
exports.incubator = incubator;
Object.assign(incubator, {
	craftEffect: Fx.none,
	outputItem: new ItemStack(item.biomass, 1),
	craftTime: 180,
	size: 2,
	hasPower: true,
	hasLiquids: true,
	hasItems: true,
	attribute: Attribute.get("biomass"),
	maxBoost: 3,
	drawer: new DrawMulti(
		new DrawRegion("-bottom"),
		new DrawLiquidTile(Liquids.water),
		new DrawDefault(),
		Object.assign(new DrawCultivator(), {
			plantColor: Color.valueOf("9cb664"),
			plantColorLight: Color.valueOf("cbd97f"),
		}),
		new DrawRegion("-top")
	),
	buildVisibility: BuildVisibility.shown,
	category: Category.production,
	requirements: ItemStack.with(
		item.nickel, 50,
		Items.silicon, 10,
	),
})
incubator.consumePower(70 / 60);
incubator.consumeLiquid(Liquids.water, 12 / 60);