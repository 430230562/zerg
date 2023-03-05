const Ab = require("base/ability");
const Ef = require("effect");
const liquid = require("liquid");
const { alpha } = require("unit/other");

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
		this.opposite(poisoning)
	},
	effect: Fx.mineSmall,
	color: Color.valueOf("d6dbe7"),
})
exports.alkaliCorrodes = alkaliCorrodes;

const parasite = extend(StatusEffect,"parasite", {
	death(unit){
		for(let i = 0;i < (unit.maxHealth / 500);i++){
			alpha.spawn(unit.team == Team.crux ? Team.sharded : Team.crux, unit.x, unit.y);
			
			unit.tileOn().circle(2,cons(tile => {
                Puddles.deposit(tile,liquid.sporeLiquid,50);
            }))
		}
	},
	damage: 0.5,
	color: Color.valueOf("7457ce"),
	effect: Ef.spore,
});
exports.parasite = parasite;

let triggerStatus = Seq.with(parasite);

Events.on(UnitDestroyEvent, e => {
	let unit = e.unit;
	let bits = unit.statusBits();
	if (bits.isEmpty()) return;
	triggerStatus.each(status => bits.get(status.id), status => {
		status.death(unit);
	});
});