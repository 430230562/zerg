const liquid = require("liquid");
const status = require("status");
const Ef = require("effect");
const Ab = require("base/ability");
const { alpha } = require("unit/other");

function SporeUnit(name){
    return extend(UnitType,name,{
        outlineColor: Color.valueOf("5541b1"),
		envDisabled: Env.none,
		healFlash: true,
		healColor: Color.valueOf("9e78dc"),
		lightRadius: 0,
		init(){
		    this.super$init()
		    
		    this.immunities.addAll(status.poisoning,status.parasite);
		}
    })
}

const rockSpider = new SporeUnit("rock-spider");
exports.rockSpider = rockSpider;
Object.assign(rockSpider, {
	speed: 0.6,
	drag: 0.11,
	hitSize: 11,
	rotateSpeed: 3,
	health: 700,
	armor: 3,
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
rockSpider.weapons.add(
Object.assign(new Weapon("bugs-rock-spider-weapon"), {
	mirror: false,
	x: 0,
	y: 1,
	shootY: 4,
	reload: 25,
	cooldownTime: 42,
	shootSound: Sounds.plantBreak,
	heatColor: Color.valueOf("5541b1"),
	bullet: Object.assign(new MissileBulletType(3,35), {
		backColor: Color.valueOf("5541b1"),
		frontColor: Color.valueOf("5541b1"),
		hitEffect: Fx.none,
		despawnEffect: Fx.none,
		trailColor: Color.valueOf("5541b1"),
		trailWidth: 0.8,
		trailLength: 14,
		trailChance: 0,
		homingPower: 0,
		
		hitSound: Sounds.none,
		status: status.parasite
	})
})
)
rockSpider.abilities.add(
    Object.assign(new LiquidExplodeAbility(), {
    	liquid: liquid.sporeLiquid,
        amount: 60,
    	radAmountScale: 8,
    	radScale: 2,
    	noiseMag: 6.5,
    	noiseScl: 5,
	}),
	Object.assign(new LiquidRegenAbility(), {
		liquid: liquid.sporeLiquid,
		slurpEffect: Ef.spore,
	}),
	new SpawnDeathAbility(alpha, 3, 11),
	Object.assign(new RegenAbility(), {
		percentAmount: 1 / (90 * 60) * 100,
	}),
)

const riot = new SporeUnit("riot");
exports.riot = riot;
Object.assign(riot,{
    constructor: () => new LegsUnit.create(),
	
	speed: 0.4,
	drag: 0.4,
	hitSize: 16,
	rotateSpeed: 3,
	health: 1100,
	
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
	
	armor: 5,
	targetAir: false,
})
riot.weapons.add(
Object.assign(new Weapon(), {
	mirror: false,
	x: 0,
	y: 1,
	shootY: 4,
	reload: 60,
	cooldownTime: 42,
	inaccuracy: 1,
	shootSound: Sounds.artillery,
	heatColor: Color.valueOf("9e78dc"),
	bullet: Object.assign(new ArtilleryBulletType(3, 20), {
		knockback: 0.8,
		lifetime: 60,
		width: 22,
		height: 22,
		collidesTiles: false,
		splashDamageRadius: 48,
		splashDamage: 120,
		
		backColor: Color.valueOf("9e78dc"),
		frontColor: Color.valueOf("9e78dc"),
		trailColor: Color.valueOf("9e78dc"),
		
		status: status.parasite
	})
})
)
riot.abilities.addAll(
    new SpawnDeathAbility(alpha, 7, 16),
    Object.assign(new LiquidExplodeAbility(), {
    	liquid: liquid.sporeLiquid,
        amount: 60,
    	radAmountScale: 8,
    	radScale: 2,
    	noiseMag: 6.5,
    	noiseScl: 5,
	}),
	Object.assign(new RegenAbility(), {
		percentAmount: 1 / (90 * 60) * 100,
	}),
	Object.assign(new LiquidRegenAbility(), {
		liquid: liquid.sporeLiquid,
		slurpEffect: Ef.spore,
	})
)

const plague = new SporeUnit("plague");
exports.plague = plague;
Object.assign(plague,{
    constructor: () => new CrawlUnit.create(),
    health: 7000,
    speed: 0.8,
    hitSize: 26,
    
    crushDamage: 1,
    aiController: UnitTypes.renale.aiController,
})
plague.abilities.addAll(
    Object.assign(new LiquidExplodeAbility(), {
    	liquid: liquid.sporeLiquid,
        amount: 60,
    	radAmountScale: 8,
    	radScale: 2,
    	noiseMag: 6.5,
    	noiseScl: 5,
	}),
	Object.assign(new RegenAbility(), {
		percentAmount: 1 / (90 * 60) * 100,
	}),
	new SpawnDeathAbility(alpha, 11, 26),
	new Ab.MoveLiquidAbility(liquid.sporeLiquid,24,6)
)

const evolution = new SporeUnit("evolution");
exports.evolution = evolution;
Object.assign(evolution,{
    constructor: () => new CrawlUnit.create(),
    health: 20000,
    speed: 0.5,
    hitSize: 39,
    
    crushDamage: 5,
    aiController: UnitTypes.renale.aiController,
})
evolution.abilities.addAll(
    new SpawnDeathAbility(alpha, 21, 39),
    new SpawnDeathAbility(rockSpider, 7, 39),
    new SpawnDeathAbility(riot, 3, 39),
    extend(Ability,{
        i:0,
        update(unit){
            this.i += Time.delta
            
            if(this.i >= 5 * 60){
                unit.tileOn().circle(10.5,cons(tile => {
                    Puddles.deposit(tile,liquid.sporeLiquid,1000);
                    
                    if(Mathf.chance(0.0625))alpha.spawn(unit.team,tile.worldx(),tile.worldy())
                }))
                
                this.i = 0
            }
        }
    })
)