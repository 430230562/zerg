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