const status = require('status');
const liquid = require('liquid');
const Ef = require('effect');
const { ReduceArmorBulletType } = require('base/bulletType')

function StatWeapon(name, stat, num){
    return extend(Weapon, {
        name: name,
        addStats(u, t){
            this.super$addStats(u, t);
            t.row();
            t.add(Core.bundle.format(stat, num));
        }
    });
}

const pioneer = new TankUnitType("pioneer");
exports.pioneer = pioneer;
Object.assign(pioneer, {
	targetAir: false,
	speed: 0.75,
	hitSize: 10,
	treadPullOffset: 3,
	treadRects: [new Rect(6, -24, 14, 51)],
	treadFrames: 8,
	rotateSpeed: 3,
	health: 400,
	armor: 4,
	itemCapacity: 0,
	researchCostMultiplier: 20,
	constructor: () => new TankUnit.create(),
})
pioneer.weapons.add(
Object.assign(new StatWeapon("zerg-pioneer-weapon","armorReduction",1), {
	layerOffset: 0.0001,
	reload: 50,
	shootY: 0.75,
	recoil: 3,
	rotate: true,
	rotateSpeed: 3.7,
	mirror: false,
	x: 0,
	y: 0,
	heatColor: Color.valueOf("00c49b"),
	cooldownTime: 50,
	shootSound: Sounds.mediumCannon,
	
	bullet: Object.assign(new ReduceArmorBulletType(4, 35, 1), {
		width: 5,
		height: 7,
		lifetime: 40,
		hitSize: 4,
		hitColor: Color.valueOf("00c49b"),
		backColor: Color.valueOf("00c49b"),
		trailColor: Color.valueOf("00c49b"),
		frontColor: Color.white,
		trailWidth: 1.7,
		trailLength: 5,
	})
})
)

const brigadier = new TankUnitType("brigadier");
exports.brigadier = brigadier;
Object.assign(brigadier, {
	speed: 0.65,
	hitSize: 16,
	treadPullOffset: 3,
	treadRects: [new Rect(-31, -38, 21, 76)],
	treadFrames: 8,
	rotateSpeed: 2.5,
	health: 1100,
	armor: 7,
	itemCapacity: 0,
	researchCostMultiplier: 20,
	constructor: () => new TankUnit.create(),
})
brigadier.weapons.add(
Object.assign(new StatWeapon("zerg-brigadier-weapon","armorReduction",2), {
	layerOffset: 0.0001,
	reload: 25,
	shootY: 10,
	recoil: 3,
	rotate: true,
	rotateSpeed: 3.7,
	mirror: false,
	x: 0,
	y: 0,
	heatColor: Color.valueOf("00c49b"),
	cooldownTime: 50,
	shootSound: Sounds.mediumCannon,
	shoot: new ShootAlternate(3.5),
	
	bullet: Object.assign(new ReduceArmorBulletType(4, 75, 2), {
		width: 7,
		height: 9,
		lifetime: 40,
		hitSize: 12,
		hitColor: Color.valueOf("00c49b"),
		backColor: Color.valueOf("00c49b"),
		trailColor: Color.valueOf("00c49b"),
		frontColor: Color.white,
		trailWidth: 1.7,
		trailLength: 5,
		
		pierceCap: 3,
	})
})
)

const kibbler = new TankUnitType("kibbler");
exports.kibbler = kibbler;
Object.assign(kibbler,{
	speed: 0.65,
	hitSize: 22,
	treadPullOffset: 0,
	crushDamage: 1.4,
	treadRects: [
		new Rect(16 - 60,48 - 70,30,75),
		new Rect(44 - 60,17 - 70,17,60)
	],
	treadFrames: 8,
	rotateSpeed: 2.5,
	health: 1800,
	armor: 13,
	itemCapacity: 0,
	researchCostMultiplier: 20,
	constructor: () => new TankUnit.create(),
})
kibbler.weapons.add(
Object.assign(new StatWeapon("zerg-kibbler-weapon","armorReduction",3),{
	shootSound: Sounds.dullExplosion,
	layerOffset: 0.0001,
	reload: 85,
	shootY: 96 / 4,
	recoil: 3,
	rotate: true,
	rotateSpeed: 1.3,
	mirror: false,
	shootCone: 2,
	x: 0,
	y: 0,
	cooldownTime: 30,
	bullet: Object.assign(new ReduceArmorBulletType(4, 110, 3), {
		width: 10,
		height: 14,
		lifetime: 48,
		hitSize: 12,
		hitColor: Color.valueOf("00c49b"),
		backColor: Color.valueOf("00c49b"),
		trailColor: Color.valueOf("00c49b"),
		frontColor: Color.white,
		trailWidth: 2.1,
		trailLength: 7,
		
		pierceCap: 3,
		
		intervalBullets: 4,
		intervalRandomSpread: 0,
		intervalSpread: 10,
		bulletInterval: 8,
		intervalBullet: Object.assign(new BasicBulletType(), {
			lifetime: 15,
			damage: 18,
			width: 5,
			height: 5,
			speed: 3,
		})
	})
})
)

const purge = new TankUnitType("purge");
exports.purge = purge;
Object.assign(purge,{
    squareShape: true,
	omniMovement: false,
	rotateMoveFirst: true,
	envDisabled: 0,
	speed: 0.6,
	outlineColor: Color.valueOf("2d2f39"),
	outlineRadius: 1,
	hitSize: 29,
	rotateSpeed: 3,
	health: 10000,
	armor: 17,
	itemCapacity: 0,
	researchCostMultiplier: 20,
	crushDamage: 2,
	constructor: () => new TankUnit.create(),
})
purge.weapons.add(
    Object.assign(new Weapon("zerg-purge-weapon"),{
        reload: 110,
        cooldownTime: 90,
        mirror: false,
        x: 0,
        y: 0,
        rotateSpeed: 1.4,
        rotate: true,
        shootY: 23,
        shake: 6,
        recoil: 10.5,
        shadow: 50,
        shootSound: Sounds.railgun,

        ejectEffect: Fx.none,

        bullet: Object.assign(new RailBulletType(),{
            shootEffect: Fx.railShoot,
            length: 400,
            pointEffectSpace: 60,
            pierceEffect: Fx.railHit,
            pointEffect: Fx.railTrail,
            hitEffect: Fx.massiveExplosion,
            smokeEffect: Fx.shootBig2,
            damage: 750,
            pierceDamageFactor: 0.5,
        })
    })
)

const fearless = new TankUnitType("fearless")
exports.fearless = fearless;
Object.assign(fearless, {
	squareShape: true,
	omniMovement: false,
	rotateMoveFirst: true,
	envDisabled: 0,
	speed: 0.53,
	outlineColor: Color.valueOf("2d2f39"),
	outlineRadius: 1,
	hitSize: 38,
	rotateSpeed: 2.4,
	health: 28000,
	armor: 24,
	itemCapacity: 0,
	researchCostMultiplier: 20,
	crushDamage: 4,
	constructor: () => new TankUnit.create(),
})
fearless.weapons.add(
Object.assign(new StatWeapon("zerg-fearless-weapon","armorReduction",5),{
	layerOffset: 0.0001,
	reload: 45 / 2,
	shootY: 6,
	recoil: 4,
	rotate: true,
	rotateSpeed: 2.7,
	mirror: false,
	x: 0,
	y: -0.75,
	heatColor: Color.valueOf("00c49b"),
	cooldownTime: 50,
	shootSound: Sounds.shotgun,
	shoot: new ShootAlternate(8),
	bullet: Object.assign(new ReduceArmorBulletType(8,320,5), {
		pierce: true,
		pierceBuilding: true,
		pierceCap: 4,
		smokeEffect: Fx.shootBigSmoke,
		shootEffect: Fx.shootBigColor,
		width: 16,
		height: 22.5,
		shrinkX: 0,
		shrinkY: 0,
		lifetime: 30,
		hitSize: 12,
		hitColor: Color.valueOf("00c49b"),
		backColor: Color.valueOf("00c49b"),
		trailColor: Color.valueOf("00c49b"),
		frontColor: Color.valueOf("ffffff"),
		trailWidth: 2.2,
		trailLength: 12,
		splashDamageRadius: 20,
		splashDamage: 40,
		despawnEffect: Fx.hitBulletColor,
		hitEffect: Fx.hitBulletColor,
		fragBullets:9,
		fragRandomSpread: 0,
		fragSpread: 45 / 8,
		fragVelocityMin: 4,
		fragVelocityMax: 4,
		fragLifeMin: 1,
		fragLifeMax: 1,
		fragBullet: Object.assign(new BasicBulletType(),{
			lifetime: 20,
			damage: 10,
			width: 6,
			height: 6,
			pierce: true,
			pierceBuilding: true,
			pierceCap: 2,
			frontColor: Color.valueOf("ffffff"),
			backColor: Color.valueOf("00c49b"),
		})
	})
})
)

const breeze = new TankUnitType("breeze");
exports.breeze = breeze;
Object.assign(breeze, {
	outlineColor: Color.valueOf("7e8ae6"),
	healColor: Color.valueOf("7e8ae6"),
	speed: 9 * 8 / 60,
	treadRects:  [new Rect(6, -24, 14, 51)],
	treadFrames: 8,
	hitSize: 12,
	treadPullOffset: 3,
	rotateSpeed: 5,
	health: 560,
	armor: 2,
	itemCapacity: 0,
	researchCostMultiplier: 20,
	targetAir: true,
	constructor: () => new TankUnit.create()
})
breeze.weapons.add(
Object.assign(new Weapon("zerg-breeze-weapon"), {
	x: 0,
	y: 0,
	rotate: true,
	rotateSpeed: 5,
	mirror: false,
	layerOffset: 0.0001,
	shootY: 2,
	recoil: 1,
	reload: 25,
	shootSound:	Sounds.missile,
	shoot: new ShootAlternate(14 / 2),
	bullet: Object.assign(new MissileBulletType(4,10), {
		hitEffect: Fx.blastExplosion,
		lifetime: 64,
		width: 8,
		splashDamageRadius: 24,
		splashDamage: 40,
		trailChance: 0.1,
		hitColor: Color.valueOf("7e8ae6"),
		backColor: Color.valueOf("7e8ae6"),
		trailColor: Color.valueOf("7e8ae6"),
		frontColor: Color.white,
	})
})
)

const gale = new TankUnitType("gale")
exports.gale = gale;
Object.assign(gale, {
	outlineColor: Color.valueOf("7e8ae6"),
	healColor: Color.valueOf("7e8ae6"),
	speed: 8 * 8 / 60,
	treadRects: [new Rect(12, -40, 20, 76)],
	treadFrames: 8,
	hitSize: 18,
	treadPullOffset: 3,
	rotateSpeed: 3,
	health: 1200,
	armor: 5,
	itemCapacity: 0,
	researchCostMultiplier: 20,
	targetAir: true,
	constructor: () => new TankUnit.create()
})
gale.weapons.add(
	Object.assign(new Weapon("zerg-gale-weapon"), {
	x: 0,
	y: 0,
	rotate: true,
	rotateSpeed: 5,
	mirror: false,
	layerOffset: 0.0001,
	shootY: 1.25,
	recoil: 1,
	reload: 7,
	shootSound:	Sounds.missile,
	shoot: Object.assign(new ShootAlternate(17 / 4), {
		barrels: 3
	}),
	bullet: Object.assign(new MissileBulletType(4,10), {
		hitEffect: Fx.blastExplosion,
		lifetime: 68,
		width: 8,
		splashDamageRadius: 24,
		splashDamage: 40,
		trailChance: 0.1,
		hitColor: Color.valueOf("7e8ae6"),
		backColor: Color.valueOf("7e8ae6"),
		trailColor: Color.valueOf("7e8ae6"),
		frontColor: Color.white,
	})
})
)

const hurricane = new TankUnitType("hurricane")
exports.hurricane = hurricane;
Object.assign(hurricane,{
	outlineColor: Color.valueOf("7e8ae6"),
	healColor: Color.valueOf("7e8ae6"),
	speed: 7.5 * 8 / 60,
	treadRects: [
		new Rect(16 - 60,48 - 70,30,75),
		new Rect(44 - 60,17 - 70,17,60)
	],
	treadFrames: 8,
	hitSize: 22,
	treadPullOffset: 0,
	crushDamage: 0.2,
	rotateSpeed: 3,
	health: 1820,
	armor: 7,
	itemCapacity: 0,
	researchCostMultiplier: 20,
	targetAir: true,
	constructor: () => new TankUnit.create()
})
hurricane.weapons.add(
Object.assign(new Weapon("zerg-hurricane-weapon"),{
	layerOffset: 0.0001,
	reload: 60,
	shootY: 0.75,
	recoil: 3,
	rotate: true,
	rotateSpeed: 3.7,
	mirror: false,
	x: 0,
	y: -0.25,
	heatColor: Color.valueOf("7e8ae6"),
	shootSound: Sounds.missileLarge,
	bullet: Object.assign(new MissileBulletType(5,125), {
		hitEffect: Fx.blastExplosion,
		lifetime: 60,
		width: 12,
		height: 24,
		splashDamageRadius: 24,
		splashDamage: 125,
		trailChance: 0.1,
		hitColor: Color.valueOf("7e8ae6"),
		backColor: Color.valueOf("7e8ae6"),
		trailColor: Color.valueOf("7e8ae6"),
		frontColor: Color.white,
		bulletInterval: 4,
		intervalRandomSpread: 45,
		intervalBullet: Object.assign(new MissileBulletType(4,10), {
    		hitEffect: Fx.blastExplosion,
    		lifetime: 30,
    		width: 8,
    		splashDamageRadius: 24,
    		splashDamage: 40,
    		trailChance: 0.1,
    		hitColor: Color.valueOf("7e8ae6"),
    		backColor: Color.valueOf("7e8ae6"),
    		trailColor: Color.valueOf("7e8ae6"),
    		frontColor: Color.white,
    	})
	})
})
)

const alter = new UnitType("alter");
exports.alter = alter;
Object.assign(alter, {
	targetPriority: -1.5,
	outlineColor: Pal.neoplasmOutline,
	envDisabled: Env.none,
	healFlash: true,
	healColor: Pal.neoplasm1,
	squareShape: true,
	omniMovement: false,
	rotateMoveFirst: true,
	speed: 0.9,
	hitSize: 7,
	treadRects: [new Rect(4, -20, 11, 36)],
	treadFrames: 8,
	treadPullOffset: 3,
	rotateSpeed: 3.3,
	health: 240,
	armor: 1,
	itemCapacity: 0,
	researchCostMultiplier: 20,
	constructor: () => new TankUnit.create()
})
alter.weapons.add(
Object.assign(new Weapon("zerg-alter-weapon"), {
	layerOffset: 0.0001,
	reload: 90,
	shootY: 1.5,
	recoil: 0,
	rotate: true,
	rotateSpeed: 5.7,
	mirror: false,
	x: 0,
	y: 0,
	heatColor: Color.valueOf("f9350f"),
	cooldownTime: 90,
	shootSound: Sounds.lasershoot,
	
	bullet: extend(BasicBulletType, {
		hitEntity(b, entity, health) {
			this.super$hitEntity(b, entity, health);
			if(entity instanceof Unit) {
				var unit = entity;
				if (unit.health <= 50 && unit.type.health <= 700) {
					unit.team = b.team,
					unit.heal();
				}
			}
		},
		speed: 3.5,
		damage: 25,
		sprite: "zerg-wave",
		width: 10,
		height: 13,
		lifetime: 52,
		despawnEffect: Ef.interfere,
		hitEffect: Ef.interfere,
		backColor: Color.valueOf("afffff"),
		frontColor: Color.valueOf("ffffff"),
		hittable: false,
		pierceArmor: true,
		homingRange: 60,
		homingPower: 0.1,
	})
})
)