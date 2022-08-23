const item = require('item');

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
		Items.lead, 500,
		Items.graphite, 400,
		Items.thorium, 100,
		Items.metaglass, 250,
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

const ExtremeTemperatureDifferenceGenerator = new VariableReactor('extreme-temperature-difference-generator');
exports.ExtremeTemperatureDifferenceGenerator = ExtremeTemperatureDifferenceGenerator;
Object.assign(ExtremeTemperatureDifferenceGenerator, {
	powerProduction: 120,
	maxHeat: 60,

	liquidCapacity: 30,
	explosionMinWarmup: 0.5,
	size: 4,
	category: Category.power,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		Items.lead, 450,
		Items.graphite, 400,
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
ExtremeTemperatureDifferenceGenerator.consumeLiquid(Liquids.cryofluid, 12 / 60);