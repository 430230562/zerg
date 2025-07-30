const biomass = new Item("biomass", Color.valueOf("84a94b"));
exports.biomass = biomass;
Object.assign(biomass, {
	flammability: 1.5
})

const amino = new Item("amino",Color.valueOf("d6dbe7"));
exports.amino = amino;
Object.assign(amino,{})

const biosulfide = new Item("biosulfide", Color.valueOf("ed5126"));
exports.biosulfide = biosulfide;
Object.assign(biosulfide,{
    flammability: 0.8,
    explosiveness: 1.2,
})

const informationCore = new Item("information-core");
exports.informationCore = informationCore;

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

const chromium = new Item("chromium",Color.valueOf("e45018"));
exports.chromium = chromium;
Object.assign(chromium,{
    hardness: 4,
	cost: 1.5,
	healthScaling: 0.75,
})

const iridium = new Item("iridium",Color.valueOf("c9dae3"));
exports.iridium = iridium;
Object.assign(iridium,{
    hardness: 5,
    cost: 1.5,
	healthScaling: 0.5,
})

const crystal = new Item("crystal", Color.valueOf("7e8ae6"));
exports.crystal = crystal;
Object.assign(crystal, {
	hardness: 3,
	cost: 2,
	healthScaling: 0.25,
})

const energic = new Item("energic",Color.valueOf("fa7f7f"));
exports.energic = energic
Object.assign(energic,{
    cost: 1.5,
	healthScaling: 1.5,
	explosiveness: 0.4,
	charge:1,
})

const organistal = new Item("organistal",Color.valueOf("f9c116"));
exports.organistal = organistal;
Object.assign(organistal,{
	cost: 3,
	healthScaling: 0.5,
})

const biomassSteel = new Item("biomass-steel", Color.valueOf("98ba53"));
exports.biomassSteel = biomassSteel;
Object.assign(biomassSteel, {
	cost: 1.25,
	healthScaling: 0.5,
})

const sulfideSand = new Item("sulfide-sand",Color.valueOf("bfa17a"))

const lignite = new Item("lignite",Color.valueOf("8b5a2b"));
exports.lignite = lignite;
Object.assign(lignite,{
    flammability: 0.6,
    hardness: 2,
})

const salt = new Item("salt",Color.valueOf("c3c1bb"));
exports.salt = salt;
Object.assign(salt,{})

const autiumFruit = new Item("autium-fruit",Color.valueOf("6e8b74"));
exports.autiumFruit = autiumFruit;