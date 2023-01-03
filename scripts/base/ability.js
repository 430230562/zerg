var modName = "bugs"

function RotatorAbility(name, x, y, speed){
	var a = extend(Ability, {
		draw(unit){
			this.super$draw(unit);
			
			Draw.rect(
				Core.atlas.find(modName + "-" + name),
				unit.x + Angles.trnsx(unit.rotation, y, x),
				unit.y + Angles.trnsy(unit.rotation, y, x),
				Time.time * speed
			);
		},
		localized(){
			return ""
		}
	});
	return a
}
exports.RotatorAbility = RotatorAbility;

let i = 0 , wasHealed = false;

function MendFieldAbility(amount,reload,range){
	return extend(Ability,{
		update(unit){
			i += Time.delta;
			
			if(i >= reload){
				wasHealed = false;
				
				Units.nearby(unit.team, unit.x, unit.y, range, other => {
					if(other.health < other.maxHealth){
						Fx.heal.at(other);
						wasHealed = true;
					}
					other.heal(amount);
				}),
				Units.nearbyBuildings(unit.x, unit.y, range, b => {
					if(b.team === unit.team && b.health < b.maxHealth){
						Fx.heal.at(b);
						wasHealed = true;
						b.heal(amount);
					}
				})
				if(wasHealed){
					Fx.healWaveDynamic.at(unit,range);
				}
				i = 0;
			}
		},
		localized(){
			return Core.bundle.format("ability.mendField",amount,reload / 60,range / 8);
		}
	})
}
exports.MendFieldAbility = MendFieldAbility;