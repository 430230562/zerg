const unit = require('unit');
const item = require('item');

const UnitPlan = UnitFactory.UnitPlan

const unitIncubator = new UnitFactory("unit-incubator");
exports.unitIncubator = unitIncubator;
Object.assign(unitIncubator, {
	size: 3,
	buildVisibility: BuildVisibility.shown,
	category: Category.units,
	plans: Seq.with(
		new UnitPlan(unit.spider, 60 * 12, ItemStack.with(
			item.biomass, 5
		)),
		new UnitPlan(unit.mosquito, 60 * 15, ItemStack.with(
			item.biomass, 5
		))
	),
	requirements: ItemStack.with(
		Items.lead, 80,
		item.biomassSteel, 120,
		item.organosilicon, 100,
	),
	/*drawer: new DrawMulti(
		new DrawLiquidTile(Liquids.water),
		new DrawLiquidTile(Liquids.cryofluid),
		new DrawDefault()),*/
})
unitIncubator.consumePower(1.7);

const tankFactory = new UnitFactory("tank-factory");
exports.tankFactory = tankFactory;
Object.assign(tankFactory, {
	size: 3,
	buildVisibility: BuildVisibility.shown,
	category: Category.units,
	requirements: ItemStack.with(
		Items.lead, 120,
		item.biomassSteel, 160,
		item.organosilicon, 120,
	),
	plans: Seq.with(
		new UnitPlan(unit.testVehicle, 60 * 40, ItemStack.with(
			item.biomassSteel, 25,
			item.organosilicon, 20,
		))
	)
})