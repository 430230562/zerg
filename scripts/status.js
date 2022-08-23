const poisoning = new StatusEffect("poisoning");
exports.poisoning = poisoning;
Object.assign(poisoning, {
	color: Color.valueOf("84a94b"),
	damage: 0.25,
	effect: Fx.mineSmall,
	damageMultiplier: 0.95,
	healthMultiplier: 0.95,
	speedMultiplier: 0.95,
	reloadMultiplier: 0.95,
	buildSpeedMultiplier: 0.95,
})
const effect1 = Object.assign(new ParticleEffect(), {
	line: true,
	particles: 5,
	lifetime: 15,
	length: 5,
	cone: -360,
	lenFrom: 5,
	lenTo: 0,
	colorFrom: Color.valueOf("e8803f"),
	colorTo: Color.valueOf("8c1225"),
})

const dissimilation = extend(StatusEffect, "dissimilation", {
	update(unit, time) {
		if (Math.random() > 0.8) {effect1.at(unit)}
		if (unit.type.outlineColor != Pal.neoplasmOutline) {
			unit.damageContinuousPierce(0.15);
		} else {
			unit.heal(0.5);
			unit.maxHealth = unit.type.health * 1.5
			if (unit.health < unit.type.health) {
				if (Math.random() > 0.78) {Fx.neoplasmHeal.at(unit)}
			}
		}
	}
});
exports.dissimilation = dissimilation
Object.assign(dissimilation, {
	color: Color.valueOf("c33e2b"),
	effect: Fx.none,
	damageMultiplier: 1,
	healthMultiplier: 1,
	speedMultiplier: 1,
	reloadMultiplier: 1.15,
	buildSpeedMultiplier: 1,
})

const extremelyFrozen = extend(StatusEffect, "extremely-frozen", {
	update(unit, time) {
		if (Math.random() <= 0.25) {Fx.freezing.at(unit)}
		if (unit.type.lightColor != Pal.techBlue) {
			unit.damageContinuousPierce(0.15)
		} else {
			unit.maxHealth = unit.type.health * 1.5,
			unit.heal(0.3)
		}
	},
	init(){
		this.opposite(StatusEffects.burning, StatusEffects.melting)
	}
})
exports.extremelyFrozen = extremelyFrozen;
Object.assign(extremelyFrozen, {
	color: Color.valueOf("6ecdec"),
	effect: Fx.freezing,
	damageMultiplier: 1,
	healthMultiplier: 0.2,
	speedMultiplier: 0.2,
	reloadMultiplier: 0.2,
	buildSpeedMultiplier: 0.2,
	dragMultiplier: 0.05
})