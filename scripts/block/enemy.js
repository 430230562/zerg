const insect = require('zerg/unit/insect');
const status = require('zerg/status');
const liquid = require('zerg/liquid');
const { Acid } = require('zerg/base/bulletType');
const { ToxicAbility } = require("zerg/base/ability")

const pulseCrystal = new Block("pulse-crystal");
Object.assign(pulseCrystal,{
    buildVisibility: BuildVisibility.editorOnly,
	category: Category.effect,
	update: true,
	health: 3000,
	armor: 13,
	size: 3,
	solid: true,
	replaceable: false,
	hasShadow: true,
})
pulseCrystal.buildType = prov(() => extend(Building,{
    i:0,
    r:300 + Mathf.range(120),
	updateTile(){
		this.i += Time.delta
		
		if(this.i >= this.r){
		    Units.nearby(null,this.x,this.y,10 * 8,other => {
		        if(other.team != this.team){
    		        other.damagePierce(100);
    		        
    		        other.impulse(
    		            Math.cos(Angles.angle(this.x, this.y, other.x, other.y)* Math.PI / 180) * 64 * 16,
    					Math.sin(Angles.angle(this.x, this.y, other.x, other.y)* Math.PI / 180) * 64 * 16
    		        )
    		    }
		    })
		    
		    Groups.bullet.intersect(this.x - 80, this.y - 80, 160, 160, b => {
                 if(b.type.hittable && b.team != this.team){
                     b.absorb()
                 }
            });
		    
		    Object.assign(new WaveEffect(), {
            	lifetime: 15,
            	sizeFrom: 0,
            	sizeTo: 80,
            	strokeFrom: 3,
            	strokeTo: 0.1,
            	colorFrom: Pal.missileYellowBack,
            	colorTo: Pal.missileYellow,
            }).at(this.x,this.y)
            
            this.i = 0
            this.r = 300 + Mathf.range(120)
		}
	}
}))

const shockCrystal = Block("shock-crystal");
Object.assign(shockCrystal,{
    buildVisibility: BuildVisibility.editorOnly,
	category: Category.effect,
	update: true,
	health: 1000,
	armor: 5,
	size: 3,
	solid: true,
	replaceable: false,
	hasShadow: true,
})
shockCrystal.buildType = prov(() => extend(Building,{
    i:0,
    r:300 + Mathf.range(120),
	updateTile(){
		this.i += Time.delta
		
		if(this.i >= this.r){
		    for(let j = 0;j<3;j++){
    		    Object.assign(new LightningBulletType(),{
    			    damage: 500 + Mathf.range(100),
    			    collidesAir: false,
    			    ammoMultiplier: 1,
    			    lightningLength: 30,
    			    lightningLengthRand: 6,
    		    }).create(this,this.team,this.x,this.y,Mathf.range(180))
    		}
    		this.i = 0
    		this.r = 300 + Mathf.range(120)
		}
		Units.nearby(null,this.x,this.y,10 * 8,other => {
		    other.impulse(
		        Math.cos(Angles.angle(other.x, other.y, this.x, this.y)* Math.PI / 180) * other.type.hitSize,
				Math.sin(Angles.angle(other.x, other.y, this.x, this.y)* Math.PI / 180) * other.type.hitSize
		   )
		})
	}
}))

const nest = extend(CoreBlock,"nest",{
	canPlaceOn(tile,team,rotation){
		return true
	},
});
Object.assign(nest,{
	update: true,
	solid: false,
	replaceable: true,
	hasShadow: false,
	size: 3,
	health: 1500,
	unitCapModifier: 0,
	itemCapacity: 0,
	buildVisibility: BuildVisibility.editorOnly,
	category: Category.effect,
})
nest.buildType = prov(() => extend(CoreBlock.CoreBuild,nest,{
	i : 0,
	updateTile(){
		this.i += Time.delta
		
		if(this.i >= 60 * 10){
			let a = Math.random() * 5
			for(let i = 0; i < a;i++){
				insect.egg.spawn(this.team,this.tile.worldx() + Math.random(),this.tile.worldy() + Math.random());
			}
			
			this.i = 0
		}
		this.heal(0.25);
		if(this.health < this.maxHealth && Mathf.chance(0.1)) Fx.neoplasmHeal.at(
			this.x + Mathf.range(11),
			this.y + Mathf.range(11),
		);
	}
}))

const nestLarge = extend(CoreBlock,"nest-large",{
	canPlaceOn(tile,team,rotation){
		return true
	},
});
Object.assign(nestLarge,{
	update: true,
	solid: false,
	replaceable: true,
	hasShadow: false,
	size: 5,
	health: 5500,
	unitCapModifier: 0,
	itemCapacity: 0,
	buildVisibility: BuildVisibility.editorOnly,
	category: Category.effect,
})
nestLarge.buildType = prov(() => extend(CoreBlock.CoreBuild,nestLarge,{
	i : 0,
	updateTile(){
		this.i += Time.delta
		
		if(this.i >= 60 * 20){
			let a = Math.random() * 13
			for(let i = 0; i < a;i++){
				if(i < 8){
				    insect.egg.spawn(this.team,this.tile.worldx() + Math.random(),this.tile.worldy() + Math.random());
				}else{
				    insect.eggLarge.spawn(this.team,this.tile.worldx() + Math.random(),this.tile.worldy() + Math.random());
				}
			}
			
			this.i = 0
		}
		this.heal(0.25);
		if(this.health < this.maxHealth && Mathf.chance(0.1)) Fx.neoplasmHeal.at(
			this.x + Mathf.range(19),
			this.y + Mathf.range(19),
		);
	}
}))

const spit = new LiquidTurret("spit");
exports.spit = spit
Object.assign(spit,{
	size: 2,
	recoil: 0,
	reload: 60,
	inaccuracy: 1,
	shootCone: 10,
    shootY: 0,
	liquidCapacity: 40,
	targetAir: false,
	shootEffect: Fx.shootLiquid,
	range: 25 * 8,
	scaledHealth: 250,
	category: Category.turret,
	buildVisibility: BuildVisibility.editorOnly,
})
spit.ammo(
	liquid.acid,Object.assign(new ArtilleryBulletType(1.5, 120), {
		knockback: 0.8,
		lifetime: 120,
		width: 11,
		height: 11,
		collidesTiles: false,
		splashDamageRadius: 8 * 3.25,
		splashDamage: 80,
		
		shrinkX: 0.3,
        shrinkY: 0.7,
        
        ammoMultiplier: 1/4,
		
		backColor: Color.valueOf("84a94b"),
		frontColor: Color.valueOf("84a94b"),
		trailColor: Color.valueOf("84a94b"),
		
		lightOpacity: 0,
		
		status: status.corroding,
		statusDuration: 120,
		
		homingRange: 40,
		homingPower: 0.005,
		
		fragBullets: 2,
		fragBullet:new Acid(18)
	}),
)
spit.buildType = prov(() => extend(LiquidTurret.LiquidTurretBuild, spit, {
	updateTile(){
	    this.super$updateTile();
	    
	    if(this.liquids.get(liquid.acid) <= 40)this.liquids.add(liquid.acid, 0.5/60)
	}
}))

const mineralWall = new Wall("mineral-wall");
Object.assign(mineralWall,{
    health: 320,
	armor: 1,
	size: 1,
	buildVisibility: BuildVisibility.editorOnly,
	category: Category.defense,
})

const mineralWallLarge = new Wall("mineral-wall-large");
Object.assign(mineralWallLarge,{
    health: 320 * 4,
	armor: 1,
	size: 2,
	buildVisibility: BuildVisibility.editorOnly,
	category: Category.defense,
})

const mineralWallHuge = new Wall("mineral-wall-huge");
Object.assign(mineralWallHuge,{
    health: 320 * 9,
	armor: 1,
	size: 3,
	buildVisibility: BuildVisibility.editorOnly,
	category: Category.defense,
})

const acidMine = new Block("acid-mine");
Object.assign(acidMine,{
    update: false,
    destructible: true,
    solid: false,
    targetable: false,
    hasShadow: false,
    health: 400,
    crushDamageMultiplier: 0,
    category: Category.effect,
	buildVisibility: BuildVisibility.editorOnly,
})
acidMine.buildType = prov(() => extend(Building,{
    unitOn(unit){
        if(unit.team != this.team){
            unit.damage(Math.min(unit.type.hitSize * unit.type.hitSize * 1.6 + 160,64 * Math.log(7 * unit.type.hitSize) + 270));
            unit.apply(status.corroding, 180);
            Puddles.deposit(unit.tileOn(),liquid.acid,100),
            this.kill();
        }
    }
}))

const bottle = new UnitType("bottle1");
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
	lifetime: 60 * 5,
	health: 10000,
	drawMinimap: false,
	flying: false,
	drawCell: false,
	deathSound: Sounds.none,
})
bottle.abilities.add(
	new ToxicAbility(20,15,32)
)
bottle.immunities.addAll(status.poisoned)

const toxicMine = new Block("toxic-mine");
Object.assign(toxicMine,{
    update: false,
    destructible: true,
    solid: false,
    targetable: false,
    hasShadow: false,
    health: 400,
    size: 2,
    crushDamageMultiplier: 0,
    category: Category.effect,
	buildVisibility: BuildVisibility.editorOnly,
})
toxicMine.buildType = prov(() => extend(Building,{
    unitOn(unit){
        if(unit.team != this.team){
            bottle.spawn(unit.x,unit.y)
            this.kill();
        }
    }
}))