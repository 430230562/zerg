const nodeRoot = TechTree.nodeRoot;
const nodeProduce = TechTree.nodeProduce
const node = TechTree.node;
const SectorComplete = Objectives.SectorComplete;
const Research = Objectives.Research;

const planet = require('planet');
const item = require('item');
const distribution = require('block/distribution');
const factory = require('block/factory');
const power = require('block/power');
const production = require('block/production');
const turret = require('block/turret');
const unitFactory = require('block/unitFactory');
const wall = require('block/wall');
const unit = require('unit');

nodeRoot("深绿虫巢", planet.darkGreen, () => {
	node(planet.darkGreenMountains, Seq.with(
	new SectorComplete(SectorPresets.biomassFacility),
	new Research(Blocks.pneumaticDrill)
	), () => {
		node(planet.crimsonPass, Seq.with(
		new SectorComplete(planet.darkGreenMountains),
		new Research(factory.centrifuge),
		new Research(production.incubator)
		), () => {
			node(planet.biomassComplex, Seq.with(
			new SectorComplete(planet.crimsonPass)
			), () => {})
		}),
		node(planet.discoveryStation, Seq.with(
		new SectorComplete(planet.darkGreenMountains)
		), () => {})
	}),
	nodeProduce(item.organosand, () => {
		nodeProduce(item.organosilicon, () => {
			nodeProduce(item.biomassSteel, () => {}),
			nodeProduce(item.biomass, () => {
				nodeProduce(item.methylSulfone, () => {})
			})
		})
	}),
	node(factory.smelter, () => {
		node(factory.centrifuge, () => {
			node(factory.extractor, () => {})
		}),
		node(production.biomassDrill, () => {
			node(production.incubator, Seq.with(
			new SectorComplete(planet.darkGreenMountains)
			), () => {
				node(production.enrichmentIncubator, () => {}),
				node(factory.compressor, () => {
					node(factory.parallelCompressor, () => {})
				}),
				node(factory.synthesizer, () => {})
			}),
			node(production.impactBiomassDrill, () => {})
		})
	}),
	node(power.concentratedSolarPanel, () => {
		node(power.biomassReactor, Seq.with(
		new Research(production.incubator),
		new SectorComplete(planet.biomassComplex)
		), () => {
			node(power.extremeGenerator, Seq.with(
			new Research(Blocks.differentialGenerator)
			), () => {})
		})
	}),
	node(unitFactory.unitIncubator, Seq.with(
	new SectorComplete(planet.crimsonPass),
	new Research(production.incubator),
	), () => {
		node(unit.spider, () => {}),
		node(unit.mosquito, () => {}),
		node(unitFactory.tankFactory, Seq.with(
		), () => {
			node(unit.testVehicle, () => {
				node(unit.alter, Seq.with(
				new SectorComplete(planet.discoveryStation)
				), () => {})
			})
		})
	}),
	node(wall.biomassWall, () => {
		node(wall.biomassWallLarge, () => {}),
		node(wall.biomassDoor, () => {
			node(wall.biomassDoorLarge, () => {})
		})
	}),
	node(distribution.biomassConveyor, () => {
		node(distribution.biomassConveyorBridge, () => {}),
		node(distribution.armoredBiomassConveyor, () => {
			node(distribution.railway, () => {
				node(distribution.biomassLaunchPad, () => {})
			})
		}),
		node(distribution.biomassConduit, () => {
			node(distribution.peristalticPump, () => {}),
			node(distribution.biomassConduitBridge, () => {}),
			node(distribution.heatPipe, Seq.with(
			new Research(power.biomassReactor)
			), () => {})
		})
	}),
	node(turret.interferenceRay, Seq.with(
	new SectorComplete(planet.discoveryStation)
	), () => {})
})