const item = require('item');

const ossatureDrill = new Drill("ossature-drill");
exports.ossatureDrill = ossatureDrill;
Object.assign(ossatureDrill, {
	tier: 3,
	drillTime: 400,
	size: 2,
	alwaysUnlocked: true,
	buildVisibility: BuildVisibility.shown,
	category: Category.production,
	requirements: ItemStack.with(
		Items.graphite, 10,
		item.ossature, 18,
	),
})

const biomassDrill = new Drill("biomass-drill")
exports.biomassDrill = biomassDrill;
Object.assign(biomassDrill, {
	drillTime: 210,
	size: 3,
	hasPower: true,
	tier: 4,
	updateEffect: Fx.pulverizeMedium,
	drillEffect: Fx.mineBig,
	buildVisibility: BuildVisibility.shown,
	category: Category.production,
	requirements: ItemStack.with(
		Items.graphite, 30,
		item.ossature, 35,
		item.biomassSteel, 30,
		item.organosilicon, 40,
	),
})
biomassDrill.consumePower(0.9)
biomassDrill.consumeLiquid(Liquids.water, 0.04).boost()

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
		item.ossature, 30,
		item.nickel, 20,
	)
})
crystalCollector.consumeLiquid(Liquids.water, 3 / 60).boost();
crystalCollector.consumePower(0.15);

const incubator = new GenericCrafter("incubator");
exports.incubator = incubator;
Object.assign(incubator, {
	craftEffect: Fx.none,
	outputItem: new ItemStack(item.biomass, 1),
	craftTime: 180,
	size: 2,
	hasPower: true,
	hasLiquids: true,
	hasItems: true,
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
		item.ossature, 70,
		item.nickel, 150,
		item.organosilicon, 60,
	),
})
incubator.consumePower(70 / 60);
incubator.consumeLiquid(Liquids.water, 12 / 60);

const enrichmentIncubator = new GenericCrafter("enrichment-incubator");
exports.enrichmentIncubator = enrichmentIncubator;
Object.assign(enrichmentIncubator, {
	craftEffect: Fx.none,
	outputItem: new ItemStack(item.biomass, 2),
	craftTime: 65,
	size: 3,
	hasPower: true,
	hasLiquids: true,
	hasItems: true,
	drawer: new DrawMulti(
		new DrawRegion("-bottom"),
		new DrawLiquidTile(Liquids.neoplasm),
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
		Items.thorium, 100,
		item.ossature, 75,
		item.nickel, 75,
		item.biomassSteel, 135,
		item.organosilicon, 125,
	),
})
enrichmentIncubator.consumePower(40 / 60);
enrichmentIncubator.consumeLiquid(Liquids.neoplasm, 6 / 60);