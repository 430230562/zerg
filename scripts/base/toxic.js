let i = 0;

const s = new StatusEffect("s")
Object.assign(s,{
	color: Color.valueOf("92ab11"),
	damage: 120 / 60,
	effect: Fx.mineSmall,
	damageMultiplier: 1,
	healthMultiplier: 1,
	speedMultiplier: 0.6,
})

function ToxicAbility(damage,range) {
	return extend(Ability,{
		update(unit){
			i += Time.delta
			if (i >= 15) {
				Units.nearby(null, unit.x, unit.y, range, other => {
					other.damagePierce(damage / 4);
					other.apply(s, 60 * 15);
				})
				Units.nearbyBuildings(unit.x, unit.y, range, b => {
					b.health -= damage / 4
					if(b.health <= 0){b.kill()}
				})
				Fx.titanSmoke.at(
					unit.x + Mathf.range(range * Math.SQRT1_2),
					unit.y + Mathf.range(range * Math.SQRT1_2),
					Color.valueOf("92ab117f")
				)
				i = 0
			}
		},
		draw(unit){
			this.super$draw(unit);
			for(let j = 0;j < 4;j++){
				let r = unit.rotation + j * 360 / 4;
				Lines.arc(unit.x, unit.y, range, 0.15, r);
			}
		}
	})
}

const bottle = new UnitType("bottle");
Object.assign(bottle,{
	speed: 0,
	isEnemy: false,
	envDisabled: 0,
	targetable: false,
	hittable: false,
	playerControllable: false,
	createWreck: false,
	createScorch: false,
	logicControllable: false,
	useUnitCap: false,
	allowedInPayloads: false,
	constructor: () => new TimedKillUnit.create(),
	physics: false,
	bounded: false,
	hidden: true,
	lifetime: 60 * 1.5,
	health: 10000,
	drawMinimap: false,
	flying: false,
	drawCell: false,
	deathSound: Sounds.none,
})
bottle.abilities.add(
	new ToxicAbility(120,80)
)
bottle.immunities.addAll(s)