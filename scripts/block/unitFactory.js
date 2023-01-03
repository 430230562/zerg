const insect = require('unit/insect');
const tank = require('unit/tank');
const air = require('unit/air');
const item = require('item');

const UnitPlan = UnitFactory.UnitPlan;

const unitIncubator = new UnitFactory("unit-incubator");
exports.unitIncubator = unitIncubator;
Object.assign(unitIncubator, {
	size: 3,
	buildVisibility: BuildVisibility.shown,
	category: Category.units,
	plans: Seq.with(
		new UnitPlan(insect.spider, 60 * 12, ItemStack.with(
			item.biomass, 15,
			item.ossature, 10,
		)),
		new UnitPlan(insect.mosquito, 60 * 15, ItemStack.with(
			item.biomass, 15,
			item.ossature, 10,
		)),
		new UnitPlan(insect.buffer, 60 * 5, ItemStack.with(
			item.biomass, 5,
		)),
	),
	requirements: ItemStack.with(
		item.nickel, 120,
		item.ossature, 120,
		item.organosilicon, 100,
	),
})
unitIncubator.consumePower(1.7);

const unitIncubatorLarge = new UnitFactory("unit-incubator-large");
exports.unitIncubatorLarge = unitIncubatorLarge;
Object.assign(unitIncubatorLarge, {
	size: 5,
	buildVisibility: BuildVisibility.shown,
	category: Category.units,
	plans: Seq.with(
		new UnitPlan(insect.tarantula, 60 * 30, ItemStack.with(
			item.biomass, 35,
			item.ossature, 20,
			item.halogenated, 20,
		)),
		new UnitPlan(insect.concuss, 60 * 35, ItemStack.with(
			item.biomass, 35,
			item.ossature, 20,
			item.halogenated, 20,
		))
	),
	requirements: ItemStack.with(
		item.nickel, 150,
		item.biomassSteel, 80,
		item.organosilicon, 100,
	),
})
unitIncubatorLarge.consumePower(2.4);

const primeUnitIncubator = new UnitFactory("prime-unit-incubator");
exports.primeUnitIncubator = primeUnitIncubator;
Object.assign(primeUnitIncubator, {
	size: 5,
	buildVisibility: BuildVisibility.shown,
	category: Category.units,
	plans: Seq.with(
		new UnitPlan(insect.group, 60 * 60, ItemStack.with(
			item.biomass, 125,
			item.ossature, 55,
			item.halogenated, 70,
		)),
		new UnitPlan(insect.cicada, 60 * 70, ItemStack.with(
			item.biomass, 130,
			item.ossature, 50,
			item.halogenated, 70,
		)),
		new UnitPlan(insect.pildelet, 60 * 80, ItemStack.with(
			item.biomass, 175,
			item.ossature, 40,
			item.halogenated, 80,
		)),
	),
	requirements: ItemStack.with(
		item.nickel, 650,
		item.ossature, 550,
		item.uranium, 350,
		item.organosilicon, 450,
		item.halogenated, 400,
	),
})
primeUnitIncubator.consumePower(4.2);

const tankFactory = new UnitFactory("tank-factory");
exports.tankFactory = tankFactory;
Object.assign(tankFactory, {
	size: 3,
	buildVisibility: BuildVisibility.shown,
	category: Category.units,
	requirements: ItemStack.with(
		item.nickel, 120,
		item.manganese, 160,
		item.organosilicon, 120,
	),
	plans: Seq.with(
		new UnitPlan(tank.pioneer, 60 * 30, ItemStack.with(
			item.nickel, 30,
			item.organosilicon, 20,
		)),
		new UnitPlan(tank.alter, 60 * 50, ItemStack.with(
			item.nickel, 50,
			item.organosilicon, 40,
		)),
		new UnitPlan(tank.hurricane, 60 * 35, ItemStack.with(
			item.nickel, 40,
			item.crystal, 30,
			item.organosilicon, 40,
		))
	)
})
tankFactory.consumePower(1.8);

const airFactory = new UnitFactory("air-factory");
exports.airFactory = airFactory;
Object.assign(airFactory, {
	size: 3,
	buildVisibility: BuildVisibility.shown,
	category: Category.units,
	requirements: ItemStack.with(
		item.nickel, 70,
		item.organosilicon, 90,
	),
	plans: Seq.with(
		new UnitPlan(air.mist, 60 * 15, ItemStack.with(
			item.nickel, 5,
			item.organosilicon, 10,
		)),
		new UnitPlan(air.electron,60 * 20, ItemStack.with(
			item.nickel, 5,
			item.organosilicon, 10,
			item.halogenated, 5,
		)),
		new UnitPlan(air.phantom,60 * 40, ItemStack.with(
			item.nickel, 15,
			item.manganese, 10,
			item.organosilicon, 20,
		))
	)
})
airFactory.consumePower(1.8);

const reconstructor = new Reconstructor("reconstructor");
exports.reconstructor = reconstructor;
Object.assign(reconstructor, {
	size: 3,
	constructTime: 60 * 20,
	
	buildVisibility: BuildVisibility.shown,
	category: Category.units,
	requirements: ItemStack.with(
		item.nickel, 75,
		item.manganese, 200,
		item.organosilicon, 100,
	),
})
reconstructor.addUpgrade(tank.pioneer, tank.brigadier);
reconstructor.addUpgrade(tank.hurricane, tank.typhoon);
reconstructor.addUpgrade(air.mist, air.thoud);
reconstructor.addUpgrade(air.electron, air.inductance);
reconstructor.consumePower(3.1);
reconstructor.consumeItems(ItemStack.with(
	Items.graphite, 40,
	item.crystal, 30,
	item.organosilicon, 50,
));

const primeReconstructor = new Reconstructor("prime-reconstructor");
exports.primeReconstructor = primeReconstructor;
Object.assign(primeReconstructor, {
	size: 5,
	constructTime: 60 * 50,
	
	buildVisibility: BuildVisibility.shown,
	category: Category.units,
	requirements: ItemStack.with(
		item.nickel, 650,
		item.crystal, 150,
		item.manganese, 750,
		item.organosilicon, 450,
		item.biomassSteel, 300,
	),
})
primeReconstructor.addUpgrade(tank.typhoon,tank.storm);
primeReconstructor.addUpgrade(tank.brigadier,tank.kibbler);
primeReconstructor.addUpgrade(air.thoud,air.cloud);
primeReconstructor.addUpgrade(air.inductance,air.ampere);
primeReconstructor.consumePower(4.2);
primeReconstructor.consumeItems(ItemStack.with(
	item.crystal, 55,
	item.manganese, 90,
	item.organosilicon, 100,
	item.halogenated, 50,
));

const payloadConveyor = new PayloadConveyor("payload-conveyor");
exports.payloadConveyor = payloadConveyor;
Object.assign(payloadConveyor, {
	canOverdrive: false,
	buildVisibility: BuildVisibility.shown,
	category: Category.units,
	requirements: ItemStack.with(
		Items.graphite, 10,
		item.ossature, 10
	)
})

const payloadRouter = new PayloadRouter("payload-router");
exports.payloadRouter = payloadRouter;
Object.assign(payloadRouter, {
	canOverdrive: false,
	buildVisibility: BuildVisibility.shown,
	category: Category.units,
	requirements: ItemStack.with(
		Items.graphite, 15,
		item.ossature, 10
	)
})

const repairPoint = new RepairTurret("repair-point");
exports.repairPoint = repairPoint;
Object.assign(repairPoint,{
	repairSpeed: 50 / 60,
	repairRadius: 11 * 8,
	beamWidth: 0.73,
	powerUse: 1.2,
	buildVisibility: BuildVisibility.shown,
	category: Category.units,
	requirements: ItemStack.with(
		Items.graphite, 20,
		item.ossature, 30,
		item.organosilicon, 20,
	)
})