const environment = require("zerg/block/environment")
const status = require("zerg/status")

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
				if(tile != null)Puddles.deposit(tile,liquid,amount);
			}))
		}
	})
}
exports.MoveLiquidAbility = MoveLiquidAbility;

function DeathNeoplasmAbility(range,amount){
	return extend(Ability,{
		death(unit){
			unit.tileOn().circle(range / 8,cons(tile => {
				if(tile != null)Puddles.deposit(tile,Liquids.neoplasm,amount);
			}))
		},
		localized(){
			return Core.bundle.format("ability.deathNeoplasm");
		}
	})
}
exports.DeathNeoplasmAbility = DeathNeoplasmAbility;

function ToxicAbility(damage, reload, range) {
	return extend(Ability, {
		i: 0,
		j: 75,
		update(unit) {
			this.i += Time.delta
			this.j += Time.delta
			if (this.i >= reload) {
				Units.nearby(null, unit.x, unit.y, range, other => {
					other.health -= damage;
					other.apply(status.poisoned, 60 * 15);
				})
				Units.nearbyBuildings(unit.x, unit.y, range, b => {
					b.health -= damage / 4
					if(b.health <= 0){b.kill()}
				})
				this.i = 0
			}
			if (this.j >= 15) {
				Fx.titanSmoke.at(
					unit.x + Mathf.range(range * 0.7071),
					unit.y + Mathf.range(range * 0.7071),
					Color.valueOf("92AB117F")
				)
				this.j -= 15
			}
		},
		/*draw(unit){
			Draw.color(Color.red)
			
			for(let i = 0; i < 2; i++){
				let rot = i * 180 + Time.time * 1;
				Lines.arc(unit.x, unit.y, range, 0.2, rot);
			}
		}*/
	})
}
exports.ToxicAbility = ToxicAbility