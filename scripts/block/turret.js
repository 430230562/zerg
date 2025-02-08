const item = require('zerg/item');
const liquid = require('zerg/liquid');
const status = require('zerg/status');
const { ReduceArmorBulletType } = require('zerg/base/bulletType');
const { SniperRailEffect } = require("zerg/effect");
const { ToxicAbility } = require("zerg/base/ability")

function AddCoolant(turret,amount){
	return turret.coolant = turret.consumeCoolant(amount);
}

const guard = new ItemTurret("guard");
exports.guard = guard;
Object.assign(guard,{
	shootY: 3,
	reload: 50,
	range: 120,
	shootCone: 15,
	ammoUseEffect: Fx.casing1,
	health: 360,
	inaccuracy: 1,
	rotateSpeed: 10,
	shoot: Object.assign(new ShootPattern(),{
		shots: 3,
		shotDelay: 3,
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
	item.nickel, Object.assign(new BasicBulletType(3, 9),{
		width: 2,
		height: 9,
		lifetime: 60,
		ammoMultiplier: 3,
	}),
	Items.graphite, Object.assign(new BasicBulletType(3, 15),{
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
	reload: 12,
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
	shoot: Object.assign(new ShootAlternate(6),{
	    shots: 2,
	}),
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
	Items.graphite, Object.assign(new BasicBulletType(5, 10),{
		width: 5,
		height: 12,
		ammoMultiplier: 6,
		lifetime: 45,
		hitEffect: Fx.flakExplosionBig,
		collidesGround: false,
		fragBullets: 7,
		fragBullet: Object.assign(new BasicBulletType(3,5),{
			width: 1,
			height: 1,
			lifetime: 120,
			drag: 0.3,
			collidesGround: false,
			hitEffect: Fx.none,
			despawnEffect: Fx.none,
			lightOpacity: 0,
		})
	}),
	item.crystal, Object.assign(new BasicBulletType(5, 12),{
		width: 5,
		height: 12,
		ammoMultiplier: 8,
		lifetime: 45,
		hitEffect: Fx.flakExplosionBig,
		collidesGround: false,
		fragBullets: 9,
		fragVelocityMin: 1,
		fragVelocityMax: 7,
		fragBullet: Object.assign(new BasicBulletType(3,7),{
			width: 1,
			height: 1,
			lifetime: 150,
			drag: 0.3,
			collidesGround: false,
			hitEffect: Fx.none,
			despawnEffect: Fx.none,
			lightOpacity: 0,
		})
	})
)

const nexus = new ItemTurret("nexus");
exports.nexus = nexus;
Object.assign(nexus, {
	reload: 30,
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
		shotDelay: 2,
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
	item.nickel, Object.assign(new BasicBulletType(3, 9), {
		width: 2,
		height: 9,
		ammoMultiplier: 3,
		lifetime: 65,
	}),
	Items.graphite, Object.assign(new BasicBulletType(4, 15), {
		width: 2,
		height: 12,
		reloadMultiplier: 0.6,
		ammoMultiplier: 6,
		lifetime: 50,
	}),
	Items.silicon, Object.assign(new BasicBulletType(4, 12), {
		width: 2,
		height: 12,
		reloadMultiplier: 1.5,
		ammoMultiplier: 6,
		lifetime: 50,
		homingRange: 32,
		homingPower: 0.04,
	}),
	item.manganese, Object.assign(new BasicBulletType(4, 11), {
		width: 2,
		height: 12,
		shootEffect: Fx.shootBig,
		smokeEffect: Fx.shootBigSmoke,
		ammoMultiplier: 4,
		reloadMultiplier: 0.8,
		lifetime: 60,
		fragBullets: 2,
		fragBullet: Object.assign(new BasicBulletType(3, 3), {
			width: 5,
			height: 12,
			shrinkY: 1,
			lifetime: 5,
			despawnEffect: Fx.none,
		})
	}),
	item.chromium, Object.assign(new BasicBulletType(4, 21), {
		width: 2,
		height: 9,
		ammoMultiplier: 3,
		lifetime: 60,
		pierceCap: 3,
	}),
	Items.pyratite, Object.assign(new BasicBulletType(3, 19), {
		width: 10,
		height: 12,
		frontColor: Pal.lightishOrange,
		backColor: Pal.lightOrange,
		status: StatusEffects.burning,
		hitEffect: new MultiEffect(
			Fx.hitBulletSmall,
			Fx.fireHit
		),
		ammoMultiplier: 6,
		reloadMultiplier: 1.5,
		splashDamage: 24,
		splashDamageRadius: 32,
		makeFire: true,
		lifetime: 64,
	}),
)

nexus.drawer = new DrawTurret();
nexus.drawer.parts.addAll(
    new RegionPart("-bottom"),
    Object.assign(new RegionPart("-top"),{
        progress: DrawPart.PartProgress.recoil,
        moveY: -2.5,
    })
)

const bomb = new ItemTurret("bomb");
exports.bomb = bomb;
Object.assign(bomb, {
	reload: 120,
	size: 2,
	range: 32 * 8,
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
		Items.silicon, 100,
		item.nickel, 100,
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
		splashDamageRadius: 16,
		splashDamage: 41,
		reloadMultiplier: 0.8,
		backColor: Color.valueOf("7e8ae6"),
		frontColor: Color.white,
		fragBullets: 2,
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
		splashDamage: 63,
		backColor: Color.valueOf("fa7f7f"),
		frontColor: Color.white,
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
	Items.pyratite, Object.assign(new ArtilleryBulletType(3.5, 25), {
		hitEffect: Fx.blastExplosion,
		knockback: 0.8,
		lifetime: 80,
		width: 13,
		height: 13,
		collidesTiles: false,
		splashDamageRadius: 8 * 3.25,
		splashDamage: 82.5,
		status: StatusEffects.burning,
		statusDuration: 60 * 15,
		frontColor: Pal.lightishOrange,
		backColor: Pal.lightOrange,
		trailColor: Pal.lightishOrange,
		makeFire: true,
		trailEffect: Fx.incendTrail,
		ammoMultiplier: 4,
		reloadMultiplier: 0.75,
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
		Items.silicon, 30,
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
	Liquids.slag,Object.assign(new LiquidBulletType(Liquids.slag),{
		speed: 5.5,
		knockback: 0.7,
		damage: 5,
		drag: 0.01,
		lifetime: 60,
		layer: Layer.bullet - 2,
	}),
	liquid.acid,Object.assign(new LiquidBulletType(liquid.acid),{
		damage: 5,
		knockback: 0.5,
		drag: 0.01,
		lifetime: 37,
		layer: Layer.bullet - 2,
	}),
	Liquids.arkycite, Object.assign(new LiquidBulletType(Liquids.arkycite),{
	    damage: 0,
	    knockback: 1,
		drag: 0.01,
		lifetime: 37,
		layer: Layer.bullet - 2,
	}),
	liquid.dissolvant,extend(LiquidBulletType,liquid.dissolvant,{
		damage: 3,
		knockback: 1,
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
	reload: 45,
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
	shoot: Object.assign(new ShootHelix(),{
		mag: 3,
		scl: 2,
	}),
	category: Category.turret,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
	    Items.graphite, 75,
		Items.silicon, 30,
		item.nickel, 120,
	),
	shootType: Object.assign(new BasicBulletType(4, 25),{
		width: 7,
		height: 12,
		lifetime: 35,
		pierce: true,
		absorbable: false,
		collidesAir: false,
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
		lightning: 3,
		lightningLength: 1,
		lightningLengthRand: 6,
	})
})
spiral.consumePower(4.8)
AddCoolant(spiral,0.15);

const lacerate = new PowerTurret("lacerate");
exports.lacerate = lacerate;
Object.assign(lacerate, {
	range: 12 * 8,
	reload: 90,
	shootCone: 30,
	shootY: 2,
	size: 2,
	health: 1250,
	rotateSpeed: 3,
	recoil: 4,
	targetAir: false,
	moveWhileCharging: false,
	accurateDelay: false,
	shootEffect: Fx.lancerLaserShoot,
	shootSound: Sounds.shotgun,
	shoot: Object.assign(new ShootSpread(3, 15),{
	    firstShotDelay: 40,
	}),
	heatColor: Color.red,
	category: Category.turret,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		Items.silicon, 60,
		item.nickel, 100,
		item.manganese, 50,
	),
	shootType: Object.assign(new ShrapnelBulletType(), {
		length: 90,
        damage: 220,
        width: 13,
        collidesAir: false,
	})
})
lacerate.consumePower(6.4);
AddCoolant(lacerate,0.15);

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
	item.crystal, Object.assign(new ReduceArmorBulletType(6, 300, 7), {
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
		reloadMultiplier: 0.5,
		
		hitEffect: Fx.flakExplosionBig,
		
		pierce: true,
		pierceBuilding: true,
		collidesAir: false,
		
		knockback: 12,
		
		intervalBullets: 3,
		bulletInterval: 1,
		intervalBullet: Object.assign(new BasicBulletType(), {
			lifetime: 1,
			damage: 5,
			width: 3,
			height: 3,
			frontColor: Color.valueOf("7e8ae6"),
			backColor: Color.valueOf("7e8ae6"),
			hitColor: Color.valueOf("7e8ae6"),
		}),
		fragBullets: 7,
		fragBullet: Object.assign(new BasicBulletType(), {
			lifetime: 3,
			damage: 12,
			width: 3,
			height: 3,
			frontColor: Color.valueOf("7e8ae6"),
			backColor: Color.valueOf("7e8ae6"),
			hitColor: Color.valueOf("7e8ae6"),
		})
	}),
	item.energic, Object.assign(new ReduceArmorBulletType(6, 350, 7), {
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
		collidesAir: false,
		
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
		lightningDamage: 7,
		lightning: 7,
		lightningLength: 1,
		lightningLengthRand: 6,
	})
)

const serum = new TractorBeamTurret("serum")
exports.serum = serum;
Object.assign(serum,{
	category: Category.turret,
	buildVisibility: BuildVisibility.shown,
	size: 3,
	force: 0,
	scaledForce: 0,
	range: 240,
	damage: 0,
	targetGround: true,
	health: 1600,
})
serum.consumePower(7.9)
serum.buildType = prov(() => extend(TractorBeamTurret.TractorBeamBuild, serum, {
    mul: 1,
	updateTile(){
		this.super$updateTile();
		if(this.target != null && this.efficiency >= 0.001){
			/*this.target.impulse(
				Math.cos(Angles.angle(this.x, this.y, this.target.x, this.target.y)* Math.PI / 180) * 24,
				Math.sin(Angles.angle(this.x, this.y, this.target.x, this.target.y)* Math.PI / 180) * 24
			)*/
			this.target.damageContinuous(110/60 * this.mul * this.efficiency);
			if(this.mul <= 20 && this.efficiency >= 0.8) this.mul += 1/60
		}else if(this.mul >= 1){
			this.mul -= 1/6
		}
	}
}))

const deluge = new LiquidTurret("deluge");
exports.deluge = deluge;
Object.assign(deluge,{
	size: 3,
	recoil: 0,
	reload: 12,
	inaccuracy: 1,
	velocityRnd: 0.2,
	shootCone: 50,
	liquidCapacity: 50,
	shootEffect: Fx.shootLiquid,
	shoot: Object.assign(new ShootAlternate(), {
		shotDelay: 2,
		shots: 8,
		barrels: 4,
		spread: 3,
	}),
	range: 200,
	scaledHealth: 250,
	category: Category.turret,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		Items.silicon, 150,
		item.nickel, 350,
		item.manganese, 250,
		item.crystal, 75,
	),
})
deluge.ammo(
	Liquids.water,Object.assign(new LiquidBulletType(Liquids.water),{
		speed: 5.5,
		knockback: 1.3,
		drag: 0.01,
		lifetime: 60,
		layer: Layer.bullet - 2,
	}),
	Liquids.slag,Object.assign(new LiquidBulletType(Liquids.slag),{
		speed: 5.5,
		knockback: 1,
		damage: 5,
		drag: 0.01,
		lifetime: 60,
		layer: Layer.bullet - 2,
	}),
	liquid.acid,Object.assign(new LiquidBulletType(liquid.acid),{
		speed: 5.5,
		knockback: 1,
		damage: 5,
		drag: 0.01,
		lifetime: 60,
		layer: Layer.bullet - 2,
	}),
	Liquids.arkycite, Object.assign(new LiquidBulletType(Liquids.arkycite),{
	    speed: 5.5,
	    knockback: 1.7,
		drag: 0.01,
		lifetime: 60,
		layer: Layer.bullet - 2,
	}),
	liquid.dissolvant,extend(LiquidBulletType,liquid.dissolvant,{
		speed: 5.5,
		knockback: 1.7,
		damage: 3,
		drag: 0.01,
		lifetime: 60,
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
deluge.buildType = prov(() => extend(LiquidTurret.LiquidTurretBuild, deluge, {
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

const blowtorth = new ContinuousLiquidTurret("blowtorth");
exports.blowtorth = blowtorth;
Object.assign(blowtorth,{
	liquidConsumed: 18 / 60,
	targetInterval: 5,
	range: 140,
	shootY: 0,
	
	size: 3,
	
	loopSound: Sounds.torch,
	shootSound: Sounds.none,
	loopSoundVolume: 3,
	health: 1080,
	buildVisibility: BuildVisibility.shown,
	category: Category.turret,
	requirements: ItemStack.with(
		Items.silicon, 200,
		item.nickel, 400,
		item.manganese, 150,
		item.biomassSteel, 125,
	),
})
blowtorth.ammo(
	liquid.naturalGas, Object.assign(new ContinuousFlameBulletType(),{
		damage: 1200 / 12,
		length: 160,
		pierceCap: 3,
		
		ammoMultiplier: 0.75,
		
		colors: [
			Color.valueOf("ca1ff58d"),
			Color.valueOf("d757f8b3"),
			Color.valueOf("e48ffacd"),
			Color.valueOf("f2c7fcff"),
			Color.white
		],
		
		status: StatusEffects.melting,
		statusDuration: 120,
		
		flareColor: Color.valueOf("ca1ff58d"),
		lightColor: Color.valueOf("ca1ff58d"),
		hitColor: Color.valueOf("ca1ff58d"),
	})
)

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
	new ToxicAbility(10,15,80)
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
	minRange: 160,
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
		item.biomassSteel, 250,
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
midnight.drawer = new DrawTurret();
midnight.drawer.parts.addAll(
	Object.assign(new RegionPart("-barrel"),{
		progress: DrawPart.PartProgress.recoil.curve(Interp.pow2In),
		moveY: -5 * 4 / 3,
		heatColor: Color.valueOf("f03b0e"),
		mirror: false,
	}),
	Object.assign(new RegionPart("-side"),{
		heatProgress: DrawPart.PartProgress.recoil,
		progress: DrawPart.PartProgress.warmup,
		mirror: true,
		moveX: 2 * 4 / 3,
		moveY: -0.5,
		moveRot: -40,
		under: true,
		heatColor: Color.red
	})
);

const skyfire = new ItemTurret("skyfire");
exports.skyfire = skyfire;
Object.assign(skyfire,{
    reload: 3 * 60,
	range: 70 * 8,
	shootCone: 10,
	unitSort: UnitSorts.farthest,
	health: 3300,
	size: 4,
	rotateSpeed: 3,
	recoil: 0.5,
	recoilTime: 30,
	shake: 5,
	maxAmmo: 40,
	ammoPerShot: 16,
	targetAir: false,
	coolantMultiplier: 0.75,
	shootSound: Sounds.dullExplosion,
	category: Category.turret,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
	    Items.graphite, 200,
		Items.silicon, 100,
		item.nickel, 450,
		item.manganese, 350,
		item.chromium, 150,
		item.organistal, 150,
	),
})
skyfire.ammo(
    Items.pyratite, Object.assign(new ArtilleryBulletType(3, 160, "shell"),{
		hitEffect: new MultiEffect(
			Fx.titanExplosion,
			Fx.titanSmoke
		),
		despawnEffect: Fx.none,
		knockback: 2,
		lifetime: 160,
		height: 21,
		width: 19,
		splashDamageRadius: 72,
		splashDamage: 850,
		scaledSplashDamage: true,
		backColor: Color.valueOf("d9c668cd"),
		hitColor: Color.valueOf("d9c668cd"),
		trailColor: Color.valueOf("d9c668cd"),
		frontColor: Color.white,
		ammoMultiplier: 1,
		hitSound: Sounds.titanExplosion,

		status: StatusEffects.blasted,

		trailLength: 32,
		trailWidth: 3.35,
		trailSinScl: 2.5,
		trailSinMag: 0.5,
		trailEffect: Fx.none,
		despawnShake: 7,

		shootEffect: Fx.shootTitan,
		smokeEffect: Fx.shootSmokeTitan,

		trailInterp: v => Math.max(Mathf.slope(v), 0.8),
		shrinkX: 0.2,
		shrinkY: 0.1,
		
		fragBullets: 9,
		fragRandomSpread: 5,
		fragSpread: 90 / 8,
		fragVelocityMin: 3,
		fragVelocityMax: 5,
		fragLifeMin: 3,
		fragLifeMax: 4,
		fragBullet: Object.assign(new BasicBulletType(1, 20), {
    		ammoMultiplier: 1,
    		width: 7,
    		height: 21,
    		lifetime: 10,
    		hitSize: 4,
    		hitColor: Pal.lightOrange,
    		backColor: Pal.lightOrange,
    		trailColor: Pal.lightOrange,
    		frontColor: Color.white,
    		trailWidth: 2,
    		trailLength: 5,
    		
    		hitEffect: Fx.flakExplosionBig,
    		
    		collidesAir: false,
    		
    		intervalBullets: 3,
    		bulletInterval: 1,
    		intervalBullet: Object.assign(new BasicBulletType(), {
    			lifetime: 2,
    			damage: 5,
    			width: 3,
    			height: 3,
    			frontColor: Pal.lightOrange,
    			backColor: Pal.lightOrange,
    			hitColor: Pal.lightOrange,
    		}),
    	})
	})
)

const aurora = new PowerTurret("aurora");
exports.aurora = aurora;
Object.assign(aurora,{
    reload: 6,
    shootY: 0,
	range: 41 * 8,
	shootCone: 24,
	targetGround: false,
	health: 2375,
	size: 4,
	rotateSpeed: 7.5,
	recoil: 0.5,
	recoilTime: 10,
	coolantMultiplier: 1.8,
	category: Category.turret,
	buildVisibility: BuildVisibility.shown,
	shoot: Object.assign(new ShootBarrel(),{
	    shots: 6,
	    shotDelay: 4,
	    barrels:[
	        5,12.25,0,
	        -5,12.25,0,
	        8,12.25,0,
	        -8,12.25,0
	    ]
	}),
    inaccuracy: 6,
    velocityRnd: 0.1,
            
	requirements: ItemStack.with(
	    Items.graphite, 50,
		Items.silicon, 100,
		item.nickel, 500,
		item.manganese, 200,
		item.chromium, 200,
		item.organistal, 150,
		item.biomassSteel, 175,
		item.iridium, 75,
	),
	shootType: Object.assign(new BasicBulletType(),{
	    damage: 47,
	    speed: 8,
	    lifetime: 46,
	    width: 16,
	    height: 16,
        shrinkY: 0.3,
        backSprite: "large-bomb-back",
        sprite: "mine-bullet",
        collidesGround: false,
        collidesTiles: false,
        shootEffect: Fx.shootBig2,
        smokeEffect: Fx.shootSmokeDisperse,
        frontColor: Color.valueOf("ffffff7f"),
        backColor: Color.valueOf("12a182ff"),
        trailColor: Color.valueOf("12a182ff"),
        hitColor: Color.valueOf("12a182ff"),
        trailChance: 0.33,
        trailRotation: true,
        trailEffect: Fx.disperseTrail,

        hitEffect: Fx.hitBulletColor,
        despawnEffect: Fx.hitBulletColor,
        
        fragBullets: 1,
        fragRandomSpread: 0,
		fragSpread: 0,
		fragBullet: Object.assign(new ShrapnelBulletType(), {
		    length: 24,
            damage: 28,
            width: 9,
            collidesGround: false,
            collidesTiles: false,
	    })
	})
})
aurora.consumePower(16);
AddCoolant(aurora,0.35);

const sange = new ItemTurret("sange");
exports.sange = sange;
Object.assign(sange,{
	reload: 4,
	range: 38 * 8,
	shootCone: 20,
	health: 3600,
	size: 4,
	rotateSpeed: 5,
	recoil: 0.5,
	recoilTime: 30,
	shake: 3,
	ammoPerShot: 3,
	coolantMultiplier: 0.75,
	shootSound: Sounds.shootBig,
	shoot: new ShootMulti(
		new ShootPattern(),
		extend(ShootPattern,{
			shoot(totalShots, handler, barrelIncrementer){
				handler.shoot(0, 0, Mathf.range(45 / 2), 0)
				handler.shoot(0, 0, Mathf.range(45 / 2), 0)
			}
		})
	),
	category: Category.turret,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
	    Items.graphite, 150,
		Items.silicon, 100,
		item.nickel, 450,
		item.manganese, 250,
		item.organistal, 50,
		item.biomassSteel, 50,
	),
})
AddCoolant(sange, 0.2)
sange.ammo(
	Items.graphite, Object.assign(new BasicBulletType(6, 38),{
		sprite: "missile-large",

		lifetime: 52,
		width: 12,
		height: 22,

		hitSize: 7,
		shootEffect: Fx.shootSmokeSquareBig,
		smokeEffect: Fx.shootSmokeDisperse,
		ammoMultiplier: 4,
		reloadMultiplier: 1.2,
		knockback: 0.3,
		frontColor: Color.white,
		trailWidth: 3,
		trailLength: 12,
		hitEffect: Fx.hitBulletColor,
		despawnEffect: Fx.hitBulletColor,

		trailEffect: Fx.colorSpark,
		trailRotation: true,
		trailInterval: 3,

		despawnShake: 3,

		collidesGround: true,
	}),
	item.chromium, Object.assign(new BasicBulletType(8, 66),{
		sprite: "missile-large",

		lifetime: 40,
		width: 12,
		height: 22,

		hitSize: 7,
		shootEffect: Fx.shootSmokeSquareBig,
		smokeEffect: Fx.shootSmokeDisperse,
		ammoMultiplier: 2,
		knockback: 0.7,
		pierceCap: 3,
		frontColor: Color.white,
		trailWidth: 3,
		trailLength: 12,
		hitEffect: Fx.hitBulletColor,
		despawnEffect: Fx.hitBulletColor,

		trailEffect: Fx.colorSpark,
		trailRotation: true,
		trailInterval: 3,

		despawnShake: 3,

		collidesGround: true,
	}),
	Items.pyratite, Object.assign(new BasicBulletType(6, 45),{
		sprite: "missile-large",

		lifetime: 52,
		width: 12,
		height: 22,

		hitSize: 7,
		shootEffect: Fx.shootSmokeSquareBig,
		smokeEffect: Fx.shootSmokeDisperse,
		ammoMultiplier: 4,
		knockback: 0.5,
		pierceCap: 2,
		frontColor: Pal.lightishOrange,
		backColor: Pal.lightOrange,
		hitColor: Pal.lightishOrange,
		trailColor: Pal.lightishOrange,
		trailWidth: 3,
		trailLength: 12,
		hitEffect: Fx.hitBulletColor,
		despawnEffect: Fx.hitBulletColor,

		trailEffect: Fx.colorSpark,
		trailRotation: true,
		trailInterval: 3,

		despawnShake: 3,

		collidesGround: true,
		status: StatusEffects.burning,
		statusDuration: 60 * 15,
	})
)

const extinction = new ItemTurret("extinction")
exports.extinction = extinction;
Object.assign(extinction,{
    category: Category.turret,
	buildVisibility: BuildVisibility.shown,
	inaccuracy: 1,
    shake: 2,
    shootY: 4,
    health: 6500,
    outlineColor: Pal.darkOutline,
    size: 5,
    reload: 60,
    cooldownTime: 40,
    recoil: 3,
    range: 350,
    shootCone: 20,
    rotateSpeed: 1.5,
    shootSound: Sounds.cannon,
})
AddCoolant(extinction, 0.3)
extinction.ammo(
    item.iridium, Object.assign(new BasicBulletType(6,330),{
        shootEffect: new MultiEffect(
            Fx.shootTitan,
            Object.assign(new WaveEffect(),{
                colorTo: Color.valueOf("cc163a"),
                sizeTo: 26,
                lifetime: 14,
                strokeFrom: 4,
            })
        ),
        lifetime: 66.7,
        smokeEffect: Fx.shootSmokeTitan,
        hitColor: Color.valueOf("cc163a"),

        sprite: "large-orb",
        trailEffect: Fx.missileTrail,
        trailInterval: 3,
        trailParam: 4,
        pierce: true,
        fragOnHit: false,
        speed: 5,
        width: 16,
        height: 16,
        backColor: Color.valueOf("cc163a"),
        frontColor: Color.white,
        shrinkX: 0,
        shrinkY: 0,
        trailColor: Color.valueOf("cc163a"),
        trailLength: 12,
        trailWidth: 2.2,
        knockback: 5,
        despawnEffect: Object.assign(new ExplosionEffect(),{
            waveColor: Color.valueOf("cc163a"),
            smokeColor: Color.gray,
            sparkColor: Pal.sap,
            waveStroke: 4,
            waveRad: 40,
        }),
        hitEffect: Object.assign(new ExplosionEffect(),{
            waveColor: Color.valueOf("cc163a"),
            smokeColor: Color.gray,
            sparkColor: Pal.sap,
            waveStroke: 4,
            waveRad: 40,
        }),
        despawnSound: Sounds.dullExplosion,
        status: StatusEffects.sapped,

        intervalBullet: Object.assign(new BasicBulletType(3, 36),{
            width: 9,
            hitSize: 5,
            height: 15,
            pierce: true,
            lifetime: 24,
            pierceBuilding: true,
            hitColor: Color.valueOf("cc163a"),
            backColor: Color.valueOf("cc163a"),
            trailColor: Color.valueOf("cc163a"),
            frontColor: Color.white,
            trailWidth: 2.1,
            trailLength: 5,
            hitEffect: Object.assign(new WaveEffect(),{
                colorFrom: Color.valueOf("cc163a"),
                colorTo: Color.valueOf("cc163a"),
                sizeTo: 4,
                strokeFrom: 4,
                lifetime: 10,
            }),
            despawnEffect: Object.assign(new WaveEffect(),{
                colorFrom: Color.valueOf("cc163a"),
                colorTo: Color.valueOf("cc163a"),
                sizeTo: 4,
                strokeFrom: 4,
                lifetime: 10,
            }),
            status: StatusEffects.sapped,
            
            fragBullets: 1,
            fragRandomSpread: 0,
    		fragSpread: 0,
    		fragBullet: Object.assign(new ShrapnelBulletType(), {
    		    length: 24,
                damage: 8,
                width: 9,
                status: StatusEffects.sapped,
    	    })
        }),

        bulletInterval: 3,
        intervalRandomSpread: 0,
        intervalBullets: 2,
        intervalAngle: 180,
        intervalSpread: 90,
        
        fragBullets: 6,
        fragVelocityMin: 0.5,
        fragVelocityMax: 0.5,
        fragRandomSpread: 0,
		fragSpread: 60,
        
        fragBullet: Object.assign(new ShrapnelBulletType(), {
		    length: 64,
            damage: 160,
            width: 13,
            toColor: Color.valueOf("cc163a"),
            pierce: true,
        })
    })
)
        
function CometMissile(name,color,bullet){
	return extend(MissileUnitType,name,{
		speed: 21,
		maxRange: 6,
		lifetime: 210,
		engineColor: color,
		trailColor: color,
		engineLayer: Layer.effect,
		engineSize: 3.1,
		engineOffset: 10,
		rotateSpeed: 0.25,
		trailLength: 18,
		missileAccelTime: 210,
		lowAltitude: true,
		loopSound: Sounds.missileTrail,
		loopSoundVolume: 0.6,
		deathSound: Sounds.largeExplosion,
		deathExplosionEffect: Fx.massiveExplosion,
		targetAir: false,
	
		fogRadius: 6,
	
		health: 210,
		init(){
			this.super$init();
			
			this.weapons.add(
				Object.assign(new Weapon(),{
				    shoot: Object.assign(new ShootPattern(), {
		                firstShotDelay: 2
	                }),
					shootCone: 360,
					mirror: false,
					reload: 1,
					shootOnDeath: true,
					shake: 10,
					bullet: bullet
				})
			)
		}
	})
}

const comet = new ItemTurret("comet")
exports.comet = comet
Object.assign(comet,{
	reload: 600,
	range: 160 * 8,
	shootCone: 10,
	unitSort: UnitSorts.farthest,
	targetAir: false,
	health: 5250,
	size: 5,
	rotateSpeed: 3,
	recoil: 1.75,
	recoilTime: 30,
	shake: 5,
	maxAmmo: 60,
	ammoPerShot: 30,
	coolantMultiplier: 0.75,
	shootSound: Sounds.dullExplosion,
	category: Category.turret,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
	    Items.graphite, 200,
		Items.silicon, 150,
		item.nickel, 600,
		item.manganese, 400,
		item.energic, 240,
		item.organistal, 150,
		item.chromium, 300,
		item.iridium, 160,
	),
})
AddCoolant(comet,0.2)
comet.ammo(
	Items.graphite, Object.assign(new BasicBulletType(0, 1),{
		shootEffect: Fx.shootBig,
		//smokeEffect: Fx.shootSmokeMissile,
		ammoMultiplier: 2,

		spawnUnit: CometMissile("comet-graphite-missile",Color.valueOf("b2c6d2"),Object.assign(new ExplosionBulletType(1600, 88),{
			hitColor: Pal.techBlue,
			shootEffect: new MultiEffect(
				Fx.massiveExplosion,
				Fx.scatheExplosion,
				Fx.scatheLight,
				Object.assign(new WaveEffect(),{
					lifetime: 10,
					strokeFrom: 4,
					sizeTo: 130,
					colorFrom: Color.valueOf("b2c6d2"),
					colorTo: Color.valueOf("b2c6d2"),
					lightColor: Color.valueOf("b2c6d2")
				})
			),
		
			collidesAir: false,
			buildingDamageMultiplier: 0.3,
		
			ammoMultiplier: 1,
			fragVelocityMin: 3,
			fragVelocityMax: 4,
			fragLifeMin: 0.8,
			fragLifeMax: 1.25,
			fragBullets: 6,
			fragRandomSpread: 60,
			fragBullet: Object.assign(new ArtilleryBulletType(1, 38),{
				buildingDamageMultiplier: 0.3,
				drag: 0.02,
				hitEffect: Fx.massiveExplosion,
				despawnEffect: Fx.scatheSlash,
				knockback: 0.8,
				lifetime: 10,
				width: 18,
				height: 18,
				collidesTiles: false,
				splashDamageRadius: 24,
				backColor: Color.valueOf("b2c6d2"),
				trailColor: Color.valueOf("b2c6d2"),
				hitColor: Color.valueOf("b2c6d2"),
				frontColor: Color.white,
				smokeEffect: Fx.shootBigSmoke2,
				despawnShake: 7,
				lightRadius: 30,
				lightColor: Color.valueOf("b2c6d2"),
				lightOpacity: 0.5,
		
				trailLength: 20,
				trailWidth: 3.5,
				trailEffect: Fx.none,
			}),
		}))
	}),
	item.biomassSteel, Object.assign(new BasicBulletType(0, 1),{
		shootEffect: Fx.shootBig,
		//smokeEffect: Fx.shootSmokeMissile,
		ammoMultiplier: 1,

		spawnUnit: CometMissile("comet-biomass-steel-missile",Color.valueOf("114514"),Object.assign(new ExplosionBulletType(3000, 8 * 11.5),{
			hitColor: Pal.techBlue,
			shootEffect: new MultiEffect(
				Fx.massiveExplosion,
				Fx.scatheExplosion,
				Fx.scatheLight,
				Object.assign(new WaveEffect(),{
					lifetime: 10,
					strokeFrom: 4,
					sizeTo: 130,
					colorFrom: Color.valueOf("114514"),
					colorTo: Color.valueOf("114514"),
					lightColor: Color.valueOf("114514")
				})
			),

			collidesAir: false,
			buildingDamageMultiplier: 0.3,

			ammoMultiplier: 1,
			fragVelocityMin: 1,
			fragVelocityMax: 4,
			fragLifeMin: 0.8,
			fragLifeMax: 1.25,
			fragBullets: 10,
			fragRandomSpread: 36,
			fragBullet: Object.assign(new ArtilleryBulletType(1, 48),{
				buildingDamageMultiplier: 0.3,
				drag: 0.02,
				hitEffect: Fx.massiveExplosion,
				despawnEffect: Fx.scatheSlash,
				knockback: 0.8,
				lifetime: 10,
				width: 18,
				height: 18,
				collidesTiles: false,
				splashDamageRadius: 24,
				backColor: Color.valueOf("114514"),
				trailColor: Color.valueOf("114514"),
				hitColor: Color.valueOf("114514"),
				frontColor: Color.white,
				smokeEffect: Fx.shootBigSmoke2,
				despawnShake: 7,
				lightRadius: 30,
				lightColor: Color.valueOf("114514"),
				lightOpacity: 0.5,

				trailLength: 20,
				trailWidth: 3.5,
				trailEffect: Fx.none,
			}),
		}))
	})
)