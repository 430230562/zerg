let mod = Vars.modDirectory.child("zerg").child("main.txt");
mod.exists() || mod.writeString("");
let hidden = Boolean(mod.readString());

Events.on(EventType.ClientLoadEvent, cons(e => {
	const dialog = new BaseDialog(Core.bundle.get("report"));

	dialog.buttons.button(Core.bundle.get("hidden"), run(() => {
		dialog.hide();
		mod.writeString("true");
	})).size(210, 64);
	dialog.buttons.button("@close", run(() => {
		dialog.hide();
	})).size(210, 64);
	
	dialog.cont.pane(table => {
		table.image(Core.atlas.find("bugs-gredizion")).size(64, 64).pad(3).row();
		
		table.add(Core.bundle.get("report-1.sub")).left().growX().wrap().width(420).maxWidth(420).pad(4).labelAlign(Align.left).row();
		
		table.add(Core.bundle.get("report-2.sub")).left().growX().wrap().width(420).maxWidth(420).pad(4).labelAlign(Align.left).row();
	})
	if(! hidden){dialog.show()}
}))