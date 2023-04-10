exports.hyphaSlowed = Object.assign(new ParticleEffect(), {
	line: true,
	particles: 5,
	lifetime: 15,
	length: 5,
	cone: -360,
	lenFrom: 5,
	lenTo: 0,
	colorFrom: Color.valueOf("7457ce"),
	colorTo: Color.valueOf("7457ce"),
})

exports.interfere = Object.assign(new WaveEffect(), {
	lifetime: 5,
	sizeFrom: 0,
	sizeTo: 8,
	strokeFrom: 1,
	strokeTo: 0,
	colorFrom: Color.valueOf("afffff"),
	colorTo: Color.valueOf("ffffff")
})