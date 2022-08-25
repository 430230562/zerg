const organosand = new Item("organosand", Color.valueOf("c9693d"));
exports.organosand = organosand;
Object.assign(organosand, {
	flammability: 0.12,
	lowPriority: true,
	buildable: false,
})

const biomass = new Item("biomass", Color.valueOf("84a94b"));
exports.biomass = biomass;
Object.assign(biomass, {
	flammability: 1.35
})

const biomassSteel = new Item("biomass-steel", Color.valueOf("98ba53"));
exports.biomassSteel = biomassSteel;
Object.assign(biomassSteel, {
	hardness: 3,
	cost: 1.2,
	healthScaling: 0.1,
})

const organosilicon = new Item("organosilicon", Color.valueOf("da5760"));
exports.organosilicon = organosilicon;
Object.assign(organosilicon, {
	cost: 1,
	healthScaling: 0.1,
})

const methylSulfone = new Item("methyl-sulfone", Color.valueOf("ede892"));
exports.methylSulfone = methylSulfone;
Object.assign(methylSulfone, {
	flammability: 1.9,
	explosiveness: 0.4,
	buildable: false,
})