const item = require('item');
const liquid = require('liquid');
const status = require('status');
const { Acid, ReduceArmorBulletType, FlameBulletType } = require('base/bulletType')

function AddCoolant(turret,amount){
	return turret.coolant = turret.consumeCoolant(amount);
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
    item.nickel, Object.assign(new BasicBulletType(3, 11),{
        width: 2,
        height: 9,
        lifetime: 60,
        ammoMultiplier: 3,
    }),
    Items.graphite, Object.assign(new BasicBulletType(3.5, 23),{
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
        fragBullet: Object.assign(new BasicBulletType(3,7),{
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
        fragBullets:13,
        fragVelocityMin: 1,
		fragVelocityMax: 7,
        fragBullet: Object.assign(new BasicBulletType(3,13),{
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
	Items.graphite, Object.assign(new BasicBulletType(4, 23), {
		width: 2,
		height: 12,
		reloadMultiplier: 0.75,
		ammoMultiplier: 6,
		lifetime: 50,
	}),
	item.nickel, Object.assign(new BasicBulletType(3.5, 11), {
		width: 2,
		height: 9,
		ammoMultiplier: 3,
		lifetime: 60,
	}),
	item.manganese, Object.assign(new BasicBulletType(4, 27), {
		width: 2,
		height: 12,
		shootEffect: Fx.shootBig,
		smokeEffect: Fx.shootBigSmoke,
		ammoMultiplier: 4,
		reloadMultiplier: 1.2,
		lifetime: 60,
		fragBullets: 9,
		fragBullet: Object.assign(new BasicBulletType(3, 5), {
			width: 5,
			height: 12,
			shrinkY: 1,
			lifetime: 20,
			despawnEffect: Fx.none,
		})
	}),
	item.sulfone, Object.assign(new BasicBulletType(3, 21), {
		width: 10,
		height: 12,
		frontColor: Color.valueOf("ede892"),
		backColor: Color.valueOf("d9c668"),
		status: StatusEffects.burning,
		hitEffect: new MultiEffect(
			Fx.hitBulletSmall,
			Fx.fireHit
		),
		ammoMultiplier: 10,
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
	item.crystal, Object.assign(new ArtilleryBulletType(3, 20), {
		knockback: 0.8,
		lifetime: 86,
		width: 11,
		height: 11,
		collidesTiles: false,
		splashDamageRadius: 8 * 3.75,
		splashDamage: 47,
		backColor: Color.valueOf("7e8ae6"),
		frontColor: Color.white,
		ammoMultiplier: 4,
		reloadMultiplier: 1.5,
		fragBullets: 3,
		fragBullet: Object.assign(new BasicBulletType(3, 12), {
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
		splashDamageRadius: 8 * 3.75,
		splashDamage: 60,
		backColor: Color.valueOf("fa7f7f"),
		frontColor: Color.white,
		ammoMultiplier: 4,
		reloadMultiplier: 1.5,
		lightning: 3,
        lightningLength: 7,
        lightningDamage: 9,
	}),
	item.sulfone, Object.assign(new ArtilleryBulletType(3.5, 25), {
		hitEffect: Fx.blastExplosion,
		knockback: 0.8,
		lifetime: 80,
		width: 13,
		height: 13,
		collidesTiles: false,
		splashDamageRadius: 25,
		splashDamage: 55,
		status: StatusEffects.burning,
		statusDuration: 60 * 15,
		frontColor: Color.valueOf("ede892"),
		backColor: Color.valueOf("d9c668"),
		trailColor: Color.valueOf("ede892"),
		makeFire: true,
		trailEffect: Fx.incendTrail,
		ammoMultiplier: 4,
	}),
)

const b = extend(BulletType,{
    speed: 0.1,
    damage: 0,
    lifetime: 20,
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
        damage: 3,
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
                    this.target = b.create(this,Team.derelict,tile.worldx(),tile.worldy(),0)
                }
            }))
        }
    }
}))

const electrolyze = new PowerTurret("electrolyze");
exports.electrolyze = electrolyze;
Object.assign(electrolyze, {
	reload: 40,
	shootCone: 12,
	size: 2,
	range: 96,
	health: 1050,
	rotateSpeed: 6,
	recoil: 2,
	targetAir: false,
	shootEffect: Fx.lightningShoot,
	shootSound: Sounds.spark,
	heatColor: Color.red,
	shoot: Object.assign(new ShootPattern(), {
		shots: 3,
	}),
	category: Category.turret,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
	    Items.silicon, 30,
		item.nickel, 120,
		item.manganese, 75,
	),
	shootType: Object.assign(new LightningBulletType(), {
		damage: 17,
		lightningLength: 20,
		collidesAir: false,
		pierceArmor: true,
		ammoMultiplier: 1,
	})
})
electrolyze.consumePower(4.7)
AddCoolant(electrolyze,0.15);

const lacerate = new PowerTurret("lacerate");
exports.lacerate = lacerate;
Object.assign(lacerate, {
	range: 176,
	reload: 80,
	shootCone: 8,
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
	shoot: Object.assign(new ShootPattern(), {
		firstShotDelay: 40
	}),
	category: Category.turret,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
	    Items.silicon, 60,
		item.nickel, 100,
		item.manganese, 30,
		item.crystal, 50,
	),
	shootType: Object.assign(new LaserBulletType(270), {
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
		pierceCap: 5,
	})
})
lacerate.consumePower(6.8)
AddCoolant(lacerate,0.15);