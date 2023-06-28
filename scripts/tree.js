const nodeRoot = TechTree.nodeRoot;
const nodeProduce = TechTree.nodeProduce
const node = TechTree.node;
const SectorComplete = Objectives.SectorComplete;
const Research = Objectives.Research;

const core = require("block/core");
const distribution = require("block/distribution");
const factory = require("block/factory");
const liquidBlock = require("block/liquidBlock");
const other = require("block/other");
const power = require("block/power");
const production = require("block/production");
const turret = require("block/turret");
const unitFactory = require("block/unitFactory");
const wall = require("block/wall");

const air = require("unit/air");
const crystive = require('unit/crystive');
const insect = require("unit/insect");
const tank = require("unit/tank");

const item = require("item");
const liquid = require("liquid");
const planet = require("planet");

planet.greavar.techTree = nodeRoot("greavar", planet.greavar, () => {
    nodeProduce(item.nickel, () => {
        nodeProduce(Items.sand, () => {
            nodeProduce(Items.silicon, () => {})
        }),
        nodeProduce(Items.coal, () => {
            nodeProduce(Items.graphite, () => {})
        }),
        nodeProduce(item.manganese, () => {
            nodeProduce(item.crystal, () => {
                nodeProduce(Liquids.water, () => {
                    nodeProduce(Liquids.neoplasm, () => {}),
                    nodeProduce(item.biomass, () => {
                        nodeProduce(item.amino, () => {
                            nodeProduce(liquid.dissolvant, () => {
                                nodeProduce(item.hypha, () => {})
                            }),
                            nodeProduce(item.sulfone, () => {})
                        }),
                        nodeProduce(item.biomassSteel, () => {})
                    })
                }),
                nodeProduce(Liquids.arkycite, () => {
                    nodeProduce(Liquids.oil, () => {})
                }),
                nodeProduce(liquid.acid, () => {
                    nodeProduce(item.salt, () => {}),
                    nodeProduce(Liquids.hydrogen, () => {})
                }),
                nodeProduce(item.energic, () => {})
            }),
            nodeProduce(item.chromium, () => {})
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
                node(other.launchPad, () => {})
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
        node(distribution.heatPipe, Seq.with(
        new Research(power.biomassReactor),
        new Research(power.extremeGenerator)
        ), () => {
            node(distribution.heatRouter, () => {})
        }),
        node(unitFactory.payloadConveyor, Seq.with(
        new Research(unitFactory.tankFactory)
        ), () => {
            node(unitFactory.payloadRouter, () => {})
        })
    }),
    node(factory.compressor, () => {
        node(factory.multiCompressor, () => {}),
        node(factory.smelter, () => {
            node(factory.incubator, () => {
                node(factory.biomassSmelter, () => {}),
                node(factory.biomassDissociator, () => {
                    node(factory.dissolvantMixer, () => {})
                }),
                node(factory.biomassFermenter, () => {})
            }),
            node(factory.charger, () => {}),
            node(factory.oilRefinery, () => {
                node(factory.arkyciteExtractor, () => {}),
                node(factory.oilDistillation, () => {})
            })
        }),
        node(factory.displacer, () => {
            node(factory.synthesizer, () => {})
        })
    }),
    node(production.nickelDrill, () => {
        node(production.manganeseDrill, () => {
            node(production.crystalCollector, () => {
                node(production.crystalDrill, () => {})
            })
        }),
        node(liquidBlock.nickelPump, () => {
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
                        node(liquidBlock.crystalConduitBridge, () => {})
                    })
                })
            })
        })
    }),
    node(power.deflagrationGenerator, () => {
        node(power.fullEffectGenerator, () => {
            node(power.pyrolysis, () => {
                node(power.biomassReactor, () => {}),
                node(power.extremeGenerator, () => {})
            }),
            node(power.crystalPanel, () => {
                node(power.crystalPanelMedium, () => {
                    node(power.crystalPanelLarge, () => {})
                })
            })
        }),
        node(power.nickelPowerNode, () => {
            node(power.nickelPowerNodeLarge, () => {}),
            node(power.nickelBattery, () => {
                node(power.nickelBatteryMedium, () => {
                    node(power.nickelBatteryLarge, () => {})
                })
            }),
            node(other.lamp, () => {}),
            node(other.repairer, () => {
                node(other.frame, () => {
                    node(other.matrix, () => {
                        node(other.clan, () => {})
                    }),
                    node(other.catalyzer, () => {})
                })
            })
        })
    }),
    node(turret.guard, () => {
        node(turret.obstruct, () => {}),
        node(turret.nexus, () => {
            node(turret.bomb, () => {}),
            node(turret.electrolyze, () => {
                node(turret.lacerate, () => {
                    node(turret.lumen, () => {}),
                    node(turret.blowtorth, () => {})
                }),
                node(turret.soak, () => {})
            })
        })
    }),
    node(unitFactory.tankFactory, () => {
        node(unitFactory.reconstructor, () => {}),
        node(tank.pioneer, () => {
            node(tank.brigadier, () => {
                node(tank.kibbler, () => {
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
            node(tank.alter, ItemStack.with(
		        Items.silicon, 50 * 50,
			    item.nickel, 20 * 50,
			    item.manganese, 40 * 50,
		    ) ,() => {
                node(tank.bewitch, ItemStack.with(
		            Items.graphite, 40 * 50,
	                Items.silicon, 50 * 50,
	                item.crystal, 30 * 50,
		        ), () => {})
            })
        }),
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
        node(unitFactory.unitIncubator, () => {
            node(unitFactory.reincubator, () => {
                node(unitFactory.laboratory, () => {})
            }),
            node(insect.buffer, () => {
                node(insect.spread, () => {}),
                node(insect.spider, () => {
                    node(insect.tarantula, () => {
                        node(insect.group, () => {})
                    }),
                    node(crystive.anatase, () => {
                        node(crystive.asbestos, () => {
                            node(crystive.quartz, () => {})
                        })
                    })
                }),
                node(insect.mosquito, () => {
                    node(insect.burst, () => {})
                })
            })
        }),
        node(unitFactory.fixPoint, () => {
            node(unitFactory.fixTurret, () => {})
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
            })
        })
    }),
    node(planet.iceField, () => {
        node(planet.valleyPlain, Seq.with(
        new SectorComplete(planet.iceField)
        ), () => {
            node(planet.coldJunction, Seq.with(
            new SectorComplete(planet.valleyPlain)
            ), () => {}),
            node(planet.crystalOutpost, Seq.with(
            new SectorComplete(planet.valleyPlain)
            ), () => {})
        })
    })
})