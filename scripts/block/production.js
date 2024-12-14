const item = require('zerg/item');
const liquid = require('zerg/liquid');
const env = require('zerg/block/environment');

const nickelDrill = new Drill("nickel-drill");
exports.nickelDrill = nickelDrill;
Object.assign(nickelDrill, {
	tier: 3,
	drillTime: 480,
	hardnessDrillMultiplier: 0,
	size: 2,
	alwaysUnlocked: true,
	buildVisibility: BuildVisibility.shown,
	category: Category.production,
	requirements: ItemStack.with(
		Items.graphite, 10,
		item.nickel, 18,
	),
})
nickelDrill.consumeLiquid(Liquids.water, 0.04).boost()

const manganeseDrill = new Drill("manganese-drill");
exports.manganeseDrill = manganeseDrill;
Object.assign(manganeseDrill, {
	tier: 4,
	drillTime: 400,
	hardnessDrillMultiplier: 0,
	size: 2,
	buildVisibility: BuildVisibility.shown,
	category: Category.production,
	requirements: ItemStack.with(
	    Items.graphite, 10,
		item.nickel, 35,
		item.manganese, 15,
	),
})
manganeseDrill.consumeLiquid(Liquids.water, 0.04).boost()

const crystalDrill = new Drill("crystal-drill");
exports.crystalDrill = crystalDrill;
Object.assign(crystalDrill, {
	tier: 4,
	drillTime: 320,
	hardnessDrillMultiplier: 0,
	size: 3,
	buildVisibility: BuildVisibility.shown,
	category: Category.production,
	requirements: ItemStack.with(
		Items.graphite, 30,
		item.nickel, 35,
		item.crystal, 45,
		Items.silicon, 30,
	)
})
crystalDrill.consumeLiquid(Liquids.water, 0.04).boost();
crystalDrill.consumePower(1.2);

const biomassDrill = extend(Drill,"biomass-drill",{
	icons(){
		return [Core.atlas.find("zerg-biomass-drill-icon")]
	}
});
exports.biomassDrill = biomassDrill;
Object.assign(biomassDrill, {
	tier: 4,
	drillTime: 240,
	hardnessDrillMultiplier: 0,
	size: 4,
	buildVisibility: BuildVisibility.shown,
	category: Category.production,
	requirements: ItemStack.with(
		Items.silicon, 60,
		item.nickel, 65,
		item.crystal, 55,
		item.manganese, 65,
		item.biomassSteel, 50,
	)
})
biomassDrill.consumeLiquid(Liquids.water, 0.1).boost();
biomassDrill.consumePower(3.5);
biomassDrill.buildType = prov(() => extend(Drill.DrillBuild, biomassDrill,{
	draw(){
		Draw.rect(Core.atlas.find("zerg-biomass-drill"), this.x, this.y);
		Draw.z(30.1);
		
		
		Drawf.spinSprite(
			Core.atlas.find("zerg-biomass-drill-rotater"),
			this.x + Angles.trnsx(this.timeDrilled * 2, 0, 5.5),
			this.y + Angles.trnsy(this.timeDrilled * 2, 0, 5.5),
			this.timeDrilled * 4
		);
		Draw.rect(
			Core.atlas.find("zerg-biomass-drill-axis"),
			this.x + Angles.trnsx(this.timeDrilled * 2, 0, 5.5),
			this.y + Angles.trnsy(this.timeDrilled * 2, 0, 5.5),
		);
		
		Drawf.spinSprite(
			Core.atlas.find("zerg-biomass-drill-rotater"),
			this.x + Angles.trnsx(this.timeDrilled * 2, 0, -5.5),
			this.y + Angles.trnsy(this.timeDrilled * 2, 0, -5.5),
			this.timeDrilled * 4
		);
		Draw.rect(
			Core.atlas.find("zerg-biomass-drill-axis"),
			this.x + Angles.trnsx(this.timeDrilled * 2, 0, -5.5),
			this.y + Angles.trnsy(this.timeDrilled * 2, 0, -5.5),
		);

		Draw.rect(Core.atlas.find("zerg-biomass-drill-top"), this.x, this.y);

		if(this.dominantItem != null){
			Draw.color(this.dominantItem.color);
			Draw.rect(Core.atlas.find("drill-item-4"), this.x, this.y);
			Draw.color();
		}
	}
}))

const picker = extend(Block,"picker",{
    ox:[],
    oy:[],
    drawPlace(x, y, rotation, valid){
		this.super$drawPlace(x, y, rotation, valid);
		
		this.ox = [Angles.trnsx(rotation * 90, -1, -1),Angles.trnsx(rotation * 90, -1, 0),Angles.trnsx(rotation * 90, -1, 1)];
        this.oy = [Angles.trnsy(rotation * 90, -1, -1),Angles.trnsy(rotation * 90, -1, 0),Angles.trnsy(rotation * 90, -1, 1)];
        for(let i = 0;i <= 3;i ++){
		    Drawf.dashSquare(
		        Pal.accent,
		        x * 8 + this.offset + this.ox[i] * 8,
		        y * 8 + this.offset + this.oy[i] * 8,
		        8
		    );
		}
	},
	icons(){
		return [Core.atlas.find("zerg-picker"),Core.atlas.find("zerg-picker-top")]
	}
});
Object.assign(picker,{
    size: 1,
    health: 80,
    solid: true,
    update: true,
    hasShadow: true,
    destructible: true,
    rotate: true,
    rotateDraw: false,
    hasItems: true,
    buildVisibility: BuildVisibility.shown,
    category: Category.production,
    requirements: ItemStack.with(
		Items.graphite, 10,
		item.nickel, 18,
	),
});
picker.buildType = prov(() => extend(Building, {
    t:0,
    ox:[],
    oy:[],
    updateTile(){
        this.super$updateTile();
        
        this.dump();
        
        this.t += Time.delta;
        
        this.ox = [Angles.trnsx(this.rotation * 90, -1, -1),Angles.trnsx(this.rotation * 90, -1, 0),Angles.trnsx(this.rotation * 90, -1, 1)];
        this.oy = [Angles.trnsy(this.rotation * 90, -1, -1),Angles.trnsy(this.rotation * 90, -1, 0),Angles.trnsy(this.rotation * 90, -1, 1)];
        
        if(this.t >= 300){
            
            for(let i = 0;i < 3;i++){
                if(Vars.world.tile(this.tileX() + this.ox[i],this.tileY() + this.oy[i]).block() == env.autiumFruit){
                    this.items.add(item.autiumFruit, 2);
                    Vars.world.tile(this.tileX() + this.ox[i],this.tileY() + this.oy[i]).setBlock(Blocks.air)
                }
                if(Vars.world.tile(this.tileX() + this.ox[i],this.tileY() + this.oy[i]).block() == env.lichen){
                    this.items.add(item.lichen, 2);
                    Vars.world.tile(this.tileX() + this.ox[i],this.tileY() + this.oy[i]).setBlock(Blocks.air)
                }
            }
            
        this.t = 0;
        }
    },
    draw(){
		Draw.rect(Core.atlas.find("zerg-picker"), this.x, this.y);
		Draw.z(30.1);
		
		Draw.rect(Core.atlas.find("zerg-picker-top"), this.x, this.y, this.rotation * 90 + 90)
	},
	drawSelect() {
		this.super$drawSelect();
		
        for(let i = 0;i <= 3;i ++){
		    Drawf.dashSquare(
		        Pal.accent,
		        this.x + this.offset + this.ox[i],
		        this.y + this.offset + this.oy[i],
		        8
		    );
		}
	}
}))
exports.picker = picker;

const geothermalExploration = new HeatProducer("geothermal-exploration");
exports.geothermalExploration = geothermalExploration;
Object.assign(geothermalExploration,{
    outputLiquid: new LiquidStack(Liquids.slag, 0.3),
    heatOutput: 15,
	liquidCapacity: 30,
	craftTime: 60,
	size: 3,
	buildCostMultiplier: 3,
	hasPower: true,
	hasLiquids: true,
	rotateDraw: false,
	drawer: new DrawMulti(
		new DrawRegion("-bottom"),
		new DrawLiquidTile(Liquids.slag),
		new DrawRegion("-rotater", 2.5),
		new DrawDefault(),
		new DrawHeatOutput(),
		Object.assign(new DrawParticles(), {
			alpha: 0.5,
			particleRad: 24,
			particleSize: 4,
			particleLife: 600,
			particles: 36,
			rotateScl: 527,
			reverse: true,
			color: Pal.vent,
		})
	),
	buildVisibility: BuildVisibility.shown,
	category: Category.production,
	requirements: ItemStack.with(
		Items.silicon, 200,
		item.nickel, 400,
		item.manganese, 250,
		item.organistal, 200,
		item.chromium, 250,
	)
})
geothermalExploration.consumePower(10);
geothermalExploration.consumeLiquid(Liquids.water, 0.05);

const crystalCollector = new BeamDrill("crystal-collector");
exports.crystalCollector = crystalCollector;
Object.assign(crystalCollector, {
	drillTime: 180 / 0.5,
	itemCapacity: 9,
	optionalBoostIntensity: 4,
	tier: 3,
	size: 2,
	range: 5,
	fogRadius: 3,
	buildVisibility: BuildVisibility.shown,
	category: Category.production,
	requirements: ItemStack.with(
		Items.graphite, 50,
		item.nickel, 60,
		item.manganese, 50,
	)
})
crystalCollector.consumeLiquid(Liquids.water, 3 / 60).boost();
crystalCollector.consumePower(0.15);