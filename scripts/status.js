const Ef = require('effect');

const poisoning = new StatusEffect("poisoning");
exports.poisoning = poisoning;
Object.assign(poisoning, {
	color: Color.valueOf("84a94b"),
	damage: 25 / 60,
	effect: Fx.mineSmall,
	damageMultiplier: 1,
	healthMultiplier: 1,
	speedMultiplier: 0.85,
	reloadMultiplier: 0.85,
	buildSpeedMultiplier: 0.85,
})

const dissimilation = extend(StatusEffect, "dissimilation", {
	update(unit, time){
		this.super$update(unit,time);
		if(unit.type.outlineColor != Pal.neoplasmOutline){
			unit.damageContinuousPierce(0.15);
		}else{
			unit.heal(0.5);
			if(unit.maxHealth <= unit.type.health * 1.3){
			    unit.maxHealth += 0.25
			}
		}
	}
});
exports.dissimilation = dissimilation
Object.assign(dissimilation, {
	color: Color.valueOf("c33e2b"),
	effect: Ef.dissimilation,
	damageMultiplier: 1.15,
	healthMultiplier: 1,
	speedMultiplier: 1.15,
	reloadMultiplier: 1.15,
	buildSpeedMultiplier: 1,
})

const alkaliCorrodes = extend(StatusEffect,"alkali-corrodes",{
	update(unit,time){
		this.super$update(unit,time);
		if(unit.type.outlineColor === Pal.neoplasmOutline){
			unit.damageContinuousPierce(1.25);
			if(unit.maxHealth >= unit.type.health * 0.6){
				unit.maxHealth -= 0.5
			}
		}
	},
	init(){
		this.opposite(poisoning,dissimilation)
	},
	effect: Fx.mineSmall,
	color: Color.valueOf("d6dbe7"),
})
exports.alkaliCorrodes = alkaliCorrodes;