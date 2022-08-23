const sS = require("base/sectorSize");

const darkGreen = new JavaAdapter(Planet, {
	load() {
		this.meshLoader = prov(() => new HexMesh(darkGreen, 4.5));
		this.super$load();
	}
}, "darkGreen", Planets.sun, 1);

sS.planetGrid(darkGreen, 2.4);

Object.assign(darkGreen, {
	generator: new SerpuloPlanetGenerator(),
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
})
darkGreen.totalRadius += 2.6;
darkGreen.ruleSetter = r => {
	r.attributes.set(Attribute.heat, -0.3);
	r.attributes.set(Attribute.water, -0.2);
	r.attributes.set(Attribute.spores, -0.15);
	r.attributes.set(Attribute.light, -0.3);
}
darkGreen.hiddenItems.addAll(Items.erekirItems).removeAll(Items.serpuloItems);
exports.darkGreen = darkGreen;

const darkGreenMountains = new SectorPreset("darkGreenMountains", darkGreen, 10);
exports.darkGreenMountains = darkGreenMountains;
Object.assign(darkGreenMountains, {
	captureWave: 30,
	difficulty: 4,
	addStartingItems: true,
})

const crimsonPass = new SectorPreset("crimsonPass", darkGreen, 37);
exports.crimsonPass = crimsonPass;
Object.assign(crimsonPass, {
	captureWave: 40,
	difficulty: 4,
})

const biomassComplex = new SectorPreset("biomassComplex", darkGreen, 69);
exports.biomassComplex = biomassComplex;
Object.assign(biomassComplex, {
	captureWave: 50,
	difficulty: 5,
})