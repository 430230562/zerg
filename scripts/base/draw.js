function DrawShakeRegion(suffix,range,cycle){
	return extend(DrawRegion, suffix,{
		draw(build){
		
			let z = Draw.z();
			Draw.rect(
				this.region,
				build.x,
				build.y,
				Math.sin(build.totalProgress * Math.PI / (cycle / 2)) * range
			);
			Draw.z(z);
		}
	})
}
exports.DrawShakeRegion = DrawShakeRegion

function DrawMultiRotationRegion(suffix,firSpeed,radius,secSpeed,i,spinSprite){
    return extend(DrawRegion, suffix,{
        draw(build){
            let z = Draw.z();
            
            for(let j = 0;j < i;j++){
                if(spinSprite){
                    Drawf.spinSprite(
            			this.region,
            			build.x + Angles.trnsx(build.totalProgress * firSpeed + (360 / i) * j, 0, radius),
            			build.y + Angles.trnsy(build.totalProgress * firSpeed + (360 / i) * j, 0, radius),
            			build.totalProgress * secSpeed
            		);
                }else{
                    Draw.rect(
            			this.region,
            			build.x + Angles.trnsx(build.totalProgress * firSpeed + (360 / i) * j, 0, radius),
            			build.y + Angles.trnsy(build.totalProgress * firSpeed + (360 / i) * j, 0, radius),
            			build.totalProgress * secSpeed
            		);
                }
            }
            Draw.z(z);
        }
    })
}

exports.DrawMultiRotationRegion = DrawMultiRotationRegion