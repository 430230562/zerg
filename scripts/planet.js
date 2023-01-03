const item = require('item');
const core = require('block/core');

const gredizion = new Planet("gredizion", Planets.sun, 1, 2);
Object.assign(gredizion, {
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
	meshLoader: prov(() => new HexMesh(gredizion, 4)),
	cloudMeshLoader: () => new MultiMesh(
		new HexSkyMesh(gredizion, 2, 0.15, 0.14, 5, Color.valueOf("f2ff90bf"), 2, 0.42, 1, 0.43)
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
	launchCapacityMultiplier: 0.75,
	clearSectorOnLose: true,
	startSector: 2,
	orbitRadius: 75,
	rotateTime: 17 * 60,
	defaultCore: core.ash,
	iconColor: Color.valueOf("3c7141"),
})
gredizion.totalRadius += 2.6;
gredizion.hiddenItems.addAll(
	Items.scrap,
	Items.copper,
	Items.lead,
	Items.titanium,
	Items.thorium,
	Items.silicon,
	Items.plastanium,
	Items.phaseFabric,
	Items.surgeAlloy,
	Items.sporePod,
	Items.sand,
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
exports.gredizion = gredizion;

Planets.serpulo.hiddenItems.addAll(
	item.organosand,
	item.salt,
	item.biomass,
	item.ossature,
	item.nickel,
	item.manganese,
	item.crystal,
	item.uranium,
	item.biomassSteel,
	item.organosilicon,
	item.methylSulfone,
	item.alkali
);
Planets.erekir.hiddenItems.addAll(
	item.organosand,
	item.salt,
	item.biomass,
	item.ossature,
	item.nickel,
	item.manganese,
	item.crystal,
	item.uranium,
	item.biomassSteel,
	item.organosilicon,
	item.methylSulfone,
	item.alkali
);

const arkyciteMountain = new SectorPreset("arkyciteMountain", gredizion, 2);
exports.arkyciteMountain = arkyciteMountain;
Object.assign(arkyciteMountain, {
	captureWave: 20,
	difficulty: 2,
	addStartingItems: true,
	alwaysUnlocked: true,
	startWaveTimeMultiplier: 3,
})

const crimsonPass = new SectorPreset("crimsonPass", gredizion, 37);
exports.crimsonPass = crimsonPass;
Object.assign(crimsonPass, {
	captureWave: 20,
	difficulty: 3,
})

const wreckage52 = new SectorPreset("wreckage52",gredizion,52);
exports.wreckage52 = wreckage52;
Object.assign(wreckage52,{
	captureWave: 45,
	difficulty: 6,
	startWaveTimeMultiplier: 4,
})

const desert = new SectorPreset("desert",gredizion,70)
exports.desert = desert;
Object.assign(desert,{
    captureWave: 0,
	difficulty: 6,
})

const outpost = SectorPreset("outpost", gredizion, 20);
exports.outpost = outpost;
Object.assign(outpost, {
	captureWave: 0,
	difficulty: 5,
})

const breeding = SectorPreset("breeding", gredizion, 49);
exports.breeding = breeding;
Object.assign(breeding, {
	captureWave: 0,
	difficulty: 5,
})

const observation32 = new SectorPreset("observation32", gredizion, 32);
exports.observation32 = observation32;
Object.assign(observation32,{
	captureWave: 55,
	difficulty: 7,
	startWaveTimeMultiplier: 1,
})