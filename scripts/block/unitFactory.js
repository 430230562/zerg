const insect = require('unit/insect');
const tank = require('unit/tank');
const air = require('unit/air');
const item = require('item');

const UnitPlan = UnitFactory.UnitPlan;

const tankFactory = new UnitFactory("tank-factory");
exports.tankFactory = tankFactory;
Object.assign(tankFactory, {
	size: 3,
	buildVisibility: BuildVisibility.shown,
	category: Category.units,
	requirements: ItemStack.with(
	    Items.silicon, 120,
		item.nickel, 150,
	),
	plans: Seq.with(
		new UnitPlan(tank.pioneer, 60 * 30, ItemStack.with(
		    Items.silicon, 20,
			item.nickel, 40,
		)),
		new UnitPlan(tank.gale, 60 * 50, ItemStack.with(
		    Items.silicon, 40,
			item.nickel, 20,
			item.crystal, 10,
		)),
		new UnitPlan(tank.alter, 60 * 90, ItemStack.with(
		    Items.silicon, 50,
			item.nickel, 20,
			item.manganese, 40,
		))
	)
})
tankFactory.consumePower(1.8);