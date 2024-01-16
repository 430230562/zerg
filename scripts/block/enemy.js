const insect = require('zerg/unit/insect');

const pulseCrystal = new Block("pulse-crystal");
Object.assign(pulseCrystal,{
    buildVisibility: BuildVisibility.editorOnly,
	category: Category.effect,
	update: true,
	health: 2000,
	armor: 13,
	size: 3,
	solid: true,
	replaceable: false,
	hasShadow: true,
})
pulseCrystal.buildType = prov(() => extend(Building,{
    i:0,
    r:300 + Mathf.range(120),
	updateTile(){
		this.i += Time.delta
		
		if(this.i >= this.r){
		    Units.nearby(null,this.x,this.y,10 * 8,other => {
		        if(other.team != this.team){
    		        other.damagePierce(100);
    		        
    		        other.impulse(
    		            Math.cos(Angles.angle(this.x, this.y, other.x, other.y)* Math.PI / 180) * 64 * 16,
    					Math.sin(Angles.angle(this.x, this.y, other.x, other.y)* Math.PI / 180) * 64 * 16
    		        )
    		    })
		    }
		    
		    Groups.bullet.intersect(this.x - 80, this.y - 80, 160, 160, b => {
                 if(b.type.hittable && b.team != this.team){
                     b.absorb()
                 }
            });
		    
		    Object.assign(new WaveEffect(), {
            	lifetime: 15,
            	sizeFrom: 0,
            	sizeTo: 80,
            	strokeFrom: 3,
            	strokeTo: 0.1,
            	colorFrom: Pal.missileYellowBack,
            	colorTo: Pal.missileYellow,
            }).at(this.x,this.y)
            
            this.i = 0
            this.r = 300 + Mathf.range(120)
		}
	}
}))

const nest = extend(CoreBlock,"nest",{
	canPlaceOn(tile,team,rotation){
		return true
	},
});
Object.assign(nest,{
	update: true,
	solid: false,
	replaceable: true,
	hasShadow: false,
	size: 3,
	health: 1500,
	unitCapModifier: 0,
	itemCapacity: 0,
	buildVisibility: BuildVisibility.editorOnly,
	category: Category.effect,
})
nest.buildType = prov(() => extend(CoreBlock.CoreBuild,nest,{
	i : 0,
	updateTile(){
		this.i += Time.delta
		
		if(this.i >= 60 * 10){
			let a = Math.random() * 5
			for(let i = 0; i < a;i++){
				insect.egg.spawn(this.team,this.tile.worldx() + Math.random(),this.tile.worldy() + Math.random());
			}
			
			this.i = 0
		}
		this.heal(0.25);
		if(this.health < this.maxHealth && Mathf.chance(0.1)) Fx.neoplasmHeal.at(
			this.x + Mathf.range(11),
			this.y + Mathf.range(11),
		);
	}
}))

const nestLarge = extend(CoreBlock,"nest-large",{
	canPlaceOn(tile,team,rotation){
		return true
	},
});
Object.assign(nestLarge,{
	update: true,
	solid: false,
	replaceable: true,
	hasShadow: false,
	size: 5,
	health: 5500,
	unitCapModifier: 0,
	itemCapacity: 0,
	buildVisibility: BuildVisibility.editorOnly,
	category: Category.effect,
})
nestLarge.buildType = prov(() => extend(CoreBlock.CoreBuild,nestLarge,{
	i : 0,
	updateTile(){
		this.i += Time.delta
		
		if(this.i >= 60 * 20){
			let a = Math.random() * 13
			for(let i = 0; i < a;i++){
				if(i < 8){
				    insect.egg.spawn(this.team,this.tile.worldx() + Math.random(),this.tile.worldy() + Math.random());
				}else{
				    insect.eggLarge.spawn(this.team,this.tile.worldx() + Math.random(),this.tile.worldy() + Math.random());
				}
			}
			
			this.i = 0
		}
		this.heal(0.25);
		if(this.health < this.maxHealth && Mathf.chance(0.1)) Fx.neoplasmHeal.at(
			this.x + Mathf.range(19),
			this.y + Mathf.range(19),
		);
	}
}))