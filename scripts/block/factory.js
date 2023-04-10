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
		item.nickel, 45,
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
		Items.graphite, 100,
		Items.silicon, 75,
		item.nickel, 100,
		item.manganese, 100,
	)
})
hydraulicPress.consumeItem(Items.coal, 9);
hydraulicPress.consumePower(108 / 60);
hydraulicPress.consumeLiquid(Liquids.water, 6 / 60);

const smelter = new GenericCrafter("smelter");
exports.smelter = smelter;
Object.assign(smelter, {
	health: 240,
	craftEffect: Fx.smeltsmoke,
	outputItem: new ItemStack(Items.silicon, 2),
	craftTime: 40,
	size: 2,
	researchCostMultiplier: 0.5,
	hasPower: true,
	hasLiquids: false,
	drawer: new DrawMulti(
		new DrawDefault(),
		Object.assign(new DrawFlame(Color.valueOf("ffef99")),{
		    flameRadius: 1.5,
		    flameRadiusIn: 1
		})
	),
	ambientSound: Sounds.smelter,
	ambientSoundVolume: 0.14,
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
	    Items.silicon, 20,
		item.nickel, 35,
	)
})
smelter.consumeItems(ItemStack.with(
	Items.coal, 2, 
	Items.sand, 3,
));
smelter.consumePower(0.50);