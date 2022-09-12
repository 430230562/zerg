const unit = require('unit');
const item = require('item');

const UnitPlan = UnitFactory.UnitPlan;

const unitIncubator = new UnitFactory("unit-incubator");
exports.unitIncubator = unitIncubator;
Object.assign(unitIncubator, {
	size: 3,
	buildVisibility: BuildVisibility.shown,
	category: Category.units,
	plans: Seq.with(
		new UnitPlan(unit.spider, 60 * 12, ItemStack.with(
			item.biomass, 10,
			item.ossature, 5,
		)),
		new UnitPlan(unit.mosquito, 60 * 15, ItemStack.with(
			item.biomass, 10,
			item.ossature, 5,
		))
	),
	requirements: ItemStack.with(
		item.nickel, 120,
		item.ossature, 120,
		item.organosilicon, 100,
	),
})
unitIncubator.consumePower(1.7);

const tankFactory = new UnitFactory("tank-factory");
exports.tankFactory = tankFactory;
Object.assign(tankFactory, {
	size: 3,
	buildVisibility: BuildVisibility.shown,
	category: Category.units,
	requirements: ItemStack.with(
		item.nickel, 120,
		item.biomassSteel, 160,
		item.organosilicon, 120,
	),
	plans: Seq.with(
		new UnitPlan(unit.testVehicle, 60 * 40, ItemStack.with(
			item.nickel, 20,
			item.biomassSteel, 15,
			item.organosilicon, 20,
		)),
		new UnitPlan(unit.alter, 60 * 50, ItemStack.with(
			item.nickel, 20,
			item.biomassSteel, 10,
			item.organosilicon, 40,
		)),
		new UnitPlan(unit.embers, 60 * 45, ItemStack.with(
			item.ossature, 20,
			item.biomassSteel, 15,
			item.organosilicon, 30,
		)),
		new UnitPlan(unit.hurricane, 60 * 45, ItemStack.with(
			item.nickel, 20,
			item.crystal, 40,
			item.organosilicon, 20
		))
	)
})

const reincubator = new Reconstructor("reincubator");
exports.reincubator = reincubator;
Object.assign(reincubator, {
	size: 3,
	constructTime: 60 * 15,
	
	buildVisibility: BuildVisibility.shown,
	category: Category.units,
	requirements: ItemStack.with(
		item.nickel, 150,
		item.biomassSteel, 80,
		item.organosilicon, 100,
	),
})
reincubator.addUpgrade(unit.spider, unit.tarantula);
reincubator.addUpgrade(unit.mosquito, unit.acid);
reincubator.consumePower(2.5);
reincubator.consumeItems(ItemStack.with(
	item.ossature, 40,
	item.biomass, 40
));