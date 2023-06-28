const status = require('status');
const liquid = require('liquid');
const { Acid } = require('base/bulletType');
const { DeathNeoplasmAbility, MoveLiquidAbility } = require("base/ability")

function Insect(name){
	return extend(UnitType, name, {
		outlineColor: Pal.neoplasmOutline,
		envDisabled: Env.none,
		healFlash: true,
		healColor: Pal.neoplasm1,
		lightRadius: 0,
		init(u){
			if (u !== undefined) this.super$init(u)
			else this.super$init();
			this.abilities.add(
			    new DeathNeoplasmAbility(this.hitSize * 2, this.health),
			    Object.assign(new RegenAbility(), {
					percentAmount: 1 / (90 * 60) * 100,
				}),
				Object.assign(new LiquidRegenAbility(), {
					liquid: Liquids.neoplasm,
					slurpEffect: Fx.neoplasmHeal,
				})
			);
		}
	})
}

const spider = new Insect("spider");
exports.spider = spider;
Object.assign(spider, {
	speed: 0.72,
	drag: 0.11,
	hitSize: 11,
	rotateSpeed: 3,
	health: 160,
	armor: 1,
	legStraightness: 0.3,
	stepShake: 0,
	
	legCount: 6,
	legLength: 8,
	lockLegBase: true,
	legContinuousMove: true,
	legExtension: -2,
	legBaseOffset: 3,
	legMaxLength: 1.1,
	legMinLength: 0.2,
	legLengthScl: 0.96,
	legForwardScl: 1.1,
	legGroupSize: 3,
	rippleScale: 0.2,
	
	legMoveSpace: 1,
	allowLegStep: true,
	hovering: true,
	legPhysicsLayer: false,
	
	shadowElevation: 0.1,
	groundLayer: 74,
	
	constructor: () => new LegsUnit.create()
})
spider.weapons.add(
Object.assign(new Weapon("zerg-spider-weapon"), {
	mirror: false,
	x: 0,
	y: 1,
	shootY: 4,
	reload: 25,
	cooldownTime: 42,
	shootSound: Sounds.plantBreak,
	heatColor: Color.valueOf("84a94b"),
	bullet: Object.assign(new MissileBulletType(3, 10), {
		backColor: Color.valueOf("84a94b"),
		frontColor: Color.valueOf("84a94b"),
		hitEffect: Fx.none,
		despawnEffect: Fx.none,
		trailColor: Color.valueOf("84a94b"),
		
		status: status.corroding,
		statusDuration: 120,
		
		recoil: 0.8,
		lifetime: 45,
		homingRange: 80,
		homingPower: 0.05,
		trailWidth: 0.8,
		trailLength: 14,
		trailChance: 0,
		
		lightOpacity: 0,
		
		fragBullets: 2,
		fragBullet: new Acid(18)
	})
})
)

const tarantula = new Insect("tarantula")
exports.tarantula = tarantula;
Object.assign(tarantula, {
	constructor: () => new LegsUnit.create(),
	
	speed: 0.63,
	drag: 0.4,
	hitSize: 12,
	rotateSpeed: 3,
	health: 500,
	legCount: 6,
	legLength: 13,
	legMoveSpace: 1.4,
	legBaseOffset: 2,
	legContinuousMove: true,
	hovering: true,
	armor: 3,
	targetAir: false,
	
	range: 8 * 28,
})
tarantula.weapons.add(
Object.assign(new Weapon(), {
	mirror: false,
	x: 0,
	y: 1,
	shootY: 4,
	reload: 100,
	cooldownTime: 42,
	shoot: Object.assign(new ShootPattern(), {
		shots: 3,
		shotDelay: 4,
	}),
	inaccuracy: 1,
	shootSound: Sounds.artillery,
	heatColor: Color.valueOf("84a94b"),
	bullet: Object.assign(new ArtilleryBulletType(3, 20), {
		knockback: 0.8,
		lifetime: 80,
		width: 11,
		height: 11,
		collidesTiles: false,
		splashDamageRadius: 8 * 2.25,
		splashDamage: 40,
		
		backColor: Color.valueOf("84a94b"),
		frontColor: Color.valueOf("84a94b"),
		trailColor: Color.valueOf("84a94b"),
		
		lightOpacity: 0,
		
		status: status.corroding,
		statusDuration: 120,
		
		fragBullets: 2,
		fragBullet:new Acid(18)
	}),
	shootStatus: StatusEffects.slow,
	shootStatusDuration: 130,
})
)

const groupMissile = extend(MissileUnitType,"group-missile",{
    update(unit){
        if(unit.getDuration(status.dissolved) >= 1){
            unit.damageMultiplier = 0
            
            unit.kill();
        }
    }
})
Object.assign(groupMissile, {
	hitSize: 4,
	constructor: () => new TimedKillUnit.create(),
	trailColor: Color.valueOf("e05438"),
	engineColor: Color.valueOf("e05438"),
	engineSize: 1.75,
	engineLayer: Layer.effect,
	speed: 4,
	lightOpacity: 0,
	maxRange: 6,
	lifetime: 95,
	outlineColor: Pal.neoplasmOutline,
	health: 35,
	lowAltitude: true,
})
groupMissile.parts.add(
Object.assign(new FlarePart(),{
	progress: DrawPart.PartProgress.life.slope().curve(Interp.pow2In),
	color1: Color.valueOf("e05438"),
	radius: 0,
	radiusTo: 35,
	stroke: 3,
	rotation: 45,
	y: -5,
	followRotation: true,
}))

groupMissile.weapons.add(
Object.assign(new Weapon(), {
	shootCone: 360,
	mirror: false,
	reload: 1,
	shootOnDeath: true,
	bullet: Object.assign(new ExplosionBulletType(170, 35), {
		shootEffect: new MultiEffect(
			Fx.massiveExplosion,
			new WrapEffect(
				Fx.dynamicSpikes,
				Color.valueOf("e05438"), 24
			),
			Object.assign(new WaveEffect(),{
				colorFrom: Color.valueOf("e05438"),
				colorTo: Color.valueOf("e05438"),
				sizeTo: 40,
				lifetime: 12,
				strokeFrom: 4,
			})
		)
	})
})
)
groupMissile.abilities.add(
	new DeathNeoplasmAbility(16,150)
)

const group = new Insect("group");
exports.group = group;
Object.assign(group, {
	speed: 0.5,
	drag: 0.1,
	hitSize: 21,
	rotateSpeed: 3,
	health: 900,
	armor: 4,
	
	fogRadius: 40,
	stepShake: 0,
	legCount: 6,
	legLength: 18,
	legGroupSize: 3,
	lockLegBase: true,
	legContinuousMove: true,
	legExtension: -3,
	legBaseOffset: 7,
	legMaxLength: 1.1,
	legMinLength: 0.2,
	legLengthScl: 0.95,
	legForwardScl: 0.9,
	
	legMoveSpace: 1,
	hovering: true,
	
	shadowElevation: 0.2,
	groundLayer: 74,
	constructor: () => new LegsUnit.create(),
})
for(let i = 0; i < 3; i++){
	group.parts.add(
		Object.assign(new RegionPart("-blade"), {
			layerOffset: -0.001,
			x: 2,
			moveX: 6 + i * 1.9,
			moveY: 8 + -4 * i,
			moveRot: 40 - i * 25,
			mirror: true,
			progress: DrawPart.PartProgress.warmup.delay(i * 0.2)
		})
	)
}
group.weapons.add(Object.assign(new Weapon("zerg-group-weapon"), {
	shootSound: Sounds.missileLarge,
	x: 29 / 4,
	y: -11 / 4,
	shootY: 1.5,
	reload: 120,
	layerOffset: 0.01,
	rotateSpeed: 2,
	rotate: true,
	bullet: Object.assign(new BulletType(), {
		spawnUnit: groupMissile,
		smokeEffect: Fx.shootBigSmoke2,
		speed: 0,
		keepVelocity: false,
	}),
	shootStatus: StatusEffects.slow,
	shootStatusDuration: 130,
}))

const mosquito = new Insect("mosquito");
exports.mosquito = mosquito;
Object.assign(mosquito, {
	constructor: () => new UnitEntity.create(),
	aiController: UnitTypes.quell.aiController,
	health: 140,
	speed: 2.5,
	flying: true,
	lowAltitude: true,
	hitSize: 8,
	engineOffset: 5.5,
	armor: 1
})
mosquito.weapons.add(
Object.assign(new Weapon("zerg-mosquito-weapon"), {
	mirror: false,
	x: 0,
	y: 1,
	shootY: 4,
	reload: 25,
	shootCone: 60,
	cooldownTime: 42,
	shootSound: Sounds.plantBreak,
	heatColor: Color.valueOf("84a94b"),
	bullet: Object.assign(new MissileBulletType(3, 10), {
		backColor: Color.valueOf("84a94b"),
		frontColor: Color.valueOf("84a94b"),
		hitEffect: Fx.none,
		despawnEffect: Fx.none,
		trailColor: Color.valueOf("84a94b"),
		
		status: status.corroding,
		statusDuration: 120,
		
		recoil: 0.8,
		lifetime: 45,
		homingRange: 80,
		homingPower: 0.05,
		trailWidth: 0.8,
		trailLength: 14,
		trailChance: 0,
		
		lightOpacity: 0,
		
		fragBullets: 2,
		fragBullet: new Acid(18)
	})
})
)
mosquito.parts.add(
    Object.assign(new RegionPart("-wing"),{
        mirror: true,
        x: 0.5,
        y: 0,
        rotation: -45,
        moveX: 0,
        moveY: 0,
        moveRot: 30,
        progress: DrawPart.PartProgress.smoothReload.sin(1,5)
    })
)

const burst = new Insect("burst");
exports.burst = burst;
Object.assign(burst, {
	constructor: () => new UnitEntity.create(),
	health: 420,
	speed: 2,
	accel: 0.08,
	drag: 0.016,
	flying: true,
	hitSize: 10,
	targetAir: false,
	range: 140,
	faceTarget: false,
	armor: 3,
	itemCapacity: 0,
	circleTarget: true,
	targetFlags: [BlockFlag.drill,BlockFlag.battery,null],
	engineOffset: 7.8,
})
burst.weapons.add(
Object.assign(new Weapon(), {
	x: 0,
	y: 0,
	mirror: false,
	shootCone: 360,
	shootY: 0,
	reload: 60,
	minShootVelocity: 0.55,
	ignoreRotation: true,
	ejectEffect: Fx.none,
	shootSound: Sounds.none,
	shoot: Object.assign(new ShootPattern(), {
		shots: 3,
		shotDelay: 7.5,
	}),
	bullet: Object.assign(new BombBulletType(27, 25), {
		width: 10,
		height: 14,
		hitEffect: Fx.flakExplosion,
		shootEffect: Fx.none,
		smokeEffect: Fx.none,
		backColor: Color.valueOf("84a94b"),
		frontColor: Color.valueOf("84a94b"),
		
		lightOpacity: 0,
		
		fragBullets: 4,
		fragBullet: new Acid(18)
	})
})
)
burst.parts.add(
    Object.assign(new RegionPart("-wing"),{
        mirror: true,
        x: 0.5,
        y: 0,
        rotation: -45,
        moveX: 0,
        moveY: 0,
        moveRot: 30,
        progress: DrawPart.PartProgress.smoothReload.sin(1,5)
    })
)

const buffer = new UnitType("buffer");
exports.buffer = buffer;
Object.assign(buffer, {
	constructor: () => new MechUnit.create(),
	speed: 1.25,
	hitSize: 6,
	health: 100,
	mechSideSway: 0.25,
	range: 40,
	targetAir: false,
	outlineColor: Pal.neoplasmOutline,
	envDisabled: Env.none,
	healFlash: true,
	healColor: Pal.neoplasm1,
	lightRadius: 0,
})
buffer.abilities.add(
	new DeathNeoplasmAbility(18,400),
	Object.assign(new RegenAbility(), {
		percentAmount: 1 / (90 * 60) * 100,
	}),
)
buffer.weapons.add(
Object.assign(new Weapon(), {
	shootOnDeath: true,
	reload: 24,
	shootCone: 180,
	ejectEffect: Fx.none,
	shootSound: Sounds.explosion,
	x: 0,
	shootY: 0,
	mirror: false,
	shoot: Object.assign(new ShootPattern(), {
		firstShotDelay: 7.5
	}),
	bullet: new ExplosionBulletType(90, 48),
})
)

const spread = new UnitType("spread");
exports.spread = spread;
Object.assign(spread,{
    constructor: () => new CrawlUnit.create(),
	speed: 1,
	hitSize: 12,
	targetPriority: 1,
	health: 340,
	omniMovement: false,
    rotateSpeed: 2.5,
    segments: 3,
    drawBody: false,
    aiController: () => new HugAI(),

    segmentScl: 3,
    segmentPhase: 5,
    segmentMag: 0.5,
	outlineColor: Pal.neoplasmOutline,
	envDisabled: Env.none,
	healFlash: true,
	healColor: Pal.neoplasm1,
	lightRadius: 0,
})
spread.abilities.add(
	new DeathNeoplasmAbility(32,680),
	new MoveLiquidAbility(Liquids.neoplasm,12,5)
)

const s = new StatusEffect("s");
s.healthMultiplier = 5;
s.show = false;

const egg = extend(UnitType,"egg",{
     u:[buffer,spider,mosquito],
     update(unit){
        unit.maxHealth += 0.01;
        unit.heal(0.2)
        if(unit.maxHealth >= 112){
            this.u[Math.floor(Math.random() * 3)].spawn(unit.team,unit.x,unit.y)
            
            unit.remove();
        }
        if(unit.getDuration(s) <= 10){
            unit.apply(s,20 * 60);
        }
        if(unit.getDuration(status.dissolved) >= 1){
            unit.kill();
        }
     }
})
exports.egg = egg;
Object.assign(egg, {
	drawCell: false,
	lightRadius: 0,
	envDisabled: Env.none,
	constructor: () => new MechUnit.create(),
	speed: 0,
	hitSize: 4,
	health: 100,
	armor: 20,
	targetPriority: -2,
	healColor: Pal.neoplasm1,
	targetable: true,
	hittable: true,
	canAttack: false,
	hidden: true,
	isEnemy: false,
	playerControllable: false,
	logicControllable: false,
	allowedInPayloads: false,
})
egg.immunities.addAll(status.corroding);

const carrier = new Insect("carrier");
exports.carrier = carrier;
Object.assign(carrier, {
	targetPriority: -1,
	speed: 0.25,
	drag: 0.1,
	hitSize: 15,
	rotateSpeed: 3,
	health: 400,
	armor: 1,
	stepShake: 0,
	
	legCount: 4,
	legLength: 14,
	lockLegBase: true,
	legContinuousMove: true,
	legExtension: -3,
	legBaseOffset: 5,
	legMaxLength: 1.1,
	legMinLength: 0.2,
	legLengthScl: 0.95,
	legForwardScl: 0.7,

	legMoveSpace: 1,
	hovering: true,
	allowLegStep: false,

	shadowElevation: 0.2,
	groundLayer: 74,
	constructor: () => new LegsUnit.create()
})
carrier.abilities.add(
	new UnitSpawnAbility(egg, 60 * 20, 0, 0),
	Object.assign(new SpawnDeathAbility(egg, 2, 10),{
	    randAmount: 4,
	}),
	new DeathNeoplasmAbility(30, 800),
);