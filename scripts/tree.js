const nodeRoot = TechTree.nodeRoot;
const nodeProduce = TechTree.nodeProduce
const node = TechTree.node;
const SectorComplete = Objectives.SectorComplete;
const Research = Objectives.Research;

const core = require("zerg/block/core");
const distribution = require("zerg/block/distribution");
const enemy = require("zerg/block/enemy");
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

const content = [distribution, env, factory, liquidBlock, logic, other, power, production, turret, unitFactory, wall, air, crystive, insect, tank];

for (let j in content) {
    for (let i in content[j]) {
        content[j][i].researchCostMultiplier = 0.5;
    }
}

const item = require("zerg/item");
const liquid = require("zerg/liquid");
const planet = require("zerg/planet");
const sector = require("zerg/sector");

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
                            nodeProduce(Items.pyratite, () => {
                                nodeProduce(item.biosulfide, () => {
                                    nodeProduce(item.informationCore, () => {})
                                })
                            })
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
        new Research(other.frame)), () => {
            node(core.annular, Seq.with(
            new Research(other.matrix)), () => {})
        })
    }),
    node(distribution.nickelConveyor, () => {
        node(distribution.manganeseConveyor, () => {
            node(other.box, () => {
                node(other.godown, () => {}),
                node(other.unloader, () => {}),
                node(other.launchPad, Seq.with(
                new SectorComplete(sector.crystallineMountains)), () => {})
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
            node(distribution.nickelBridge, () => {
                node(distribution.biosulfideBridge, () => {})
            })
        }),
        node(distribution.heatPipe, () => {
            node(distribution.heatRouter, () => {})
        })
    }),
    node(factory.compressor, () => {
        node(factory.multiCompressor, () => {}),
        node(factory.smelter, () => {
            node(factory.incubator, Seq.with(
            new SectorComplete(sector.plantation032)), () => {
                node(factory.incubatorLarge, () => {})
                node(factory.biomassSmelter, () => {
                    node(factory.lowTemperatureSmelter, () => {}),
                    node(factory.iridiumPurification, Seq.with(
                    new SectorComplete(sector.rustRift),
                    new Research(factory.coarseExtractor)), () => {})
                }),
                node(factory.biomassDissociator, () => {
                    node(factory.dissolvantMixer, () => {
                        node(factory.dissolvantMixerLarge, () => {}),
                        node(factory.compositeDissolvantMixer, () => {})
                    }),
                    node(factory.biomassAcidification, () => {
                        node(factory.biomassFermenter, () => {})
                    })
                })
            }),
            node(factory.charger, Seq.with(
            new SectorComplete(sector.crystallineMountains)), () => {
                node(factory.chargeStation, () => {}),
                node(factory.organistalSynthesizer, Seq.with(
                new SectorComplete(sector.experimental035),
                new Research(factory.synthesizer)), () => {})
            })
        }),
        node(factory.evaporator, () => {
            node(factory.synthesizer, () => {
                node(factory.additiver, () => {}),
                node(factory.pyratiteHeater, () => {
                    node(factory.biosulfideHeater, () => {})
                })
            }),
            node(factory.disintegrator, () => {
                node(factory.coarseExtractor, () => {})
            }),
            node(factory.juicer, () => {})
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
            node(liquidBlock.screwPump, () => {
                node(liquidBlock.centrifugalPump, () => {
                    node(liquidBlock.syphonPump, () => {})
                })
            }),
            node(liquidBlock.crystalConduit, () => {
                node(liquidBlock.organistalConduit, () => {
                    node(liquidBlock.armoredConduit, () => {})
                }),
                node(liquidBlock.crystalLiquidJunction, () => {
                    node(liquidBlock.crystalLiquidRouter, () => {
                        node(liquidBlock.crystalLiquidContainer, () => {
                            node(liquidBlock.crystalLiquidTank, () => {})
                        }),
                        node(liquidBlock.crystalConduitBridge, () => {
                            node(liquidBlock.biosulfideConduitBridge, () => {})
                        })
                    })
                })
            }),
            node(liquidBlock.waterExtractor, () => {})
        }),
        node(production.picker, Seq.with(
        new SectorComplete(sector.plantation032)), () => {
            node(env.autium1, () => {})
        })
    }),
    node(power.deflagrationGenerator, () => {
        node(power.fullEffectGenerator, () => {
            node(power.pyrolysis, () => {
                node(power.biomassReactor, () => {}),
                node(power.neutralizers, () => {})
            }),
            node(power.extremeGenerator, () => {}),
            node(power.crystalPanel, () => {
                node(power.crystalPanelLarge, () => {})
            })
        }),
        node(power.nickelPowerNode, () => {
            node(power.nickelPowerNodeLarge, () => {
                node(power.reflectTower, () => {})
            }),
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
            node(other.pulseMender, () => {
                node(other.resurrection, Seq.with(
                new Research(other.matrix)), () => {}),
                node(other.frame, () => {
                    node(other.matrix, Seq.with(
                    new SectorComplete(sector.crystallineMountains)), () => {
                        node(other.clan, () => {})
                    }),
                    node(other.catalyzer, () => {})
                })
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
                        node(turret.lumen, () => {}),
                        node(turret.serum, () => {})
                    }),
                    node(turret.skyfire, () => {
                        node(turret.sange, () => {
                            node(turret.aurora, () => {}),
                            node(turret.extinction, () => {})
                        }),
                        node(turret.comet, () => {})
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
        node(unitFactory.airFactory, () => {
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
                node(unitFactory.laboratory, Seq.with(
                new SectorComplete(sector.experimental035), ), () => {
                    node(unitFactory.conflater, () => {})
                })
            }),
            node(insect.apoptoticBody, () => {
                node(insect.glycocalyx, () => {
                    node(insect.hydrolase, () => {})
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
                node(wall.iridiumWall, () => {
                    node(wall.iridiumWallLarge, () => {})
                }),
                node(wall.biomassWall, () => {
                    node(wall.biomassWallLarge, () => {})
                }),
                node(wall.biosulfideWall, () => {
                    node(wall.biosulfideWallLarge, () => {}),
                    node(other.explosive, () => {})
                })
            }),
            node(wall.manganeseDoor, () => {
                node(wall.manganeseDoorLarge, () => {})
            })
        })
    }),
    node(sector.iceField, () => {
        node(sector.valleyPlain, Seq.with(
        new SectorComplete(sector.iceField)), () => {
            node(sector.plantation032, Seq.with(
            new SectorComplete(sector.valleyPlain)), () => {
                node(sector.crystallineMountains, Seq.with(
                new SectorComplete(sector.plantation032), ), () => {
                    node(sector.experimental035, Seq.with(
                    new SectorComplete(sector.crystallineMountains), ), () => {}),
                    node(sector.spikeValley, Seq.with(
                    new SectorComplete(sector.experimental035)), () => {})
                })
            }),
            node(sector.coldJunction, Seq.with(
            new SectorComplete(sector.valleyPlain)), () => {
                node(sector.rustRift, Seq.with(
                new SectorComplete(sector.coldJunction),
                new SectorComplete(sector.spikeValley)), () => {
                    node(sector.twilightSea, Seq.with(
                    new SectorComplete(sector.rustRift)), () => {})
                }),
                node(sector.fallOutpost, Seq.with(
                new SectorComplete(sector.coldJunction),
                new Research(unitFactory.reconstructor)), () => {})
            })
        })
    }),
    node(enemy.synthesis, () => {
        node(enemy.prokaryote, () => {
            node(enemy.eukaryote, () => {})
        }),
        node(enemy.sieveTube, () => {
            node(enemy.sieveJunction, () => {
                node(enemy.sieveBridge, () => {
                    node(enemy.carrierLoader, Seq.with(
                    new Research(enemy.nutrientExchanger)), () => {}),
                    node(enemy.carrierUnloader, Seq.with(
                    new Research(enemy.nutrientExchanger)), () => {})
                }),
                node(enemy.sieveRouter, () => {})
            }),
            node(enemy.vessel, () => {
                node(enemy.stiffenVessel, () => {}),
                node(enemy.vesselJunction, () => {
                    node(enemy.vesselBridge, () => {}),
                    node(enemy.vesselRouter, () => {
                        node(enemy.vacuole, () => {})
                    })
                })
            })
        }),
        node(enemy.hematopoieticTissue, Seq.with(
        new Research(enemy.vessel)), () => {
            node(enemy.respiratoryTissue, () => {
                node(enemy.photosyntheticTissue, () => {}),
                node(enemy.filterTissue, () => {}),
                node(enemy.nutrientExchanger, () => {})
            })
        }),
        node(enemy.incubator, Seq.with(
        new Research(enemy.photosyntheticTissue),
        new Research(enemy.nutrientExchanger)), () => {
            node(insect.haploid, () => {}),
            node(insect.lysosome, () => {}),
            node(insect.apoptoticBody, () => {}),
            node(insect.glycocalyx, () => {})
        }),
        node(enemy.contractileVacuole, Seq.with(
        new Research(enemy.filterTissue), ), () => {
            node(enemy.acidMist, () => {}),
            node(enemy.synapse, Seq.with(
            new Research(enemy.nutrientExchanger)), () => {})
        })
    })
});