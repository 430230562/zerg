const item = require('item');
const liquid = require('liquid');
const status = require('status');
const b = require('base/bulletType');

const Venom = b.Venom;
const FlameBulletType = b.FlameBulletType;

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
putrefaction.ammo(
	item.biomass, Object.assign(new ArtilleryBulletType(3, 20), {
		knockback: 0.8,
		lifetime: 80,
		width: 11,
		height: 11,
		collidesTiles: false,
		splashDamageRadius: 8 * 2.25,
		splashDamage: 40,
		ammoMultiplier: 2,
		
		backColor: Color.valueOf("84a94b"),
		frontColor: Color.valueOf("84a94b"),
		trailColor: Color.valueOf("84a94b"),
		
		status: status.poisoning,
		statusDuration: 600,
		
		fragBullets: 4,
		fragBullet: new Venom(18),
	}),
	item.ossature, Object.assign(new ArtilleryBulletType(3, 15), {
		knockback: 0.8,
		lifetime: 80,
		width: 11,
		height: 11,
		collidesTiles: false,
		splashDamageRadius: 8 * 3.75,
		splashDamage: 27,
		backColor: Pal.gray,
		frontColor: Color.white,
		ammoMultiplier: 3,
		reloadMultiplier: 1.15,
		fragBullets: 5,
		fragBullet: Object.assign(new BasicBulletType(3, 8, "bullet"), {
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
		splashDamageRadius: 8 * 2.25,
		splashDamage: 40,
		ammoMultiplier: 4,
		reloadMultiplier: 1.4,
		
		homingPower: 0.08,
		
		backColor: Color.valueOf("da5760"),
		frontColor: Color.valueOf("da5760"),
		trailColor: Color.valueOf("da5760"),
		
		status: status.poisoning,
		statusDuration: 600,
		
		fragBullets: 2,
		fragBullet: new Venom(18),
	})
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
		Items.graphite, 40,
		item.biomassSteel, 80,
		item.organosilicon, 40
	),
})
corrosion.ammo(
	item.biomass, Object.assign(new ArtilleryBulletType(3, 20), {
		knockback: 0.8,
		lifetime: 80,
		width: 11,
		height: 11,
		collidesTiles: false,
		splashDamageRadius: 8 * 2.25,
		splashDamage: 40,
		ammoMultiplier: 2,
		
		backColor: Color.valueOf("84a94b"),
		frontColor: Color.valueOf("84a94b"),
		trailColor: Color.valueOf("84a94b"),
		
		status: status.poisoning,
		statusDuration: 600,
		
		fragBullets: 4,
		fragBullet: new Venom(18),
	}),
	item.ossature, Object.assign(new ArtilleryBulletType(3, 15), {
		knockback: 0.8,
		lifetime: 80,
		width: 11,
		height: 11,
		collidesTiles: false,
		splashDamageRadius: 8 * 3.75,
		splashDamage: 27,
		backColor: Pal.gray,
		frontColor: Color.white,
		ammoMultiplier: 3,
		reloadMultiplier: 1.15,
		fragBullets: 5,
		fragBullet: Object.assign(new BasicBulletType(3, 8, "bullet"), {
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
		splashDamageRadius: 8 * 2.25,
		splashDamage: 40,
		ammoMultiplier: 4,
		reloadMultiplier: 1.4,
		
		homingPower: 0.08,
		
		backColor: Color.valueOf("da5760"),
		frontColor: Color.valueOf("da5760"),
		trailColor: Color.valueOf("da5760"),
		
		status: status.poisoning,
		statusDuration: 600,
		
		fragBullets: 2,
		fragBullet: new Venom(18),
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
spark.ammo(
	Items.coal, Object.assign(new FlameBulletType(3.35, 17), {
		ammoMultiplier: 3,
		statusDuration: 60 * 6,
		shootEffect: Fx.shootSmallFlame,
	}),
	item.biomass, Object.assign(new FlameBulletType(3.35, 22), {
		ammoMultiplier: 4,
		statusDuration: 60 * 6,
		shootEffect: Fx.shootSmallFlame,
	}),
	item.methylSulfone, Object.assign(new FlameBulletType(4, 70), {
		ammoMultiplier: 8,
		statusDuration: 60 * 12,
		shootEffect: Fx.shootPyraFlame,
		reloadMultiplier: 1.2,
	})
)

const sputtering = new ItemTurret("sputtering");
exports.sputtering = sputtering;
Object.assign(sputtering, {
	reload: 9,
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
sputtering.ammo(
	item.ossature, Object.assign(new FlakBulletType(4.2, 3), {
		lifetime: 60,
		ammoMultiplier: 4,
		shootEffect: Fx.shootSmall,
		width: 6,
		height: 8,
		hitEffect: Fx.flakExplosion,
		splashDamage: 30 * 1.5,
		splashDamageRadius: 24,
	}),
	item.crystal, Object.assign(new FlakBulletType(4, 3), {
		lifetime: 60,
		ammoMultiplier: 5,
		reloadMultiplier: 1.5,
		shootEffect: Fx.shootSmall,
		width: 6,
		height: 8,
		hitEffect: Fx.flakExplosion,
		splashDamage: 30 * 1.5,
		splashDamageRadius: 24,
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
	})
)