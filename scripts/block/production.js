const item = require('item');

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
		Items.copper, 35,
		Items.graphite, 30,
		item.biomassSteel, 30,
		item.organosilicon, 40,
	),
})
biomassDrill.consumePower(0.9)
biomassDrill.consumeLiquid(Liquids.water, 0.04).boost()

const impactBiomassDrill = new BurstDrill("impact-biomass-drill")
exports.impactBiomassDrill = impactBiomassDrill;
Object.assign(impactBiomassDrill, {
	drillTime: 60 * 8,
	size: 4,
	hasPower: true,
	tier: 6,
	drillEffect: new MultiEffect(
		Fx.mineImpact,
		Fx.drillSteam,
		Fx.mineImpactWave.wrap(Pal.redLight, 40)
	),
	shake: 4,
	itemCapacity: 40,
	researchCostMultiplier: 0.5,
	
	fogRadius: 4,
	
	buildVisibility: BuildVisibility.shown,
	category: Category.production,
	requirements: ItemStack.with(
		Items.graphite, 60,
		item.biomassSteel, 120,
		item.organosilicon, 90,
	),
})
impactBiomassDrill.consumePower(140 / 60);
impactBiomassDrill.consumeLiquid(Liquids.water, 0.1);

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
		Items.lead, 70,
		item.biomassSteel, 80,
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
		Items.lead, 75,
		Items.titanium, 60,
		item.biomassSteel, 135,
		item.organosilicon, 125,
	),
})
enrichmentIncubator.consumePower(40 / 60);
enrichmentIncubator.consumeLiquid(Liquids.neoplasm, 12 / 60);