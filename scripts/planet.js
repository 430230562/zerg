const item = require('item');
const core = require('block/core');

const gredizion = new Planet("gredizion", Planets.sun, 1, 2.4);
gredizion.meshLoader = prov(() => new HexMesh(gredizion, 4.5));
Object.assign(gredizion, {
	generator: extend(SerpuloPlanetGenerator,  {
	allowLoading(Landing){return false}
	}),
	atmosphereColor: Color.valueOf("3c7141"),
	landCloudColor: Color.valueOf("d11e3a"),
	atmosphereRadIn: 0.02,
	atmosphereRadOut: 0.1,
	visible: true,
	bloom: false,
	accessible: true,
	alwaysUnlocked: true,
	startSector: 10,
	orbitRadius: 75,
	orbitSpacing: 2,
	orbitTime: 247 * 60,
	rotateTime: 27 * 60,
	updateLighting: false,
	defaultCore: core.ash,
})
gredizion.totalRadius += 2.6;
gredizion.ruleSetter = r => {
	r.attributes.set(Attribute.heat, -0.3);
	r.attributes.set(Attribute.water, -0.2);
	r.attributes.set(Attribute.spores, -0.15);
	r.attributes.set(Attribute.light, -0.3);
}
gredizion.hiddenItems.addAll(
	Items.scrap,
	Items.copper,
	Items.lead,
	Items.titanium,
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
Planets.serpulo.hiddenItems.addAll(
	item.organosand,
	item.biomass,
	item.ossature,
	item.nickel,
	item.crystal,
	item.biomassSteel,
	item.organosilicon,
	item.methylSulfone
);
Planets.erekir.hiddenItems.addAll(
	item.organosand,
	item.biomass,
	item.ossature,
	item.nickel,
	item.crystal,
	item.biomassSteel,
	item.organosilicon,
	item.methylSulfone
);
exports.gredizion = gredizion;

const darkGreenMountains = new SectorPreset("darkGreenMountains", gredizion, 10);
exports.darkGreenMountains = darkGreenMountains;
Object.assign(darkGreenMountains, {
	captureWave: 20,
	difficulty: 2,
	addStartingItems: true,
})

const crimsonPass = new SectorPreset("crimsonPass", gredizion, 37);
exports.crimsonPass = crimsonPass;
Object.assign(crimsonPass, {
	captureWave: 40,
	difficulty: 4,
})

const biomassComplex = new SectorPreset("biomassComplex", gredizion, 69);
exports.biomassComplex = biomassComplex;
Object.assign(biomassComplex, {
	captureWave: 50,
	difficulty: 5,
})