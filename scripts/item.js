const organosand = new Item("organosand", Color.valueOf("c9693d"));
exports.organosand = organosand;
Object.assign(organosand, {
	flammability: 0.12,
	lowPriority: true,
	buildable: false,
})

const salt = new Item("salt",Color.valueOf("c3c1bb"));
exports.salt = salt;
Object.assign(salt,{
	buildable: false,
})

const biomass = new Item("biomass", Color.valueOf("84a94b"));
exports.biomass = biomass;
Object.assign(biomass, {
	flammability: 1.55,
	buildable: false,
})

const ossature = new Item("ossature", Color.valueOf("bcf6ff"));
exports.ossature = ossature;
Object.assign(ossature, {
	hardness: 2,
	cost: 0.5,
	alwaysUnlocked: true
})

const nickel = new Item("nickel", Color.valueOf("00c49b"));
exports.nickel = nickel
Object.assign(nickel, {
	hardness: 2,
	cost: 0.5,
	alwaysUnlocked: true
})

const manganese = new Item("manganese", Color.valueOf("ecaae2"))
exports.manganese = manganese;
Object.assign(manganese, {
	hardness: 3,
	cost: 1.2,
})

const crystal = new Item("crystal", Color.valueOf("7e8ae6"));
exports.crystal = crystal;
Object.assign(crystal, {
	hardness: 3,
	cost: 2,
	healthScaling: 0.5,
})

const uranium = new Item("uranium",Color.valueOf("40a06f"));
exports.uranium = uranium;
Object.assign(uranium, {
	cost: 1.1,
	healthScaling: 0.75,
	radioactivity: 1.2,
	hardness: 4,
})

const organosilicon = new Item("organosilicon", Color.valueOf("da5760"));
exports.organosilicon = organosilicon;
Object.assign(organosilicon, {
	cost: 1,
	healthScaling: 0.1,
})

const biomassSteel = new Item("biomass-steel", Color.valueOf("98ba53"));
exports.biomassSteel = biomassSteel;
Object.assign(biomassSteel, {
	cost: 1.25,
	healthScaling: 0.5,
})

const halogenated = new Item("halogenated",Color.valueOf("9277cc"))
exports.halogenated = halogenated;
Object.assign(halogenated,{
	cost: 1.5,
	healthScaling: 0.75,
})

const sulfone = new Item("sulfone", Color.valueOf("ede892"));
exports.sulfone = sulfone;
Object.assign(sulfone, {
	flammability: 1.9,
	explosiveness: 0.4,
	buildable: false,
})

const alkali = new Item("alkali",Color.valueOf("d6dbe7"))
exports.alkali = alkali;
Object.assign(alkali,{
	buildable: false,
})