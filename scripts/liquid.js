const status = require("status");

Liquids.neoplasm.spreadTarget = null;

const acid = new Liquid("acid",Color.valueOf("84a94b"));
exports.acid = acid;
Object.assign(acid, {
	effect: status.corroding,
	viscosity: 0.8,
	heatCapacity: 0.2,
	temperature: 0.54,
	flammability: 0,
	capPuddles: false,
	coolant: false,
})

const dissolvant = new Liquid("dissolvant",Color.valueOf("ffffff"))
exports.dissolvant = dissolvant;
Object.assign(dissolvant,{
    flammability: 1.35,
    viscosity: 0.3,
})