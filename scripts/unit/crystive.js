function CrystalUnit(name){
	return extend(UnitType, name, {
		outlineColor: Color.valueOf("2e3466"),
		healColor: Color.valueOf("7e8ae6"),
		envDisabled: Env.none,
		lightOpacity: 0.1,
		init(){
			this.super$init();
			
			this.abilities.add(
				Object.assign(new RegenAbility(), {
					percentAmount: 1 / (120 * 60) * 100,
				}),
			)
		}
	});
}

const anatase = new CrystalUnit("anatase");
exports.anatase = anatase;
Object.assign(anatase, {
	speed: 0.72,
	drag: 0.11,
	hitSize: 8,
	rotateSpeed: 3,
	health: 500,
	armor: 5,
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
anatase.weapons.add(
Object.assign(new Weapon("zerg-anatase-weapon"), {
	mirror: false,
	x: 0,
	y: 1,
	shootY: 4,
	reload: 50,
	cooldownTime: 42,
	heatColor: Color.valueOf("7e8ae6"),
	shootSound: Sounds.shootSnap,
	bullet: Object.assign(new FlakBulletType(4, 9), {
		lifetime: 48,
		recoil: 1.2,
		shootEffect: Fx.shootSmall,
		collidesGround: true,
		width: 6,
		height: 8,
		hitEffect: Fx.flakExplosion,
		splashDamage: 21,
		splashDamageRadius: 24,
		backColor: Color.valueOf("7e8ae6"),
		trailColor: Color.valueOf("7e8ae6"),
		trailWidth: 2,
		trailLength: 5,
		frontColor: Color.white,
		lightOpacity: 0.3,
		fragBullets: 5,
		fragBullet: Object.assign(new BasicBulletType(3, 7, "bullet"), {
			width: 5,
			height: 12,
			shrinkY: 1,
			lifetime: 20,
			backColor: Color.valueOf("7e8ae6"),
			frontColor: Color.white,
			lightOpacity: 0.3,
			despawnEffect: Fx.none,
		})
	})
})
)

const asbestos = new CrystalUnit("asbestos");
exports.asbestos = asbestos;
Object.assign(asbestos, {
	speed: 0.55,
	drag: 0.1,
	hitSize: 12,
	rotateSpeed: 3,
	health: 1100,
	armor: 7,
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
	shadowElevation: 0.2,
	groundLayer: 74,
	
	constructor: () => new LegsUnit.create()
})
asbestos.weapons.add(
Object.assign(new Weapon("zerg-asbestos-weapon"), {
	x: 0,
	y: 0,
	shootY: 28 / 4,
	mirror: false,
	top: false,
	reload: 60,
	smoothReloadSpeed: 0.15,
	recoil: 2,
	shootSound: Sounds.shootSnap,
	bullet: Object.assign(new ArtilleryBulletType(3.5, 20), {
		backColor: Color.valueOf("7e8ae6"),
		trailColor: Color.valueOf("7e8ae6"),
		hitColor: Color.valueOf("7e8ae6"),
		frontColor: Color.white,
		lightOpacity: 0.3,
		width: 7.5,
		height: 10,
		lifetime: 60,
		trailWidth: 2,
		trailLength: 5,
		recoil: 0.1,
		splashDamageRadius: 24,
		splashDamage: 35,
		fragBullets: 5,
		fragBullet: Object.assign(new BasicBulletType(3, 7, "bullet"), {
			width: 5,
			height: 12,
			shrinkY: 1,
			lifetime: 20,
			backColor: Color.valueOf("7e8ae6"),
			frontColor: Color.white,
			lightOpacity: 0.3,
			despawnEffect: Fx.none,
		}),
		hitEffect: new MultiEffect(
			Fx.hitBulletColor,
			Fx.flakExplosion,
			Object.assign(new WaveEffect(),{
				colorFrom: Color.valueOf("7e8ae6"),
				colorTo: Color.valueOf("7e8ae6"),
				sizeTo: 16,
				lifetime: 12,
				strokeFrom: 3,
			})
		),
		despawnEffect: new MultiEffect(
			Fx.hitBulletColor,
			Fx.flakExplosion,
			Object.assign(new WaveEffect(),{
				colorFrom: Color.valueOf("7e8ae6"),
				colorTo: Color.valueOf("7e8ae6"),
				sizeTo: 16,
				lifetime: 12,
				strokeFrom: 3,
			})
		)
	})
})
)
asbestos.parts.add(
	Object.assign(new RegionPart("-spine"), {
	    x: 0,
		y: 0,
		moveX: 1,
		moveRot: 30,
		progress: DrawPart.PartProgress.warmup,
		mirror: true,
		under: false,
	})
)
asbestos.abilities.add(
	Object.assign(new ShieldArcAbility(),{
		radius: 36,
		angle: 60,
		regen: 0.05,
		cooldown: 60 * 15,
		max: 300,
		y: -20,
		width: 4,
	})
)

const quartz = new CrystalUnit("quartz");
exports.quartz = quartz;
Object.assign(quartz, {
	speed: 0.5,
	drag: 0.4,
	hitSize: 16,
	rotateSpeed: 3,
	health: 3000,
	armor: 12,
	legCount: 6,
	legLength: 13,
	legMoveSpace: 1.4,
	legBaseOffset: 2,
	legContinuousMove: true,
	hovering: true,
	targetAir: false,
	shadowElevation: 0.3,
	groundLayer: 75,
	constructor: () => new LegsUnit.create()
})
quartz.weapons.add(
Object.assign(new Weapon("zerg-quartz-weapon"), {
	x: 0,
	y: -1.5,
	top: false,
	mirror: false,
	reload: 45,
	recoil: 4,
	shake: 2,
	ejectEffect: Fx.casing2,
	shootSound: Sounds.artillery,
	shootStatus: StatusEffects.slow,
	shootStatusDuration: 50,
	shoot: Object.assign(new ShootPattern(), {
		shots: 3,
		shotDelay: 5,
	}),
	bullet: Object.assign(new ArtilleryBulletType(3, 15), {
		knockback: 0.8,
		lifetime: 80,
		width: 11,
		height: 11,
		collidesTiles: false,
		splashDamageRadius: 8 * 4.25,
		splashDamage: 77,
		backColor: Color.valueOf("7e8ae6"),
		frontColor: Color.white,
		lightOpacity: 0.3,
		fragBullets: 7,
		fragBullet: Object.assign(new BasicBulletType(3, 7, "bullet"), {
			width: 5,
			height: 12,
			shrinkY: 1,
			lifetime: 20,
			backColor: Color.valueOf("7e8ae6"),
			frontColor: Color.white,
			lightOpacity: 0.3,
			despawnEffect: Fx.none,
		})
	}),
})
)
quartz.abilities.add(
	Object.assign(ShieldArcAbility(),{
		radius: 60,
		angle: 60,
		regen: 0.1,
		cooldown: 60 * 15,
		max: 600,
		y: -26,
		width: 6,
	})
)

const prism = new CrystalUnit("prism");
exports.prism = prism;
Object.assign(prism,{
    speed: 0.47,
	drag: 0.4,
	hitSize: 21,
	rotateSpeed: 0.5,
	health: 10000,
	armor: 14,
	
	lockLegBase: true,
    legContinuousMove: true,
    legGroupSize: 3,
    legStraightness: 0.4,
    baseLegStraightness: 0.5,
    legMaxLength: 1.3,
	
	hovering: true,
	targetAir: false,
	shadowElevation: 0.3,
	groundLayer: 75,
	constructor: () => new LegsUnit.create()
})
prism.abilities.add(
	Object.assign(ShieldArcAbility(),{
		radius: 60,
		angle: 120,
		regen: 0.6,
		cooldown: 60 * 20,
		max: 1750,
		y: -26,
		width: 6,
		whenShooting: false,
	})
)
prism.weapons.add(
Object.assign(new Weapon("zerg-prism-weapon"), {
    mirror: false,
    top: false,
    shake: 4,
    shootY: 14,
    x: 0,
    y: 0,
    rotateSpeed: 0.5,
    
    shoot: Object.assign(new ShootPattern(), {
        firstShotDelay: 40
	}),

    reload: 180,
    recoil: 0,
    chargeSound: Sounds.lasercharge2,
    shootSound: Sounds.beam,
    continuous: true,
    cooldownTime: 300,
    bullet: Object.assign(new ContinuousLaserBulletType(),{
        drawSize:240,
        damage:40,
        width:4,
        length:240,
        lifetime: 180,
        hitEffect:Fx.none,
        pierceCap: 3,
        colors: [
            Color.valueOf("5c69cc"),
            Color.valueOf("7a8ae6"),
            Color.valueOf("a6afff"),
            Color.white,
        ],
        incendAmount: 0,
        incendSpread: 0,
        incendChance: 0,
        knockback:0,
        fragBullets: 1,
        fragBullet: Object.assign(new LightningBulletType(),{
            damage: 12,
            lightningLength: 4,
        })
    })
})
)