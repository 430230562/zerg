const item = require('zerg/item');
const liquid = require('zerg/liquid');
const { DrawShakeRegion, DrawMultiRotationRegion } = require("zerg/base/draw")

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
	outputItem: new ItemStack(Items.graphite, 3),
	craftTime: 60,
	itemCapacity: 30,
	size: 3,
	hasItems: true,
	hasLiquids: true,
	drawer: new DrawMulti(
		new DrawRegion("-bottom"),
		Object.assign(new DrawPistons(),{
		    sinMag: 2,
		    sinScl: 3
		}),
		new DrawDefault(),
		new DrawLiquidRegion(Liquids.water)
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
multiCompressor.consumeItem(Items.coal, 4);
multiCompressor.consumePower(2.1);
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
smelter.consumePower(0.6);

const weaver = new GenericCrafter("weaver");
exports.weaver = weaver;
Object.assign(weaver,{
    health: 240,
	craftEffect: Fx.smeltsmoke,
	outputItem: new ItemStack(item.biosulfide, 2),
	craftTime: 180,
	size: 3,
	hasPower: true,
	hasLiquids: true,
	drawer: new DrawMulti(
	    new DrawRegion("-bottom"),
	    new DrawWeave(),
	    new DrawDefault()
	),
	ambientSound: Sounds.techloop,
	ambientSoundVolume: 0.2,
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		Items.silicon, 120,
		item.nickel, 150,
		item.biomassSteel, 50,
	)
})
weaver.consumeItems(ItemStack.with(
    Items.pyratite, 3,
	item.amino, 12,
));
weaver.consumePower(4.1);
weaver.consumeLiquid(Liquids.arkycite, 0.5);

const biomassSmelter = new GenericCrafter("biomass-smelter");
exports.biomassSmelter = biomassSmelter;
Object.assign(biomassSmelter,{
	health: 360,
	craftEffect: Fx.smeltsmoke,
	outputItem: new ItemStack(item.biomassSteel, 2),
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
	ambientSoundVolume: 0.3,
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		Items.silicon, 120,
		item.nickel, 100,
		item.chromium, 70,
		item.organistal, 50,
	)
})
biomassSmelter.consumeItems(ItemStack.with(
	item.biomass, 3,
	item.nickel, 2,
	item.manganese, 3,
));
biomassSmelter.consumePower(5);

const lowTemperatureSmelter = GenericCrafter("low-temperature-smelter");
exports.lowTemperatureSmelter = lowTemperatureSmelter;
Object.assign(lowTemperatureSmelter,{
	health: 360,
	craftEffect: Fx.smeltsmoke,
	outputItem: new ItemStack(item.biomassSteel, 5),
	craftTime: 200,
	itemCapacity: 20,
	size: 4,
	hasPower: true,
	hasLiquids: false,
	drawer: new DrawMulti(
	    new DrawRegion("-bottom"),
	    new DrawLiquidTile(liquid.dissolvant),
	    new DrawDefault(),
		new DrawFlame(Color.valueOf("c7d9a37f")),
		Object.assign(new DrawParticles(), {
			alpha: 0.5,
			particleRad: 24,
			particleSize: 2,
			particleLife: 300,
			particles: 12,
			rotateScl: 527,
			reverse: true,
			color: Pal.vent,
		})
	),
	ambientSound: Sounds.smelter,
	ambientSoundVolume: 0.3,
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		Items.silicon, 150,
		item.nickel, 200,
		item.chromium, 200,
		item.organistal, 155,
		item.biomassSteel, 125
	)
})
lowTemperatureSmelter.consumeItems(ItemStack.with(
	item.biomass, 3,
	item.nickel, 4,
	item.manganese, 3,
	item.salt, 1,
));
lowTemperatureSmelter.consumeLiquid(liquid.dissolvant, 0.05)
lowTemperatureSmelter.consumePower(3);

const biomassDissociator = new GenericCrafter("biomass-dissociator");
exports.biomassDissociator = biomassDissociator
Object.assign(biomassDissociator,{
	craftEffect: Fx.pulverizeMedium,
	outputItem: new ItemStack(item.amino, 2),
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
	item.biomass, 1,
));
biomassDissociator.consumePower(1.5);

const dissolvantMixer = new GenericCrafter("dissolvant-mixer");
exports.dissolvantMixer = dissolvantMixer;
Object.assign(dissolvantMixer, {
	outputLiquid: new LiquidStack(liquid.dissolvant, 0.1),
	liquidCapacity: 30,
	craftTime: 120,
	size: 2,
	hasPower: true,
	hasLiquids: true,
	drawer: new DrawMulti(
		new DrawRegion("-bottom"),
		new DrawLiquidTile(Liquids.water, 1),
		new DrawLiquidTile(liquid.dissolvant, 1),
		new DrawDefault()
	),
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		Items.silicon, 50,
		item.nickel, 65,
		item.manganese, 50,
		item.crystal, 25,
	)
})
dissolvantMixer.consumeItems(ItemStack.with(
	item.amino, 2,
));
dissolvantMixer.consumeLiquid(Liquids.water, 6 / 60);
dissolvantMixer.consumePower(0.75);

const dissolvantMixerLarge = new GenericCrafter("dissolvant-mixer-large");
exports.dissolvantMixerLarge = dissolvantMixerLarge;
Object.assign(dissolvantMixerLarge, {
	outputLiquid: new LiquidStack(liquid.dissolvant, 0.9),
	liquidCapacity: 120,
	craftTime: 5,
	size: 3,
	hasPower: true,
	hasLiquids: true,
	drawer: new DrawMulti(
		new DrawRegion("-bottom"),
		new DrawLiquidTile(Liquids.water, 1),
		new DrawLiquidTile(liquid.dissolvant, 1),
		new DrawDefault()
	),
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		Items.silicon, 150,
		item.chromium, 100,
		item.crystal, 125,
		item.organistal, 75,
	)
})
dissolvantMixerLarge.consumeItems(ItemStack.with(
	item.amino, 1,
));
dissolvantMixerLarge.consumeLiquid(Liquids.water, 1);
dissolvantMixerLarge.consumePower(6.5);

const compositeDissolvantMixer = new GenericCrafter("composite-dissolvant-mixer");
exports.compositeDissolvantMixer = compositeDissolvantMixer;
Object.assign(compositeDissolvantMixer, {
	outputLiquid: new LiquidStack(liquid.dissolvant, 0.4),
	liquidCapacity: 30,
	craftTime: 24,
	size: 3,
	hasPower: true,
	hasLiquids: true,
	drawer: new DrawMulti(
		new DrawRegion("-bottom"),
		new DrawLiquidTile(Liquids.water),
		Object.assign(new DrawPistons(),{
		    suffix: "-piston1-",
		    sinMag: 2,
		    sinScl: 2.5,
		}),
		Object.assign(new DrawPistons(),{
		    suffix: "-piston2-",
		    sinMag: 2,
		    sinScl: 2,
		}),
	    Object.assign(new DrawCultivator(), {
			plantColor: Color.valueOf("a9d8ff"),
			plantColorLight: Color.valueOf("ffffff"),
		}),
		new DrawDefault()
	),
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		Items.silicon, 120,
		item.nickel, 160,
		item.manganese, 175,
		item.organistal, 125,
	)
})
compositeDissolvantMixer.consumeItems(ItemStack.with(
	item.biomass, 1,
));
compositeDissolvantMixer.consumeLiquid(Liquids.water, 30 / 60);
compositeDissolvantMixer.consumePower(4.5);

const juicer = new GenericCrafter("juicer");
exports.juicer = juicer;
Object.assign(juicer,{
    outputLiquid: new LiquidStack(liquid.colchicine, 0.05),
	liquidCapacity: 30,
	craftTime: 60,
	size: 3,
	hasPower: true,
	hasLiquids: true,
	drawer: new DrawMulti(
		new DrawRegion("-bottom"),
		new DrawMultiRotationRegion("-rotator",2,5.5,-4,3,true),
		Object.assign(new DrawLiquidTile(Liquids.water),{
		    alpha: 0.5
		}),
		Object.assign(new DrawLiquidTile(liquid.colchicine),{
		    alpha: 0.75
		}),
		new DrawMultiRotationRegion("-axis",2,5.5,0,3,false),
		new DrawDefault()
	),
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		Items.silicon, 150,
		Items.graphite, 75,
		item.nickel, 155,
	)
})
juicer.consumeLiquids(LiquidStack.with(
	Liquids.water, 0.05,
));
juicer.consumeItems(ItemStack.with(
	item.autiumFruit, 1,
));
juicer.consumePower(1.2);

const additiver = new GenericCrafter("additiver");
exports.additiver = additiver;
Object.assign(additiver,{
	outputLiquid: new LiquidStack(liquid.yperite, 0.05),
	outputItem: new ItemStack(item.crystal, 1),
	liquidCapacity: 30,
	craftTime: 60,
	size: 3,
	hasPower: true,
	hasLiquids: true,
	drawer: new DrawMulti(
		new DrawRegion("-bottom"),
		Object.assign(new DrawArcSmelt(),{
			flameColor: Color.valueOf("fa7f7f"),
			midColor: Color.valueOf("ff9999")
		}),
		Object.assign(new DrawParticles(), {
			alpha: 0.15,
			particleRad: 12,
			particleSize: 9,
			particleLife: 110,
			particles: 15,
			rotateScl: -3,
			reverse: true,
			color: Color.valueOf("d1e4ff"), 
		}),
		Object.assign(new DrawParticles(), {
			alpha: 0.15,
			particleRad: 12,
			particleSize: 9,
			particleLife: 110,
			particles: 15,
			rotateScl: -3,
			reverse: true,
			color: Color.valueOf("9cb664"), 
		}),
		new DrawDefault()
	),
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
	    Items.silicon, 75,
		Items.graphite, 150,
		item.nickel, 55,
		item.manganese, 55,
		item.chromium, 75,
		item.organistal, 75,
	)
})
additiver.consumeLiquids(LiquidStack.with(
	liquid.acid, 0.1,
	liquid.naturalGas, 0.05
));
additiver.consumeItems(ItemStack.with(
	Items.pyratite, 1,
	item.energic, 1
));
additiver.consumePower(2.3);

const evaporator = new GenericCrafter("evaporator");
exports.evaporator = evaporator;
Object.assign(evaporator,{
    outputItem: new ItemStack(item.salt, 6),
	liquidCapacity: 180,
	itemCapacity: 12,
	craftTime: 120,
	size: 5,
	hasPower: true,
	hasLiquids: true,
	drawer: new DrawMulti(
		new DrawRegion("-bottom"),
		new DrawLiquidTile(Liquids.water),
		new DrawDefault(),
		Object.assign(new DrawParticles(), {
			alpha: 0.25,
			particleRad: 24,
			particleSize: 2,
			particleLife: 300,
			particles: 24,
			rotateScl: 527,
			reverse: true,
			color: Color.white,
		})
	),
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		Items.graphite, 150,
		Items.silicon, 150,
		item.nickel, 75,
		item.crystal, 25,
	)
})
evaporator.consumePower(4.5);
evaporator.consumeLiquid(Liquids.water, 1.2);

const disintegrator = new Separator("disintegrator");
exports.disintegrator = disintegrator;
Object.assign(disintegrator,{
    results: ItemStack.with(
        Items.sand, 7,
        item.salt, 3,
    ),
	craftTime: 20,
	size: 1,
	hasPower: true,
	drawer: new DrawMulti(
	    new DrawRegion("-bottom"),
	    new DrawRegion("-rotator",3,true),
		new DrawDefault()
	),
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
	    Items.graphite, 20,
		item.nickel, 50,
	)
})
disintegrator.consumePower(0.5);
disintegrator.consumeItems(ItemStack.with(
	Items.scrap, 1,
));

const biomassAcidification = new GenericCrafter("biomass-acidification")
exports.biomassAcidification = biomassAcidification;
Object.assign(biomassAcidification,{
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
		Object.assign(new DrawCultivator(), {
			plantColor: Color.valueOf("9cb664"),
			plantColorLight: Color.valueOf("cbd97f"),
		}),
		new DrawDefault(),
	),
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		Items.silicon, 50,
		item.nickel, 200,
		item.crystal, 70,
	)
})
biomassAcidification.consumeLiquid(Liquids.water, 2 / 60);
biomassAcidification.consumeItems(ItemStack.with(
	item.biomass, 1,
));
biomassAcidification.consumePower(1.7);

const biomassFermenter = new GenericCrafter("biomass-fermenter");
exports.biomassFermenter = biomassFermenter;
Object.assign(biomassFermenter,{
	outputLiquid: new LiquidStack(liquid.naturalGas, 6 / 60),
	liquidCapacity: 15,
	craftTime: 60,
	size: 3,
	hasPower: true,
	hasLiquids: true,
	drawer: new DrawMulti(
		new DrawRegion("-bottom"),
		new DrawLiquidTile(Liquids.water),
		Object.assign(new DrawCultivator(), {
			plantColor: Color.valueOf("9cb664"),
			plantColorLight: Color.valueOf("cbd97f"),
		}),
		Object.assign(new DrawLiquidTile(liquid.naturalGas),{
		    alpha: 0.4
		}),
		new DrawDefault()
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
biomassFermenter.consumeLiquid(Liquids.water, 6 / 60);
biomassFermenter.consumeItems(ItemStack.with(
	item.biomass, 2,
));
biomassFermenter.consumePower(2.3);

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
charger.consumePower(3.5);

const chargeStation = new GenericCrafter("charge-station");
exports.chargeStation = chargeStation;
Object.assign(chargeStation,{
	outputItem: new ItemStack(item.energic, 1),
	craftTime: 30,
	itemCapacity: 10,
	size: 2,
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
	    Items.graphite, 120,
		item.nickel, 105,
		item.manganese, 80,
		item.crystal, 50,
	)
})
chargeStation.consumeItem(item.crystal, 1);
chargeStation.consumePower(15);

const synthesizer = new GenericCrafter("synthesizer");
exports.synthesizer = synthesizer;
Object.assign(synthesizer, {
	hasItems: true,
	hasLiquids: false,
	hasPower: true,
	size: 2,
	outputItem: new ItemStack(Items.pyratite, 2),
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		Items.graphite, 25,
		item.nickel, 25,
	),
})
synthesizer.consumePower(0.55);
synthesizer.consumeItems(ItemStack.with(
	item.salt, 3,
	item.amino, 2,
));

const organistalSynthesizer = new GenericCrafter("organistal-synthesizer");
exports.organistalSynthesizer = organistalSynthesizer;
Object.assign(organistalSynthesizer, {
	hasItems: true,
	hasLiquids: false,
	hasPower: true,
	size: 3,
	outputItem: new ItemStack(item.organistal, 1),
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		Items.graphite, 60,
		Items.silicon, 100,
		item.nickel, 125,
		item.manganese, 75,
		item.crystal, 50,
	)
})
organistalSynthesizer.consumePower(0.55);
organistalSynthesizer.consumeItems(ItemStack.with(
	item.crystal, 2,
	item.amino, 3,
	item.salt, 1
));

const coarseExtractor = new Separator("coarse-extractor");
exports.coarseExtractor = coarseExtractor;
Object.assign(coarseExtractor,{
    results: ItemStack.with(
        Items.sand, 7,
        Items.graphite, 8,
        Items.silicon, 7,
        Items.pyratite, 4,
        item.salt, 3,
        item.nickel, 25,
        item.manganese, 16,
    ),
	craftTime: 20,
	size: 2,
	hasPower: true,
	drawer: new DrawMulti(
	    new DrawRegion("-bottom"),
	    new DrawRegion("-rotator",10,true),
	    Object.assign(new DrawLiquidTile(liquid.acid),{
		    alpha: 0.5
		}),
		new DrawDefault()
	),
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
	    Items.graphite, 20,
	    item.nickel, 40,
		item.manganese, 25,
	),
});
coarseExtractor.consumePower(1.2),
coarseExtractor.consumeItems(ItemStack.with(
    Items.scrap, 1,
)),
coarseExtractor.consumeLiquids(LiquidStack.with(
    Liquids.water, 9 / 60,
    liquid.acid, 3 / 60
))

const iridiumPurification = new GenericCrafter("iridium-purification");
exports.iridiumPurification = iridiumPurification;
Object.assign(iridiumPurification,{
    outputItems: ItemStack.with(
	    item.iridium, 1,
	    item.salt, 3
    ),
    hasPower: true,
    hasLiquids: true,
    craftTime: 120,
    size: 3,
    drawer: new DrawMulti(
        new DrawRegion("-bottom"),
        new DrawLiquidTile(liquid.acid, 2),
        new DrawRegion("-middle"),
        new DrawLiquidRegion(Liquids.slag),
        new DrawDefault(),
        new DrawRegion("-rotator",3,true),
    ),
    buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		Items.graphite, 350,
		item.nickel, 350,
		item.chromium, 250,
		item.organistal, 150,
		item.biomassSteel, 200
	),
})
iridiumPurification.consumePower(3.5);
iridiumPurification.consumeLiquids(LiquidStack.with(
    Liquids.slag, 27 / 60,
    liquid.acid, 6 / 60
));
iridiumPurification.consumeItems(ItemStack.with(
	item.manganese, 2
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
		Object.assign(new DrawCultivator(), {
			plantColor: Color.valueOf("9cb664"),
			plantColorLight: Color.valueOf("cbd97f"),
		}),
		new DrawDefault(),
		new DrawRegion("-top")
	),
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		item.nickel, 50,
		Items.silicon, 20,
	),
})
incubator.consumePower(1.2);
incubator.consumeLiquid(Liquids.water, 12 / 60);

const incubatorLarge = new AttributeCrafter("incubator-large");
exports.incubatorLarge = incubatorLarge;
Object.assign(incubatorLarge, {
	craftEffect: Fx.none,
	outputItem: new ItemStack(item.biomass, 1),
	craftTime: 40,
	size: 3,
	hasPower: true,
	hasLiquids: true,
	hasItems: true,
	attribute: Attribute.get("biomass"),
	maxBoost: 4,
	drawer: new DrawMulti(
		new DrawRegion("-bottom"),
		new DrawLiquidTile(Liquids.water),
		Object.assign(new DrawCultivator(), {
			spread: 5,
			plantColor: Color.valueOf("e05438"),
			plantColorLight: Color.valueOf("f98f4a"),
		}),
		new DrawDefault(),
		new DrawRegion("-top")
	),
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		Items.silicon, 100,
		Items.graphite, 125,
		item.nickel, 200,
		item.manganese, 175,
	),
})
incubatorLarge.consumePower(210 / 60);
incubatorLarge.consumeLiquid(Liquids.water, 36 / 60);

const pyratiteHeater = new HeatProducer("pyratite-heater");
exports.pyratiteHeater = pyratiteHeater;
Object.assign(pyratiteHeater,{
    drawer: new DrawMulti(
        new DrawDefault(),
        new DrawHeatOutput()
    ),
    size: 2,
    heatOutput: 6,
    craftTime: 60 * 4,
    ambientSound: Sounds.hum,
    buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		Items.silicon, 50,
		item.nickel, 20,
		item.manganese, 75,
	),
})
pyratiteHeater.consumeItems(ItemStack.with(
	Items.pyratite, 1
));

const biosulfideHeater = new HeatProducer("biosulfide-heater");
exports.biosulfideHeater = biosulfideHeater;
Object.assign(biosulfideHeater,{
    drawer: new DrawMulti(
        new DrawDefault(),
        new DrawHeatOutput()
    ),
    size: 2,
    heatOutput: 18,
    craftTime: 60 * 8,
    ambientSound: Sounds.hum,
    buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
    requirements: ItemStack.with(
		Items.silicon, 75,
		item.manganese, 50,
		item.chromium, 75,
	),
})
biosulfideHeater.consumeItems(ItemStack.with(
	item.biosulfide, 1
));