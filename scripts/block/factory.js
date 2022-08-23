const item = require('item');

const smelter = new GenericCrafter("smelter");
exports.smelter = smelter;
Object.assign(smelter, {
	health: 240,
	craftEffect: Fx.smeltsmoke,
	outputItem: new ItemStack(item.organosilicon, 2),
	craftTime: 40,
	size: 2,
	hasPower: true,
	hasLiquids: false,
	drawer: new DrawMulti(
		new DrawDefault(),
		new DrawFlame(Color.valueOf("ffef99"))
	),
	ambientSound: Sounds.smelter,
	ambientSoundVolume: 0.14,
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		Items.copper, 60,
		Items.lead, 60,
	)
})
smelter.consumeItems(ItemStack.with(
	Items.coal, 1, 
	item.organosand, 3,
));
smelter.consumePower(0.50);

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

const compressor = new GenericCrafter('compressor');
exports.compressor = compressor;
Object.assign(compressor, {
	hasItems: true,
	hasLiquids: false,
	hasPower: true,
	craftTime: 30,
	outputItem: new ItemStack(item.biomassSteel, 1),
	size: 2,
	health: 320,
	drawer: new DrawMulti(
		new DrawDefault(), 
		Object.assign(new DrawRegion("-rotator"), {
			spinSprite: true,
			rotateSpeed: -4.5,
		})
	),
	craftEffect: Fx.formsmoke,
	updateEffect: Fx.plasticburn,
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		Items.copper, 70,
		Items.lead, 110,
		item.biomassSteel, 140,
		item.organosilicon, 105,
	)
})
compressor.consumePower(145 / 60);
compressor.consumeItems(ItemStack.with(
	Items.titanium, 1,
	item.biomass, 1
));

const parallelCompressor = new GenericCrafter('parallel-compressor');
exports.parallelCompressor = parallelCompressor;
Object.assign(parallelCompressor, {
	hasItems: true,
	hasLiquids: false,
	hasPower: true,
	craftTime: 30,
	itemCapacity: 15,
	outputItem: new ItemStack(item.biomassSteel, 3),
	size: 4,
	health: 1120,
	drawer: new DrawMulti(
		new DrawDefault(), 
		Object.assign(new DrawRegion("-rotator"), {
			spinSprite: true,
			rotateSpeed: -4.5,
		})
	),
	craftEffect: Fx.formsmoke,
	updateEffect: Fx.plasticburn,
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		Items.copper, 170,
		Items.titanium, 80,
		Items.thorium, 70,
		item.biomassSteel, 300,
		item.organosilicon, 150,
	)
})
parallelCompressor.consumePower(215 / 60);
parallelCompressor.consumeItems(ItemStack.with(
	Items.titanium, 3,
	item.biomass, 2
));

const centrifuge = new GenericCrafter("centrifuge");
exports.centrifuge = centrifuge;
Object.assign(centrifuge, {
	outputLiquid: new LiquidStack(Liquids.water, 6 / 60),
	size: 2,
	hasPower: true,
	hasItems: true,
	hasLiquids: true,
	rotate: false,
	solid: true,
	outputsLiquid: true,
	liquidCapacity: 24,
	craftTime: 120,
	drawer: new DrawMulti(
		new DrawDefault(), 
		Object.assign(new DrawRegion("-rotator"), {
			spinSprite: true,
			rotateSpeed: 18,
		})
	),
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		Items.copper, 70,
		item.biomassSteel, 90,
		item.organosilicon, 50,
	),
})
centrifuge.consumePower(1)
centrifuge.consumeLiquid(Liquids.neoplasm, 9 / 60);

const extractor = new GenericCrafter("extractor");
exports.extractor = extractor;
Object.assign(extractor, {
	outputLiquid: new LiquidStack(Liquids.oil, 12 / 60),
	size: 2,
	hasPower: true,
	hasItems: true,
	hasLiquids: true,
	rotate: false,
	solid: true,
	outputsLiquid: true,
	liquidCapacity: 36,
	craftTime: 120,
	drawer: new DrawMulti(
		new DrawRegion("-bottom"),
		new DrawLiquidTile(Liquids.arkycite),
		new DrawDefault(),
		Object.assign(new DrawCultivator(), {
			plantColor: Color.valueOf("313131"),
			plantColorLight: Color.valueOf("61615b"),
		}),
		new DrawRegion("-top")
	),
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		Items.lead, 80,
		Items.graphite, 40,
		item.biomassSteel, 50,
		item.organosilicon, 120,
	),
})
extractor.consumePower(2.4)
extractor.consumeLiquid(Liquids.arkycite, 18 / 60);

const synthesizer = new GenericCrafter("synthesizer");
exports.synthesizer = synthesizer;
Object.assign(synthesizer, {
	hasItems: true,
	hasLiquids: false,
	hasPower: true,
	size: 2,
	outputItem: new ItemStack(item.methylSulfone, 1),
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		Items.lead, 25,
		item.biomassSteel, 25,
	),
})
synthesizer.consumePower(0.35);
synthesizer.consumeItems(ItemStack.with(
	item.organosand, 2,
	item.biomass, 1
));