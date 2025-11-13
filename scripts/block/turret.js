const liquid = require("vne/liquid");
const item = require("vne/item");

Blocks.sublimate.ammoTypes.put(
	liquid.ammonia, Object.assign(new ContinuousFlameBulletType(), {
		damage: 960 / 12,
        rangeChange: 7.5 * 8,
        ammoMultiplier: 15 / 12,
        length: 130 + 7.5 * 8,
        knockback: 1.2,
        pierceCap: 4,
        buildingDamageMultiplier: 0.3,
        timescaleDamage: true,
        
        colors: [
            Color.valueOf("79CFCEE6"),
            Color.valueOf("9ADBDACC"),
            Color.valueOf("BCE7E7B3"),
            Color.valueOf("DDF3F399"),
            Color.valueOf("FFFFFF80")
        ],

        flareColor: Color.valueOf("57c3c2"),
        lightColor: Color.valueOf("57c3c2"),
        hitColor: Color.valueOf("57c3c2"),
    }),
)