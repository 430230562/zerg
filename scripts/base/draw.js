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

function DrawSinRegion(suffix, Xrange, Xcycle, Yrange, Ycycle) {
    return extend(DrawRegion, suffix, {
        draw(build) {
            let z = Draw.z();
            Draw.rect(
                this.region,
                build.x + Math.sin(build.totalProgress * Math.PI / (Xcycle / 2)) * Xrange,
                build.y + Math.sin(build.totalProgress * Math.PI / (Ycycle / 2)) * Yrange,
                0
            );
            Draw.z(z);
        }
    })
}
exports.DrawSinRegion = DrawSinRegion