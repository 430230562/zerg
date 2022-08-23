const status = require('status')

Liquids.neoplasm.heatCapacity = 0.2
Liquids.neoplasm.effect = status.dissimilation

const venom = new CellLiquid("venom",Color.valueOf("84a94b"));
exports.venom = venom;
Object.assign(venom, {
	effect: status.poisoning,
	viscosity: 0.85,
	heatCapacity: 0.2,
	temperature: 0.54,
	flammability: 0,
	capPuddles: false,
	coolant: false,
	hidden: true,
	maxSpread: 1.5,
	spreadConversion: 0.3,
	spreadDamage: 0.7,
	
	moveThroughBlocks: true,
	
	spreadTarget: Liquids.water,
	colorFrom: Color.valueOf("4 84a94b"),
	colorTo: Color.valueOf("98ba53"),
})