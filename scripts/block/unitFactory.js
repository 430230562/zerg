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
		new UnitPlan(air.mist, 60 * 25, ItemStack.with(
		    Items.silicon, 40,
			item.nickel, 20,
		)),
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
		item.nickel, 75,
		item.manganese, 200,
	),
})
reconstructor.addUpgrade(tank.pioneer, tank.brigadier);
reconstructor.addUpgrade(tank.gale, tank.hurricane);
reconstructor.addUpgrade(tank.alter,tank.bewitch)
reconstructor.addUpgrade(air.mist, air.thoud);
reconstructor.addUpgrade(air.electron, air.inductance);
reconstructor.addUpgrade(air.phantom, air.shadow)
reconstructor.consumePower(3.1);
reconstructor.consumeItems(ItemStack.with(
	Items.graphite, 40,
	Items.silicon, 50,
	item.crystal, 30,
));

const unitIncubator = new UnitFactory("unit-incubator");
exports.unitIncubator = unitIncubator;
Object.assign(unitIncubator, {
	size: 3,
	buildVisibility: BuildVisibility.shown,
	category: Category.units,
	plans: Seq.with(
		new UnitPlan(insect.spider, 60 * 12, ItemStack.with(
			item.biomass, 15,
			item.amino, 20,
		)),
		new UnitPlan(insect.mosquito, 60 * 15, ItemStack.with(
			item.biomass, 15,
			item.amino, 25,
		)),
		new UnitPlan(insect.buffer, 60 * 5, ItemStack.with(
			item.biomass, 5,
			item.amino, 10,
		)),
	),
	requirements: ItemStack.with(
	    Items.silicon, 100,
		item.nickel, 150,
	),
})
unitIncubator.consumePower(1.7);
unitIncubator.buildType = prov(() => extend(UnitFactory.UnitFactoryBuild, unitIncubator,{
    ox: [0,4,4,-4,-4], 
    oy: [0,-4,4,-4,4],
    draw(){
        this.super$draw();
        
        Draw.z(35.001);
        
        Draw.color(Color.valueOf("9e172c"), 0.65);
        Draw.rect(Core.atlas.find("zerg-unit-incubator-liquid"), this.x, this.y);
        
        Draw.color(Color.valueOf("e05438"));
        
        if(Time.time % 30 <= 1){
            for(let i = 0;i < 5;i++){
                this.ox[i] = Mathf.range(8)
                this.oy[i] = Mathf.range(8)
            }
        }
        if(this.progress >= 0.001){
            Lines.stroke(0.2 + (this.progress % 30) / 100);
            for(let i = 0;i < 5;i++){
                Lines.poly(this.x + this.ox[i], this.y + this.oy[i], 8, (this.progress % 30) / 20);
            }
        }
        Draw.color();
        
        if(this.rotation <= 1){
            Draw.rect(Core.atlas.find("zerg-unit-incubator-out1"), this.x, this.y, this.rotation * 90);
        }else{
            Draw.rect(Core.atlas.find("zerg-unit-incubator-out2"), this.x, this.y, this.rotation * 90);
        }
    }
}))

const reincubator = new Reconstructor("reincubator");
exports.reincubator = reincubator;
Object.assign(reincubator,{
    size: 3,
    constructTime: 60 * 20,
	buildVisibility: BuildVisibility.shown,
	category: Category.units,
	requirements: ItemStack.with(
	    Items.silicon, 100,
	    Items.graphite, 75,
		item.nickel, 200,
		item.manganese, 100,
	),
})
reincubator.addUpgrade(insect.buffer, insect.spread);
reincubator.addUpgrade(insect.spider, insect.tarantula);
reincubator.addUpgrade(insect.mosquito, insect.burst);
reincubator.consumePower(2.7);
reincubator.consumeItems(ItemStack.with(
	item.biomass, 40,
	item.amino, 80,
));
reincubator.buildType = prov(() => extend(Reconstructor.ReconstructorBuild, reincubator,{
    ox: [0,4,4,-4,-4], 
    oy: [0,-4,4,-4,4],
    draw(){
        this.super$draw();
        
        Draw.z(35.001);
        
        Draw.color(Color.valueOf("9e172c"), 0.65);
        Draw.rect(Core.atlas.find("zerg-reincubator-liquid"), this.x, this.y);
        
        Draw.color(Color.valueOf("e05438"));
        
        if(Time.time % 30 <= 1){
            for(let i = 0;i < 5;i++){
                this.ox[i] = Mathf.range(8)
                this.oy[i] = Mathf.range(8)
            }
        }
        if(this.progress >= 0.001){
            Lines.stroke(0.2 + (this.progress % 30) / 100);
            for(let i = 0;i < 5;i++){
                Lines.poly(this.x + this.ox[i], this.y + this.oy[i], 8, (this.progress % 30) / 20);
            }
        }
        Draw.color();
        
        //out
        if(this.rotation <= 1){
            Draw.rect(Core.atlas.find("zerg-reincubator-out1"), this.x, this.y, this.rotation * 90);
        }else{
            Draw.rect(Core.atlas.find("zerg-reincubator-out2"), this.x, this.y, this.rotation * 90);
        }
        //in
        for(let i = 0; i < 4; i++){
            if(PayloadBlock.blends(this,i) && i != this.rotation){
                if(i <= 1){
                    Draw.rect(Core.atlas.find("zerg-reincubator-in1"), this.x, this.y, (i * 90) - 180);
                }else{
                    Draw.rect(Core.atlas.find("zerg-reincubator-in2"), this.x, this.y, (i * 90) - 180);
                }
            }
        }
    }
}))

Blocks.groundFactory.plans.add(
    new UnitPlan(tank.alter, 60 * 120, ItemStack.with(
		Items.silicon, 50,
		Items.graphite, 20,
		Items.lead, 40,
		Items.titanium, 25
	))
)
Blocks.additiveReconstructor.addUpgrade(tank.alter,tank.bewitch)

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