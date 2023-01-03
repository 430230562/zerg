const item = require('item');
const liquid = require('liquid');
const status = require('status');
const b = require('base/bulletType');

const Venom = b.Venom;
const ArmorReductionBulletType = b.ArmorReductionBulletType;
const FlameBulletType = b.FlameBulletType;

function SimpleCoolant(turret,amount){
	return turret.coolant = turret.consumeCoolant(amount);
}

const putrefaction = new ItemTurret("putrefaction");
exports.putrefaction = putrefaction;
Object.assign(putrefaction, {
	size: 1,
	health: 300,
	range: 8 * 23,
	reload: 60,
	shootCone: 5,
	inaccuracy: 0,
	rotateSpeed: 2.5,
	ammoUseEffect: Fx.casing1,
	targetAir: false,
	shootSound: Sounds.bang,
	alwaysUnlocked: true,
	
	buildVisibility: BuildVisibility.shown,
	category: Category.turret,
	requirements: ItemStack.with(
		Items.graphite, 17,
		item.ossature, 45,
	)
})
SimpleCoolant(putrefaction,0.1);
putrefaction.ammo(
	Items.graphite, Object.assign(new ArtilleryBulletType(3, 20), {
		knockback: 0.8,
		lifetime: 80,
		width: 11,
		height: 11,
		collidesTiles: false,
		splashDamageRadius: 24,
		splashDamage: 37,
	}),
	item.ossature, Object.assign(new ArtilleryBulletType(3, 15), {
		knockback: 0.8,
		lifetime: 80,
		width: 11,
		height: 11,
		collidesTiles: false,
		splashDamageRadius: 8 * 3.25,
		splashDamage: 24,
		backColor: Pal.gray,
		frontColor: Color.white,
		ammoMultiplier: 3,
		reloadMultiplier: 0.8,
		fragBullets: 3,
		fragBullet: Object.assign(new BasicBulletType(3, 9, "bullet"), {
			width: 5,
			height: 12,
			shrinkY: 1,
			lifetime: 20,
			backColor: Pal.gray,
			frontColor: Color.white,
			despawnEffect: Fx.none,
		})
	}),
	item.organosilicon, Object.assign(new ArtilleryBulletType(3, 20), {
		knockback: 0.8,
		lifetime: 80,
		width: 11,
		height: 11,
		collidesTiles: false,
		splashDamageRadius: 8 * 3.75,
		splashDamage: 45,
		ammoMultiplier: 4,
		reloadMultiplier: 1.5,
		
		homingPower: 0.08,
		
		backColor: Color.valueOf("da5760"),
		frontColor: Color.valueOf("da5760"),
		trailColor: Color.valueOf("da5760"),
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
		ammoMultiplier: 5,
		reloadMultiplier: 1.3,
	}),
	item.alkali, Object.assign(new ArtilleryBulletType(3, 20), {
		knockback: 0.8,
		lifetime: 80,
		width: 11,
		height: 11,
		collidesTiles: false,
		splashDamageRadius: 24,
		splashDamage: 32,
		ammoMultiplier: 3,
		
		status: status.alkaliCorrodes,
		statusDuration: 60 * 25,
	})
)

const spark = new ItemTurret("spark");
exports.spark = spark;
Object.assign(spark, {
	recoil: 0,
	reload: 60 / 10,
	range: 60,
	shootCone: 30,
	targetAir: false,
	ammoUseEffect: Fx.none,
	health: 400,
	shootSound: Sounds.flame,
	
	buildVisibility: BuildVisibility.shown,
	category: Category.turret,
	requirements: ItemStack.with(
		Items.graphite, 22,
		item.ossature, 25,
	)
})
SimpleCoolant(spark,0.15);
spark.ammo(
	Items.coal, Object.assign(new FlameBulletType(3.35, 22), {
		ammoMultiplier: 3,
		statusDuration: 60 * 6,
		shootEffect: Fx.shootSmallFlame,
	}),
	item.biomass, Object.assign(new FlameBulletType(3.35, 27), {
		ammoMultiplier: 4,
		statusDuration: 60 * 6,
		shootEffect: Fx.shootSmallFlame,
	}),
	item.sulfone, Object.assign(new FlameBulletType(4, 72), {
		ammoMultiplier: 8,
		statusDuration: 60 * 12,
		shootEffect: Fx.shootPyraFlame,
		reloadMultiplier: 1.2,
	})
)

const current = new PowerTurret("current");
exports.current = current;
Object.assign(current, {
	reload: 30,
	shootCone: 40,
	size: 1,
	range: 100,
	health: 300,
	rotateSpeed: 8,
	recoil: 1,
	targetAir: false,
	shootEffect: Fx.lightningShoot,
	shootSound: Sounds.spark,
	heatColor: Color.red,
	category: Category.turret,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		item.ossature, 50,
		item.nickel, 50,
	),
	shootType: Object.assign(new LightningBulletType(), {
		damage: 33,
		lightningLength: 17,
		collidesAir: false,
		pierceArmor: true,
		ammoMultiplier: 1,
	})
})
current.consumePower(3.15)
SimpleCoolant(current,0.1);

const sputtering = new ItemTurret("sputtering");
exports.sputtering = sputtering;
Object.assign(sputtering, {
	reload: 15,
	range: 220,
	size: 2,
	targetGround: false,
	
	shoot: Object.assign(new ShootPattern(), {
		shots: 2,
		shotDelay: 5,
	}),
	
	recoil: 2,
	rotateSpeed: 15,
	inaccuracy: 17,
	shootCone: 35,
	
	scaledHealth: 200,
	shootSound: Sounds.shootSnap,
	
	researchCostMultiplier: 0.25,
	
	buildVisibility: BuildVisibility.shown,
	category: Category.turret,
	requirements: ItemStack.with(
		item.ossature, 85,
		item.nickel, 45,
	)
})
SimpleCoolant(sputtering,0.2);
sputtering.ammo(
	item.ossature, Object.assign(new FlakBulletType(4.2, 3), {
		lifetime: 60,
		ammoMultiplier: 4,
		shootEffect: Fx.shootSmall,
		width: 6,
		height: 8,
		hitEffect: Fx.flakExplosion,
		splashDamage: 30 * 1.5,
		splashDamageRadius: 27,
	}),
	item.crystal, Object.assign(new FlakBulletType(4, 3), {
		lifetime: 60,
		ammoMultiplier: 5,
		reloadMultiplier: 1.5,
		shootEffect: Fx.shootSmall,
		width: 6,
		height: 8,
		hitEffect: Fx.flakExplosion,
		splashDamage: 30 * 1.75,
		splashDamageRadius: 32,
		backColor: Color.valueOf("7e8ae6"),
		frontColor: Color.white,
		fragBullets: 7,
		fragBullet: Object.assign(new BasicBulletType(3, 7, "bullet"), {
			width: 5,
			height: 12,
			shrinkY: 1,
			lifetime: 20,
			backColor: Color.valueOf("7e8ae6"),
			frontColor: Color.white,
			despawnEffect: Fx.none,
		})
	}),
	item.alkali, Object.assign(new FlakBulletType(4.2, 3), {
		lifetime: 60,
		ammoMultiplier: 4,
		shootEffect: Fx.shootSmall,
		width: 6,
		height: 8,
		hitEffect: Fx.flakExplosion,
		splashDamage: 30 * 1.2,
		splashDamageRadius: 27,
		
		status: status.alkaliCorrodes,
		statusDuration: 60 * 25,
	}),
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
		shots: 3,
		shotDelay: 3,
	}),
	category: Category.turret,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		Items.graphite, 80,
		item.ossature, 100,
		item.manganese, 40,
	),
})
SimpleCoolant(nexus,0.2);
nexus.ammo(
	Items.graphite, Object.assign(new BasicBulletType(3.5, 20), {
		width: 9,
		height: 12,
		reloadMultiplier: 0.75,
		ammoMultiplier: 4,
		lifetime: 60,
	}),
	item.manganese, Object.assign(new BasicBulletType(4, 25, "bullet"), {
		width: 10,
		height: 13,
		shootEffect: Fx.shootBig,
		smokeEffect: Fx.shootBigSmoke,
		ammoMultiplier: 4,
		reloadMultiplier: 1.2,
		lifetime: 60,
		pierce: true,
		pierceCap: 1,
	}),
	item.ossature, Object.assign(new BasicBulletType(3.7, 12), {
		width: 9,
		height: 12,
		reloadMultiplier: 0.5,
		ammoMultiplier: 2,
		lifetime: 60,
		fragBullets: 5,
		fragBullet: Object.assign(new BasicBulletType(3, 5, "bullet"), {
			width: 5,
			height: 12,
			shrinkY: 1,
			lifetime: 20,
			backColor: Pal.gray,
			frontColor: Color.white,
			despawnEffect: Fx.none,
		})
	}),
	item.nickel, Object.assign(new BasicBulletType(3.5, 18), {
		width: 9,
		height: 12,
		ammoMultiplier: 3,
		lifetime: 60,
	}),
	item.sulfone, Object.assign(new BasicBulletType(3.5, 21), {
		width: 10,
		height: 12,
		frontColor: Color.valueOf("ede892"),
		backColor: Color.valueOf("d9c668"),
		status: StatusEffects.burning,
		hitEffect: new MultiEffect(
			Fx.hitBulletSmall,
			Fx.fireHit
		),
		ammoMultiplier: 6,
		splashDamage: 16,
		splashDamageRadius: 32,
		makeFire: true,
		lifetime: 210 / 3.5,
	}),
	item.alkali, Object.assign(new BasicBulletType(3.5, 12), {
		width: 9,
		height: 12,
		ammoMultiplier: 4,
		lifetime: 60,
		
		status: status.alkaliCorrodes,
		statusDuration: 60 * 25,
	}),
)

const corrosion = new ItemTurret("corrosion");
exports.corrosion = corrosion;
Object.assign(corrosion, {
	reload: 60,
	size: 2,
	range: 8 * 30.5,
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
SimpleCoolant(corrosion,0.2);
corrosion.ammo(
	Items.graphite, Object.assign(new ArtilleryBulletType(3, 20), {
		knockback: 0.8,
		lifetime: 80,
		width: 11,
		height: 11,
		collidesTiles: false,
		splashDamageRadius: 24,
		splashDamage: 37,
	}),
	item.ossature, Object.assign(new ArtilleryBulletType(3, 15), {
		knockback: 0.8,
		lifetime: 80,
		width: 11,
		height: 11,
		collidesTiles: false,
		splashDamageRadius: 8 * 3.25,
		splashDamage: 22,
		backColor: Pal.gray,
		frontColor: Color.white,
		ammoMultiplier: 3,
		reloadMultiplier: 0.8,
		fragBullets: 3,
		fragBullet: Object.assign(new BasicBulletType(3, 9, "bullet"), {
			width: 5,
			height: 12,
			shrinkY: 1,
			lifetime: 20,
			backColor: Pal.gray,
			frontColor: Color.white,
			despawnEffect: Fx.none,
		})
	}),
	item.crystal, Object.assign(new ArtilleryBulletType(3, 20), {
		knockback: 0.8,
		lifetime: 80,
		width: 11,
		height: 11,
		collidesTiles: false,
		splashDamageRadius: 8 * 3.75,
		splashDamage: 47,
		backColor: Color.valueOf("7e8ae6"),
		frontColor: Color.white,
		ammoMultiplier: 4,
		reloadMultiplier: 1.5,
		fragBullets: 5,
		fragBullet: Object.assign(new BasicBulletType(3, 12, "bullet"), {
			width: 5,
			height: 12,
			shrinkY: 1,
			lifetime: 20,
			backColor: Pal.gray,
			frontColor: Color.white,
			despawnEffect: Fx.none,
		})
	}),
	item.organosilicon, Object.assign(new ArtilleryBulletType(3, 20), {
		knockback: 0.8,
		lifetime: 80,
		width: 11,
		height: 11,
		collidesTiles: false,
		splashDamageRadius: 8 * 3.75,
		splashDamage: 45,
		ammoMultiplier: 4,
		reloadMultiplier: 1.5,
		
		homingPower: 0.08,
		
		backColor: Color.valueOf("da5760"),
		frontColor: Color.valueOf("da5760"),
		trailColor: Color.valueOf("da5760"),
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
		ammoMultiplier: 5,
		reloadMultiplier: 1.3,
	}),
	item.alkali, Object.assign(new ArtilleryBulletType(3, 20), {
		knockback: 0.8,
		lifetime: 80,
		width: 11,
		height: 11,
		collidesTiles: false,
		splashDamageRadius: 24,
		splashDamage: 32,
		
		status: status.alkaliCorrodes,
		statusDuration: 60 * 25,
	}),
)

const electrolyze = new PowerTurret("electrolyze");
exports.electrolyze = electrolyze;
Object.assign(electrolyze, {
	reload: 25,
	shootCone: 40,
	size: 2,
	range: 120,
	health: 1250,
	rotateSpeed: 6,
	recoil: 2,
	targetAir: false,
	shootEffect: Fx.lightningShoot,
	shootSound: Sounds.spark,
	heatColor: Color.red,
	shoot: Object.assign(new ShootPattern(), {
		shots: 3,
		shotDelay: 4,
	}),
	category: Category.turret,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		item.nickel, 120,
		item.manganese, 75,
		item.organosilicon, 30,
	),
	shootType: Object.assign(new LightningBulletType(), {
		damage: 27,
		lightningLength: 27,
		collidesAir: false,
		pierceArmor: true,
		ammoMultiplier: 1,
	})
})
electrolyze.consumePower(8.2)
SimpleCoolant(electrolyze,0.15);

const lacerate = new PowerTurret("lacerate");
exports.lacerate = lacerate;
Object.assign(lacerate, {
	range: 170,
	reload: 80,
	shootCone: 8,
	size: 2,
	health: 960,
	rotateSpeed: 5,
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
		item.ossature, 60,
		item.nickel, 70,
		item.manganese, 30,
		item.organosilicon, 60,
	),
	shootType: Object.assign(new LaserBulletType(210), {
		chargeEffect: new MultiEffect(
			Fx.lancerLaserCharge,
			Fx.lancerLaserChargeBegin
		),
		hitEffect: Fx.hitLancer,
		hitSize: 6,
		lifetime: 16,
		drawSize: 400,
		collidesAir: false,
		length: 210,
		ammoMultiplier: 1,
		pierce: true,
		pierceArmor: true,
		pierceCap: 4,
	})
})
lacerate.consumePower(6.6)
SimpleCoolant(lacerate,0.2);

StatusEffects.disarmed.speedMultiplier = 0.7;

const misfire = new PowerTurret("misfire");
exports.misfire = misfire;
Object.assign(misfire,{
	reload: 48,
	size: 2,
	range: 8 * 15,
	shootCone: 15,
	health: 1550,
	inaccuracy: 3,
	shootEffect: Fx.shootLiquid,
	shootSound: Sounds.none,
	rotateSpeed: 3.5,
	category: Category.turret,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		item.nickel, 75,
		item.crystal, 45,
		item.manganese, 45,
	),
	shootType: Object.assign(new BasicBulletType(4,3),{
		lifetime: 40,
		width: 17,
		height: 17,
		splashDamageRadius: 24,
		splashDamage: 3,
		homingPower: 0.1,
		
		status: StatusEffects.disarmed,
		statusDuration: 60 * 3,
		hitSound: Sounds.none,
		hitEffect: Fx.none,
		shootEffect: Fx.none,
		trailEffect: Fx.none,
		frontColor: Color.white,
		backColor: Color.valueOf("9e172c"),
		trailColor: Color.valueOf("9e172c"),
	}),
})
misfire.consumeItem(item.manganese, 2);
misfire.consumeLiquid(Liquids.water, 6 / 60);
misfire.consumePower(1.25)

const disintegrate = new PointDefenseTurret("disintegrate");
exports.disintegrate = disintegrate;
Object.assign(disintegrate, {
	size: 2,
	scaledHealth: 170,
	range: 180,
	hasPower: true,
	reload: 3,
	bulletDamage: 10,
	shootLength: 5,
	category: Category.turret,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		item.nickel, 125,
		item.biomassSteel, 40,
		item.organosilicon, 60,
	),
})
disintegrate.consumePower(7.8)

const velox = new ItemTurret("velox");
exports.velox = velox;
Object.assign(velox,{
	reload: 10,
	range: 250,
	size: 3,
	
	shoot: Object.assign(new ShootAlternate(), {
		shots: 4,
		shotDelay: 3,
		barrels: 4,
		spread: 5,
	}),
	
	recoil: 2,
	rotateSpeed: 15,
	inaccuracy: 3,
	shootCone: 15,
	
	scaledHealth: 200,
	shootSound: Sounds.missile,
	
	buildVisibility: BuildVisibility.shown,
	category: Category.turret,
	requirements: ItemStack.with(
		Items.graphite, 35,
		item.manganese, 35,
		item.organosilicon, 30,
		item.biomassSteel, 45
	)
})
SimpleCoolant(velox,0.25);
velox.ammo(
	item.crystal, Object.assign(new MissileBulletType(4,10), {
		hitEffect: Fx.blastExplosion,
		ammoMultiplier: 5,
		lifetime: 64,
		width: 8,
		splashDamageRadius: 24,
		splashDamage: 40,
		trailChance: 0.1,
		knockback: 0.6,
		hitColor: Color.valueOf("7e8ae6"),
		backColor: Color.valueOf("7e8ae6"),
		trailColor: Color.valueOf("7e8ae6"),
		frontColor: Color.white,
		fragBullets: 7,
		fragBullet: Object.assign(new BasicBulletType(3, 7, "bullet"), {
			width: 5,
			height: 12,
			shrinkY: 0,
			shrinkX: 0,
			lifetime: 10,
			backColor: Color.valueOf("7e8ae6"),
			frontColor: Color.white,
			despawnEffect: Fx.none,
		})
	}),
	item.sulfone, Object.assign(new MissileBulletType(4,15), {
		frontColor: Color.valueOf("ede892"),
		backColor: Color.valueOf("d9c668"),
		status: StatusEffects.burning,
		trailChance: 0.1,
		hitEffect: new MultiEffect(
			Fx.hitBulletSmall,
			Fx.fireHit
		),
		knockback: 0.6,
		ammoMultiplier: 7,
		splashDamage: 55,
		splashDamageRadius: 24,
		makeFire: true,
		lifetime: 64
	})
)

const crackCrystal = new ItemTurret("crack-crystal");
exports.crackCrystal = crackCrystal
Object.assign(crackCrystal, {
	inaccuracy: 0.2,
	velocityRnd: 0.17,
	shake: 1,
	ammoPerShot: 2,
	maxAmmo: 30,
	consumeAmmoOnce: true,
	shootY: 5,
	size: 3,
	reload: 30,
	recoil: 2,
	range: 125,
	shootCone: 40,
	scaledHealth: 210,
	rotateSpeed: 3,
	shoot: new ShootSpread(15, 4),
	buildVisibility: BuildVisibility.shown,
	category: Category.turret,
	requirements: ItemStack.with(
		Items.graphite, 75,
		item.ossature, 100,
		item.crystal, 75,
		item.biomassSteel, 100,
	),
})
SimpleCoolant(crackCrystal,0.25);
crackCrystal.ammo(
	item.crystal, Object.assign(new BasicBulletType(8, 12), {
		knockback: 4,
		width: 25,
		hitSize: 7,
		height: 20,
		lifetime: 17,
		shootEffect: Fx.shootBigColor,
		smokeEffect: Fx.shootSmokeSquareSparse,
		ammoMultiplier: 1,
		hitColor: Color.valueOf("7e8ae6"),
		backColor: Color.valueOf("7e8ae6"),
		trailColor: Color.valueOf("7e8ae6"),
		frontColor: Color.valueOf("5c69cc"),
		trailWidth: 6,
		trailLength: 3,
		hitEffect: Fx.hitSquaresColor,
		despawnEffect: Fx.hitSquaresColor,
		buildingDamageMultiplier: 0.2,
		fragBullets: 7,
		fragBullet: Object.assign(new BasicBulletType(3, 7, "bullet"), {
			width: 5,
			height: 12,
			shrinkY: 0,
			shrinkX: 0,
			lifetime: 20,
			backColor: Color.valueOf("7e8ae6"),
			frontColor: Color.white,
			despawnEffect: Fx.none,
		})
	})
)

const lumen = new ItemTurret("lumen");
exports.lumen = lumen;
Object.assign(lumen, {
	health: 1040,
	size: 3,
	reload: 90,
	targetAir: true,
	range: 8 * 30,
	maxAmmo: 10,
	rotateSpeed: 4.5,
	recoil: 4,
	ammoPerShot: 4,
	shootSound: Sounds.mediumCannon,
	buildVisibility: BuildVisibility.shown,
	category: Category.turret,
	requirements: ItemStack.with(
		item.ossature, 150,
		item.crystal, 75,
		item.biomassSteel, 100,
	),
})
SimpleCoolant(lumen,0.25);
lumen.ammo(
	item.crystal, Object.assign(new ArmorReductionBulletType(6, 320, 20), {
		ammoMultiplier: 1,
		width: 15,
		height: 21,
		lifetime: 40,
		hitSize: 4,
		hitColor: Color.valueOf("7e8ae6"),
		backColor: Color.valueOf("7e8ae6"),
		trailColor: Color.valueOf("7e8ae6"),
		frontColor: Color.white,
		trailWidth: 5.5,
		trailLength: 5,
		
		pierce: true,
		pierceBuilding: true,
		pierceCap: 20,
		buildingDamageMultiplier: 0.2,
		
		knockback: 6,
		splashDamageRadius: 8 * 2.25,
		splashDamage: 40,
		intervalBullets: 5,
		bulletInterval: 2,
		intervalBullet: Object.assign(new BasicBulletType(), {
			lifetime: 1,
			damage: 8,
			width: 3,
			height: 3,
			frontColor: Color.valueOf("7e8ae6"),
			backColor: Color.valueOf("7e8ae6"),
			hitColor: Color.valueOf("7e8ae6"),
		})
	})
)

const blowtorth = new ContinuousLiquidTurret("blowtorth");
exports.blowtorth = blowtorth;
Object.assign(blowtorth,{
	liquidConsumed: 12 / 60,
	targetInterval: 5,
	range: 140,
	shootY: 4,
	
	size: 3,
	
	loopSound: Sounds.torch,
	shootSound: Sounds.none,
	loopSoundVolume: 1,
	buildVisibility: BuildVisibility.shown,
	category: Category.turret,
	requirements: ItemStack.with(
		item.nickel, 400,
		item.manganese, 150,
		item.organosilicon, 200,
		item.biomassSteel, 40,
	),
})
blowtorth.ammo(
	Liquids.hydrogen, Object.assign(new ContinuousFlameBulletType(),{
		damage: 60,
		length: 140,
		knockback: 1,
		pierceCap: 2,
		buildingDamageMultiplier: 0.3,
	
		colors: [
			Color.valueOf("5fd4ff8d"),
			Color.valueOf("85d6f4b3"),
			Color.valueOf("a2dcf1cd"),
			Color.valueOf("c4e4f0"),
			Color.white
		],
		flareColor: Color.valueOf("5fd4ff8d"),
		lightColor: Color.valueOf("5fd4ff8d"),
		hitColor: Color.valueOf("5fd4ff8d"),
	})
)

const focusing = new ContinuousTurret("focusing");
exports.focusing = focusing;
Object.assign(focusing, {
	health: 960,
	size: 3,
	range: 8 * 27,
	cooldownTime: 60,
	shootSound: Sounds.none,
	shootY: 7.5,
	shootCone: 15,
	aimChangeSpeed: 5,
	displayAmmoMultiplier: true,
	rotateSpeed: 2.5,
	shootType: Object.assign(extend(PointLaserBulletType, {
	hitEntity(b, entity, health) {
		this.super$hitEntity(b, entity, health);
		if(entity instanceof Unit) {
			var unit = entity;
			unit.armor -= 1;
		}
	}
}), {
	damage: 42,
	ammoMultiplier: 1,
}),
	requirements: ItemStack.with(
		Items.graphite, 200,
		item.crystal, 150,
		item.biomassSteel, 150,
		item.organosilicon, 200,
	),
	buildVisibility: BuildVisibility.shown,
	category: Category.turret,
})
focusing.consumePower(19.2)
SimpleCoolant(focusing,0.35);

let i = 0;

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
	new ToxicAbility(90,64)
)
bottle.immunities.addAll(s)

const hypertoxic = new LiquidTurret("hypertoxic");
exports.hypertoxic = hypertoxic;
Object.assign(hypertoxic,{
	size: 4,
	recoil: 0,
	reload: 150,
	liquidCapacity: 27,
	shootEffect: Fx.shootLiquid,
	shootSound: Vars.tree.loadSound("poison"),
	range: 40 * 8,
	minRange: 12 * 8,
	scaledHealth: 250,
	researchCostMultiplier: 0.5,
	buildVisibility: BuildVisibility.shown,
	category: Category.turret,
	requirements: ItemStack.with(
		item.crystal, 250,
		item.manganese, 300,
		item.organosilicon, 300,
		item.uranium, 150,
	),
})
hypertoxic.ammo(
	liquid.chlorine, Object.assign(new ArtilleryBulletType(3,20),{
		lifetime: 140,
		height: 19,
		width: 17,
		backColor: Color.valueOf("92ab11"),
		frontColor: Color.white,
		trailColor: Color.valueOf("92ab11"),
		shrinkX: 0,
		shrinkY: 0,
		hitShake: 0,
		ammoMultiplier: 1 / 9,
		fragBullets: 1,
		hitSound: Sounds.none,
		fragBullet: Object.assign(new BulletType(), {
			spawnUnit: bottle,
			speed: 0,
			keepVelocity: false,
		}),
	})
)

const meteorite = new ItemTurret("meteorite");
exports.meteorite = meteorite;
Object.assign(meteorite,{
	size: 4,
	range: 8 * 100,
	health: 2550,
	ammoPerShot: 5,
	maxAmmo: 25,
	targetAir: false,
	recoil: 1,
	reload: 140,
	rotateSpeed: 1.4,
	minWarmup: 0.85,
	shootWarmupSpeed: 0.07,
	shootSound: Sounds.mediumCannon,
	buildVisibility: BuildVisibility.shown,
	category: Category.turret,
	requirements: ItemStack.with(
		item.crystal, 250,
		item.manganese, 350,
		item.uranium, 350,
		item.organosilicon, 720,
	)
})
SimpleCoolant(meteorite,0.1);
meteorite.drawer = new DrawTurret();
meteorite.drawer.parts.addAll(
	Object.assign(new RegionPart("-barrel"),{
		progress: DrawPart.PartProgress.recoil.curve(Interp.pow2In),
		moveY: -5 * 4 / 3,
		mirror: false,
	}),
	Object.assign(new RegionPart("-side"),{
		heatProgress: DrawPart.PartProgress.warmup,
		progress: DrawPart.PartProgress.warmup,
		mirror: true,
		moveX: 2 * 4 / 3,
		moveY: -0.5,
		moveRot: -40,
		under: true,
	})
)
meteorite.ammo(
	item.manganese, Object.assign(new ArtilleryBulletType(2.5,350,"shell"),{
		hitEffect: new MultiEffect(
			Fx.titanExplosion, 
			Fx.titanSmoke
		),
		despawnEffect: Fx.none,
		knockback: 2,
		lifetime: 140,
		height: 19,
		width: 17,
		splashDamageRadius: 65,
		splashDamage: 110,
		buildingDamageMultiplier: 0.2,
		scaledSplashDamage: true,
		backColor: Color.valueOf("ecaae2"),
		hitColor: Color.valueOf("ecaae2"),
		trailColor: Color.valueOf("ecaae2"),
		frontColor: Color.white,
		ammoMultiplier: 1,
		hitSound: Sounds.titanExplosion,

		trailLength: 32,
		trailWidth: 3.35,
		trailSinScl: 2.5,
		trailSinMag: 0.5,
		trailEffect: Fx.none,
		despawnShake: 7,

		shootEffect: Fx.shootTitan,
		smokeEffect: Fx.shootSmokeTitan,
	}),
	item.crystal, Object.assign(new ArtilleryBulletType(2.5,350,"shell"),{
		hitEffect: new MultiEffect(
			Fx.titanExplosion, 
			Fx.titanSmoke
		),
		despawnEffect: Fx.none,
		knockback: 2,
		lifetime: 140,
		height: 19,
		width: 17,
		splashDamageRadius: 65,
		splashDamage: 275,
		buildingDamageMultiplier: 0.2,
		scaledSplashDamage: true,
		backColor: Color.valueOf("7e8ae6"),
		hitColor: Color.valueOf("7e8ae6"),
		trailColor: Color.valueOf("7e8ae6"),
		frontColor: Color.white,
		ammoMultiplier: 1,
		hitSound: Sounds.titanExplosion,

		trailLength: 32,
		trailWidth: 3.35,
		trailSinScl: 2.5,
		trailSinMag: 0.5,
		trailEffect: Fx.none,
		despawnShake: 7,

		shootEffect: Fx.shootTitan,
		smokeEffect: Fx.shootSmokeTitan,
		
		fragBullets: 13,
		fragBullet: Object.assign(new BasicBulletType(3, 7, "bullet"), {
			width: 5,
			height: 12,
			shrinkY: 1,
			lifetime: 40,
			backColor: Color.valueOf("7e8ae6"),
			hitColor: Color.valueOf("7e8ae6"),
			frontColor: Color.white,
			despawnEffect: Fx.none,
		})
	}),
	item.organosilicon, Object.assign(new ArtilleryBulletType(2.5,350,"shell"),{
		hitEffect: new MultiEffect(
			Fx.titanExplosion, 
			Fx.titanSmoke
		),
		despawnEffect: Fx.none,
		knockback: 2,
		lifetime: 140,
		height: 19,
		width: 17,
		splashDamageRadius: 65,
		splashDamage: 220,
		buildingDamageMultiplier: 0.2,
		scaledSplashDamage: true,
		backColor: Color.valueOf("bcf6ff"),
		hitColor: Color.valueOf("bcf6ff"),
		trailColor: Color.valueOf("bcf6ff"),
		frontColor: Color.white,
		ammoMultiplier: 1,
		hitSound: Sounds.titanExplosion,

		trailLength: 32,
		trailWidth: 3.35,
		trailSinScl: 2.5,
		trailSinMag: 0.5,
		trailEffect: Fx.none,
		despawnShake: 7,

		shootEffect: Fx.shootTitan,
		smokeEffect: Fx.shootSmokeTitan,
	}),
	item.uranium, Object.assign(new ArtilleryBulletType(2.5,350,"shell"),{
		hitEffect: new MultiEffect(
			Fx.titanExplosion, 
			Fx.titanSmoke
		),
		despawnEffect: Fx.none,
		knockback: 2,
		lifetime: 140,
		height: 19,
		width: 17,
		splashDamageRadius: 65,
		splashDamage: 440,
		buildingDamageMultiplier: 0.2,
		scaledSplashDamage: true,
		backColor: Color.valueOf("40a06f"),
		hitColor: Color.valueOf("40a06f"),
		trailColor: Color.valueOf("40a06f"),
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
	}),
	item.sulfone, Object.assign(new ArtilleryBulletType(2.5,350,"shell"),{
		hitEffect: new MultiEffect(
			Fx.titanExplosion, 
			Fx.titanSmoke
		),
		despawnEffect: Fx.none,
		knockback: 2,
		lifetime: 140,
		height: 19,
		width: 17,
		splashDamageRadius: 65,
		splashDamage: 460,
		buildingDamageMultiplier: 0.15,
		scaledSplashDamage: true,
		status: StatusEffects.burning,
		statusDuration: 60 * 15,
		frontColor: Color.valueOf("ede892"),
		backColor: Color.valueOf("d9c668"),
		hitColor: Color.valueOf("ede892"),
		trailColor: Color.valueOf("ede892"),
		hitSound: Sounds.titanExplosion,
		
		makeFire: true,
		incendAmount: 10,
		incendSpread: 65,
		incendChance: 1,
		ammoMultiplier: 1,

		trailLength: 32,
		trailWidth: 3.35,
		trailSinScl: 2.5,
		trailSinMag: 0.5,
		trailEffect: Fx.none,
		despawnShake: 7,

		shootEffect: Fx.shootTitan,
		smokeEffect: Fx.shootSmokeTitan,
	}),
)

const tearing = new ItemTurret("tearing");
exports.tearing = tearing;
Object.assign(tearing, {
	reload: 7,
	recoilTime: 7 * 2,
	ammoUseEffect: Fx.casing3,
	range: 260,
	inaccuracy: 3,
	recoil: 3,
	shoot: new ShootAlternate(8),
	shake: 2,
	size: 4,
	shootCone: 24,
	shootSound: Sounds.shootBig,
	scaledHealth: 160,
	buildVisibility: BuildVisibility.shown,
	category: Category.turret,
	requirements: ItemStack.with(
		Items.graphite, 300,
		item.ossature, 900,
		item.manganese, 250,
		item.biomassSteel, 175,
		item.uranium, 250,
	),
})
SimpleCoolant(tearing,0.25);
tearing.ammo(
	item.uranium, Object.assign(new ArmorReductionBulletType(8, 80, 3), {
		width: 16,
		height: 14,
		lifetime: 33,
		hitSize: 5,
		hitColor: Color.valueOf("40a06f"),
		backColor: Color.valueOf("40a06f"),
		frontColor: Color.white,
		sprite:"bullet",
		
		pierce: true,
		pierceCap: 2,
	}),
	item.biomassSteel, Object.assign(new ArmorReductionBulletType(8.5, 90, 3), {
		width: 16,
		height: 14,
		lifetime: 33,
		hitSize: 5,
		hitColor: Color.valueOf("98ba53"),
		backColor: Color.valueOf("98ba53"),
		frontColor: Color.white,
		reloadMultiplier: 1.2,
		sprite:"bullet",
		
		pierce: true,
		pierceCap: 2,
	}),
	item.sulfone, Object.assign(new BasicBulletType(7, 70),{
		hitSize: 5,
		width: 16,
		height: 21,
		frontColor: Pal.lightishOrange,
		backColor: Pal.lightOrange,
		status: StatusEffects.burning,
		hitEffect: new MultiEffect(
			Fx.hitBulletSmall,
			Fx.fireHit
		),
		shootEffect: Fx.shootBig,
		makeFire: true,
		knockback: 0.6,
		ammoMultiplier: 3,
		splashDamage: 30,
		splashDamageRadius: 25,
	})
)