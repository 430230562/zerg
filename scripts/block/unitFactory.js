const insect = require('zerg/unit/insect');
const crystive = require('zerg/unit/crystive');
const tank = require('zerg/unit/tank');
const air = require('zerg/unit/air');
const item = require('zerg/item');
const liquid = require('zerg/liquid');

const wall = require('zerg/block/wall');

const UnitPlan = UnitFactory.UnitPlan;
const AssemblerUnitPlan = UnitAssembler.AssemblerUnitPlan;

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
			item.nickel, 40,
			item.manganese, 60,
		))
	)
})
tankFactory.consumePower(1.8);

const airFactory = new UnitFactory("air-factory");
exports.airFactory = airFactory;
Object.assign(airFactory,{
	size: 3,
	buildVisibility: BuildVisibility.shown,
	category: Category.units,
	requirements: ItemStack.with(
		Items.graphite, 30,
		Items.silicon, 60,
		item.nickel, 120,
	),
	plans: Seq.with(
		/*new UnitPlan(air.mist, 60 * 25, ItemStack.with(
			Items.silicon, 40,
			item.nickel, 20,
		)),*/
		new UnitPlan(air.electron, 60 * 50, ItemStack.with(
			Items.silicon, 40,
			item.nickel, 20,
			item.energic, 20,
		)),
		new UnitPlan(air.phantom, 60 * 70, ItemStack.with(
			Items.silicon, 40,
			item.nickel, 60,
			item.manganese, 30,
		))
	)
})
airFactory.consumePower(1.8);

const reconstructor = new Reconstructor("reconstructor");
exports.reconstructor = reconstructor;
Object.assign(reconstructor, {
	size: 3,
	constructTime: 60 * 30,
	
	buildVisibility: BuildVisibility.shown,
	category: Category.units,
	requirements: ItemStack.with(
		Items.silicon, 100,
		item.nickel, 200,
		item.manganese, 200,
	),
})
reconstructor.addUpgrade(tank.pioneer, tank.brigadier);
reconstructor.addUpgrade(tank.gale, tank.hurricane);
//reconstructor.addUpgrade(air.mist, air.cirrus);
reconstructor.addUpgrade(air.electron, air.inductance);
reconstructor.addUpgrade(air.phantom, air.shadow)
reconstructor.consumePower(3.1);
reconstructor.consumeItems(ItemStack.with(
	Items.graphite, 40,
	Items.silicon, 50,
	item.crystal, 30,
));

const primeReconstructor = new Reconstructor("prime-reconstructor");
exports.primeReconstructor = primeReconstructor;
Object.assign(primeReconstructor, {
	size: 5,
	constructTime: 60 * 60,
	
	buildVisibility: BuildVisibility.shown,
	category: Category.units,
	requirements: ItemStack.with(
		Items.silicon, 400,
		item.nickel, 550,
		item.manganese, 350,
		item.chromium, 200,
		item.biomassSteel, 100,
	),
})
primeReconstructor.addUpgrade(tank.brigadier, tank.shredder);
primeReconstructor.addUpgrade(tank.hurricane, tank.tornado);
//primeReconstructor.addUpgrade(air.cirrus, air.cloud);
primeReconstructor.addUpgrade(air.inductance, air.ampere);
primeReconstructor.consumePower(6.8);
primeReconstructor.consumeItems(ItemStack.with(
	Items.silicon, 150,
	item.chromium, 75,
	item.crystal, 100,
	item.biomassSteel, 30,
));

const seniorReconstructor = Reconstructor("senior-reconstructor");
exports.seniorReconstructor = seniorReconstructor;
Object.assign(seniorReconstructor,{
    size: 7,
	constructTime: 60 * 90,
	
	buildVisibility: BuildVisibility.shown,
	category: Category.units,
	requirements: ItemStack.with(
		Items.silicon, 1000,
		Items.graphite, 750,
		item.nickel, 1500,
		item.manganese, 750,
		item.chromium, 500,
		item.biomassSteel, 500,
		item.iridium, 1000,
	),
})
seniorReconstructor.addUpgrade(tank.shredder, tank.purge);
seniorReconstructor.addUpgrade(tank.tornado, tank.meteorite);
seniorReconstructor.consumePower(13);
seniorReconstructor.consumeItems(ItemStack.with(
	Items.silicon, 750,
	item.chromium, 500,
	item.energic, 500,
	item.biomassSteel, 250,
	item.iridium, 200,
));
seniorReconstructor.consumeLiquids(LiquidStack.with(
	Liquids.water, 1.5
));

const unitIncubator = new UnitFactory("unit-incubator");
exports.unitIncubator = unitIncubator;
Object.assign(unitIncubator, {
	size: 3,
	buildVisibility: BuildVisibility.shown,
	category: Category.units,
	plans: Seq.with(
		new UnitPlan(insect.haploid, 60 * 6, ItemStack.with(
			item.biomass, 15,
			item.amino, 20,
		)),
		new UnitPlan(insect.ribosome, 60 * 7.5, ItemStack.with(
			item.biomass, 15,
			item.amino, 25,
		)),
		new UnitPlan(insect.apoptoticBody, 60 * 3, ItemStack.with(
			item.biomass, 5,
			item.amino, 10,
		)),
		new UnitPlan(insect.glycocalyx, 60 * 15, ItemStack.with(
			item.biomass, 25,
			item.amino, 35,
		))
	),
	requirements: ItemStack.with(
		Items.silicon, 100,
		item.nickel, 150,
	),
})
unitIncubator.consumePower(1.7);
unitIncubator.buildType = prov(() => extend(UnitFactory.UnitFactoryBuild, unitIncubator,{
    a: 0,
    draw(){
        this.super$draw()
        
        if(this.currentPlan != -1){
            var plan = this.block.plans.get(this.currentPlan);
        }
        
        if(this.progress <= 60){
            this.a = (this.progress / 60)
        }else if(this.progress >= plan.time - 60){
            this.a = (plan.time - this.progress) / 60
        }else{
            this.a = 1
        }
        
        Draw.z(35.05);
        LiquidBlock.drawTiledFrames(2, this.x, this.y, 0, Liquids.neoplasm, this.a * 0.7)
    }
}))

const reincubator = new Reconstructor("reincubator");
exports.reincubator = reincubator;
Object.assign(reincubator,{
	size: 3,
	constructTime: 60 * 10,
	liquidCapacity: 30,
	buildVisibility: BuildVisibility.shown,
	category: Category.units,
	requirements: ItemStack.with(
		Items.silicon, 100,
		Items.graphite, 75,
		item.nickel, 200,
		item.manganese, 100,
	),
})
reincubator.addUpgrade(insect.haploid, insect.diploid);
reincubator.addUpgrade(insect.ribosome, insect.lysosome);
reincubator.addUpgrade(insect.glycocalyx, insect.hydrolase)
reincubator.consumePower(2.7);
reincubator.consumeItems(ItemStack.with(
	item.biomass, 40,
	item.amino, 60,
));
reincubator.buildType = prov(() => extend(Reconstructor.ReconstructorBuild, reincubator,{
    a: 0,
    draw(){
        this.super$draw()
        
        if(this.progress <= 60){
            this.a = (this.progress / 60)
        }else if(this.progress >= 60 * 9){
            this.a = (60 * 10 - this.progress) / 60
        }else{
            this.a = 1
        }
        
        Draw.z(35.05);
        LiquidBlock.drawTiledFrames(2, this.x, this.y, 0, Liquids.neoplasm, this.a * 0.7)
    }
}))
reincubator.consumeLiquids(LiquidStack.with(
	liquid.colchicine, 0.1
));

const hyperplasia = new Reconstructor("hyperplasia");
exports.hyperplasia = hyperplasia;
Object.assign(hyperplasia,{
	size: 5,
	constructTime: 60 * 30,
	liquidCapacity: 30,
	buildVisibility: BuildVisibility.shown,
	category: Category.units,
	requirements: ItemStack.with(
		Items.silicon, 500,
		Items.graphite, 275,
		item.nickel, 600,
		item.manganese, 500,
		item.biomassSteel, 400,
	),
})
hyperplasia.addUpgrade(insect.diploid, insect.triploid);
hyperplasia.addUpgrade(insect.lysosome, insect.trichocyst);
hyperplasia.consumePower(7.7);
hyperplasia.consumeItems(ItemStack.with(
	item.biomass, 80,
	item.biosulfide, 20,
	item.biomassSteel, 20,
));
hyperplasia.consumeLiquids(LiquidStack.with(
	Liquids.neoplasm, 0.1,
	liquid.colchicine, 0.2
));
hyperplasia.buildType = prov(() => extend(Reconstructor.ReconstructorBuild, hyperplasia,{
    a: 0,
    draw(){
        this.super$draw()
        
        if(this.progress <= 60){
            this.a = (this.progress / 60)
        }else if(this.progress >= 60 * 29){
            this.a = (60 * 30 - this.progress) / 60
        }else{
            this.a = 1
        }
        
        Draw.z(35.05);
        LiquidBlock.drawTiledFrames(3, this.x, this.y, 0, Liquids.neoplasm, this.a * 0.7)
    }
}))

const legsMetamorphosiser = new UnitAssembler("legs-metamorphosiser");
exports.legsMetamorphosiser = legsMetamorphosiser;
Object.assign(legsMetamorphosiser,{
	size: 5,
	areaSize: 13,
	plans: Seq.with(
		new AssemblerUnitPlan(insect.bivalents, 60 * 30, PayloadStack.list(
			insect.triploid, 1,
			wall.biomassWall, 4,
		))
		/*new AssemblerUnitPlan(tank.fearless, 60 * 50, PayloadStack.list(
			tank.heavyTank, 2, 
			tank.ripper, 2,
			Blocks.plastaniumWall, 10,
		))*/
	),
	buildVisibility: BuildVisibility.shown,
	category: Category.units,
	requirements: ItemStack.with(
		item.nickel, 650,
		item.manganese, 450,
		item.chromium, 300,
		item.iridium, 350,
		Items.silicon, 450,
	)
})
legsMetamorphosiser.consumePower(6);
legsMetamorphosiser.consumeLiquids(LiquidStack.with(
	Liquids.neoplasm, 0.5,
	liquid.colchicine, 1
));

const airMetamorphosiser = new UnitAssembler("air-metamorphosiser");
exports.airMetamorphosiser = airMetamorphosiser;
Object.assign(airMetamorphosiser,{
	size: 5,
	areaSize: 13,
	plans: Seq.with(
		new AssemblerUnitPlan(insect.centrosome, 60 * 30, PayloadStack.list(
			insect.trichocyst, 1,
			wall.biomassWall, 4,
		))
		/*new AssemblerUnitPlan(tank.fearless, 60 * 50, PayloadStack.list(
			tank.heavyTank, 2, 
			tank.ripper, 2,
			Blocks.plastaniumWall, 10,
		))*/
	),
	buildVisibility: BuildVisibility.shown,
	category: Category.units,
	requirements: ItemStack.with(
		item.nickel, 650,
		item.manganese, 450,
		item.chromium, 300,
		item.iridium, 350,
		Items.silicon, 450,
	)
})
airMetamorphosiser.consumePower(6);
airMetamorphosiser.consumeLiquids(LiquidStack.with(
	Liquids.neoplasm, 0.5,
	liquid.colchicine, 1
));

const laboratory = new Reconstructor("laboratory")
exports.laboratory = laboratory
Object.assign(laboratory, {
	size: 3,
	constructTime: 60 * 20,
	buildVisibility: BuildVisibility.shown,
	category: Category.units,
	requirements: ItemStack.with(
		Items.silicon, 100,
		item.organistal, 75,
		item.nickel, 200,
		item.manganese, 100,
	),
})
laboratory.addUpgrade(insect.haploid, crystive.anatase);
laboratory.consumePower(3.2);
laboratory.consumeItems(ItemStack.with(
	item.crystal, 50,
	item.amino, 30,
))
laboratory.consumeLiquid(liquid.dissolvant, 12 / 60);

const conflater = new UnitAssembler("conflater");
exports.conflater = conflater;
Object.assign(conflater,{
	size: 5,
	areaSize: 9,
	plans: Seq.with(
		new AssemblerUnitPlan(crystive.asbestos, 60 * 30, PayloadStack.list(
			crystive.anatase, 2,
			wall.crystalWall, 6,
		)),
		new AssemblerUnitPlan(crystive.quartz, 60 * 110, PayloadStack.list(
			crystive.asbestos, 1,
			wall.crystalWallLarge, 4,
			wall.energicWall, 6,
		))
	),
	buildVisibility: BuildVisibility.shown,
	category: Category.units,
	requirements: ItemStack.with(
	    Items.silicon, 450,
		item.nickel, 650,
		item.manganese, 450,
		item.chromium, 300,
		item.organistal, 250,
	)
})
conflater.consumePower(6);
conflater.consumeLiquid(liquid.dissolvant, 48 / 60);

const assemblerModule = new UnitAssemblerModule("assembler-module");
exports.assemblerModule = assemblerModule;
Object.assign(assemblerModule, {
	requirements: ItemStack.with(
		item.nickel, 65, 
		item.manganese, 35, 
		item.chromium, 55,
		Items.silicon, 50,
	),
	category: Category.units,
	buildVisibility: BuildVisibility.shown,
	size: 3,
	tier: 1,
});
assemblerModule.consumePower(0.5);

const payloadConveyor = new PayloadConveyor("payload-conveyor");
exports.payloadConveyor = payloadConveyor;
Object.assign(payloadConveyor, {
	canOverdrive: false,
	buildVisibility: BuildVisibility.shown,
	category: Category.units,
	requirements: ItemStack.with(
		Items.graphite, 10,
		item.nickel, 10
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
		item.nickel, 10
	)
})

const fixPoint = new RepairTurret("fix-point");
exports.fixPoint = fixPoint;
Object.assign(fixPoint,{
	repairSpeed: 0.5,
	repairRadius: 80,
	beamWidth: 0.73,
	powerUse: 1.2,
	buildVisibility: BuildVisibility.shown,
	category: Category.units,
	requirements: ItemStack.with(
		Items.graphite, 20,
		Items.silicon, 30,
		item.nickel, 30,
	)
})

const fixTurret = new RepairTurret("fix-turret");
exports.fixTurret = fixTurret;
Object.assign(fixTurret,{
	repairSpeed: 3,
	repairRadius: 150,
	beamWidth: 1.3,
	powerUse: 4.7,
	size: 2,
	buildVisibility: BuildVisibility.shown,
	category: Category.units,
	requirements: ItemStack.with(
		Items.graphite, 75,
		Items.silicon, 150,
		item.nickel, 50,
		item.manganese, 100,
	)
})

const buildingConstructor = Constructor('building-constructor');
exports.buildingConstructor = buildingConstructor;
Object.assign(buildingConstructor, {
	buildSpeed: 0.2,
	minBlockSize: 1,
	maxBlockSize: 2,
	size: 3,
	configurable: true,
	clearOnDoubleTap: true,
	buildVisibility: BuildVisibility.shown,
	category: Category.units,
	requirements: ItemStack.with(
		item.nickel, 50,
		item.chromium, 80,
		Items.silicon, 150,
	),
})
buildingConstructor.consumePower(1.2);