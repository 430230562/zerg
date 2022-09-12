const nodeRoot = TechTree.nodeRoot;
const nodeProduce = TechTree.nodeProduce
const node = TechTree.node;
const SectorComplete = Objectives.SectorComplete;
const Research = Objectives.Research;

const planet = require('planet');
const item = require('item');
const unit = require('unit');

const core = require('block/core')
const distribution = require('block/distribution');
const factory = require('block/factory');
const liquidBlock = require('block/liquidBlock');
const power = require('block/power');
const production = require('block/production');
const turret = require('block/turret');
const unitFactory = require('block/unitFactory');
const wall = require('block/wall');

nodeRoot("gredizion", planet.gredizion, () => {
	nodeProduce(item.ossature, () => {
		nodeProduce(item.nickel, () => {
			nodeProduce(item.crystal, () => {}),
			nodeProduce(item.biomassSteel, () => {})
		}),
		nodeProduce(item.organosand, () => {
			nodeProduce(item.organosilicon, () => {}),
			nodeProduce(item.methylSulfone, () => {})
		}),
		nodeProduce(item.biomass, () => {})
	}),
	node(core.ash, () => {
		node(core.albus, () => {})
	}),
	node(distribution.ossatureConveyor, () => {
		node(distribution.biomassConveyor, () => {
			node(distribution.armoredBiomassConveyor, () => {}),
			node(distribution.railway, () => {})
		}),
		node(distribution.ossatureJunction, () => {
			node(distribution.ossatureRouter, () => {
				node(distribution.ossatureDistributor, () => {}),
				node(distribution.ossatureSorter, () => {
					node(distribution.invertedOssatureSorter, () => {})
				}),
				node(distribution.ossatureOverflowGate, () => {
					node(distribution.ossatureUnderflowGate, () => {})
				}),
				node(distribution.biomassLaunchPad, () => {})
			}),
			node(distribution.ossatureBridge, () => {
				node(distribution.biomassConveyorBridge, () => {})
			})
		}),
		node(distribution.heatPipe,Seq.with(
			new Research(power.biomassReactor)
		), () => {})
	}),
	node(factory.compressor, () => {
		node(factory.hydraulicPress, () => {}),
		node(factory.smelter, () => {
			node(factory.crucible, () => {}),
			node(factory.screwCompressor, () => {
				node(factory.parallelCompressor, () => {})
			})
		}),
		node(factory.synthesizer, () => {})
	}),
	node(liquidBlock.ossaturePump, () => {
		node(liquidBlock.peristalticPump, () => {}),
		node(liquidBlock.crystalConduit, () => {
			node(liquidBlock.biomassConduit, () => {}),
			node(liquidBlock.crystalLiquidJunction, () => {
				node(liquidBlock.crystalLiquidRouter, () => {
					node(liquidBlock.crystalLiquidContainer, () => {
						node(liquidBlock.crystalLiquidTank, () => {})
					}),
					node(liquidBlock.crystalConduitBridge, () => {
						node(liquidBlock.biomassConduitBridge, () => {})
					})
				})
			})
		})
	}),
	node(power.deflagrationGenerator, () => {
		node(power.nickelPowerNode, () => {
			node(power.nickelPowerNodeLarge, () => {}),
			node(power.nickelBattery, () => {
				node(power.nickelBatteryLarge, () => {})
			})
		}),
		node(power.concentratedSolarPanel, () => {}),
		node(power.totalEffectGenerator, () => {
			node(power.biomassReactor, Seq.with(
				new SectorComplete(planet.biomassComplex)
			), () =>{
				node(power.extremeGenerator, () => {})
			})
		})
	}),
	node(production.ossatureDrill, () => {
		node(production.biomassDrill, () => {}),
		node(production.crystalCollector, () => {})
		node(production.incubator, () => {
			node(production.enrichmentIncubator, () => {})
		})
	}),
	node(turret.putrefaction, () => {
		node(turret.spark, () => {}),
		node(turret.corrosion, () => {}),
		node(turret.sputtering, () => {})
	}),
	node(unitFactory.unitIncubator, () => {
		node(unitFactory.reincubator, () => {}),
		node(unitFactory.tankFactory, () =>{
			node(unit.testVehicle, () => {
				node(unit.alter, () => {}),
				node(unit.embers, () => {}),
				node(unit.hurricane, () => {})
			})
		}),
		node(unit.spider, () => {
			node(unit.tarantula, () => {})
		}),
		node(unit.mosquito, () => {
			node(unit.acid, () => {})
		})
	}),
	node(wall.ossatureWall, () => {
		node(wall.ossatureWallLarge, () => {}),
		node(wall.crystalWall, () => {
			node(wall.crystalWallLarge, () => {})
		}),
		node(wall.biomassWall, () => {
			node(wall.biomassWallLarge, () => {}),
			node(wall.biomassDoor, () => {
				node(wall.biomassDoorLarge, () => {})
			})
		})
	}),
	node(planet.darkGreenMountains, () => {
		node(planet.crimsonPass, Seq.with(
			new SectorComplete(planet.darkGreenMountains)
		), () => {
			node(planet.biomassComplex, Seq.with(
				new SectorComplete(planet.crimsonPass)
			), () => {})
		})
	})
})