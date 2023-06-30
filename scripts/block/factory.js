const item = require('item');
const liquid = require('liquid');
const { DrawShakeRegion, DrawSinRegion } = require("base/draw")

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

const multiCompressor = new GenericCrafter("multi-compressor");
exports.multiCompressor = multiCompressor;
Object.assign(multiCompressor, {
	craftEffect: Fx.pulverizeMedium,
	outputItem: new ItemStack(Items.graphite, 8),
	craftTime: 150,
	itemCapacity: 30,
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
multiCompressor.consumeItem(Items.coal, 9);
multiCompressor.consumePower(108 / 60);
multiCompressor.consumeLiquid(Liquids.water, 6 / 60);

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
	    Items.graphite, 20,
		item.nickel, 35,
	)
})
smelter.consumeItems(ItemStack.with(
	Items.coal, 2, 
	Items.sand, 3,
));
smelter.consumePower(0.50);

const biomassSmelter = new GenericCrafter("biomass-smelter");
exports.biomassSmelter = biomassSmelter;
Object.assign(biomassSmelter,{
    health: 360,
	craftEffect: Fx.smeltsmoke,
	outputItem: new ItemStack(item.biomassSteel, 3),
	craftTime: 180,
	itemCapacity: 20,
	size: 3,
	hasPower: true,
	hasLiquids: false,
	drawer: new DrawMulti(
		new DrawDefault(),
		new DrawFlame(Color.valueOf("c7d9a3"))
	),
	ambientSound: Sounds.smelter,
	ambientSoundVolume: 0.14,
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
	    Items.silicon, 80,
		item.nickel, 70,
		item.manganese, 80
	)
})
biomassSmelter.consumeItems(ItemStack.with(
    item.biomass, 3,
	item.nickel, 2,
	item.manganese, 3,
));
biomassSmelter.consumePower(3);

const biomassDissociator = new GenericCrafter("biomass-dissociator");
exports.biomassDissociator = biomassDissociator
Object.assign(biomassDissociator,{
    craftEffect: Fx.pulverizeMedium,
	outputItem: new ItemStack(item.amino, 3),
	craftTime: 90,
	itemCapacity: 15,
	size: 2,
	hasItems: true,
	hasLiquids: false,
	drawer: new DrawMulti(
        new DrawRegion("-bottom"),
        Object.assign(new DrawPistons(),{
            sinMag: 1
        }),
        new DrawDefault(),
    ),
	
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		item.nickel, 55,
		item.manganese, 50,
	)
})
biomassDissociator.consumeItems(ItemStack.with(
    item.biomass, 2,
));
biomassDissociator.consumePower(1);

const dissolvantMixer = new GenericCrafter("dissolvant-mixer");
exports.dissolvantMixer = dissolvantMixer;
Object.assign(dissolvantMixer, {
	outputLiquid: new LiquidStack(liquid.dissolvant, 0.1),
	liquidCapacity: 30,
	craftTime: 60,
	size: 2,
	hasPower: true,
	hasLiquids: true,
	drawer: new DrawMulti(
	    new DrawRegion("-bottom"),
	    new DrawLiquidTile(Liquids.water),
	    new DrawLiquidTile(liquid.dissolvant),
	    new DrawDefault()
	),
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
	    Items.silicon, 20,
		item.nickel, 65,
		item.manganese, 50,
	)
})
dissolvantMixer.consumeItems(ItemStack.with(
	item.amino, 2,
));
dissolvantMixer.consumeLiquid(Liquids.water, 6 / 60);
dissolvantMixer.consumePower(0.50);

const oilRefinery = new GenericCrafter("oil-refinery");
exports.oilRefinery = oilRefinery;
Object.assign(oilRefinery,{
    outputLiquid: new LiquidStack(Liquids.oil, 0.05),
	liquidCapacity: 15,
	craftTime: 60,
	size: 2,
	hasPower: true,
	hasLiquids: true,
	drawer: new DrawMulti(
	    new DrawRegion("-bottom"),
	    new DrawLiquidTile(Liquids.arkycite),
	    new DrawLiquidTile(Liquids.oil),
	    new DrawDefault()
	),
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
	    Items.silicon, 20,
		item.nickel, 65,
		item.crystal, 30,
	)
})
oilRefinery.consumeLiquid(Liquids.arkycite, 0.05);
oilRefinery.consumePower(1.5);

const arkyciteExtractor = new GenericCrafter("arkycite-extractor");
exports.arkyciteExtractor = arkyciteExtractor;
Object.assign(arkyciteExtractor,{
    outputLiquid: new LiquidStack(Liquids.oil, 0.6),
    outputItem: new ItemStack(item.biomass, 1),
	liquidCapacity: 60,
	craftTime: 30,
	size: 3,
	hasPower: true,
	hasLiquids: true,
	drawer: new DrawMulti(
	    new DrawRegion("-bottom"),
	    new DrawLiquidTile(Liquids.arkycite),
	    new DrawLiquidTile(Liquids.oil),
	    new DrawDefault()
	),
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
	    Items.silicon, 50,
		item.nickel, 155,
		item.crystal, 70,
		item.manganese, 100,
		item.chromium, 75,
	)
})
arkyciteExtractor.consumeLiquids(LiquidStack.with(
    Liquids.arkycite, 0.6,
    liquid.dissolvant, 0.05
));
arkyciteExtractor.consumePower(0.75);

const displacer = new GenericCrafter("displacer");
exports.displacer = displacer;
Object.assign(displacer,{
	outputLiquid: new LiquidStack(Liquids.hydrogen, 0.1),
	outputItem: new ItemStack(item.salt, 1),
	craftTime: 60,
	liquidCapacity: 30,
	size: 2,
	hasPower: true,
	hasLiquids: true,
	drawer: new DrawMulti(
	    new DrawRegion("-bottom"),
	    new DrawLiquidTile(liquid.acid),
	    Object.assign(new DrawBubbles(Color.valueOf("befa9b")),{
            sides: 10,
            recurrence: 5,
            timeScl: 15,
            spread: 6,
            radius: 1.5,
            amount: 5
        }),
        Object.assign(new DrawBubbles(Color.valueOf("befa9b")),{
            sides: 10,
            recurrence: 5,
            timeScl: 15,
            spread: 6,
            radius: 1.5,
            amount: 5
        }),
	    new DrawDefault()
	),
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
	    Items.graphite, 40,
		item.nickel, 65,
		item.crystal, 100
	)
})
displacer.consumeItems(ItemStack.with(
	item.nickel, 1,
));
displacer.consumeLiquid(liquid.acid, 6 / 60);

const oilDistillation = new GenericCrafter("oil-distillation");
exports.oilDistillation = oilDistillation
Object.assign(oilDistillation,{
    outputItem: new ItemStack(Items.coal, 1),
    outputLiquid: new LiquidStack(Liquids.hydrogen, 0.05),
	liquidCapacity: 60,
	craftTime: 20,
	size: 3,
	hasPower: true,
	hasLiquids: true,
	drawer: new DrawMulti(
	    new DrawRegion("-bottom"),
	    new DrawLiquidTile(Liquids.oil),
	    new DrawDefault(),
	    Object.assign(new DrawWarmupRegion(),{
	        color : Color.valueOf("ff3838")
	    })
	),
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
	    Items.graphite, 50,
		item.nickel, 45,
		item.manganese, 45,
	)
})
oilDistillation.consumeLiquid(Liquids.oil, 0.1);
oilDistillation.consumePower(1.1);

const biomassFermenter = new GenericCrafter("biomass-fermenter");
exports.biomassFermenter = biomassFermenter;
Object.assign(biomassFermenter,{
    outputLiquid: new LiquidStack(liquid.acid, 2 / 60),
	liquidCapacity: 15,
	craftTime: 180,
	size: 3,
	hasPower: true,
	hasLiquids: true,
	drawer: new DrawMulti(
	    new DrawRegion("-bottom"),
	    new DrawLiquidTile(Liquids.water),
	    new DrawLiquidTile(liquid.acid),
		new DrawDefault(),
		Object.assign(new DrawCultivator(), {
			plantColor: Color.valueOf("9cb664"),
			plantColorLight: Color.valueOf("cbd97f"),
		}),
		new DrawRegion("-top")
	),
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
	    Items.silicon, 50,
		item.nickel, 155,
		item.crystal, 70,
		item.manganese, 100,
	)
})
biomassFermenter.consumeLiquid(Liquids.water, 2 / 60);
displacer.consumeItems(ItemStack.with(
	item.biomass, 1,
));
biomassFermenter.consumePower(1.1);

const charger = new GenericCrafter("charger");
exports.charger = charger;
Object.assign(charger,{
    outputItem: new ItemStack(item.energic, 1),
	craftTime: 120,
	itemCapacity: 5,
	size: 1,
	hasItems: true,
	hasLiquids: false,
	drawer: new DrawMulti(
        new DrawDefault(),
        Object.assign(new DrawWarmupRegion(),{
            color: Color.red
        })
    ),
	
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		item.nickel, 35,
		item.manganese, 20,
		item.crystal, 40,
	)
})
charger.consumeItem(item.crystal, 1);
charger.consumePower(3);

const synthesizer = new GenericCrafter("synthesizer");
exports.synthesizer = synthesizer;
Object.assign(synthesizer, {
	hasItems: true,
	hasLiquids: false,
	hasPower: true,
	size: 2,
	outputItem: new ItemStack(item.sulfone, 2),
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		Items.graphite, 25,
		item.nickel, 25,
	),
})
synthesizer.consumePower(0.35);
synthesizer.consumeItems(ItemStack.with(
	item.salt, 3,
	item.amino, 2,
));

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
		new DrawRegion("-top"),
		new DrawSinRegion("-shake",1,30,1,50)
	),
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		item.nickel, 50,
		Items.silicon, 20,
	),
})
incubator.consumePower(70 / 60);
incubator.consumeLiquid(Liquids.water, 12 / 60);