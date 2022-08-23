const item = require('item');

Blocks.salvo.ammoTypes.put(
	Items.titanium, Object.assign(new BasicBulletType(4, 24, "bullet"), {
		width: 10,
		height: 13,
		shootEffect: Fx.shootBig,
		smokeEffect: Fx.shootBigSmoke,
		ammoMultiplier: 4,
		lifetime: 60,
		frontColor: Color.valueOf("8da1e3"),
		backColor: Color.valueOf("8da1e3"),
		reloadMultiplier: 1.2,
	})
)

Blocks.salvo.ammoTypes.put(
	item.methylSulfone, Object.assign(new BasicBulletType(3.5, 21), {
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
	})
)

Blocks.swarmer.ammoTypes.put(
	item.methylSulfone, Object.assign(new MissileBulletType(3.9, 12), {
		frontColor: Color.valueOf("ede892"),
		backColor: Color.valueOf("d9c668"),
		trailColor: Color.valueOf("ede892"),
		width: 7,
		height: 8,
		shrinkY: 0,
		homingPower: 0.08,
		splashDamageRadius: 35,
		splashDamage: 30 * 1.7,
		makeFire: true,
		ammoMultiplier: 5,
		hitEffect: Fx.blastExplosion,
		status: StatusEffects.burning,
	})
)

Blocks.hail.ammoTypes.put(
	item.methylSulfone, Object.assign(new ArtilleryBulletType(3.5, 25), {
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
	})
)

Blocks.hail.ammoTypes.put(
	Items.metaglass, Object.assign(new ArtilleryBulletType(3, 15), {
		knockback: 0.8,
		lifetime: 80,
		width: 11,
		height: 11,
		collidesTiles: false,
		splashDamageRadius: 8 * 3.75,
		splashDamage: 27,
		backColor: Pal.gray,
		frontColor: Color.white,
		ammoMultiplier: 4,
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
	})
)

Blocks.ripple.ammoTypes.put(
	item.methylSulfone, Object.assign(new ArtilleryBulletType(3.5, 25), {
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
	})
)

Blocks.ripple.ammoTypes.put(
	Items.metaglass, Object.assign(new ArtilleryBulletType(3, 15), {
		knockback: 0.8,
		lifetime: 80,
		width: 11,
		height: 11,
		collidesTiles: false,
		splashDamageRadius: 8 * 3.75,
		splashDamage: 27,
		backColor: Pal.gray,
		frontColor: Color.white,
		ammoMultiplier: 4,
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
	})
)