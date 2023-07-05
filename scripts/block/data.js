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

const soilAnalyzer = extend(AttributeCrafter, "soilAnalyzer", {
    hasItems: true,
    hasLiquids: false,
    hasPower: true,
    size: 2,
    outputItem: new ItemStack(item.data, 1),
    craftTime: 60 * 20,
    attribute: Attribute.get("data"),
    baseEfficiency: 0,
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
