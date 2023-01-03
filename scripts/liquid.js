const status = require('status')

Liquids.neoplasm.effect = status.dissimilation
Liquids.neoplasm.viscosity = 0.72;

const venom = new Liquid("venom",Color.valueOf("84a94b"));
exports.venom = venom;
Object.assign(venom, {
	effect: status.poisoning,
	viscosity: 0.8,
	heatCapacity: 0.2,
	temperature: 0.54,
	flammability: 0,
	capPuddles: false,
	coolant: false,
	hidden: true,
})

const chlorine = new Liquid("chlorine",Color.valueOf("bdde16"));
exports.chlorine = chlorine
Object.assign(chlorine,{
	gas: true,
	explosiveness: 1,
})