const item = require('item');
const core = require('block/core');

const greavar = new Planet("greavar", Planets.sun, 1, 2);
Object.assign(greavar, {
	generator: extend(SerpuloPlanetGenerator,{
		allowLanding(sector){return false},
		getColor(position){
			var depth = Simplex.noise3d(4, 4, 0.56, 1.7, position.x, position.y, position.z) / 2;
			return Color.valueOf("9cb664").write(Color.valueOf("3c7141")).lerp(Color.valueOf("84a94b"),Mathf.clamp(Mathf.round(depth, 0.25)));
		},
		getDefaultLoadout() {
		    return Schematics.readBase64("bXNjaAF4nBXLUQqAIBBF0WdKRa2lFUUfow45oBaN7b+Ey/m7sLAOrlJhWNKESRtTkYhFQ+JCTYJijazhkbvJVQGMmTxnxbAfBrN/T936CpjezwfPPBUT");
	    },
	}),
	meshLoader: prov(() => new HexMesh(greavar, 4)),
	cloudMeshLoader: () => new MultiMesh(
		new HexSkyMesh(greavar, 2, 0.15, 0.14, 5, Color.valueOf("f2ff90bf"), 2, 0.42, 1, 0.43)
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
	launchCapacityMultiplier: 0.75,
	clearSectorOnLose: false,
	startSector: 88,
	orbitRadius: 65,
	rotateTime: 34.7 * 60,
	//0.1125 到 1.2375
	lightSrcFrom: 0.1,
	lightSrcTo: 0.5,
	lightDstFrom: 0,
	lightDstTo: 0.45,
	defaultCore: core.ash,
	iconColor: Color.valueOf("3c7141"),
})
greavar.totalRadius += 2.6;
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
	Items.dormantCyst
);
exports.greavar = greavar;

Planets.serpulo.hiddenItems.addAll(
	item.salt,
	item.biomass,
	item.nickel,
	item.manganese,
	item.crystal,
	item.chromium,
	item.biomassSteel,
	item.sulfone,
	item.amino,
	item.hypha,
	item.energic,
	item.data
);
Planets.erekir.hiddenItems.addAll(
	item.salt,
	item.biomass,
	item.nickel,
	item.manganese,
	item.crystal,
	item.chromium,
	item.biomassSteel,
	item.sulfone,
	item.amino,
	item.hypha,
	item.energic,
	item.data
);

const iceField = SectorPreset("iceField", greavar, 88);
exports.iceField = iceField
Object.assign(iceField,{
    captureWave: 10,
	difficulty: 1,
    addStartingItems: true,
	alwaysUnlocked: true,
	startWaveTimeMultiplier: 3,
})

const valleyPlain = new SectorPreset("valleyPlain", greavar, 2);
exports.valleyPlain = valleyPlain;
Object.assign(valleyPlain, {
	captureWave: 15,
	difficulty: 2,
})

const coldJunction = new SectorPreset("coldJunction", greavar, 18);
exports.coldJunction = coldJunction;
Object.assign(coldJunction,{
    captureWave: 25,
	difficulty: 4,
})

const crystalOutpost = new SectorPreset("crystalOutpost", greavar, 27);
exports.crystalOutpost = crystalOutpost;
Object.assign(crystalOutpost,{
    captureWave: 45,
	difficulty: 5,
})