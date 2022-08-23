const status = require("status")

const neoplasmRain = new RainWeather("neoplasm-rain");
exports.neoplasmRain = neoplasmRain;
neoplasmRain.attrs.set(Attribute.light, -0.1);
neoplasmRain.attrs.set(Attribute.water, -0.5);
Object.assign(neoplasmRain, {
	status: status.dissimilation,
	sound: Sounds.rain,
	soundVol: 0.35,
	liquid: Liquids.neoplasm,
	color: Color.valueOf("c33e2b"),
})

const snowstorm = new ParticleWeather("snowstorm");
exports.snowstorm = snowstorm;
snowstorm.attrs.set(Attribute.light, -0.15),
snowstorm.attrs.set(Attribute.water, -0.2),
snowstorm.attrs.set(Attribute.heat, -0.35),
Object.assign(snowstorm, {
	color: Color.valueOf("6ecdec"),
	noiseColor: Color.valueOf("6ecdec"),
	particleRegion: "particle",
	drawNoise: true,
	useWindVector: true,
	sizeMax: 140,
	sizeMin: 70,
	minAlpha: 0,
	maxAlpha: 0.2,
	density: 1500,
	baseSpeed: 11.8,
	opacityMultiplier: 0.35,
	force: 1.5,
	sound: Sounds.wind,
	soundVol: 1.2,
	
	status: status.extremelyFrozen,
})