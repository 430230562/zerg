const item = require('zerg/item');
const core = require('zerg/block/core');

Planets.sun.radius = 7

const ochre = new Planet("ochre", Planets.sun, 5);
exports.ochre = ochre;
Object.assign(ochre,{
    generator: extend(SerpuloPlanetGenerator,{
		getColor(position){
			return Color.valueOf("d6a01d")
		}
	}),
	meshLoader: prov(() => new HexMesh(ochre, 5)),
	cloudMeshLoader: () => new MultiMesh(
	    new HexSkyMesh(ochre, 0, 0.5, 0.15, 5, Color.valueOf("d6a01d"), 2, 1, 0.8, 1),
	    
		new HexSkyMesh(ochre, 1, 0.48, 0.152, 5, Color.valueOf("f9f4dcbf"), 2, 0.1, 0.5, 0.26),
		new HexSkyMesh(ochre, 2, 0.52, 0.154, 5, Color.valueOf("f7e8aabf"), 2, 0.1, 0.5, 0.23),
		new HexSkyMesh(ochre, 3, 0.51, 0.156, 5, Color.valueOf("f8df72bf"), 2, 0.1, 0.5, 0.25),
		new HexSkyMesh(ochre, 4, 0.49, 0.158, 5, Color.valueOf("f8df70bf"), 2, 0.1, 0.5, 0.21),
		new HexSkyMesh(ochre, 5, 0.45, 0.160, 5, Color.valueOf("c1651abf"), 2, 0.1, 0.5, 0.19),
		new HexSkyMesh(ochre, 6, 0.53, 0.162, 5, Color.valueOf("f7de98bf"), 2, 0.1, 0.5, 0.29),
		new HexSkyMesh(ochre, 7, 0.46, 0.164, 5, Color.valueOf("f8d86abf"), 2, 0.1, 0.5, 0.26),
		new HexSkyMesh(ochre, 8, 0.54, 0.166, 5, Color.valueOf("f6deadbf"), 2, 0.1, 0.5, 0.33),
		new HexSkyMesh(ochre, 9, 0.55, 0.168, 5, Color.valueOf("fbb612bf"), 2, 0.1, 0.5, 0.25),
		new HexSkyMesh(ochre, 10, 0.47, 0.17, 5, Color.valueOf("f9f1dbbf"), 2, 0.1, 0.5, 0.31),
	),
    atmosphereColor: Color.valueOf("fca104"),
	atmosphereRadIn: 0,
	atmosphereRadOut: 0.5,
	clipRadius: 1,
	visible: true,
	bloom: false,
	accessible: false,
	alwaysUnlocked: true,
	startSector: 0,
	orbitRadius: 125,
	rotateTime: 97.9 * 60,
})

const p = extend(Planet, "ochre-rim", ochre, 0.1, {
	scale: 1,
	base: Blocks.yellowStone,
	tint: Blocks.ferricStone,
	tintThresh: 0.5,
	pieces: 400, //陨石数量
	orbitRadius: 0,
    hasAtmosphere: false,
    minZoom: 0.01,
    accessible: false,
    generator: new AsteroidGenerator(),
    meshLoader: prov(() => {
    	let meshes = new Seq();
    	let tinted = p.tint.mapColor;
    	let color = p.base.mapColor;
    	let rand = new Rand(p.id + 2);
    	for (let j = 0; j < p.pieces; j++) {
    		let v2 = new Vec2();
    		v2.setToRandomDirection().setLength(rand.random(1.45, 1.9)); //宽度
    		let v22 = new Vec2(v2.y, rand.random(-0.05, 0.05)); //厚度
    		v22.rotate(75); //倾斜角度
    		meshes.add(new MatMesh(
    			new NoiseMesh(p, j + 1, 1, 0.022 + rand.random(0.039) * p.scale, 2, 0.6, 0.38, 20, color, tinted, 3, 0.6, 0.38, p.tintThresh),
    			new Mat3D().setToTranslation(new Vec3(v2.x, v22.x, v22.y).scl(5)) //整体大小
    		));
    	};
    	return new JavaAdapter(GenericMesh, {
    		meshes: meshes.toArray(),
    		render(params, projection, transform) {
    			for (let v of this.meshes) {
    				v.render(params, projection, transform);
    			}
    		}
    	});
    })
});
//p.sectors.add(new Sector(p, new PlanetGrid.Ptile(0, 0)));

const greavar = new Planet("greavar", ochre, 1, 2);
exports.greavar = greavar;
Object.assign(greavar, {
	generator: extend(SerpuloPlanetGenerator,{
		allowLanding(sector){return false},
		getColor(position){
			var depth = Simplex.noise3d(4, 4, 0.56, 1.7, position.x, position.y, position.z) / 2;
			return Color.valueOf("3c7141").write(Color.valueOf("9cb664")).lerp(Color.valueOf("84a94b"),Mathf.clamp(Mathf.round(depth, 0.25)));
		},
		getDefaultLoadout() {
			return Schematics.readBase64("bXNjaAF4nBXLUQqAIBBF0WdKRa2lFUUfow45oBaN7b+Ey/m7sLAOrlJhWNKESRtTkYhFQ+JCTYJijazhkbvJVQGMmTxnxbAfBrN/T936CpjezwfPPBUT");
		}
	}),
	meshLoader: prov(() => new HexMesh(greavar, 4)),
	cloudMeshLoader: () => new MultiMesh(
		new HexSkyMesh(greavar, 2, 0.15, 0.13, 5, Color.valueOf("f2fff7bf"), 2, 0, 1, 0.43)
	),
	atmosphereColor: Color.valueOf("3c7141"),
	landCloudColor: Color.valueOf("3c7141"),
	atmosphereRadIn: 0,
	atmosphereRadOut: 0.2,
	camRadius: 0.5,
	visible: true,
	bloom: false,
	accessible: true,
	alwaysUnlocked: true,
	allowLaunchLoadout: true,
	allowLaunchSchematics: true,
	allowWaveSimulation: true,
	launchCapacityMultiplier: 1,
	clearSectorOnLose: false,
	startSector: 88,
	orbitRadius: 25,
	//0.1125 到 1.2375
	lightSrcFrom: 0.1,
	lightSrcTo: 0.5,
	lightDstFrom: 0,
	lightDstTo: 0.45,
	rotateTime: 34.7 * 60,
	defaultCore: core.ash,
	iconColor: Color.valueOf("3c7141"),
})
greavar.hiddenItems.addAll(
	Items.scrap,
	Items.copper,
	Items.lead,
	Items.titanium,
	Items.thorium,
	Items.plastanium,
	Items.phaseFabric,
	Items.surgeAlloy,
	Items.blastCompound,
	Items.pyratite,
	Items.metaglass,
	Items.beryllium,
	Items.tungsten,
	Items.oxide,
	Items.carbide,
	Items.fissileMatter,
	Items.dormantCyst,
);
const phurnace = new Planet("phurnace", ochre, 1, 2);
exports.phurnace = phurnace;
Object.assign(phurnace, {
	generator: extend(SerpuloPlanetGenerator,{
		allowLanding(sector){return false},
		getDefaultLoadout() {
			return Schematics.readBase64("bXNjaAF4nBXLUQqAIBBF0WdKRa2lFUUfow45oBaN7b+Ey/m7sLAOrlJhWNKESRtTkYhFQ+JCTYJijazhkbvJVQGMmTxnxbAfBrN/T936CpjezwfPPBUT");
		}
	}),
	meshLoader: prov(() => MultiMesh(
        new NoiseMesh(phurnace,0,4,0.94,1,0.0001,0.0001,0.98,Color.valueOf("d4db85"),Color.valueOf("d4db85"),1,1,1,1),
        new NoiseMesh(phurnace,0,5,0.94,4,0.85,0.7,1,Color.valueOf("ddcf95"),Color.valueOf("ddcf95"),1,1,1.8,1),
        new NoiseMesh(phurnace,0,5,0.895,4,0.9,0.7,1.5,Color.valueOf("bfa17a"),Color.valueOf("bfa17a"),4,1,1.8,1),
        new NoiseMesh(phurnace,0,5,0.83,4,0.9,0.7,2.2,Color.valueOf("3c444c"),Color.valueOf("3c444c"),4,1,0.7,1),
    )),
	cloudMeshLoader: () => new MultiMesh(
    	new HexSkyMesh(phurnace,0,3,0.1,6,Color.valueOf("ccc0235b"),3,0.3,1,0.43),
        new HexSkyMesh(phurnace,0,-2,0.034,5,Color.valueOf("ccc0235b"),0.4,0.2,0.2,0.4)
	),
	atmosphereColor: Color.valueOf("ffffff"),
	landCloudColor: Color.valueOf("d4db85"),
	atmosphereRadIn: 0,
	atmosphereRadOut: 0.2,
	camRadius: 0.75,
	visible: true,
	bloom: false,
	accessible: true,
	alwaysUnlocked: true,
	allowLaunchLoadout: true,
	allowLaunchSchematics: true,
	allowWaveSimulation: true,
	launchCapacityMultiplier: 1,
	clearSectorOnLose: false,
	startSector: 88,
	orbitRadius: 15,
	defaultEnv: Env.terrestrial | Env.groundOil,
	//0.1125 到 1.2375
	lightSrcFrom: 0.1,
	lightSrcTo: 0.5,
	lightDstFrom: 0,
	lightDstTo: 0.45,
	rotateTime: 34.7 * 60,
	defaultCore: core.ash,
	iconColor: Color.valueOf("ddcf95"),
})

Planets.serpulo.hiddenItems.addAll(
	item.amino,
	item.nickel,
	item.manganese,
	item.chromium,
	item.iridium,
	item.crystal,
	item.energic,
	item.organistal,
	item.biomassSteel,
	item.salt,
	item.autiumFruit,
);
Planets.erekir.hiddenItems.addAll(
	item.biomass,
	item.amino,
	item.biosulfide,
	item.informationCore,
	item.nickel,
	item.manganese,
	item.chromium,
	item.iridium,
	item.crystal,
	item.energic,
	item.organistal,
	item.biomassSteel,
	item.salt,
	item.autiumFruit,
);