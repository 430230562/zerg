const item = require("zerg/item");

const message = new MessageBlock("message")
exports.message = message;
Object.assign(message,{
	buildVisibility: BuildVisibility.shown,
	category: Category.logic,
	requirements: ItemStack.with(
		Items.graphite, 5,
		item.nickel, 5,
	),
})

const switchBlock = new SwitchBlock("switch");
exports.switchBlock = switchBlock;
Object.assign(switchBlock,{
	buildVisibility: BuildVisibility.shown,
	category: Category.logic,
	requirements: ItemStack.with(
		Items.graphite, 10,
		item.nickel, 5,
	),
})

const processor = new LogicBlock("processor");
exports.processor = processor;
Object.assign(processor,{
	instructionsPerTick: 13,
	range: 8 * 22,
	size: 2,
	buildVisibility: BuildVisibility.shown,
	category: Category.logic,
	requirements: ItemStack.with(
		Items.graphite, 100,
		Items.silicon, 150,
		item.nickel, 100,
		item.manganese, 75,
	),
})

const memoryCell = new MemoryBlock("memory-cell");
exports.memoryCell = memoryCell;
Object.assign(memoryCell,{
	size: 1,
	buildVisibility: BuildVisibility.shown,
	category: Category.logic,
	requirements: ItemStack.with(
		Items.graphite, 30,
		Items.silicon, 30,
		item.nickel, 30,
	),
})