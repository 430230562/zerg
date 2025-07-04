const item = require('zerg/item');
const liquid = require('zerg/liquid');

const nickelPowerNode = new PowerNode("nickel-power-node");
exports.nickelPowerNode = nickelPowerNode;
Object.assign(nickelPowerNode, {
	size: 1,
	maxNodes: 10,
	laserRange: 7,
	laserColor1: Color.valueOf("00ffd7"),
	laserColor2: Color.valueOf("00c49b"),
	category: Category.power,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		item.nickel, 4
	)
})

const nickelPowerNodeLarge = new PowerNode("nickel-power-node-large");
exports.nickelPowerNodeLarge = nickelPowerNodeLarge;
Object.assign(nickelPowerNodeLarge, {
	size: 2,
	maxNodes: 15,
	laserRange: 17,
	laserColor1: Color.valueOf("00ffd7"),
	laserColor2: Color.valueOf("00c49b"),
	category: Category.power,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		item.nickel, 10,
		Items.silicon, 5,
		item.manganese, 5,
	)
})

const reflectTower = new PowerNode("reflect-tower");
exports.reflectTower = reflectTower;
Object.assign(reflectTower, {
	size: 3,
	maxNodes: 2,
	laserRange: 55,
	laserColor1: Color.valueOf("f9c116"),
	laserColor2: Color.valueOf("b78d12"),
	category: Category.power,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
	    Items.silicon, 15,
		item.nickel, 20,
		item.chromium, 12,
		item.organistal, 8,
	)
})

const nickelBattery = new Battery("nickel-battery");
exports.nickelBattery = nickelBattery;
Object.assign(nickelBattery, {
	baseExplosiveness: 2,
	category: Category.power,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		item.nickel, 25,
	)
})
nickelBattery.consumePowerBuffered(5000)

const nickelBatteryMedium = new Battery("nickel-battery-medium");
exports.nickelBatteryMedium = nickelBatteryMedium;
Object.assign(nickelBatteryMedium, {
	baseExplosiveness: 12,
	size: 2,
	category: Category.power,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		item.nickel, 75,
		Items.silicon, 30,
	)
})
nickelBatteryMedium.consumePowerBuffered(24000)

const nickelBatteryLarge = new Battery("nickel-battery-large");
exports.nickelBatteryLarge = nickelBatteryLarge;
Object.assign(nickelBatteryLarge, {
	baseExplosiveness: 36,
	size: 3,
	category: Category.power,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		item.nickel, 125,
		item.manganese, 50,
		Items.silicon, 50,
	)
})
nickelBatteryLarge.consumePowerBuffered(63000)

const deflagrationGenerator = new ConsumeGenerator("deflagration-generator");
exports.deflagrationGenerator = deflagrationGenerator;
Object.assign(deflagrationGenerator, {
	powerProduction: 1.2,
	itemDuration: 120,
	envRequired: Env.oxygen,
	
	ambientSound: Sounds.smelter,
	ambientSoundVolume: 0.03,
	generateEffect: Fx.generatespark,

	drawer: new DrawMulti(
		new DrawDefault(),
		new DrawWarmupRegion()
	),
	category: Category.power,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		item.nickel, 65,
	)
})
deflagrationGenerator.consume(new ConsumeItemFlammable());
deflagrationGenerator.consume(new ConsumeItemExplode());

const fullEffectGenerator = new ConsumeGenerator("full-effect-generator");
exports.fullEffectGenerator = fullEffectGenerator;
Object.assign(fullEffectGenerator, {
	powerProduction: 7.5,
	itemDuration: 90,
	hasLiquids: true,
	size: 2,
	envRequired: Env.oxygen,
	
	ambientSound: Sounds.smelter,
	ambientSoundVolume: 0.06,
	generateEffect: Fx.generatespark,
	
	drawer: new DrawMulti(
	    new DrawLiquidTile(Liquids.water),
		new DrawDefault(),
		new DrawWarmupRegion(),
	),
	category: Category.power,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		Items.graphite, 25,
		item.nickel, 75,
		Items.silicon, 30,
	),
})
fullEffectGenerator.consumeLiquid(Liquids.water, 0.1);
fullEffectGenerator.consume(new ConsumeItemFlammable());
fullEffectGenerator.consume(new ConsumeItemExplode());

const crystalPanel = new SolarGenerator("crystal-panel");
exports.crystalPanel = crystalPanel;
Object.assign(crystalPanel,{
	category: Category.power,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		item.nickel, 40,
		item.manganese, 20,
		item.crystal, 50,
	),
	size: 2,
	powerProduction: 0.3,
})

const crystalPanelLarge = new SolarGenerator("crystal-panel-large");
exports.crystalPanelLarge = crystalPanelLarge;
Object.assign(crystalPanelLarge,{
	category: Category.power,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		item.nickel, 100,
		item.crystal, 125,
		item.manganese, 50,
		item.chromium, 100,
	),
	size: 3,
	powerProduction: 0.75,
})

const pyrolysis = new ConsumeGenerator("pyrolysis");
exports.pyrolysis = pyrolysis;
Object.assign(pyrolysis,{
	powerProduction: 10,
	hasLiquids: true,
	size: 3,
	generateEffect: Fx.none,
	outputLiquid: new LiquidStack(Liquids.water, 0.1),
	canOverdrive: false,
	
	ambientSound: Sounds.smelter,
	ambientSoundVolume: 0.06,
	liquidCapacity: 30,
	
	drawer: new DrawMulti(
		new DrawRegion("-bottom"),
		new DrawLiquidTile(Liquids.neoplasm, 2),
		Object.assign(new DrawCells(), {
			color: Color.valueOf("c33e2b"),
			particleColorFrom: Color.valueOf("e8803f"),
			particleColorTo: Color.valueOf("8c1225"),
			particles: 75,
			range: 4,
		}),
		new DrawDefault(),
	),
	category: Category.power,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		Items.graphite, 50,
		item.nickel, 80,
		Items.silicon, 40,
		item.chromium, 30,
	),
})
pyrolysis.consumeLiquid(Liquids.neoplasm, 30 / 60)

const neutralizers = new ConsumeGenerator("neutralizers");
exports.neutralizers = neutralizers;
Object.assign(neutralizers,{
	powerProduction: 3,
	hasLiquids: true,
	size: 2,
	generateEffect: Fx.none,
	outputLiquid: new LiquidStack(Liquids.water, 1.5),
	
	ambientSound: Sounds.smelter,
	ambientSoundVolume: 0.06,
	liquidCapacity: 90,
	
	drawer: new DrawMulti(
		new DrawRegion("-bottom"),
		new DrawLiquidTile(Liquids.neoplasm, 2),
		Object.assign(new DrawCells(), {
			color: Color.valueOf("c33e2b"),
			particleColorFrom: Color.valueOf("e8803f"),
			particleColorTo: Color.valueOf("8c1225"),
			particles: 75,
			range: 4,
		}),
		new DrawDefault(),
	),
	category: Category.power,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		Items.graphite, 50,
		item.nickel, 80,
		Items.silicon, 40,
		item.chromium, 30,
	),
})
neutralizers.consumeLiquids(LiquidStack.with(
    Liquids.neoplasm, 54 / 60,
    liquid.dissolvant, 6 / 60
));

const biomassReactor = new HeaterGenerator("biomass-reactor");
exports.biomassReactor = biomassReactor;
Object.assign(biomassReactor, {
	size: 5,
	liquidCapacity: 24 * 5,
	outputLiquid: new LiquidStack(Liquids.neoplasm, 24 / 60),
	explodeOnFull: true,
	canOverdrive: false,
	heatOutput: 30,
	
	itemDuration: 60,
	itemCapacity: 15,
	
	explosionRadius: 55 * 8,
	explosionDamage: 500,
	explodeEffect: new MultiEffect(
		Fx.bigShockwave, 
		new WrapEffect(
			Fx.titanSmoke, 
			Liquids.neoplasm.color
			), 
		Fx.neoplasmSplat
		),
	explodeSound: Sounds.explosionbig,
	
	powerProduction: 60,
	rebuildable: false,

	explosionPuddles: 12100,
	explosionPuddleRange: 55 * 8,
	explosionPuddleLiquid: Liquids.neoplasm,
	explosionPuddleAmount: 200,
	explosionMinWarmup: 0.001,
	
	consumeEffect: Fx.none,
	
	category: Category.power,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		Items.graphite, 300,
		item.nickel, 500,
		item.crystal, 100,
		Items.silicon, 300,
		item.chromium, 450,
	),
	
	drawer: new DrawMulti(
		new DrawRegion("-bottom"),
		new DrawLiquidTile(Liquids.water, 4),
		Object.assign(new DrawCells(), {
			color: Color.valueOf("c33e2b"),
			particleColorFrom: Color.valueOf("e8803f"),
			particleColorTo: Color.valueOf("8c1225"),
			particles: 75,
			range: 4.5,
		}),
		new DrawDefault(),
		new DrawHeatOutput(),
	)
})
biomassReactor.consumeLiquids(LiquidStack.with(
    liquid.colchicine, 6 / 60,
    Liquids.water, 24 / 60
))
biomassReactor.consumeItem(item.biomass, 1);

const extremeGenerator = new VariableReactor('extreme-generator');
exports.extremeGenerator = extremeGenerator;
Object.assign(extremeGenerator, {
	powerProduction: 330,
	maxHeat: 90,
	
	explosionRadius: 12,
	explosionDamage: 900 * 90,
	explosionMinWarmup: 0.001,
	canOverdrive: false,
	
	liquidCapacity: 270,
	size: 4,
	category: Category.power,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		item.nickel, 300,
		item.manganese, 85,
		item.crystal, 85,
		Items.silicon, 110,
	),
	drawer: new DrawMulti(
		new DrawRegion("-bottom"),
		new DrawLiquidTile(Liquids.water, 3),
		new DrawDefault(),
		new DrawHeatInput(),
		Object.assign(new DrawSoftParticles(), {
			alpha: 0.35,
			particleRad: 12,
			particleSize: 9,
			particleLife: 120,
			particles: 15,
			color: Color.valueOf("e3ae6f"), 
			color2: Color.valueOf("d04d46"),
		})
	)
})
extremeGenerator.consumeLiquid(Liquids.water, 135 / 60);

//
const ventGenerator = new ThermalGenerator("vent-generator");
exports.ventGenerator = ventGenerator;
Object.assign(ventGenerator,{
    attribute: Attribute.steam;
    displayEfficiencyScale: 1 / 9,
    minEfficiency: 9 - 0.0001,
    powerProduction: 4.5 / 9,
    displayEfficiency: false,
    generateEffect: Fx.turbinegenerate,
    effectChance: 0.04,
    size: 3,
    ambientSound: Sounds.hum,
    ambientSoundVolume: 0.06,

    drawer: new DrawMulti(
        new DrawDefault(),
        new DrawRegion("-rotator", 0.6, true){{
    ),
    
    category: Category.power,
	buildVisibility: BuildVisibility.shown,
    requirements: ItemStack.with(
		item.nickel, 60,
	),
})
