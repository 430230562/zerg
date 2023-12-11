Events.on(UnitDestroyEvent, e => {
	let stacks = e.unit.type.totalRequirements;
	for (let stack of stacks) {
		Vars.player.core().items.add(stack.item, stack.amount);
	}
});