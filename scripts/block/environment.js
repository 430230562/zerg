const item = require('zerg/item')
const liquid = require('zerg/liquid')
const status = require('zerg/status')

Attribute.add("biomass");
Attribute.add("arkycite");
Attribute.add("SO2");
Attribute.add("gas");

const flower = new Prop("flower");
Object.assign(flower,{
	variants: 6,
	hasShadow: false,
})

//tundra
const tundraWall = new StaticWall("tundra-wall");

const tundra = new Floor("tundra");
tundra.variants = 2;
tundra.attributes.set(Attribute.water, 0.35);
tundra.attributes.set(Attribute.get("biomass"), 0.05);

//arkycite
Blocks.arkyicStone.attributes.set(Attribute.get("biomass"), 0.35)
Blocks.arkyicStone.attributes.set(Attribute.get("arkycite"), 1.5)
Blocks.arkyicStone.attributes.set(Attribute.water, -0.75)

const arkyciteSandWall = new StaticWall("arkycite-sand-wall");

const arkyciteSand = new Floor("arkycite-sand");
Object.assign(arkyciteSand, {
	itemDrop: Items.sand,
	playerUnmineable: true,
	speedMultiplier: 0.95,
	variants: 3,
	wall: arkyciteSandWall,
})
arkyciteSand.attributes.set(Attribute.get("biomass"), 0.35);
arkyciteSand.attributes.set(Attribute.get("arkycite"), 1);
arkyciteSand.attributes.set(Attribute.water, -0.75);

//neoplasm
Blocks.denseRedStone.attributes.set(Attribute.get("biomass"), 0.45);
Blocks.denseRedStone.attributes.set(Attribute.get("arkycite"), 1.1);
Blocks.redStone.attributes.set(Attribute.get("biomass"), 0.45);
Blocks.redStone.attributes.set(Attribute.get("arkycite"), 1);

const neoplasmWall = new StaticWall("neoplasm-wall");

const neoplasmSand = new Floor("neoplasm-sand")
Object.assign(neoplasmSand, {
	itemDrop: Items.sand,
	playerUnmineable: true,
	speedMultiplier: 0.9,
	variants: 3,
})
neoplasmSand.attributes.set(Attribute.get("biomass"), 0.45);
neoplasmSand.attributes.set(Attribute.get("arkycite"), 0.8);
neoplasmSand.attributes.set(Attribute.water, -1);

const sandNeoplasm = new Floor("sand-neoplasm");
Object.assign(sandNeoplasm, {
	speedMultiplier: 0.75,
	variants: 0,
	status: status.none,
	statusDuration: 90,
	liquidDrop: Liquids.neoplasm,
	isLiquid: true,
	cacheLayer: CacheLayer.water,
	albedo: 0.9,
	supportsOverlay: true,
	liquidMultiplier: 0.35,
})

const neoplasm = new Floor("neoplasm");
Object.assign(neoplasm, {
	speedMultiplier: 0.4,
	variants: 0,
	status: status.none,
	statusDuration: 120,
	liquidDrop: Liquids.neoplasm,
	isLiquid: true,
	cacheLayer: CacheLayer.water,
	albedo: 0.9,
	supportsOverlay: true,
	liquidMultiplier: 0.5,
	damageTaken: 0.5,
})

//crystal
const crystallineWall = new StaticWall("crystalline-wall");
Object.assign(crystallineWall,{
	itemDrop: item.crystal,
})

const crystallineFloor = new Floor("crystalline-floor");
Object.assign(crystallineFloor, {
	variants: 3,
	wall: crystallineWall,
})
crystallineFloor.attributes.set(Attribute.get("arkycite"), 0.5);
crystallineFloor.attributes.set(Attribute.water, -0.5)

//basalt
const basaltWaterVent = new SteamVent("basalt-water-vent");
basaltWaterVent.parent = Blocks.basalt;
basaltWaterVent.effectColor = Color.white;
basaltWaterVent.attributes.set(Attribute.steam, 1);
basaltWaterVent.attributes.set(Attribute.water, 1);

const basaltSO2Vent = new SteamVent("basalt-SO2-vent");
basaltSO2Vent.parent = Blocks.basalt;
//basaltWaterVent.effectColor = Color.white;
basaltSO2Vent.attributes.set(Attribute.steam, 1);
basaltSO2Vent.attributes.set(Attribute.get("SO2"), 1);

const basaltGasVent = new SteamVent("basalt-gas-vent");
basaltGasVent.parent = Blocks.basalt;
basaltGasVent.effectColor = Color.valueOf("149926");
basaltGasVent.attributes.set(Attribute.steam, 1);
basaltGasVent.attributes.set(Attribute.get("gas"), 1);



//autium
const autiumFruit = new Wall("autiumFruit");
Object.assign(autiumFruit,{
	targetable: false,
})
exports.autiumFruit = autiumFruit;

const autium2 = extend(TreeBlock,"autium-2",{
	update: true,
	targetable: false,
});
autium2.buildType = prov(() => extend(Building, {
    i: 0,
    drawSelect(){
	    this.super$drawSelect();
	    
		Drawf.dashSquare(Pal.accent, this.x, this.y, 25)
	},
	updateTile(){
		this.super$updateTile();
		
		this.i += Time.delta
		
		if(this.i >= 60 * 20){
		    this.tile.circle(2, cons(tile => {
		        if(Mathf.chance(0.25) && tile.block() == Blocks.air){
		            tile.setBlock(autiumFruit,this.team);
		        }
		    }))
		    this.i = 0
		}
	},
	write(write) {
		this.super$write(write);
		write.f(this.i);
	},
	read(read, revision) {
		this.super$read(read, revision);
		this.i = read.f();
	}
}))


const autium1 = extend(TreeBlock,"autium-1",{
    drawPlace(x, y, rotation, valid){
        this.super$drawPlace(x, y, rotation, valid);
        
        Drawf.dashSquare(Pal.accent, x * 8, y * 8, 25)
    },
    setBars() {
		this.super$setBars();
		this.addBar("growthProgress", func(e => new Bar(
			prov(() => Core.bundle.get("bar.growthProgress", Strings.fixed(e.getGrowthProgress() * 100, 0))),
			prov(() => Pal.powerBar),
			floatp(() => e.getGrowthProgress())
		)));
	}
});
autium1.buildType = prov(() => extend(Building, {
    i: 0,
    drawSelect(){
	    this.super$drawSelect();
	    
		Drawf.dashSquare(Pal.accent, this.x, this.y, 25)
	},
	updateTile(){
		this.super$updateTile();
		
		this.i += Time.delta
		
		if(this.i >= 60 * 60){
		    this.tile.setBlock(autium2,this.team);
		}
	},
	getGrowthProgress(){
	    return this.i / 3600
	},
	write(write) {
		this.super$write(write);
		write.f(this.i);
	},
	read(read, revision) {
		this.super$read(read, revision);
		this.i = read.f();
	}
}))
exports.autium1 = autium1;
Object.assign(autium1,{
    buildVisibility: BuildVisibility.shown,
    category: Category.effect,
	requirements: ItemStack.with(
		item.autiumFruit, 1,
	),
	update: true,
	researchCostMultiplier: 0.05,
	buildCostMultiplier: 50,
	targetable: false,
})

new OreBlock("ore-nickel",item.nickel);
new OreBlock("ore-manganese",item.manganese);
new OreBlock("ore-chromium", item.chromium);