const liquid = require("liquid");
const status = require("status");

const alpha = new UnitType("alpha");
exports.alpha = alpha;
Object.assign(alpha,{
    constructor: () => new MechUnit.create(),
	speed: 1.2,
	hitSize: 6,
	health: 300,
	range: 80,
	aiController: UnitTypes.crawler.aiController,
	hidden: true,
	isEnemy: false,
	playerControllable: false,
	logicControllable: false,
	allowedInPayloads: false,
	useUnitCap: false,
	outlineColor: Color.valueOf("5541b1"),
	envDisabled: Env.none,
	healFlash: true,
	healColor: Color.valueOf("9e78dc"),
	lightRadius: 0,
})
alpha.immunities.addAll(status.poisoning,status.parasite);
alpha.weapons.add(
Object.assign(new Weapon(),{
    reload: 15,
    ejectEffect: Fx.none,
    rotate: false,
    mirror: false,
    shootSound: Sounds.sap,

    x: 0,
    y: 0,
    shootCone: 180,

    bullet: Object.assign(new SapBulletType(),{
        sapStrength: 0,
        length: 75,
        damage: 13,
        shootEffect: Fx.none,
        hitColor: Color.valueOf("9e78dc"),
        color: Color.valueOf("9e78dc"),
        despawnEffect: Fx.none,
        width: 0.54,
        lifetime: 35,
        knockback: -1.24,
    })
})
)

const s = new StatusEffect("s")
Object.assign(s,{
	color: Color.valueOf("92ab11"),
	damage: 90 / 60,
	effect: Fx.mineSmall,
	damageMultiplier: 1,
	healthMultiplier: 1,
	speedMultiplier: 0.6,
})

function ToxicAbility(damage,range) {
	return extend(Ability,{
	    i:0,
		update(unit){
		    this.i += Time.delta
		    
			if(this.i > 15){
				Units.nearby(null, unit.x, unit.y, range, other => {
					other.damagePierce(damage / 4);
					other.apply(s, 60 * 15);
				})
				Units.nearbyBuildings(unit.x, unit.y, range, b => {
					b.damagePierce(damage / 4);
				})
				Fx.titanSmoke.at(
					unit.x + Mathf.range(range * Math.SQRT1_2),
					unit.y + Mathf.range(range * Math.SQRT1_2),
					Color.valueOf("92ab117f")
				)
				this.i = 0
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
exports.bottle = bottle;
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
	new ToxicAbility(90,64)
)
bottle.immunities.addAll(s)