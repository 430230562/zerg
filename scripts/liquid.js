const status = require("zerg/status");

Liquids.arkycite.effect = status.arkyicSlow;
Liquids.neoplasm.viscosity = 0.95;
Liquids.neoplasm.spreadTarget = null;

const venous = extend(CellLiquid,"venous",Color.valueOf("9e172c"),{
    viscosity: 0.95,
	heatCapacity: 0.2,
	temperature: 0.5,
	flammability: 0,
	spreadTarget: null,
	capPuddles: false,
	coolant: false,
	
	colorFrom: Color.valueOf("e05438"),
    colorTo: Color.valueOf("7a0c15"),
})
exports.venous = venous;

const acid = extend(Liquid,"acid",Color.valueOf("84a94b"),{
	update(puddle){
		if(puddle.tile != null && puddle.tile.build != null){
			puddle.tile.build.damage(0.2)
			
			puddle.amount -= 0.5
			
			if(Mathf.chanceDelta(0.05)){
				Fx.mineSmall.at(puddle.x,puddle.y)
			}
		}
	}
});
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

const nutrient = new Liquid("nutrient",Color.valueOf("f8df70"));
exports.nutrient = nutrient;
Object.assign(nutrient,{
    viscosity: 0.5,
	temperature: 0.54,
	flammability: 0.55,
	coolant: false,
})

const dissolvant = new Liquid("dissolvant",Color.valueOf("b3e5fa"))
exports.dissolvant = dissolvant;
Object.assign(dissolvant,{
	flammability: 1.35,
	viscosity: 0.3,
	coolant: false,
	effect: status.dissolved,
})

const colchicine = new Liquid("colchicine",Color.valueOf("6e8b74"));
exports.colchicine = colchicine;
Object.assign(colchicine,{
    coolant: false
})

const naturalGas = new Liquid("natural-gas",Color.valueOf("848a86"))
exports.naturalGas = naturalGas;
Object.assign(naturalGas,{
	gas: true,
	flammability: 1.5,
	explosiveness: 1,
	coolant: false,
})

const yperite = new Liquid("yperite",Color.valueOf("92ab11"))
exports.yperite = yperite;
Object.assign(yperite,{
	gas: true,
	explosiveness: 3,
	coolant: false,
})