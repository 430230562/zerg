const item = require('item');
const liquid = require('liquid');
const status = require('status');
const { ReduceArmorBulletType, RicochetBulletType, SniperBulletType } = require('base/bulletType');
const { SniperRailEffect } = require("effect");

function AddCoolant(turret,amount){
	return turret.coolant = turret.consumeCoolant(amount);
}

function ShootEncircle(range,speed){
    return extend(ShootPattern,{
        shoot(totalShots, handler, barrelIncrementer){
            handler.shoot(0, 0, 0, 0,
            b => b.moveRelative(
                Angles.trnsx(b.time * 6 * speed, 0, range),
                Angles.trnsy(b.time * 6 * speed, 0, range)
            ))
            handler.shoot(0, 0, 0, 0,
            b => b.moveRelative(
                Angles.trnsx(b.time * 6 * speed, 0, -1 * range),
                Angles.trnsy(b.time * 6 * speed, 0, -1 * range)
            ))
        }
    })
}

const guard = new ItemTurret("guard");
exports.guard = guard;
Object.assign(guard,{
    shootY: 3,
    reload: 40,
    range: 120,
    shootCone: 15,
    ammoUseEffect: Fx.casing1,
    health: 360,
    inaccuracy: 1,
    rotateSpeed: 10,
    shoot: Object.assign(new ShootPattern(), {
		shotDelay: 3,
		shots: 3,
	}),
	alwaysUnlocked: true,
	buildVisibility: BuildVisibility.shown,
	category: Category.turret,
	requirements: ItemStack.with(
		item.nickel, 55,
	)
})
AddCoolant(guard,0.1)
guard.ammo(
    item.nickel, Object.assign(new RicochetBulletType(3, 11),{
        width: 2,
        height: 9,
        lifetime: 60,
        ammoMultiplier: 3,
    }),
    Items.graphite, Object.assign(new RicochetBulletType(3.5, 17),{
        width: 2,
        height: 12,
        reloadMultiplier: 0.6,
        ammoMultiplier: 6,
        lifetime: 60,
    })
)

const obstruct = new ItemTurret("obstruct");
exports.obstruct = obstruct;
Object.assign(obstruct,{
    shootY: 28 / 4,
    reload: 6,
    range: 220,
    targetGround: false,
    shootCone: 45,
    ammoUseEffect: Fx.casing1,
    health: 750,
    size: 2,
    rotateSpeed: 15,
    inaccuracy: 5,
	shootSound: Sounds.shootSnap,
	researchCostMultiplier: 0.25,
    shoot: new ShootAlternate(6),
	buildVisibility: BuildVisibility.shown,
	category: Category.turret,
	requirements: ItemStack.with(
	    Items.graphite, 20,
		item.nickel, 55,
	),
	velocityRnd: 0.2
})
AddCoolant(obstruct,0.1)
obstruct.ammo(
    Items.graphite, Object.assign(new BasicBulletType(5, 13),{
        width: 5,
        height: 12,
        ammoMultiplier: 8,
        lifetime: 45,
        hitEffect: Fx.flakExplosionBig,
        collidesGround: false,
        pierceCap: 1,
        fragBullet: Object.assign(new BasicBulletType(3,3),{
            width: 1,
            height: 1,
            lifetime: 120,
            pierceCap: 1,
            drag: 0.3,
            collidesGround: false,
            hitEffect: Fx.none,
            despawnEffect: Fx.none,
            lightOpacity: 0,
        })
    }),
    item.crystal, Object.assign(new BasicBulletType(5, 23),{
        width: 5,
        height: 12,
        ammoMultiplier: 12,
        lifetime: 45,
        hitEffect: Fx.flakExplosionBig,
        collidesGround: false,
        pierceCap: 1,
        fragBullets:9,
        fragVelocityMin: 1,
		fragVelocityMax: 7,
        fragBullet: Object.assign(new BasicBulletType(3,5),{
            width: 1,
            height: 1,
            lifetime: 150,
            pierceCap: 1,
            drag: 0.3,
            collidesGround: false,
            hitEffect: Fx.none,
            despawnEffect: Fx.none,
            lightOpacity: 0,
        })
    })
)

const sniper = new ItemTurret('sniper');
exports.sniper = sniper
Object.assign(sniper, {
	reload: 180,
	size: 2,
	range: 8 * 45,
	shootCone: 5,
	health: 1040,
	inaccuracy: 0,
	rotateSpeed: 2.7,
	ammoUseEffect: Fx.casing1,
	shootSound: Sounds.mediumCannon,
    unitSort: UnitSorts.strongest,
	shoot: Object.assign(new ShootPattern(), {
		firstShotDelay: 15
	}),
	category: Category.turret,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		Items.graphite, 80,
		item.nickel, 100,
	),
})
AddCoolant(sniper,0.2)
sniper.ammo(
    item.nickel, new SniperBulletType("00c49b",45.5 * 8,120),
	item.manganese, Object.assign(new SniperBulletType("ecaae2",45.5 * 8,220) ,{
		reloadMultiplier: 1.25,
	}),
	item.chromium, Object.assign(new SniperBulletType("e45018",50.5 * 8,350) ,{
		reloadMultiplier: 1.25,
		rangeChange: 40,
	}),
)
sniper.buildType = prov(() => extend(ItemTurret.ItemTurretBuild, sniper, {
    handleBullet(bullet, offsetX, offsetY, angleOffset) {
        if(this.target != null){
		    bullet.damage *= this.target.maxHealth / this.target.health
		}
	},
	findTarget(){
	    if(this.target == null)Units.nearby(null, this.x, this.y, this.range(), other => {
	        if(other.team != this.team && Mathf.chance(0.25)) this.target = other
	    })
	}
}))

const nexus = new ItemTurret("nexus");
exports.nexus = nexus;
Object.assign(nexus, {
	reload: 20,
	size: 2,
	range: 8 * 24,
	shootCone: 8,
	health: 1040,
	inaccuracy: 0,
	rotateSpeed: 4.7,
	ammoUseEffect: Fx.casing1,
	shootSound: Sounds.shootBig,
	shoot: Object.assign(new ShootPattern(), {
		shots: 5,
		shotDelay: 2.5,
	}),
	category: Category.turret,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		Items.graphite, 80,
		item.nickel, 100,
		item.manganese, 40,
	),
})
AddCoolant(nexus,0.2);
nexus.ammo(
	item.nickel, Object.assign(new RicochetBulletType(3.5, 11), {
		width: 2,
		height: 9,
		ammoMultiplier: 3,
		lifetime: 60,
	}),
	Items.graphite, Object.assign(new RicochetBulletType(4, 17), {
		width: 2,
		height: 12,
		reloadMultiplier: 0.75,
		ammoMultiplier: 6,
		lifetime: 50,
	}),
	Items.silicon, Object.assign(new BasicBulletType(4, 17), {
		width: 2,
		height: 12,
		reloadMultiplier: 1.5,
		ammoMultiplier: 6,
		lifetime: 50,
		homingRange: 32,
		homingPower: 0.04,
	}),
	item.manganese, Object.assign(new RicochetBulletType(4, 21), {
		width: 2,
		height: 12,
		shootEffect: Fx.shootBig,
		smokeEffect: Fx.shootBigSmoke,
		ammoMultiplier: 4,
		lifetime: 60,
		fragBullets: 3,
		fragBullet: Object.assign(new RicochetBulletType(3, 5), {
			width: 5,
			height: 12,
			shrinkY: 1,
			lifetime: 5,
			despawnEffect: Fx.none,
		})
	}),
	item.chromium, Object.assign(new BasicBulletType(4, 23), {
		width: 2,
		height: 9,
		ammoMultiplier: 3,
		lifetime: 60,
		pierceCap: 3,
	}),
	item.sulfone, Object.assign(new RicochetBulletType(3, 19), {
		width: 10,
		height: 12,
		frontColor: Color.valueOf("ede892"),
		backColor: Color.valueOf("d9c668"),
		status: StatusEffects.burning,
		hitEffect: new MultiEffect(
			Fx.hitBulletSmall,
			Fx.fireHit
		),
		ammoMultiplier: 8,
		reloadMultiplier: 1.5,
		splashDamage: 16,
		splashDamageRadius: 32,
		makeFire: true,
		lifetime: 64,
	}),
)

const bomb = new ItemTurret("bomb");
exports.bomb = bomb;
Object.assign(bomb, {
	reload: 90,
	size: 2,
	range: 8 * 32,
	shootCone: 15,
	health: 960,
	inaccuracy: 1,
	rotateSpeed: 3.5,
	ammoUseEffect: Fx.casing1,
	targetAir: false,
	shootSound: Sounds.bang,
	shoot: Object.assign(new ShootPattern(), {
		shots: 4,
		shotDelay: 4,
	}),
	category: Category.turret,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		Items.graphite, 80,
		item.nickel, 100,
		item.manganese, 40,
	),
})
AddCoolant(bomb,0.2);
bomb.ammo(
	Items.graphite, Object.assign(new ArtilleryBulletType(3, 20), {
		knockback: 0.8,
		lifetime: 86,
		width: 11,
		height: 11,
		collidesTiles: false,
		splashDamageRadius: 24,
		splashDamage: 33,
	}),
	Items.silicon, Object.assign(new ArtilleryBulletType(3, 20), {
		knockback: 0.8,
		lifetime: 86,
		width: 11,
		height: 11,
		collidesTiles: false,
		splashDamageRadius: 24,
		splashDamage: 33,
		reloadMultiplier: 1.5,
		homingRange: 32,
		homingPower: 0.04,
	}),
	item.crystal, Object.assign(new ArtilleryBulletType(3, 20), {
		knockback: 0.8,
		lifetime: 86,
		width: 11,
		height: 11,
		collidesTiles: false,
		splashDamageRadius: 24,
		splashDamage: 37,
		backColor: Color.valueOf("7e8ae6"),
		frontColor: Color.white,
		ammoMultiplier: 4,
		fragBullets: 3,
		fragBullet: Object.assign(new BasicBulletType(3, 5), {
			width: 5,
			height: 12,
			shrinkY: 1,
			lifetime: 20,
			backColor: Pal.gray,
			frontColor: Color.white,
			despawnEffect: Fx.none,
		})
	}),
	item.energic, Object.assign(new ArtilleryBulletType(3, 20), {
		knockback: 0.8,
		lifetime: 86,
		width: 11,
		height: 11,
		collidesTiles: false,
		splashDamageRadius: 24,
		splashDamage: 42,
		backColor: Color.valueOf("fa7f7f"),
		frontColor: Color.white,
		ammoMultiplier: 4,
		reloadMultiplier: 1.25,
		fragBullets: 3,
		fragBullet: Object.assign(new LightningBulletType(), {
			damage: 9,
			collidesAir: false,
			ammoMultiplier: 1,
			lightningColor: Color.valueOf("fa7f7f"),
			lightningLength: 2,
			lightningLengthRand: 6,
		})
	}),
	item.sulfone, Object.assign(new ArtilleryBulletType(3.5, 25), {
		hitEffect: Fx.blastExplosion,
		knockback: 0.8,
		lifetime: 80,
		width: 13,
		height: 13,
		collidesTiles: false,
		splashDamageRadius: 8 * 3.25,
		splashDamage: 55,
		status: StatusEffects.burning,
		statusDuration: 60 * 15,
		frontColor: Color.valueOf("ede892"),
		backColor: Color.valueOf("d9c668"),
		trailColor: Color.valueOf("ede892"),
		makeFire: true,
		trailEffect: Fx.incendTrail,
		ammoMultiplier: 4,
		reloadMultiplier: 1.25,
	}),
)

const b = extend(BulletType,{
    speed: 0.01,
    damage: 0,
    collidesGround: false,
    collidesAir: false,
    collides: false,
    absorbable: false,
    hittable: false,
    lifetime: 60,
    hitEffect: Fx.none,
    despawnEffect: Fx.none,
    lightOpacity: 0,
})

const soak = new LiquidTurret("soak");
exports.soak = soak
Object.assign(soak,{
    size: 2,
    recoil: 0,
    reload: 3,
    inaccuracy: 5,
    shootCone: 50,
    liquidCapacity: 20,
    shootEffect: Fx.shootLiquid,
    range: 120,
    unitSort: UnitSorts.strongest,
    scaledHealth: 250,
    category: Category.turret,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
	    Items.silicon, 15,
		item.nickel, 100,
		item.crystal, 30,
	),
})
soak.ammo(
    Liquids.water,Object.assign(new LiquidBulletType(Liquids.water),{
        knockback: 0.7,
        drag: 0.01,
        lifetime: 37,
        layer: Layer.bullet - 2,
    }),
    Liquids.oil,Object.assign(new LiquidBulletType(Liquids.oil),{
        drag: 0.01,
        lifetime: 37,
        layer: Layer.bullet - 2,
    }),
    liquid.acid,Object.assign(new LiquidBulletType(liquid.acid),{
        damage: 5,
        drag: 0.01,
        lifetime: 37,
        layer: Layer.bullet - 2,
    }),
    liquid.dissolvant,extend(LiquidBulletType,liquid.dissolvant,{
        damage: 3,
        drag: 0.01,
        lifetime: 37,
        layer: Layer.bullet - 2,
        update(b){
            this.super$update(b);
            
            let tile = Vars.world.tileWorld(b.x,b.y);
            if(tile != null){
                let other = Puddles.get(tile);
                if(other != null && other.liquid == Liquids.neoplasm){
                    if(other.amount > 20){
                        other.amount -= 20
                        b.absorb()
                    }else{
                        other.remove()
                    }
                }
            }
        }
    })
)
soak.buildType = prov(() => extend(LiquidTurret.LiquidTurretBuild, soak, {
    findTarget() {
        this.super$findTarget()
        
        if(this.liquids.current() == liquid.dissolvant){
            this.tile.circle((this.block.range - 1) / 8, cons(tile => {
                let other = Puddles.get(tile);
                if(other != null && other.liquid == Liquids.neoplasm && other.amount > 0.01 && this.target == null){
                    this.target = b.create(this,Team.derelict,tile.worldx(),tile.worldy(),this.rotation - 180)
                }
            }))
        }
    }
}))

const spiral = new PowerTurret("spiral");
exports.spiral = spiral;
Object.assign(spiral, {
	reload: 60,
	shootCone: 12,
	size: 2,
	range: 16 * 8,
	health: 1050,
	rotateSpeed: 6,
	recoil: 2,
	shootY: 7,
	targetAir: false,
	shootEffect: Fx.lightningShoot,
	shootSound: Sounds.blaster,
	heatColor: Color.red,
	shoot: new ShootMulti(
	    new ShootPattern(),
	    Object.assign(new ShootHelix(),{
			mag: 3,
			scl: 4,
		}),
		new ShootPattern(),
	),
	category: Category.turret,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
	    Items.silicon, 30,
		item.nickel, 120,
		item.manganese, 75,
	),
	shootType: Object.assign(new BasicBulletType(2, 30),{
		width: 7,
		height: 12,
		lifetime: 64,
		shootEffect: Fx.sparkShoot,
		smokeEffect: Fx.shootBigSmoke,
		hitColor: Pal.lancerLaser,
		backColor: Pal.lancerLaser,
		trailColor: Pal.lancerLaser,
		frontColor: Color.white,
		trailWidth: 1.5,
		trailLength: 5,
		hitEffect: Fx.hitBulletColor,
		despawnEffect: Fx.hitBulletColor,
		lightningColor: Pal.lancerLaser,
		lightningDamage: 9,
		lightning: 9,
		lightningLength: 1,
		lightningLengthRand: 6,
	})
})
spiral.consumePower(3.7)
AddCoolant(spiral,0.15);

const lacerate = new PowerTurret("lacerate");
exports.lacerate = lacerate;
Object.assign(lacerate, {
	range: 176,
	reload: 80,
	shootCone: 8,
	shootY: 2,
	size: 2,
	health: 1250,
	rotateSpeed: 7,
	recoil: 2,
	targetAir: false,
	moveWhileCharging: false,
	accurateDelay: false,
	shootEffect: Fx.lancerLaserShoot,
	shootSound: Sounds.laser,
	heatColor: Color.red,
	category: Category.turret,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
	    Items.silicon, 60,
		item.nickel, 100,
		item.manganese, 30,
		item.crystal, 50,
	),
	shootType: Object.assign(new LaserBulletType(230), {
		chargeEffect: new MultiEffect(
			Fx.lancerLaserCharge,
			Fx.lancerLaserChargeBegin
		),
		hitEffect: Fx.hitLancer,
		hitSize: 6,
		lifetime: 16,
		drawSize: 400,
		collidesAir: false,
		length: 200,
		ammoMultiplier: 1,
		pierce: true,
		pierceArmor: true,
		pierceCap: 3,
	})
})
lacerate.consumePower(4.8);
lacerate.buildType = prov(() => extend(PowerTurret.PowerTurretBuild, lacerate, {
    update(){
        this.super$update()
        
        if(this.isShooting() && this.timeScale <= 3){
            this.applyBoost(0.1 + this.timeScale, 10)
        }else{
            this.timeScale = Math.max(0, this.timeScale - 0.3)
        }
    },
    getTimeScale(){
        return this.timeScale
    }
}))

const lumen = new ItemTurret("lumen");
exports.lumen = lumen;
Object.assign(lumen, {
	health: 1040,
	size: 3,
	reload: 90,
	targetAir: false,
	range: 8 * 25,
	maxAmmo: 20,
	shootCone: 5,
	rotateSpeed: 4.5,
	recoil: 4,
	ammoPerShot: 5,
	shootSound: Sounds.mediumCannon,
	buildVisibility: BuildVisibility.shown,
	category: Category.turret,
	requirements: ItemStack.with(
		item.nickel, 150,
		item.crystal, 75,
		item.manganese, 100,
		item.biomassSteel, 150,
	)
})
AddCoolant(lumen,0.15);
lumen.ammo(
	item.crystal, Object.assign(new ReduceArmorBulletType(6, 350, 7), {
		ammoMultiplier: 1,
		width: 7,
		height: 21,
		lifetime: 33.4,
		hitSize: 4,
		hitColor: Color.valueOf("7e8ae6"),
		backColor: Color.valueOf("7e8ae6"),
		trailColor: Color.valueOf("7e8ae6"),
		frontColor: Color.white,
		trailWidth: 2,
		trailLength: 5,
		
		hitEffect: Fx.flakExplosionBig,
		
		pierce: true,
		pierceBuilding: true,
		pierceCap: 20,
		
		knockback: 12,
		
		intervalBullets: 5,
		bulletInterval: 2,
		intervalBullet: Object.assign(new BasicBulletType(), {
			lifetime: 1,
			damage: 12,
			width: 3,
			height: 3,
			frontColor: Color.valueOf("7e8ae6"),
			backColor: Color.valueOf("7e8ae6"),
			hitColor: Color.valueOf("7e8ae6"),
		}),
		fragBullets: 13,
		fragBullet: Object.assign(new BasicBulletType(), {
			lifetime: 1,
			damage: 12,
			width: 3,
			height: 3,
			frontColor: Color.valueOf("7e8ae6"),
			backColor: Color.valueOf("7e8ae6"),
			hitColor: Color.valueOf("7e8ae6"),
		})
	}),
	item.energic, Object.assign(new ReduceArmorBulletType(6, 370, 7), {
		ammoMultiplier: 1,
		width: 7,
		height: 21,
		lifetime: 33.4,
		hitSize: 4,
		hitColor: Color.valueOf("fa7f7f"),
		backColor: Color.valueOf("fa7f7f"),
		trailColor: Color.valueOf("fa7f7f"),
		frontColor: Color.white,
		trailWidth: 2,
		trailLength: 5,
		
		hitEffect: Fx.flakExplosionBig,
		
		pierce: true,
		pierceBuilding: true,
		pierceCap: 15,
		
		reloadMultiplier: 1.25,
		
		knockback: 12,
		intervalBullets: 5,
		bulletInterval: 2,
		intervalRandomSpread: 20,
		intervalSpread: 0,
		intervalAngle: 180,
		intervalBullet: Object.assign(new LightningBulletType(), {
			damage: 15,
			collidesAir: false,
			ammoMultiplier: 1,
			lightningColor: Color.valueOf("fa7f7f"),
			lightningLength: 2,
			lightningLengthRand: 6,
		}),
		lightningColor: Color.valueOf("fa7f7f"),
		lightningDamage: 15,
		lightning: 7,
		lightningLength: 1,
		lightningLengthRand: 6,
	})
)

const blowtorth = new ContinuousLiquidTurret("blowtorth");
exports.blowtorth = blowtorth;
Object.assign(blowtorth,{
	liquidConsumed: 18 / 60,
	targetInterval: 5,
	range: 140,
	shootY: 4,
	
	size: 3,
	
	loopSound: Sounds.torch,
	shootSound: Sounds.none,
	loopSoundVolume: 3,
	buildVisibility: BuildVisibility.shown,
	category: Category.turret,
	requirements: ItemStack.with(
	    Items.silicon, 200,
		item.nickel, 400,
		item.manganese, 150,
		item.biomassSteel, 75,
	),
})
blowtorth.ammo(
	Liquids.hydrogen, Object.assign(new ContinuousFlameBulletType(),{
		damage: 90,
		length: 145,
		pierceCap: 3,
	
		colors: [
			Color.valueOf("5fd4ff8d"),
			Color.valueOf("85d6f4b3"),
			Color.valueOf("a2dcf1cd"),
			Color.valueOf("c4e4f0ff"),
			Color.white
		],
		
		status: StatusEffects.melting,
		statusDuration: 120,
		
		flareColor: Color.valueOf("5fd4ff8d"),
		lightColor: Color.valueOf("5fd4ff8d"),
		hitColor: Color.valueOf("5fd4ff8d"),
	}),
	liquid.acetylene, Object.assign(new ContinuousFlameBulletType(),{
	    damage: 1600 / 12,
	    length: 160,
		pierceCap: 3,
		rangeChange: 10,
		
		ammoMultiplier: 0.75,
		
		colors: [
			Color.valueOf("CA1FF58d"),
			Color.valueOf("D757F8b3"),
			Color.valueOf("E48FFAcd"),
			Color.valueOf("F2C7FCff"),
			Color.white
		],
		
		status: StatusEffects.melting,
		statusDuration: 120,
		
		flareColor: Color.valueOf("CA1FF58d"),
		lightColor: Color.valueOf("CA1FF58d"),
		hitColor: Color.valueOf("CA1FF58d"),
	})
)

function ToxicAbility(damage, reload, range) {
	return extend(Ability, {
	    i: 0,
	    j: 75,
		update(unit) {
			this.i += Time.delta
			this.j += Time.delta
			if (this.i >= reload) {
				Units.nearby(null, unit.x, unit.y, range, other => {
					other.health -= damage;
					other.apply(status.poisoned, 60 * 15);
				})
				Units.nearbyBuildings(unit.x, unit.y, range, b => {
					b.health -= damage / 4
					if(b.health <= 0){b.kill()}
				})
				this.i = 0
			}
			if (this.j >= 15) {
				Fx.titanSmoke.at(
					unit.x + Mathf.range(range * 0.7071),
					unit.y + Mathf.range(range * 0.7071),
					Color.valueOf("92AB117F")
				)
				this.j -= 15
			}
		},
		/*draw(unit){
		    Draw.color(Color.red)
		    
		    for(let i = 0; i < 2; i++){
                let rot = i * 180 + Time.time * 1;
                Lines.arc(unit.x, unit.y, range, 0.2, rot);
            }
		}*/
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
	lifetime: 60 * 15,
	health: 10000,
	drawMinimap: false,
	flying: false,
	drawCell: false,
	deathSound: Sounds.none,
})
bottle.abilities.add(
	new ToxicAbility(50,60,80)
)
bottle.immunities.addAll(status.poisoned)

const midnight = new LiquidTurret("midnight");
exports.midnight = midnight;
Object.assign(midnight,{
    size: 4,
    recoil: 2,
    reload: 180,
    inaccuracy: 5,
    shootCone: 50,
    liquidCapacity: 30,
    ammoPerShot: 10,
    minRange: 190,
    ammoUseEffect: Fx.casing1,
	targetAir: false,
	extinguish: false,
	shootSound: Sounds.artillery,
    range: 8 * 40,
    unitSort: UnitSorts.farthest,
    scaledHealth: 250,
    category: Category.turret,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
	    Items.silicon, 250,
		item.nickel, 400,
		item.crystal, 300,
		item.manganese, 250,
	),
})
midnight.ammo(
	liquid.yperite, Object.assign(new ArtilleryBulletType(4, 150), {
		lifetime: 130,
		height: 19,
		width: 17,
		ammoMultiplier: 1,
		backColor: Color.valueOf("515e09"),
		frontColor: Color.white,
		trailColor: Color.valueOf("515e09"),
		shrinkX: 0,
		shrinkY: 0,
		hitShake: 0,
		hitSound: Sounds.none,
		despawnUnit: bottle
	})
)