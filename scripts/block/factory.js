const item = require("zerg/item");
const liquid = require("zerg/liquid")

const incubator = new AttributeCrafter("incubator");
exports.incubator = incubator;
Object.assign(incubator, {
	craftEffect: Fx.none,
	outputItem: new ItemStack(item.protein, 1),
	craftTime: 150,
	size: 3,
	hasPower: true,
	hasLiquids: true,
	hasItems: true,
	attribute: Attribute.get("biomass"),
	drawer: new DrawMulti(
		new DrawRegion("-bottom"),
		new DrawLiquidTile(Liquids.water),
		Object.assign(new DrawCultivator(), {}),
		new DrawDefault(),
		new DrawRegion("-top")
	),
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
	    Items.graphite, 70,
		Items.silicon, 60,
		Items.tungsten, 25
	),
})
incubator.consumePower(1.2);
incubator.consumeLiquid(Liquids.water, 18 / 60);

const ammoniaPlant = new HeatCrafter("ammonia-plant");
exports.ammoniaPlant = ammoniaPlant;
Object.assign(ammoniaPlant,{
    craftEffect: Fx.none,
    ambientSound: Sounds.extractLoop,
    ambientSoundVolume: 0.06,
	outputLiquid: new LiquidStack(liquid.ammonia, 0.1),
	heatRequirement: 5,
	maxEfficiency: 3,
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
			color: Color.valueOf("9eabf7"), 
		}),
		Object.assign(new DrawParticles(), {
			alpha: 0.15,
			particleRad: 12,
			particleSize: 9,
			particleLife: 110,
			particles: 15,
			rotateScl: -3,
			reverse: true,
			color: Color.valueOf("efe3ff"), 
		}),
		new DrawDefault(),
		new DrawHeatInput(),
	),
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
	    Items.graphite, 110,
		Items.silicon, 100,
		Items.tungsten, 75,
		Items.oxide, 35,
	),
})
ammoniaPlant.consumeLiquids(LiquidStack.with(
	Liquids.hydrogen, 0.15,
	Liquids.nitrogen, 0.05
));
ammoniaPlant.consumePower(0.6);