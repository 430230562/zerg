const {greavar} = require('zerg/planet');

const iceField = SectorPreset("iceField", greavar, 88);
exports.iceField = iceField
Object.assign(iceField,{
	captureWave: 10,
	difficulty: 1,
	addStartingItems: true,
	alwaysUnlocked: true,
	startWaveTimeMultiplier: 3,
})

const valleyPlain = new SectorPreset("valleyPlain", greavar, 2);
exports.valleyPlain = valleyPlain;
Object.assign(valleyPlain, {
	captureWave: 15,
	difficulty: 2,
	startWaveTimeMultiplier: 2.5,
})

const plantation032 = new SectorPreset("plantation032", greavar, 32);
exports.plantation032 = plantation032;
Object.assign(plantation032,{
    captureWave: 25,
	difficulty: 4,
	startWaveTimeMultiplier: 2.2,
})

const coldJunction = new SectorPreset("coldJunction", greavar, 18);
exports.coldJunction = coldJunction;
Object.assign(coldJunction,{
	captureWave: 30,
	difficulty: 5,
	startWaveTimeMultiplier: 3,
})

const crystallineMountains = new SectorPreset("crystallineMountains", greavar , 22);
exports.crystallineMountains = crystallineMountains;
Object.assign(crystallineMountains,{
    captureWave: 12,
	difficulty: 5,
})

const crystalOutpost = new SectorPreset("crystalOutpost", greavar, 27);
exports.crystalOutpost = crystalOutpost;
Object.assign(crystalOutpost,{
	captureWave: 45,
	difficulty: 6,
	startWaveTimeMultiplier: 1,
})

const experimental035 = new SectorPreset("experimental035",greavar,35);
exports.experimental035 = experimental035;
Object.assign(experimental035,{
    captureWave: 40,
	difficulty: 6,
	startWaveTimeMultiplier: 3,
})

const spikeValley = new SectorPreset("spikeValley",greavar,49)
exports.spikeValley = spikeValley;
Object.assign(spikeValley,{
    captureWave: 35,
	difficulty: 6,
	startWaveTimeMultiplier: 2,
})

const rustRift = new SectorPreset("rustRift",greavar,83);
exports.rustRift = rustRift;
Object.assign(rustRift,{
    captureWave: 50,
	difficulty: 8,
	startWaveTimeMultiplier: 3,
})

const twilightSea = new SectorPreset("twilightSea",greavar,17);
exports.twilightSea = twilightSea;
Object.assign(twilightSea,{
	captureWave: 105,
	difficulty: 8,
	startWaveTimeMultiplier: 4,
})

const fallOutpost = new SectorPreset("fallOutpost",greavar,51);
exports.fallOutpost = fallOutpost;
Object.assign(fallOutpost,{
    captureWave: -1,
	difficulty: 6,
})

/*const borderMines = new SectorPreset("borderMines",greavar,67);
exports.borderMines = borderMines;
Object.assign(borderMines,{
    difficulty: 6,
})


})*/