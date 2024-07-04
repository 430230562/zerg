const nodeRoot = TechTree.nodeRoot;
const nodeProduce = TechTree.nodeProduce
const node = TechTree.node;
const SectorComplete = Objectives.SectorComplete;
const Research = Objectives.Research;

const core = require("zerg/block/core");
const distribution = require("zerg/block/distribution");
const env = require("zerg/block/environment");
const factory = require("zerg/block/factory");
const liquidBlock = require("zerg/block/liquidBlock");
const logic = require('zerg/block/logic');
const other = require("zerg/block/other");
const power = require("zerg/block/power");
const production = require("zerg/block/production");
const turret = require("zerg/block/turret");
const unitFactory = require("zerg/block/unitFactory");
const wall = require("zerg/block/wall");

const air = require("zerg/unit/air");
const crystive = require('zerg/unit/crystive');
const insect = require("zerg/unit/insect");
const tank = require("zerg/unit/tank");

const item = require("zerg/item");
const liquid = require("zerg/liquid");
const planet = require("zerg/planet");

planet.greavar.techTree = nodeRoot("greavar", planet.greavar, () => {
	nodeProduce(item.nickel, () => {
		nodeProduce(Items.coal, () => {
			nodeProduce(Items.graphite, () => {
			    nodeProduce(item.autiumFruit, () => {
					nodeProduce(liquid.colchicine, () => {})
				})
			}),
			nodeProduce(Items.sand, () => {
			    nodeProduce(Items.silicon, () => {})
		    })
		}),
		nodeProduce(item.manganese, () => {
			nodeProduce(item.crystal, () => {
				nodeProduce(Liquids.water, () => {
					nodeProduce(Liquids.neoplasm, () => {}),
					nodeProduce(item.biomass, () => {
					    nodeProduce(liquid.acid, () => {}),
        				nodeProduce(liquid.naturalGas, () => {
        					nodeProduce(liquid.yperite, () => {})
        				}),
						nodeProduce(item.amino, () => {
							nodeProduce(liquid.dissolvant, () => {}),
							nodeProduce(Items.pyratite, () => {})
						}),
						nodeProduce(item.biomassSteel, () => {})
					}),
					nodeProduce(item.salt, () => {})
				}),
				nodeProduce(item.energic, () => {
				    nodeProduce(item.organistal, () => {})
				})
			}),
			nodeProduce(item.chromium, () => {
				nodeProduce(Liquids.slag, () => {
					nodeProduce(item.iridium, () => {})
				})
			})
		})
	}),
	node(core.ash, () => {
		node(core.albus, Seq.with(
		new Research(other.frame)
		), () => {
			node(core.annular, Seq.with(
			new Research(other.matrix)
			), () => {})
		})
	}),
	node(distribution.nickelConveyor, () => {
		node(distribution.manganeseConveyor, () => {
			node(other.box, () => {
				node(other.unloader, () => {}),
				node(other.launchPad, Seq.with(
				new SectorComplete(planet.crystalOutpost)
				), () => {})
			}),
			node(distribution.biomassConveyor, () => {}),
			node(distribution.armoredConveyor, () => {})
		}),
		node(distribution.junction, () => {
			node(distribution.router, () => {
				node(distribution.distributor, () => {}),
				node(distribution.overflowGate, () => {
					node(distribution.underflowGate, () => {}),
					node(distribution.sorter, () => {
						node(distribution.invertedSorter, () => {})
					})
				})
			}),
			node(distribution.nickelBridge, () => {})
		}),
		node(distribution.heatPipe, () => {
			node(distribution.heatRouter, () => {})
		})
	}),
	node(factory.compressor, () => {
		node(factory.multiCompressor, () => {}),
		node(factory.smelter, () => {
			node(factory.incubator, Seq.with(
			    new SectorComplete(planet.plantation032)
			), () => {
			    node(factory.incubatorLarge, () => {})
				node(factory.biomassSmelter, () => {
				    node(factory.lowTemperatureSmelter, () => {}),
				    node(factory.iridiumPurification, () => {})
				}),
				node(factory.biomassDissociator, () => {
					node(factory.dissolvantMixer, () => {}),
					node(factory.biomassAcidification, () => {
					    node(factory.biomassFermenter, () => {})
					})
				})
			}),
			node(factory.charger, Seq.with(
			    new SectorComplete(planet.crystalOutpost)
			), () => {
			    node(factory.organistalSynthesizer, Seq.with(
			        new SectorComplete(planet.experimental035),
			        new Research(factory.synthesizer)
			    ), () => {})
			})
		}),
		node(factory.evaporator, () => {
			node(factory.synthesizer, () => {
			    node(factory.additiver, () => {})
			}),
			node(factory.disintegrator, () => {}),
			node(factory.juicer, () => {
			    node(factory.lichenDisintegrator, () => {})
			})
		})
	}),
	node(production.nickelDrill, () => {
		node(production.manganeseDrill, () => {
			node(production.crystalCollector, () => {
				node(production.crystalDrill, () => {
					node(production.biomassDrill, () => {})
				}),
				node(production.geothermalExploration, () => {})
			})
		}),
		node(liquidBlock.nickelPump, () => {
			node(liquidBlock.screwPump, () => {}),
			node(liquidBlock.crystalConduit, () => {
				node(liquidBlock.organistalConduit, () => {
					node(liquidBlock.armoredConduit, () => {})
				}),
				node(liquidBlock.crystalLiquidJunction, () => {
					node(liquidBlock.crystalLiquidRouter, () => {
						node(liquidBlock.crystalLiquidContainer, () => {
							node(liquidBlock.crystalLiquidTank, () => {})
						}),
						node(liquidBlock.crystalConduitBridge, () => {})
					})
				})
			}),
			node(liquidBlock.waterExtractor, () => {})
		}),
		node(production.picker,Seq.with(
		    new SectorComplete(planet.plantation032)
		), () => {
		    node(env.autium1, () => {}),
		    node(env.lichen, () => {})
		})
	}),
	node(power.deflagrationGenerator, () => {
		node(power.fullEffectGenerator, () => {
			node(power.pyrolysis, () => {
				node(power.biomassReactor, () => {}),
				node(power.extremeGenerator, () => {})
			}),
			node(power.crystalPanel, () => {
				node(power.crystalPanelLarge, () => {})
			})
		}),
		node(power.nickelPowerNode, () => {
			node(power.nickelPowerNodeLarge, () => {}),
			node(power.nickelBattery, () => {
				node(power.nickelBatteryMedium, () => {
					node(power.nickelBatteryLarge, () => {})
				})
			}),
			node(other.lamp, () => {
				node(logic.switchBlock, () => {
					node(logic.message, () => {
						node(logic.memoryCell, () => {})
					}),
					node(logic.processor, () => {})
				})
			}),
			node(other.frame,Seq.with(
			    new SectorComplete(planet.crystalOutpost)
			), () => {
				node(other.matrix, () => {
					node(other.clan, () => {}),
					node(other.resurrection, () => {})
				}),
				node(other.catalyzer, () => {})
			})
		})
	}),
	node(turret.guard, () => {
		node(turret.obstruct, () => {
		    node(turret.nexus, () => {
		        node(turret.soak, () => {
					node(turret.deluge, () => {
					    node(turret.blowtorth, () => {})
					}),
					node(turret.midnight, () => {})
				})
		    }),
		    node(turret.bomb, () => {
		        node(turret.spiral, () => {
		            node(turret.lacerate, () => {
		                node(turret.lumen, () => {})
		            }),
		            node(turret.skyfire, () => {
		                node(turret.sange, () => {
		                    node(turret.aurora, () => {})
		                }),
		                node(turret.comet,() => {})
		            })
		        })
		    })
		})
	}),
	node(unitFactory.tankFactory, () => {
		node(unitFactory.reconstructor, () => {
			node(unitFactory.primeReconstructor, () => {
			    node(unitFactory.seniorReconstructor, () => {})
			})
		}),
		node(tank.pioneer, () => {
			node(tank.brigadier, () => {
				node(tank.shredder, () => {
					node(tank.purge, () => {
						node(tank.fearless, () => {})
					})
				})
			}),
			node(tank.gale, () => {
				node(tank.hurricane, () => {
					node(tank.tornado, () => {})
				})
			}),
			node(tank.alter, () => {})
		}),
		node(unitFactory.airFactory,() => {
			node(air.mist, () => {
				node(air.cirrus, () => {
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
		node(unitFactory.unitIncubator, () => {
			node(unitFactory.reincubator, () => {
				node(unitFactory.hyperplasia, () => {
					node(unitFactory.airMetamorphosiser, () => {}),
					node(unitFactory.legsMetamorphosiser, () => {})
				}),
				node(unitFactory.laboratory, () => {
					node(unitFactory.conflater, () => {})
				})
			}),
			node(insect.apoptoticBody, () => {
				node(insect.glycocalyx, () => {
				    node(insect.cytokine, () => {})
				}),
				node(insect.haploid, () => {
					node(insect.diploid, () => {
						node(insect.triploid, () => {
							node(insect.bivalents, () => {})
						})
					}),
					node(crystive.anatase, () => {
						node(crystive.asbestos, () => {
						    node(crystive.quartz, () => {
						        node(crystive.prism, () => {})
						    })
						})
					})
				}),
				node(insect.ribosome, () => {
					node(insect.lysosome, () => {
						node(insect.trichocyst, () => {
						    node(insect.centrosome, () => {})
						})
					})
				})
			})
		}),
		node(unitFactory.payloadConveyor, () => {
			node(unitFactory.payloadRouter, () => {})
			node(unitFactory.fixPoint, () => {
				node(unitFactory.fixTurret, () => {}),
				node(unitFactory.assemblerModule, () => {}),
				node(unitFactory.buildingConstructor, () => {})
			})
		})
	}),
	node(wall.nickelWall, () => {
		node(wall.nickelWallLarge, () => {}),
		node(wall.manganeseWall, () => {
			node(wall.manganeseWallLarge, () => {}),
			node(wall.crystalWall, () => {
				node(wall.crystalWallLarge, () => {}),
				node(wall.energicWall, () => {
					node(wall.energicWallLarge, () => {})
				})
			}),
			node(wall.chromiumWall, () => {
				node(wall.chromiumWallLarge, () => {}),
				node(wall.biomassWall, () => {
					node(wall.biomassWallLarge, () => {})
				})
			}),
			node(wall.manganeseDoor, () => {
				node(wall.manganeseDoorLarge, () => {})
			})
		})
	}),
	node(planet.iceField, () => {
	    node(planet.valleyPlain, Seq.with(
	        new SectorComplete(planet.iceField)
	    ), () => {
	        node(planet.plantation032, Seq.with(
	            new SectorComplete(planet.valleyPlain)
	        ), () => {
	            node(planet.crystalOutpost, Seq.with(
	                new SectorComplete(planet.plantation032)
	            ), () => {
	                node(planet.experimental035, Seq.with(
	                    new SectorComplete(planet.crystalOutpost)
	                ), () => {}),
	                node(planet.spikeValley, Seq.with(
	                    new SectorComplete(planet.crystalOutpost),
	                    new SectorComplete(planet.coldJunction)
	                ), () => {})
	            })
	        }),
	        node(planet.coldJunction, Seq.with(
	            new SectorComplete(planet.valleyPlain)
	        ), () => {})
	    })
	})
})