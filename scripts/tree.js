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
        new Research(other.wire)
        ), () => {
            node(core.annular, Seq.with(
            new Research(other.matrix)
            ), () => {})
        })
    }),
    node(distribution.nickelConveyor, () => {
        node(distribution.manganeseConveyor, () => {
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
        node(other.box, () => {
            node(other.unloader, () => {}),
            node(other.launchPad, () => {})
        })
    }),
    node(factory.compressor, () => {
        node(factory.multiCompressor, () => {}),
        node(factory.smelter, Seq.with(
        new SectorComplete(planet.siliconPond)
        ), () => {
            node(factory.biomassSmelter, () => {}),
            node(factory.incubator, () => {
                node(factory.biomassDissociator, () => {
                    node(factory.dissolvantMixer, () => {})
                })
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
                node(other.wire, () => {
                    node(other.matrix, () => {
                        node(other.curtain, () => {})
                    }),
                    node(other.catalyzer, () => {})
                })
            })
        })
    }),
    node(turret.guard, () => {
        node(turret.obstruct, () => {}),
        node(turret.nexus, () => {
            node(turret.bomb, () => {})
        })
    }),
    node(unitFactory.tankFactory, () => {
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
                }),
                node(tank.alter, () => {})
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
            })
        })
    }),
    node(planet.valleyPlain, () => {
        node(planet.siliconPond, Seq.with(
        new SectorComplete(planet.valleyPlain)
        ), () => {})
    })
})