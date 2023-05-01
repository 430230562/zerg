const Ef = require("effect");

let reduceArmor = Stat("reduceArmor");

exports.corroding = extend(StatusEffect,"corroding",{
    i:false,
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

exports.hyphaSlowed = extend(StatusEffect,"hypha-slowed",{
    healthMultiplier: 0.8,
    speedMultiplier: 0.4,
    effect: Ef.hyphaSlowed,
    color: Color.valueOf("7457ce")
})