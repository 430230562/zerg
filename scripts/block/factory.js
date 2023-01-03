const item = require('item');
const liquid = require('liquid');

const compressor = new GenericCrafter("compressor");
exports.compressor = compressor
Object.assign(compressor, {
	craftEffect: Fx.pulverizeMedium,
	outputItem: new ItemStack(Items.graphite, 2),
	craftTime: 90,
	size: 2,
	hasItems: true,
	hasLiquids: false,
	alwaysUnlocked: true,
	
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		item.ossature, 75,
		item.nickel, 30,
	)
})
compressor.consumeItem(Items.coal, 3);

const hydraulicPress = new GenericCrafter("hydraulic-press");
exports.hydraulicPress = hydraulicPress;
Object.assign(hydraulicPress, {
	craftEffect: Fx.pulverizeMedium,
	outputItem: new ItemStack(Items.graphite, 8),
	craftTime: 150,
	size: 3,
	hasItems: true,
	hasLiquids: true,
	drawer: new DrawMulti(
		new DrawDefault(), 
		Object.assign(new DrawRegion("-rotator"), {
			spinSprite: true,
			rotateSpeed: -4.5,
		})
	),
	
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		Items.graphite, 50,
		item.nickel, 100,
		item.manganese, 100,
		item.organosilicon, 25,
	)
})
hydraulicPress.consumeItem(Items.coal, 9);
hydraulicPress.consumePower(108 / 60);
hydraulicPress.consumeLiquid(Liquids.water, 4 / 60);

const smelter = new GenericCrafter("smelter");
exports.smelter = smelter;
Object.assign(smelter, {
	health: 240,
	craftEffect: Fx.smeltsmoke,
	outputItem: new ItemStack(item.organosilicon, 2),
	craftTime: 40,
	size: 2,
	researchCostMultiplier: 0.5,
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
		item.ossature, 30,
		item.nickel, 25,
	)
})
smelter.consumeItems(ItemStack.with(
	Items.coal, 2, 
	item.organosand, 3,
));
smelter.consumePower(0.50);

const crucible = new AttributeCrafter("crucible");
exports.crucible = crucible;
Object.assign(crucible, {
	craftEffect: Fx.smeltsmoke,
	outputItem: new ItemStack(item.organosilicon, 8),
	craftTime: 90,
	size: 3,
	hasPower: true,
	hasLiquids: false,
	itemCapacity: 30,
	boostScale: 0.15,
	drawer: new DrawMulti(
		new DrawDefault(),
		new DrawFlame(Color.valueOf("ffef99"))
	),
	
	ambientSound: Sounds.smelter,
	ambientSoundVolume: 0.07,
	
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		item.crystal, 80,
		item.manganese, 120,
		item.organosilicon, 60,
		item.biomassSteel, 35,
	)
})
crucible.consumeItems(ItemStack.with(
	Items.coal, 5, 
	item.organosand, 8,
));
crucible.consumePower(4);

const screwCompressor = new GenericCrafter('screw-compressor');
exports.screwCompressor = screwCompressor;
Object.assign(screwCompressor, {
	hasItems: true,
	hasLiquids: false,
	hasPower: true,
	craftTime: 60,
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
		Items.graphite, 60,
		item.nickel, 115,
		item.manganese, 80,
		item.organosilicon, 80,
	)
})
screwCompressor.consumePower(145 / 60);
screwCompressor.consumeItems(ItemStack.with(
	item.nickel, 1,
	item.biomass, 1
));

const addition = new GenericCrafter("addition");
exports.addition = addition;
Object.assign(addition,{
	size: 3,
	craftTime: 90,
	liquidCapacity: 24,
	outputItem: new ItemStack(item.halogenated, 1),
	drawer: new DrawMulti(
		new DrawRegion("-bottom"),
		new DrawLiquidTile(liquid.chlorine, 4.1),
		new DrawDefault(),
		Object.assign(new DrawParticles(),{
			color: Color.valueOf("d4f0ff"),
			alpha: 0.6,
			particleSize: 4,
			particles: 10,
			particleRad: 12,
			particleLife: 140,
			reverse: true,
		})
	),
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		item.nickel, 180,
		item.manganese, 60,
		item.organosilicon, 150,
	)
})
addition.consumePower(155 / 60);
addition.consumeLiquid(liquid.chlorine, 12 / 60);
addition.consumeItems(ItemStack.with(
	item.biomass, 2,
));

const electrolyzer = new GenericCrafter("electrolyzer");
exports.electrolyzer = electrolyzer;
Object.assign(electrolyzer,{
	size: 3,
	craftTime: 60,
	rotate: true,
	invertFlip: true,

	liquidCapacity: 40,

	drawer: new DrawMulti(
		new DrawRegion("-bottom"),
		new DrawLiquidTile(Liquids.water, 2),
		Object.assign(new DrawBubbles(Color.valueOf("7693e3")),{
			sides: 10,
			recurrence: 3,
			spread: 6,
			radius: 1.5,
			amount: 20,
		}),
		new DrawRegion(),
		new DrawLiquidOutputs(),
		Object.assign(new DrawGlowRegion(),{
			alpha: 0.7,
			color: Color.valueOf("c4bdf3"),
			glowIntensity: 0.3,
			glowScale: 6,
		})
	),

	ambientSound: Sounds.electricHum,
	ambientSoundVolume: 0.08,

	regionRotated1: 3,
	outputLiquids: LiquidStack.with(
		Liquids.hydrogen, 6 / 60,
		liquid.chlorine, 6 / 60,
	),
	outputItem: new ItemStack(item.alkali, 1),
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		Items.graphite, 40,
		item.nickel, 130,
		item.manganese, 80,
		item.organosilicon, 50,
	)
})
electrolyzer.liquidOutputDirections = [1,3];
electrolyzer.consumePower(2.5);
electrolyzer.consumeLiquid(Liquids.water, 12 / 60);
electrolyzer.consumeItems(ItemStack.with(
	item.salt, 1,
));

const synthesizer = new GenericCrafter("synthesizer");
exports.synthesizer = synthesizer;
Object.assign(synthesizer, {
	hasItems: true,
	hasLiquids: false,
	hasPower: true,
	size: 2,
	outputItem: new ItemStack(item.sulfone, 1),
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		item.ossature, 25,
		item.nickel, 25,
	),
})
synthesizer.consumePower(0.35);
synthesizer.consumeItems(ItemStack.with(
	item.organosand, 2,
	item.biomass, 1
));

const crystalSynthesizer = new GenericCrafter("crystal-synthesizer");
exports.crystalSynthesizer = crystalSynthesizer;
Object.assign(crystalSynthesizer,{
	hasItems: true,
	hasLiquids: true,
	hasPower: true,
	size: 3,
	outputItem: new ItemStack(item.crystal, 2),
	outputLiquid: new LiquidStack(Liquids.hydrogen, 6 / 60),
	drawer: new DrawMulti(
		new DrawRegion("-bottom"),
		new DrawLiquidTile(Liquids.water, 2),
		Object.assign(new DrawBubbles(Color.valueOf("7693e3")),{
			sides: 10,
			recurrence: 3,
			spread: 6,
			radius: 1.5,
			amount: 20,
		}),
		new DrawRegion(),
	),
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		item.nickel, 75,
		item.manganese, 50,
		item.organosilicon, 120,
	),
})
crystalSynthesizer.consumePower(1.8);
crystalSynthesizer.consumeLiquid(Liquids.water, 15 / 60);
crystalSynthesizer.consumeItems(ItemStack.with(
	item.salt, 3,
));

const sieve = new Separator("sieve");
exports.sieve = sieve;
Object.assign(sieve,{
	results: ItemStack.with(
		item.salt, 3,
		item.biomass, 1
	),
	hasPower: true,
	craftTime: 120,
	size: 2,
	
	drawer: new DrawMulti(
		new DrawRegion("-bottom"),
		new DrawRegion("-rotaror", 5, true),
		new DrawDefault()
	),
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		item.nickel, 50,
		item.manganese, 50,
	),
})
sieve.consumePower(1.1)
sieve.consumeItems(ItemStack.with(
	item.organosand, 1,
));

const centrifuge = new GenericCrafter("centrifuge");
exports.centrifuge = centrifuge;
Object.assign(centrifuge, {
	craftEffect: Fx.coalSmeltsmoke,
	outputItem: new ItemStack(item.biomass, 1),
	craftTime: 30,
	size: 3,
	hasPower: true,
	hasLiquids: true,
	hasItems: true,
	drawer: new DrawMulti(
		new DrawRegion("-bottom"),
		Object.assign(new DrawPistons(),{
			sinMag: 2.75,
			sinScl: 5,
			sides: 8,
			sideOffset: Mathf.PI / 2,
		}),
		new DrawRegion("-mid"),
		new DrawLiquidTile(Liquids.neoplasm, 38 / 4),
		new DrawDefault()
	),
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		Items.graphite, 40,
		item.nickel, 40,
		item.manganese, 20,
	),
})
centrifuge.consumePower(1.5);
centrifuge.consumeLiquid(Liquids.neoplasm, 6 / 60);