let mod = Vars.modDirectory.child("zerg").child("setting.txt");
let version = Vars.mods.getMod("zerg").version;
mod.exists() || mod.writeString("" + version);
let currentVersion = parseFloat(mod.readString());


Events.on(EventType.ClientLoadEvent, () => {
	const remind = new BaseDialog("Welcome to the Greavar");
	
	remind.cont.pane(table => {
		table.image(Core.atlas.find("zerg-greavar")).size(64,64).pad(3).row();
		table.add(Core.bundle.get("zerg.para1") + currentVersion).left().growX().wrap().width(420).maxWidth(420).pad(4).labelAlign(Align.left).row();

		table.add(Core.bundle.get("zerg.para2")).left().growX().wrap().width(420).maxWidth(420).pad(4).labelAlign(Align.left).row();

		table.buttons.button(Core.bundle.get("zerg.changelog"), run(() => { 
			const changelog = new BaseDialog("Changelog");
			changelog.cont.pane(t => {
				t.add(Core.bundle.get("changelogtext")).left().growX().wrap().width(500).maxWidth(500).pad(4).labelAlign(Align.left).row();	
			});
			changelog.buttons.button("@close", run(() => {
				changelog.hide();
			})).size(128,64);

			changelog.show();
		})).size(200,64).pad(4).row();
		
		table.add(Core.bundle.get("zerg.subtile1")).pad(4).labelAlign(Align.center).row();
		table.image(Tex.whiteui, Pal.accent).growX().height(3).pad(4).row();
		table.buttons.button("QQ交流群", run(() => {
			Core.app.openURI("");
		})).size(200,64).pad(4).row();

		table.add(Core.bundle.get("zerg.subtile2")).pad(4).labelAlign(Align.center).row();
		table.image(Tex.whiteui, Pal.accent).growX().height(3).pad(4).row();
		table.add(Core.bundle.get("zerg.para3")).left().growX().wrap().width(420).maxWidth(420).pad(4).labelAlign(Align.left).row();

		table.add()
		
	});
	let time = 15 * 60;
	remind.buttons.button("",run(() => {
		remind.hide();
		mod.writeString("true")
	})).size(128,64).disabled(b => time > 0).update(b => {
		if(time > 0){
			time -= Time.delta
			b.setText(Core.bundle.get("close") + "(" + parseInt(time / 60) + "s)")
		}else{
			b.setText("@close")
			b.update(null)
		}
	})
	
	if(currentVersion < version) remind.show();
})