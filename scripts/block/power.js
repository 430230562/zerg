const item = require('item');

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
	powerProduction: 2,
	itemDuration: 120,
	
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

const totalEffectGenerator = new ConsumeGenerator("total-effect-generator");
exports.totalEffectGenerator = totalEffectGenerator;
Object.assign(totalEffectGenerator, {
	powerProduction: 8.5,
	itemDuration: 90,
	hasLiquids: true,
	size: 2,
	generateEffect: Fx.generatespark,
	
	ambientSound: Sounds.smelter,
	ambientSoundVolume: 0.06,
	
	drawer: new DrawMulti(
		new DrawDefault(),
		new DrawWarmupRegion(),
		Object.assign(new DrawRegion("-rotator"), {
			rotateSpeed: 2,
		}),
		Object.assign(new DrawRegion("-rotator"), {
			rotateSpeed: -2,
		}),
		new DrawRegion("-cap"),
		new DrawLiquidRegion()
	),
	category: Category.power,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		Items.graphite, 25,
		item.nickel, 75,
		Items.silicon, 30,
	),
})
totalEffectGenerator.consumeLiquid(Liquids.water, 0.1);
totalEffectGenerator.consume(new ConsumeItemFlammable());
totalEffectGenerator.consume(new ConsumeItemExplode());

const pyrolysis = new ConsumeGenerator("pyrolysis");
exports.pyrolysis = pyrolysis;
Object.assign(pyrolysis,{
	powerProduction: 17.5,
	hasLiquids: true,
	size: 3,
	generateEffect: Fx.none,
	outputLiquid: new LiquidStack(Liquids.water, 0.15),
	
	ambientSound: Sounds.smelter,
	ambientSoundVolume: 0.06,
	
	drawer: new DrawMulti(
		new DrawRegion("-bottom"),
		new DrawLiquidTile(Liquids.neoplasm),
		new DrawDefault(),
		Object.assign(new DrawCultivator(), {
			plantColor: Color.valueOf("e05438"),
			plantColorLight: Color.valueOf("f98f4a"),
		}),
		Object.assign(new DrawRegion("-rotator"), {
			rotateSpeed: -2,
		}),
		new DrawRegion("-top")
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
pyrolysis.consumeLiquid(Liquids.neoplasm, 0.3);

const crystalPanel = new SolarGenerator("crystal-panel");
exports.crystalPanel = crystalPanel;
Object.assign(crystalPanel,{
	category: Category.power,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		item.nickel, 10,
		item.crystal, 15,
	),
	powerProduction: 0.15,
})

const crystalPanelMedium = new SolarGenerator("crystal-panel-medium");
exports.crystalPanelMedium = crystalPanelMedium;
Object.assign(crystalPanelMedium,{
	category: Category.power,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		item.nickel, 40,
		item.manganese, 20,
		item.crystal, 50,
	),
	size: 2,
	powerProduction: 0.8,
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
	powerProduction: 2.25,
})

const biomassReactor = new HeaterGenerator("biomass-reactor");
exports.biomassReactor = biomassReactor;
Object.assign(biomassReactor, {
	size: 4,
	liquidCapacity: 24 * 5,
	outputLiquid: new LiquidStack(Liquids.neoplasm, 24 / 60),
	explodeOnFull: true,
	heatOutput: 30,
	
	itemDuration: 60 * 1.2,
	itemCapacity: 10,
	
	explosionRadius: 12,
	explosionDamage: 3000,
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

	explosionPuddles: 240,
	explosionPuddleRange: 8 * 18,
	explosionPuddleLiquid: Liquids.neoplasm,
	explosionPuddleAmount: 200,
	explosionMinWarmup: 0.5,
	
	consumeEffect: Fx.none,
	
	category: Category.power,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		Items.graphite, 260,
		item.nickel, 500,
		item.crystal, 65,
		Items.silicon, 310,
		item.chromium, 260,
	),
	
	drawer: new DrawMulti(
		new DrawRegion("-bottom"),
		new DrawLiquidTile(Liquids.water, 3),
		Object.assign(new DrawCells(), {
			color: Color.valueOf("c33e2b"),
			particleColorFrom: Color.valueOf("e8803f"),
			particleColorTo: Color.valueOf("8c1225"),
			particles: 50,
			range: 4,
		}),
		new DrawDefault(),
		new DrawHeatOutput(),
	)
})
biomassReactor.consumeLiquid(Liquids.water, 48 / 60);
biomassReactor.consumeItem(item.biomass, 1);

const extremeGenerator = new VariableReactor('extreme-generator');
exports.extremeGenerator = extremeGenerator;
Object.assign(extremeGenerator, {
	powerProduction: 120,
	maxHeat: 60,

	liquidCapacity: 30,
	explosionMinWarmup: 0.5,
	explosionRadius: 6,
	explosionDamage: 6000,
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
		new DrawLiquidTile(Liquids.cryofluid),
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
extremeGenerator.consumeLiquid(Liquids.water, 12 / 60);