const item = require('zerg/item')
const liquid = require('zerg/liquid')
const status = require('zerg/status')

Attribute.add("biomass");

Blocks.arkyicStone.attributes.set(Attribute.get("biomass"), 0.35);

Blocks.ice.attributes.set(Attribute.water, 0.6);
Blocks.iceSnow.attributes.set(Attribute.water, 0.55);
Blocks.snow.attributes.set(Attribute.water, 0.5);

const flower = new Prop("flower");
Object.assign(flower,{
	variants: 6,
	hasShadow: false,
})

//tundra
const tundraWall = new StaticWall("tundra-wall");
tundraWall.mapColor = Color.valueOf("928b00")

const tundra = new Floor("tundra");
tundra.mapColor = Color.valueOf("787300")
tundra.attributes.set(Attribute.water, 0.35);

//arkycite
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

//neoplasm
const neoplasmWall = new StaticWall("neoplasm-wall");

const neoplasmStone = new Floor("neoplasm-stone");
neoplasmStone.attributes.set(Attribute.get("biomass"), 0.45);

const neoplasmSand = new Floor("neoplasm-sand")
Object.assign(neoplasmSand, {
	itemDrop: Items.sand,
	playerUnmineable: true,
	speedMultiplier: 0.95,
	variants: 3,
})
neoplasmSand.attributes.set(Attribute.get("biomass"), 0.45);

const sandNeoplasm = new Floor("sand-neoplasm");
Object.assign(sandNeoplasm, {
	speedMultiplier: 0.8,
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
	speedMultiplier: 0.5,
	variants: 0,
	status: status.none,
	statusDuration: 120,
	liquidDrop: Liquids.neoplasm,
	isLiquid: true,
	cacheLayer: CacheLayer.water,
	albedo: 0.9,
	supportsOverlay: true,
	liquidMultiplier: 0.5,
	drownTime: 60 * 1.2,
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

const acidPool = new Floor("acid-pool");
Object.assign(acidPool,{
	speedMultiplier: 0.5,
	variants: 0,
	status: status.corroding,
	statusDuration: 120,
	liquidDrop: liquid.acid,
	isLiquid: true,
	cacheLayer: CacheLayer.water,
	albedo: 0.9,
	supportsOverlay: true,
	liquidMultiplier: 0.5,
})

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

const lichen = extend(Block,"lichen",{
    update: true,
    buildVisibility: BuildVisibility.shown,
    category: Category.effect,
    requirements: ItemStack.with(
		item.lichen, 1,
	),
    targetable: false,
    setBars() {
		this.super$setBars();
		this.addBar("growthProgress", func(e => new Bar(
			prov(() => Core.bundle.get("bar.growthProgress", Strings.fixed(e.getGrowthProgress() * 100, 0))),
			prov(() => Pal.powerBar),
			floatp(() => e.getGrowthProgress())
		)));
	},
	canReplace(other){
	    return true
	}
});
exports.lichen = lichen;
lichen.buildType = prov(() => extend(Building, {
    i: 0,
    updateTile(){
        this.super$updateTile();
		
		this.i += Time.delta
		
		if(this.i >= 60 * 60){
		    this.tile.circle(2, cons(tile => {
		        if(tile != null && Mathf.chance(0.15) && tile.block() == Blocks.air){
		            tile.setBlock(lichen,this.team);
		        }
		    }))
		    
		    this.i = 0
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

new OreBlock("ore-nickel",item.nickel);
new OreBlock("ore-manganese",item.manganese);
new OreBlock("ore-chromium", item.chromium);