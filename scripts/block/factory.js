const item = require('item');

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
	alwaysUnlocked: true,
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
		item.biomassSteel, 100,
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
		item.ossature, 60,
		item.nickel, 60,
	)
})
smelter.consumeItems(ItemStack.with(
	Items.coal, 1, 
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
		item.nickel, 100,
		item.crystal, 50,
		item.biomassSteel, 75,
		item.organosilicon, 150,
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
		item.ossature, 70,
		item.nickel, 110,
		item.organosilicon, 150,
	)
})
screwCompressor.consumePower(145 / 60);
screwCompressor.consumeItems(ItemStack.with(
	item.nickel, 1,
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
		Items.thorium, 150,
		item.ossature, 170,
		item.biomassSteel, 300,
		item.organosilicon, 150,
	)
})
parallelCompressor.consumePower(215 / 60);
parallelCompressor.consumeItems(ItemStack.with(
	item.nickel, 3,
	item.biomass, 2
));

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
		item.ossature, 25,
		item.nickel, 25,
	),
})
synthesizer.consumePower(0.35);
synthesizer.consumeItems(ItemStack.with(
	item.organosand, 2,
	item.biomass, 1
));