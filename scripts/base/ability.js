const environment = require("block/environment")

function MendFieldAbility(amount,reload,range){
	return extend(Ability,{
	    i: 0,
	    wasHealed: false,
		update(unit){
			this.i += Time.delta;
			
			if(this.i >= reload){
				this.wasHealed = false;
				
				Units.nearby(unit.team, unit.x, unit.y, range, other => {
					if(other.health < other.maxHealth){
						Fx.heal.at(other);
						this.wasHealed = true;
					}
					other.heal(amount);
				}),
				Units.nearbyBuildings(unit.x, unit.y, range, b => {
					if(b.team === unit.team && b.health < b.maxHealth){
						Fx.heal.at(b);
						this.wasHealed = true;
						b.heal(amount);
					}
				})
				if(this.wasHealed){
					Fx.healWaveDynamic.at(unit,range);
				}
				this.i = 0;
			}
		},
		localized(){
			return Core.bundle.format("ability.mendField",reload / 60,range / 8,amount);
		}
	})
}
exports.MendFieldAbility = MendFieldAbility;

function MoveLiquidAbility(liquid,range,amount){
    return extend(Ability,{
        update(unit){
            unit.tileOn().circle(range / 8,cons(tile => {
                Puddles.deposit(tile,liquid,amount);
            }))
        }
    })
}
exports.MoveLiquidAbility = MoveLiquidAbility;

function DeathNeoplasmAbility(range,amount){
    return extend(Ability,{
        death(unit){
            unit.tileOn().circle(range / 8,cons(tile => {
                Puddles.deposit(tile,Liquids.neoplasm,amount);
            }))
        },
        localized(){
			return Core.bundle.format("ability.deathNeoplasm");
		}
    })
}
exports.DeathNeoplasmAbility = DeathNeoplasmAbility;

function UAVSpawnAbility(unitType,regen,amount){
    return extend(Ability,{
        update(unit){
            if(unit.shield <= unitType.health)unit.shield += regen * Time.delta
            if(unit.shield >= unitType.health && unit.team.data().countType(unitType) <= unit.team.data().countType(unit.type) * amount){
                Fx.spawn.at(unit)
                unitType.spawn(unit.team,unit.x,unit.y)
                
                unit.shield -= unitType.health
            }
        }
        
    })
}
exports.UAVSpawnAbility = UAVSpawnAbility