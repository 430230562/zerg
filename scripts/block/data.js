const item = require('item');

const atmosphericAnalyzer = extend(GenericCrafter, "atmospheric-analyzer", {
    hasItems: true,
    hasLiquids: false,
    hasPower: true,
    size: 2,
    outputItem: new ItemStack(item.data, 1),
    craftTime: 60 * 15,
    buildVisibility: BuildVisibility.shown,
    category: Category.logic,
    requirements: ItemStack.with(
        Items.graphite, 25,
        item.nickel, 25,
    ),
    canPlaceOn(tile, team, rotation) {
        return (Vars.state.teams.get(team).getCount(this) < 1 && tile.block() == Blocks.air)
    }
});
exports.atmosphericAnalyzer = atmosphericAnalyzer;
atmosphericAnalyzer.consumePower(0.25);

const soilAnalyzer = extend(AttributeCrafter, "soil-analyzer", {
    hasItems: true,
    hasLiquids: false,
    hasPower: true,
    size: 2,
    outputItem: new ItemStack(item.data, 1),
    craftTime: 60 * 20,
    attribute: Attribute.get("data"),
    baseEfficiency: 0,
    maxBoost: 3,
    buildVisibility: BuildVisibility.shown,
    category: Category.logic,
    requirements: ItemStack.with(
        Items.graphite, 125,
        Items.silicon, 100,
        item.nickel, 105,
    ),
    canPlaceOn(tile, team, rotation) {
        return (Vars.state.teams.get(team).getCount(this) < 1 && tile.block() == Blocks.air)
    }
})
exports.soilAnalyzer = soilAnalyzer
soilAnalyzer.consumePower(0.65);

const waterAnalyzer = extend(GenericCrafter,"water-analyzer",{
    hasItems: true,
    hasLiquids: false,
    hasPower: true,
    size: 3,
    outputItem: new ItemStack(item.data, 1),
    craftTime: 60 * 10,
    buildVisibility: BuildVisibility.shown,
    category: Category.logic,
    requirements: ItemStack.with(
        Items.graphite, 75,
        Items.silicon, 75,
        item.nickel, 105,
        item.crystal, 100,
    ),
    canPlaceOn(tile, team, rotation) {
        return (Vars.state.teams.get(team).getCount(this) < 1 && tile.block() == Blocks.air && (tile.floor() == Blocks.water || tile.floor() == Blocks.deepwater  || tile.floor() == Blocks.sandWater))
    }
});
exports.waterAnalyzer = waterAnalyzer;
waterAnalyzer.consumePower(0.75);