let mod = Vars.modDirectory.child("zerg").child("main.txt");
mod.exists() || mod.writeString("");
let hidden = Boolean(mod.readString());

function SimpleDialog(name){
    const d = new BaseDialog(Core.bundle.get(name));
    d.cont.pane(table => {
		table.add(Core.bundle.get(name + ".sub")).left().growX().wrap().width(420).maxWidth(420).pad(4).labelAlign(Align.left).row();
	})
	d.addCloseButton();
	d.show();
	
	return d
}

Events.on(EventType.ClientLoadEvent, () => {
    const remind = new BaseDialog("Welcome to the Gredizion");
    
    remind.cont.pane(table => {
        table.image(Core.atlas.find("bugs-gredizion")).size(128,128).pad(3).row();
        table.add(Core.bundle.get("thanking")).left().growX().wrap().width(420).maxWidth(420).pad(4).labelAlign(Align.left).row();
        
        table.add(Core.bundle.get("remind")).pad(4).labelAlign(Align.center).row();
        table.image(Tex.whiteui, Pal.accent).growX().height(3).pad(4).row();
        table.add(Core.bundle.get("remind.sub")).left().growX().wrap().width(420).maxWidth(420).pad(4).labelAlign(Align.left).row();
        
        table.add("[red]" + Core.bundle.get("warning")).pad(4).labelAlign(Align.center).row();
        table.image(Tex.whiteui, Color.red).growX().height(3).pad(4).row();
        table.add(Core.bundle.get("warning.sub")).left().growX().wrap().width(420).maxWidth(420).pad(4).labelAlign(Align.left).row();
    });
    let time = 30 * 60;
    remind.buttons.button("",run(() => {
        remind.hide();
        mod.writeString("true")
    })).size(128,48).disabled(b => time > 0).update(b => {
        if(time > 0){
            time -= Time.delta
            b.setText(Core.bundle.get("close") + "(" + parseInt(time / 60) + "s)")
        }else{
            b.setText("@close")
            b.update(null)
        }
    })
    remind.buttons.button(Core.bundle.get("removeMod"),run(() => {
        Vars.mods.removeMod(Vars.mods.getMod("bugs"));
        Core.app.exit();
    })).size(128,48)
    
    if(! hidden) remind.show();
    
    
    const dialog = new BaseDialog(Core.bundle.get("report"));
    dialog.cont.pane(table => {
        table.image(Core.atlas.find("bugs-stellar-observatory")).size(64, 64).pad(3);
        table.button(Core.bundle.get("report-1"), run(() => {
            const d1 = new SimpleDialog("report-1");
        })).size(350,64).row();
        
        table.image(Core.atlas.find("bugs-stellar-observatory")).size(64, 64).pad(3);
        table.button(Core.bundle.get("report-2"), run(() => {
            const d2 = new SimpleDialog("report-2");
        })).size(350,64).row()
        
        table.image(Core.atlas.find("bugs-pathfinder")).size(64, 64).pad(3);
        table.button(Core.bundle.get("report-3"), run(() => {
            const d3 = new SimpleDialog("report-3");
        })).size(350,64).row()
        
        table.image(Core.atlas.find("bugs-pathfinder")).size(64, 64).pad(3);
        table.button(Core.bundle.get("report-4"), run(() => {
            const d4 = new SimpleDialog("report-4");
        })).size(350,64).row()
        
        table.image(Core.atlas.find("bugs-pathfinder")).size(64, 64).pad(3);
        table.button(Core.bundle.get("report-5"), run(() => {
            const d5 = new SimpleDialog("report-5");
        })).size(350,64).row()
        
        table.image(Core.atlas.find("bugs-pathfinder")).size(64, 64).pad(3);
        table.button(Core.bundle.get("report-6"), run(() => {
            const d6 = new SimpleDialog("report-6");
        })).size(350,64).row()
        
        table.image(Core.atlas.find("bugs-stellar-observatory")).size(64, 64).pad(3);
        table.button(Core.bundle.get("report-7"), run(() => {
            const d7 = new SimpleDialog("report-7");
        })).size(350,64).row()
        
        table.image(Core.atlas.find("bugs-pathfinder")).size(64, 64).pad(3);
        table.button(Core.bundle.get("report-8"), run(() => {
            const d8 = new SimpleDialog("report-8");
        })).size(350,64).row()
    })
    dialog.addCloseButton();
    
    Events.on(EventType.ResizeEvent, () => {
		const container = Reflect.get(Vars.ui.menufrag, "container");
		container.row();
		container.add(new MobileButton(Icon.download, Core.bundle.get("report"), () => dialog.show()));
		const c = Reflect.get(Vars.ui.menufrag, "container");
		c.add(new MobileButton(Icon.book, Core.bundle.get("web"), () => Core.app.openURI("https://430230562.github.io/zerg")));
	});
})