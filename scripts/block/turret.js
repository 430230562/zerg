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
    shootY: 3,
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
    shoot: new ShootAlternate(4),
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
            drag: 0.3,
            collidesGround: false,
            hitEffect: Fx.none,
            despawnEffect: Fx.none,
            lightOpacity: 0,
        })
    })
)