const Ef = require("effect");

let reduceArmor = Stat("reduceArmor");
let disabled = Stat("disabled");
let percentDamage = Stat("percentDamage");

exports.corroding = extend(StatusEffect,"corroding",{
    update(unit, time){
		this.super$update(unit, time);
		
		if(unit.armor >= 0){
		    unit.armor -= 0.5 / 60
		}
	},
	setStats(){
		this.super$setStats();
		
		this.stats.add(reduceArmor, 0.5, StatUnit.perSecond)
	},
	damage: 0.2
});

exports.dissolved = extend(StatusEffect,"dissolved",{
    update(unit, time){
		this.super$update(unit, time);
		
		if(unit.type.outlineColor === Pal.neoplasmOutline){
			unit.damageContinuousPierce(unit.type.health / 1200)
			unit.shield = 0
			unit.abilities = []
			
			if(unit.getDuration(this) <= 10){
			    unit.apply(this, 180)
			}
		}
	},
	setStats(){
		this.super$setStats();
		
		this.stats.add(disabled, false);
		this.stats.add(percentDamage, 5, StatUnit.perSecond)
	},
	init(){
		this.opposite(StatusEffects.tarred)
	},
	effect: Fx.unitDust,
    color: Color.valueOf("b3e5fa"),
})