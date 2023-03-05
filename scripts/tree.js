const nodeRoot = TechTree.nodeRoot;
const nodeProduce = TechTree.nodeProduce
const node = TechTree.node;
const SectorComplete = Objectives.SectorComplete;
const Research = Objectives.Research;

const planet = require('planet');
const item = require('item');
const liquid = require('liquid');

const insect = require('unit/insect');
const tank = require('unit/tank');
const air = require('unit/air');

const core = require('block/core')
const distribution = require('block/distribution');
const factory = require('block/factory');
const liquidBlock = require('block/liquidBlock');
const other = require('block/other');
const power = require('block/power');
const production = require('block/production');
const turret = require('block/turret');
const unitFactory = require('block/unitFactory');
const wall = require('block/wall');

planet.gredizion.techTree = nodeRoot("gredizion", planet.gredizion, () => {
	nodeProduce(item.ossature, () => {
		nodeProduce(item.nickel, () => {
			nodeProduce(item.crystal, () => {
			    nodeProduce(Liquids.water, () => {
			        nodeProduce(Liquids.oil, () => {
			            nodeProduce(Items.sporePod, () => {
			                nodeProduce(liquid.sporeLiquid, () => {})
			            })
			        })
			    }),
			    nodeProduce(item.crelectal,() => {})
			}),
			nodeProduce(item.manganese, () => {
				nodeProduce(item.biomassSteel, () => {}),
				nodeProduce(item.uranium, () => {})
			})
		}),
		nodeProduce(item.organosand, () => {
			nodeProduce(item.organosilicon, () => {
				nodeProduce(item.biomass, () => {
					nodeProduce(item.sulfone, () => {})
				})
			}),
			nodeProduce(item.salt, () => {
				nodeProduce(item.alkali, () => {}),
				nodeProduce(liquid.chlorine, () => {
					nodeProduce(item.halogenated, () => {})
				}),
				nodeProduce(Liquids.hydrogen,() => {})
			})
		})
	}),
	node(core.ash, () => {
		node(core.albus, () => {
			node(core.annular, () => {})
		})
	}),
	node(distribution.ossatureConveyor, () => {
		node(distribution.manganeseConveyor, () => {
			node(distribution.armoredConveyor, () => {
				node(distribution.biomassConveyor, () => {})
			}),
			node(other.launchPad, () => {}),
			node(unitFactory.payloadConveyor, () => {
				node(unitFactory.payloadRouter, () => {})
			})
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
				node(other.box, () => {
					node(other.unloader, () => {})
				})
			}),
			node(distribution.ossatureBridge, () => {
				node(distribution.halogenatedBridge, () => {})
			})
		}),
		node(distribution.heatPipe,Seq.with(
		new Research(power.biomassReactor)
		), () => {
		    node(distribution.heatRouter, () => {})
		})
	}),
	node(factory.compressor, () => {
		node(factory.hydraulicPress, () => {
			node(factory.centrifuge, () => {})
		}),
		node(factory.smelter, () => {
			node(factory.crucible, () => {}),
			node(factory.sieve, () => {
				node(factory.electrolyzer, () => {
					node(factory.addition, () => {
					    node(factory.oilPyrolysis, () => {})
					})
				}),
				node(factory.flocculant, () => {})
			}),
			node(factory.screwCompressor, () => {
			    node(factory.sporeCompressor, () => {
			        node(factory.isolater, () => {})
			    })
			}),
			node(factory.charger, () => {})
		}),
		node(factory.synthesizer, () => {
			node(factory.crystalSynthesizer, () => {})
		})
	}),
	node(liquidBlock.ossaturePump, () => {
		node(liquidBlock.screwPump, () => {}),
		node(liquidBlock.crystalConduit, () => {
			node(liquidBlock.manganeseConduit, () => {
				node(liquidBlock.armoredConduit, () => {})
			}),
			node(liquidBlock.crystalLiquidJunction, () => {
				node(liquidBlock.crystalLiquidRouter, () => {
					node(liquidBlock.crystalLiquidContainer, () => {
						node(liquidBlock.crystalLiquidTank, () => {})
					}),
					node(liquidBlock.crystalConduitBridge, () => {
						node(liquidBlock.halogenatedConduitBridge, () => {})
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
			}),
			node(other.repairer, () => {
				node(other.catalyzer,Seq.with(
				new SectorComplete(planet.wreckage52)
				), () => {
					node(other.interdict, () => {})
				})
			}),
			node(other.lamp, () => {})
		}),
		node(power.totalEffectGenerator, () => {
			node(power.pyrolysis, () => {}),
			node(power.uraniumReactor, () => {
				node(power.biomassReactor, Seq.with(
				new SectorComplete(planet.wreckage52)
				), () =>{
					node(power.extremeGenerator, () => {})
				})
			})
		}),
		node(power.crystalPanel, () => {
			node(power.crystalPanelLarge, () => {})
		})
	}),
	node(production.ossatureDrill, () => {
		node(production.crystalCollector, () => {})
		node(production.manganeseDrill, () => {
			node(production.neoplasmExtractor, Seq.with(
			new SectorComplete(planet.crimsonPass)
			), () => {
				node(production.chlorineExtractor, () => {})
			}),
			node(production.crystalDrill, () => {
				node(production.deepDrilling, () => {})
			})
		}),
		node(production.incubator, () => {})
	}),
	node(turret.putrefaction, () => {
		node(turret.spark, () => {
			node(turret.current, () => {
				node(turret.misfire, () => {}),
				node(turret.lacerate, () => {
					node(turret.disintegrate, () => {}),
					node(turret.focusing, () => {})
				})
			})
		}),
		node(turret.nexus, () => {
			node(turret.corrosion, () => {
				node(turret.meteorite, () => {}),
				node(turret.crackCrystal, () => {
					node(turret.tearing, () => {}),
					node(turret.lumen, () => {})
				})
			}),
			node(turret.blowtorth, () => {
				node(turret.hypertoxic, () => {})
			})
		}),
		node(turret.sputtering, () => {
			node(turret.velox, () => {})
		})
	}),
	node(unitFactory.unitIncubator, () => {
		node(insect.buffer, () => {
			node(insect.spider, () => {}),
			node(insect.mosquito, () => {})
		}),
		node(unitFactory.unitIncubatorLarge, () => {
			node(insect.tarantula, () => {}),
			node(insect.concuss, () => {}),
			node(unitFactory.primeUnitIncubator, () => {
				node(insect.group, () => {}),
				node(insect.cicada, () => {}),
				node(insect.pildelet, () => {})
			})
		}),
		node(unitFactory.tankFactory, () => {
			node(unitFactory.repairPoint, () => {}),
			node(unitFactory.airFactory, () => {
				node(air.mist, () => {
					node(air.thoud, () => {
						node(air.cloud, () => {})
					}),
					node(air.electron, () => {
						node(air.inductance, () => {
							node(air.ampere, () => {})
						})
					}),
					node(air.phantom, () => {
					    node(air.shadow, () => {})
					})
				})
			}),
			node(unitFactory.reconstructor, () => {
				node(unitFactory.primeReconstructor, () => {})
			}),
			node(tank.pioneer, () => {
				node(tank.brigadier, () => {
					node(tank.kibbler, () => {})
				}),
				node(tank.alter, () => {}),
				node(tank.hurricane, () => {
					node(tank.typhoon, () => {
						node(tank.storm, () => {})
					})
				})
			})
		})
	}),
	node(wall.ossatureWall, () => {
		node(wall.ossatureWallLarge, () => {}),
		node(wall.crystalWall, () => {
			node(wall.crystalWallLarge, () => {}),
			node(wall.crelectalWall, () => {
			    node(wall.crelectalWallLarge, () => {})
			}),
			node(wall.mixedWall, () => {
				node(wall.mixedWallLarge, () => {})
			})
		}),
		node(wall.manganeseWall, () => {
			node(wall.manganeseWallLarge, () => {}),
			node(wall.biomassWall, () => {
				node(wall.biomassWallLarge, () => {}),
				node(wall.biomassDoor, () => {
					node(wall.biomassDoorLarge, () => {})
				})
			})
		})
	}),
	node(planet.arkyciteMountain, () => {
		node(planet.crimsonPass, Seq.with(
		new SectorComplete(planet.arkyciteMountain)
		), () => {
			node(planet.outpost, Seq.with(
			new SectorComplete(planet.crimsonPass)
			), () => {
				node(planet.observation32, Seq.with(
				new SectorComplete(planet.outpost)
				), () => {
				    node(planet.wreckage52,Seq.with(
			        new SectorComplete(planet.observation32)
			        ), () => {
			            node(planet.valleyDespair,Seq.with(
			            new SectorComplete(planet.wreckage52)
			            ), () => {
			                node(planet.sporeRift,Seq.with(
			                    new SectorComplete(planet.valleyDespair)
			                ),() => {})
			            }),
			            node(planet.uraniumSmelting,Seq.with(
			            new SectorComplete(planet.wreckage52)
			            ), () => {})
			        })
				})
			})
			node(planet.breeding, Seq.with(
			new SectorComplete(planet.crimsonPass)
			), () => {})
		})
	})
})