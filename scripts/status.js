let armorReduce = Stat("armorReduce");
let disabled = Stat("disabled");
let percentDamage = Stat("percentDamage");

const corroding = extend(StatusEffect,"corroding",{
	update(unit, time){
		this.super$update(unit, time);
		
		if(unit.armor >= 0){
			unit.armor -= 0.5 / 60
		}
	},
	setStats(){
		this.super$setStats();
		
		this.stats.add(armorReduce, 0.5, StatUnit.perSecond)
	},
	init(){
	    this.affinity(StatusEffects.shocked, (unit, result, time) => {
	        unit.damagePierce(17);
	    })
	},
	damage: 0.2,
});
exports.corroding = corroding;

const dissolved = extend(StatusEffect,"dissolved",{
	update(unit, time){
		this.super$update(unit, time);
		
		if(unit.type.outlineColor === Pal.neoplasmOutline){
			unit.damageContinuousPierce(unit.type.health / 1200)
			unit.shield = 0
			unit.speedMultiplier = 0.2
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
exports.dissolved = dissolved

const poisoned = extend(StatusEffect,"poisoned",{
	color: Color.valueOf("92ab11"),
	damage: 15 / 60,
	effect: Fx.mineSmall,
	damageMultiplier: 1,
	healthMultiplier: 0.8,
});
exports.poisoned = poisoned;

let scope = new Packages.rhino.TopLevel();
new Packages.rhino.ClassCache().associate(scope);
let n = new Packages.rhino.NativeJavaObject(scope, StatusEffects.shocked, StatusEffect, true)

n.affinity(corroding, (unit, result, time) => {})