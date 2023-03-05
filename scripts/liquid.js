const Ef = require('effect')
const status = require("status")

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

const sporeLiquid = new CellLiquid("spore-liquid",Color.valueOf("7457ce"))
exports.sporeLiquid = sporeLiquid;
Object.assign(sporeLiquid,{
    colorFrom: Color.valueOf("9e78dc"),
    colorTo: Color.valueOf("5541b1"),
    coolant: false,
    viscosity: 0.8,
	heatCapacity: 0.2,
	temperature: 0.2,
	flammability: 0.5,
	capPuddles: false,
	effect: status.parasite,
	spreadTarget: Liquids.neoplasm,
})
sporeLiquid.canStayOn.addAll(Liquids.water,Liquids.oil,Liquids.neoplasm);