const item = require('item');

const nickelPowerNode = new PowerNode("nickel-power-node");
exports.nickelPowerNode = nickelPowerNode;
Object.assign(nickelPowerNode, {
	size: 1,
	maxNodes: 10,
	laserRange: 7,
	laserColor1: Color.valueOf("00c94b"),
	laserColor2: Color.valueOf("009173"),
	category: Category.power,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		item.ossature, 1,
		item.nickel, 3
	)
})

const nickelPowerNodeLarge = new PowerNode("nickel-power-node-large");
exports.nickelPowerNodeLarge = nickelPowerNodeLarge;
Object.assign(nickelPowerNodeLarge, {
	size: 2,
	maxNodes: 15,
	laserRange: 17,
	laserColor1: Color.valueOf("00c94b"),
	laserColor2: Color.valueOf("009173"),
	category: Category.power,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		item.nickel, 10,
		item.organosilicon, 5,
		item.biomassSteel, 3
	)
})

const nickelBattery = new Battery("nickel-battery");
exports.nickelBattery = nickelBattery;
Object.assign(nickelBattery, {
	baseExplosiveness: 1.2,
	category: Category.power,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		item.ossature, 5,
		item.nickel, 20,
	)
})
nickelBattery.consumePowerBuffered(5500)

const nickelBatteryLarge = new Battery("nickel-battery-large");
exports.nickelBatteryLarge = nickelBatteryLarge;
Object.assign(nickelBatteryLarge, {
	baseExplosiveness: 11,
	category: Category.power,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		item.ossature, 20,
		item.nickel, 70,
		item.organosilicon, 30,
	)
})
nickelBatteryLarge.consumePowerBuffered(70000)

const deflagrationGenerator = new ConsumeGenerator("deflagration-generator");
exports.deflagrationGenerator = deflagrationGenerator;
Object.assign(deflagrationGenerator, {
	powerProduction: 2,
	itemDuration: 90,
	
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
		item.ossature, 25,
		item.nickel, 40,
	)
})
deflagrationGenerator.consume(new ConsumeItemFlammable());
deflagrationGenerator.consume(new ConsumeItemExplode());

const totalEffectGenerator = new ConsumeGenerator("total-effect-generator");
exports.totalEffectGenerator = totalEffectGenerator;
Object.assign(totalEffectGenerator, {
	powerProduction: 7.5,
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
		item.ossature, 35,
		item.nickel, 40,
		item.organosilicon, 30,
	),
})
totalEffectGenerator.consumeLiquid(Liquids.water, 0.1);
totalEffectGenerator.consume(new ConsumeItemFlammable());
totalEffectGenerator.consume(new ConsumeItemExplode());

const concentratedSolarPanel = new SolarGenerator("concentrated-solar-panel");
exports.concentratedSolarPanel = concentratedSolarPanel;
Object.assign(concentratedSolarPanel, {
	health: 120 * 4,
	size: 2,
	hasPower: true,
	powerProduction: 1 / 0.8,
	category: Category.power,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		item.biomassSteel, 20,
		item.organosilicon, 100,
	),
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
	
	explosionRadius: 5,
	explosionDamage: 300,
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

	explosionPuddles: 120,
	explosionPuddleRange: 8 * 7,
	explosionPuddleLiquid: Liquids.neoplasm,
	explosionPuddleAmount: 200,
	explosionMinWarmup: 0.5,
	
	consumeEffect: Fx.none,
	
	category: Category.power,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		Items.graphite, 400,
		item.nickel, 500,
		Items.thorium, 100,
		item.biomassSteel, 1250,
		item.organosilicon, 450,
	),
	
	drawer: new DrawMulti(
		new DrawRegion("-bottom"),
		new DrawLiquidTile(Liquids.water, 3),
		new DrawDefault(),
		new DrawHeatOutput(),
		Object.assign(new DrawCells(), {
			color: Color.valueOf("c33e2b"),
			particleColorFrom: Color.valueOf("e8803f"),
			particleColorTo: Color.valueOf("8c1225"),
			particles: 50,
			range: 4,
		}),
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
	size: 4,
	category: Category.power,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		Items.graphite, 400,
		item.nickel, 450,
		Items.thorium, 120,
		item.biomassSteel, 1350,
		item.organosilicon, 450
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