const item = require('item');
const liquid = require('liquid');

const ossatureDrill = new Drill("ossature-drill");
exports.ossatureDrill = ossatureDrill;
Object.assign(ossatureDrill, {
	tier: 3,
	drillTime: 360,
	hardnessDrillMultiplier: 0,
	size: 2,
	alwaysUnlocked: true,
	buildVisibility: BuildVisibility.shown,
	category: Category.production,
	requirements: ItemStack.with(
		Items.graphite, 10,
		item.ossature, 18,
	),
})
ossatureDrill.consumeLiquid(Liquids.water, 0.04).boost()

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
		item.ossature, 20,
		item.nickel, 15,
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
		item.organosilicon, 30,
	)
})
crystalDrill.consumeLiquid(Liquids.water, 0.04).boost();
crystalDrill.consumePower(1.2);

const deepDrilling = GenericCrafter("deep-drilling");
exports.deepDrilling = deepDrilling
Object.assign(deepDrilling,{
	craftEffect: Fx.mineBig,
	outputItem: new ItemStack(item.uranium, 1),
	craftTime: 120,
	size: 4,
	hasItems: true,
	hasLiquids: true,
	buildCostMultiplier: 2.5,
	group: BlockGroup.drills,
	
	drawer: new DrawMulti(
		new DrawDefault(), 
		Object.assign(new DrawRegion("-rotator"), {
			spinSprite: true,
			rotateSpeed: 4.5,
		}),
		new DrawRegion("-top")
	),
	
	buildVisibility: BuildVisibility.shown,
	category: Category.production,
	requirements: ItemStack.with(
		item.nickel, 65,
		item.uranium, 75,
		item.manganese, 50,
		item.organosilicon, 60,
	)
})
deepDrilling.consumeLiquid(Liquids.water, 0.1)
deepDrilling.consumePower(220 / 60)

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
		item.ossature, 25,
		item.nickel, 25,
		item.organosilicon, 10,
	),
})
incubator.consumePower(70 / 60);
incubator.consumeLiquid(Liquids.water, 12 / 60);

const sporeIncubator = new AttributeCrafter("spore-incubator");
exports.sporeIncubator = sporeIncubator;
Object.assign(sporeIncubator,{
    craftEffect: Fx.none,
	outputItem: new ItemStack(Items.sporePod, 1),
	craftTime: 30,
	size: 3,
	hasPower: true,
	hasLiquids: true,
	hasItems: true,
	attribute: Attribute.spores,
	drawer: new DrawMulti(
		new DrawRegion("-bottom"),
		new DrawLiquidTile(Liquids.oil),
		new DrawDefault(),
		new DrawCultivator(),
		new DrawRegion("-top")
	),
	buildVisibility: BuildVisibility.shown,
	category: Category.production,
	requirements: ItemStack.with(
		item.nickel, 75,
		item.manganese, 50,
		item.organosilicon, 50,
	)
})
sporeIncubator.consumePower(120 / 60);
sporeIncubator.consumeLiquid(Liquids.oil, 6 / 60);

const neoplasmExtractor = new SolidPump("neoplasm-extractor");
exports.neoplasmExtractor = neoplasmExtractor;
Object.assign(neoplasmExtractor, {
	result: Liquids.neoplasm,
	pumpAmount: 4 / 60,
	size: 2,
	liquidCapacity: 30,
	rotateSpeed: 2.4,
	baseEfficiency: 0,
	attribute: Attribute.get("neoplasm"),
	buildVisibility: BuildVisibility.shown,
	category: Category.production,
	requirements: ItemStack.with(
		Items.graphite, 30,
		item.ossature, 30,
		item.nickel, 30,
		item.crystal, 30,
	),
})
neoplasmExtractor.consumePower(110 / 60);

const chlorineExtractor = new GenericCrafter("chlorine-extractor");
exports.chlorineExtractor = chlorineExtractor;
Object.assign(chlorineExtractor, {
	outputLiquid: new LiquidStack(liquid.chlorine,1.5 / 60),
	size: 3,
	liquidCapacity: 24,
	drawer: new DrawMulti(
		new DrawRegion("-bottom"),
		new DrawLiquidTile(liquid.chlorine),
		new DrawDefault(), 
		Object.assign(new DrawRegion("-rotator"), {
			spinSprite: true,
			rotateSpeed: 2.4,
		}),
		new DrawRegion("-top")
	),
	buildVisibility: BuildVisibility.shown,
	category: Category.production,
	requirements: ItemStack.with(
		Items.graphite, 175,
		item.nickel, 115,
		item.crystal, 75,
		item.uranium, 50,
		item.halogenated, 75,
	),
})
chlorineExtractor.consumePower(220 / 60);