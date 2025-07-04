const item = require("zerg/item");

const pulseMender = new MendProjector("pulse-mender");
exports.pulseMender = pulseMender;
Object.assign(pulseMender,{
    size: 1,
	reload: 70 * 60,
	range: 6 * 8,
	phaseRangeBoost: 6 * 8,
	healPercent: 100,
	phaseBoost: 0,
	health: 80,
	useTime: 12 * 60,
	buildVisibility: BuildVisibility.shown,
	category: Category.effect,
	requirements: ItemStack.with(
		Items.graphite, 20,
		item.nickel, 50,
	)
})
pulseMender.consumePower(0.4);
pulseMender.consumeItem(Items.silicon, 1).boost();

const resurrection = new MendProjector("resurrection");
exports.resurrection = resurrection;
Object.assign(resurrection, {
	size: 3,
	reload: 180,
	range: 35 * 8,
	phaseRangeBoost: 120,
	healPercent: 8,
	phaseBoost: 4,
	useTime: 3 * 60,
	health: 720,
	buildVisibility: BuildVisibility.shown,
	category: Category.effect,
	requirements: ItemStack.with(
		Items.silicon, 200,
		Items.graphite, 150,
		item.nickel, 250,
		item.manganese, 175,
	)
})
resurrection.consumePower(5.5);
resurrection.consumeItem(Items.silicon, 1).boost();

const catalyzer = new OverdriveProjector("catalyzer");
exports.catalyzer = catalyzer;
Object.assign(catalyzer, {
	reload: 60,
	range: 80,
	speedBoost: 1.35,
	speedBoostPhase: 0.35,
	useTime: 120,
	phaseRangeBoost: 0,
	hasBoost: true,
	size: 2,
	buildVisibility: BuildVisibility.shown,
	category: Category.effect,
	requirements: ItemStack.with(
		Items.silicon, 75,
		item.nickel, 100,
		item.manganese, 75,
	)
})
catalyzer.consumeItem(item.manganese, 1).boost();
catalyzer.consumePower(2.5);

const frame = new ForceProjector("frame");
exports.frame = frame;
Object.assign(frame, {
	radius: 32,
	shieldHealth: 400,
	consumeCoolant: true,
	hasLiquids: true,
	cooldownNormal: 40 / 60,
	cooldownLiquid: 20 / 60,
	coolantConsumption: 0.05,
	cooldownBrokenBase: 20 / 60,
	size: 1,
	buildVisibility: BuildVisibility.shown,
	category: Category.effect,
	requirements: ItemStack.with(
		Items.silicon, 25,
		item.nickel, 50,
		item.crystal, 25,
	)
})
frame.consumePower(0.8);

const matrix = new ForceProjector("matrix");
exports.matrix = matrix;
Object.assign(matrix,{
	radius: 64,
	shieldHealth: 1200,
	consumeCoolant: true,
	hasLiquids: true,
	cooldownNormal: 80 / 60,
	cooldownLiquid: 40 / 60,
	coolantConsumption: 0.1,
	cooldownBrokenBase: 40 / 60,
	size: 2,
	buildVisibility: BuildVisibility.shown,
	category: Category.effect,
	requirements: ItemStack.with(
		Items.silicon, 75,
		item.nickel, 100,
		item.manganese, 50,
		item.crystal, 125,
	)
})
matrix.consumePower(2.4)

const clan = new ForceProjector("clan");
exports.clan = clan
Object.assign(clan,{
	radius: 128,
	shieldHealth: 2400,
	consumeCoolant: true,
	hasLiquids: true,
	cooldownNormal: 150 / 60,
	cooldownLiquid: 60 / 60,
	coolantConsumption: 0.15,
	cooldownBrokenBase: 100 / 60,
	size: 3,
	buildVisibility: BuildVisibility.shown,
	category: Category.effect,
	requirements: ItemStack.with(
		Items.silicon, 125,
		item.nickel, 120,
		item.manganese, 75,
		item.chromium, 25,
		item.crystal, 205,
	)
})
clan.consumePower(3.4)

const box = new StorageBlock("box");
exports.box = box;
Object.assign(box, {
	size: 2,
	itemCapacity: 375,
	scaledHealth: 65,
	buildVisibility: BuildVisibility.shown,
	category: Category.effect,
	requirements: ItemStack.with(
		item.nickel, 25,
		item.manganese, 75,
	)
})

const godown = new StorageBlock("godown");
exports.godown = godown;
Object.assign(godown, {
	size: 3,
	itemCapacity: 1250,
	scaledHealth: 75,
	buildVisibility: BuildVisibility.shown,
	category: Category.effect,
	requirements: ItemStack.with(
		item.manganese, 275,
		item.chromium, 225,
	)
})

const unloader = new Unloader("unloader");
exports.unloader = unloader;
Object.assign(unloader, {
	speed: 60 / 16,
	group: BlockGroup.transportation,
	buildVisibility: BuildVisibility.shown,
	category: Category.effect,
	requirements: ItemStack.with(
		Items.silicon, 20,
		item.manganese, 30,
	)
})

const launchPad = new LaunchPad("launch-pad");
exports.launchPad = launchPad;
Object.assign(launchPad,{
	size: 3,
	itemCapacity: 125,
	launchTime: 60 * 20,
	hasPower: true,
	buildVisibility: BuildVisibility.shown,
	category: Category.effect,
	requirements: ItemStack.with(
		Items.silicon, 150,
		item.nickel, 550,
		item.manganese, 150,
	),
})
launchPad.consumePower(4);
launchPad.buildType = prov(() => extend(LaunchPad.LaunchPadBuild,launchPad,{
    /*buildConfiguration(table){
        if(!Vars.state.isCampaign() || Vars.net.client()){
            this.deselect();
            return;
        }

        table.button(Icon.upOpen, Styles.cleari, () => {
            PlanetDialog.debugSelect = true;
            
            
            Vars.ui.planet.showSelect(Vars.state.rules.sector, other => {
                Vars.ui.planet.mode = PlanetDialog.Mode.look;
                if(Vars.state.isCampaign() && other.hasBase()){
                    Vars.state.rules.sector.info.destination = other;
                    this.deselect();
                }
            });
        }).size(40);
    }*/
}))

const lamp = extend(LightBlock,"lamp",{
	drawPlace(x,y,rotation,valid){
		Drawf.dashCircle(x * 8 + this.offset, y * 8 + this.offset, this.radius * 2, Pal.accent);
	},
	setStats(){
		this.super$setStats();
		this.stats.add(Stat.shootRange, (this.radius / 8) * 2, StatUnit.blocks);
	},
	size: 2,
	brightness: 0.9,
	radius: 180,
	buildVisibility: BuildVisibility.shown,
	category: Category.effect,
	requirements: ItemStack.with(
		Items.graphite, 12,
		item.nickel, 8,
	)
});
exports.lamp = lamp;
lamp.buildType = prov(() => {
	return extend(LightBlock.LightBuild, lamp, {
		drawSelect() {
			this.super$drawSelect();
			Drawf.dashCircle(this.x, this.y, this.block.radius * 2, Pal.accent);
		}
	})
});
lamp.consumePower(0.1);

const lavaMine = new Block("lava-mine");
Object.assign(lavaMine,{
    update: true,
    destructible: true,
    solid: false,
    targetable: false,
    hasShadow: false,
    health: 800,
    size: 2,
    crushDamageMultiplier: 0,
    category: Category.effect,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		Items.graphite, 20,
		Items.silicon, 20,
		item.nickel, 40,
		item.iridium, 10
	)
})
lavaMine.buildType = prov(() => extend(Building,{
    i:0,
    updateTile(){
        this.i += Time.delta
    },
    unitOn(unit){
        if(unit.team != this.team && unit.type.hitSize >= 16 && this.i >= 48){
            unit.damage(160 * Math.log(8 * unit.type.hitSize) + 810)
            this.damage(401)
            this.i = 0
            Puddles.deposit(unit.tileOn(),Liquids.slag,100)
        }
    }
}))

const explosive = new Wall("explosive");
exports.explosive = explosive;
Object.assign(explosive,{
	health: 240,
	baseExplosiveness: 160,
	size: 1,
	configurable: true,
	buildVisibility: BuildVisibility.shown,
	category: Category.effect,
	requirements: ItemStack.with(
	    item.nickel, 20,
		item.biosulfide, 30,
		item.salt, 20,
	),
})
explosive.buildType = prov(() => extend(Building,{
    buildConfiguration(table){
        table.button(Icon.upOpen, Styles.cleari, run(() => {
            this.kill()
        }))
    },
    drawSelect() {
		this.super$drawSelect();
		Drawf.dashCircle(this.x, this.y, 39, Color.red);
	}
}))