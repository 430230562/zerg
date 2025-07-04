const {
    ReflectFieldAbility
} = require("zerg/base/ability");

function CrystalUnit(name) {
    return extend(UnitType, name, {
        outlineColor: Color.valueOf("2e3466"),
        healColor: Color.valueOf("7e8ae6"),
        envDisabled: Env.none,
        lightOpacity: 0.1,
        init() {
            this.super$init();

            this.abilities.add(
            Object.assign(new RegenAbility(), {
                percentAmount: 1 / (120 * 60) * 100,
            }), )
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
        splashDamage: 31,
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
}))

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
        splashDamage: 52.5,
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
        Object.assign(new WaveEffect(), {
            colorFrom: Color.valueOf("7e8ae6"),
            colorTo: Color.valueOf("7e8ae6"),
            sizeTo: 16,
            lifetime: 12,
            strokeFrom: 3,
        })),
        despawnEffect: new MultiEffect(
        Fx.hitBulletColor,
        Fx.flakExplosion,
        Object.assign(new WaveEffect(), {
            colorFrom: Color.valueOf("7e8ae6"),
            colorTo: Color.valueOf("7e8ae6"),
            sizeTo: 16,
            lifetime: 12,
            strokeFrom: 3,
        }))
    })
}))
asbestos.parts.add(
Object.assign(new RegionPart("-spine"), {
    x: 0,
    y: 0,
    moveX: 1,
    moveRot: 30,
    progress: DrawPart.PartProgress.warmup,
    mirror: true,
    under: false,
}))
asbestos.abilities.add(
Object.assign(new ShieldArcAbility(), {
    radius: 36,
    angle: 60,
    regen: 0.05,
    cooldown: 60 * 15,
    max: 300,
    y: -20,
    width: 4,
}), )

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
    bullet: Object.assign(new ArtilleryBulletType(3, 45), {
        knockback: 0.8,
        lifetime: 80,
        width: 11,
        height: 11,
        collidesTiles: false,
        splashDamageRadius: 8 * 4.25,
        splashDamage: 116,
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
}))
quartz.abilities.add(
Object.assign(ShieldArcAbility(), {
    radius: 60,
    angle: 60,
    regen: 0.1,
    cooldown: 60 * 15,
    max: 600,
    y: -26,
    width: 6,
}))

function ColorBullet(color, speed, damage) {
    return extend(BasicBulletType, speed, damage, {
        width: 1,
        height: 9,
        shootEffect: Fx.none,
        smokeEffect: Fx.none,
        despawnEffect: Fx.none,

        lifetime: 15,
        trailWidth: 0.8,
        trailLength: 14,
        pierce: true,
        pierceBuilding: true,

        frontColor: color,
        backColor: color,
        trailColor: color
    })
}

const dispersion = new CrystalUnit("dispersion");
exports.dispersion = dispersion;
Object.assign(dispersion, {
    speed: 0.8,
    drag: 0.11,
    hitSize: 8,
    rotateSpeed: 5,
    health: 350,
    armor: 6,
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
dispersion.weapons.add(
Object.assign(new Weapon("zerg-dispersion-weapon"), {
    mirror: false,
    x: 0,
    y: 1,
    shootY: 4,
    reload: 60,
    heatColor: Color.valueOf("7e8ae6"),
    shootSound: Sounds.laser,
    bullet: extend(BasicBulletType, 6, 17.5, {
        bullets: [ColorBullet(Color.valueOf("ff0000"), 6, 2.5), ColorBullet(Color.valueOf("ffd500"), 6, 2.5), ColorBullet(Color.valueOf("55ff00"), 6, 2.5), ColorBullet(Color.valueOf("00ff80"), 6, 2.5), ColorBullet(Color.valueOf("00aaff"), 6, 2.5), ColorBullet(Color.valueOf("2a00ff"), 6, 2.5), ColorBullet(Color.valueOf("ff00ff"), 6, 2.5)],
        despawned(b, x, y) {
            for (let i = 0; i < 7; i++) {
                this.bullets[i].create(b, b.x, b.y, b.rotation() - 15 + i * 5)
            }
        },
        hit(b, x, y) {
            for (let i = 0; i < 7; i++) {
                this.bullets[i].create(b, b.x, b.y, b.rotation() - 15 + i * 5)
            }
        },
        width: 1,
        height: 9,
        shootEffect: Fx.shootSmall,
        smokeEffect: Fx.shootSmallSmoke,

        keepVelocity: true,
        lifetime: 30,
        trailWidth: 0.8,
        trailLength: 14,

        frontColor: Color.valueOf("ffffff"),
        backColor: Color.valueOf("ffffff"),
        trailColor: Color.valueOf("ffffff"),
    })
}))

const reflection = new CrystalUnit("reflection");
Object.assign(reflection, {
    speed: 0.5,
    hitSize: 13,
    rotateSpeed: 3,
    health: 1100,
    armor: 9,
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
reflection.abilities.add(
new ReflectFieldAbility(0.75, 900, 72))

/*const interdictMissile = extend(UnitType,"interdict-missile",{
    update(unit){
        unit.damageContinuousPierce(20 / 60)
    }
});
exports.interdictMissile = interdictMissile;
Object.assign(interdictMissile, {
	hitSize: 4,
	trailColor: Color.valueOf("5c69cc"),
	engineColor: Color.valueOf("5c69cc"),
	constructor: () => new UnitEntity.create(),
	engineSize: 1.75,
	engineLayer: Layer.effect,
	speed: 4,
	lightOpacity: 0,
	maxRange: 0,
	rotateSpeed: 12,
	outlineColor: Color.valueOf("2e3466"),
	health: 200,
	lowAltitude: true,
	useUnitCap: false,
	logicControllable: false,
    playerControllable: false,
})
interdictMissile.abilities.add(
	new ForceFieldAbility(16, 0.5, 500, 1/0)
)

const interdict = new CrystalUnit("interdict");
exports.interdict = interdict;
Object.assign(interdict,{
    speed: 0.35,
	drag: 0.4,
	hitSize: 16,
	rotateSpeed: 3,
	health: 2200,
	armor: 15,
	legCount: 6,
	legLength: 13,
	legMoveSpace: 1.4,
	legBaseOffset: 2,
	legContinuousMove: true,
	hovering: true,
	targetAir: false,
	shadowElevation: 0.3,
	groundLayer: 75,
	maxRange: 42 * 8,
	constructor: () => new LegsUnit.create()
})
interdict.abilities.add(
    new ForceFieldAbility(60, 0.75, 1500, 60 * 20)
)
interdict.weapons.add(Object.assign(
    new Weapon("zerg-interdict-weapon"), {
    	shootSound: Sounds.missileLarge,
    	x: 29 / 4,
    	y: -11 / 4,
    	shootY: 1.5,
    	reload: 120,
    	layerOffset: 0.01,
    	rotateSpeed: 2,
    	rotate: true,
    	bullet: Object.assign(new BulletType(), {
    		spawnUnit: interdictMissile,
    		smokeEffect: Fx.shootBigSmoke2,
    		speed: 0,
    		keepVelocity: false,
    	}),
    	shootStatus: StatusEffects.slow,
    	shootStatusDuration: 130,
    })
)*/

const interdict = new CrystalUnit("interdict");
exports.interdict = interdict;
Object.assign(interdict, {
    speed: 0.35,
    drag: 0.4,
    hitSize: 16,
    rotateSpeed: 3,
    health: 2200,
    armor: 15,
    legCount: 6,
    legLength: 13,
    legMoveSpace: 1.4,
    legBaseOffset: 2,
    legContinuousMove: true,
    hovering: true,
    targetAir: false,
    shadowElevation: 0.3,
    groundLayer: 75,
    maxRange: 42 * 8,
    constructor: () => new LegsUnit.create()
})
interdict.weapons.add(Object.assign(
new Weapon("zerg-interdict-weapon"), {
    shootSound: Sounds.laser,
    x: 29 / 4,
    y: -11 / 4,
    shootY: 1.5,
    reload: 120,
    layerOffset: 0.01,
    rotateSpeed: 2,
    rotate: true,
    bullet: Object.assign(new EmpBulletType(), {
        lightOpacity: 0.7,
        unitDamageScl: 0.75,
        healPercent: 0,
        timeIncrease: 1,
        timeDuration: 60 * 20,
        powerDamageScl: 5,
        damage: 20,
        hitColor: Color.valueOf("5c69cc"),
        lightColor: Color.valueOf("5c69cc"),
        lightRadius: 70,
        shootEffect: Fx.hitEmpSpark,
        smokeEffect: Fx.shootBigSmoke2,
        lifetime: 60,
        sprite: "circle-bullet",
        backColor: Color.valueOf("5c69cc"),
        frontColor: Color.white,
        width: 12,
        height: 12,
        shrinkY: 0,
        speed: 5,
        
        splashDamage: 30,
        splashDamageRadius: 80,
        hitShake: 1,
        trailRotation: true,
        hitSound: Sounds.plasmaboom,
        
    }),
    shootStatus: StatusEffects.slow,
    shootStatusDuration: 130,
}))

const prism = new CrystalUnit("prism");
exports.prism = prism;
Object.assign(prism, {
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
Object.assign(ShieldArcAbility(), {
    radius: 60,
    angle: 120,
    regen: 0.6,
    cooldown: 60 * 20,
    max: 1750,
    y: -26,
    width: 6,
    whenShooting: false,
}))
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
    bullet: Object.assign(new ContinuousLaserBulletType(), {
        drawSize: 240,
        damage: 40,
        width: 4,
        length: 240,
        lifetime: 180,
        hitEffect: Fx.none,
        pierceCap: 3,
        colors: [
        Color.valueOf("5c69cc"),
        Color.valueOf("7a8ae6"),
        Color.valueOf("a6afff"),
        Color.white, ],
        incendAmount: 0,
        incendSpread: 0,
        incendChance: 0,
        knockback: 0,
        fragBullets: 1,
        fragBullet: Object.assign(new LightningBulletType(), {
            damage: 12,
            lightningLength: 4,
        })
    })
}))