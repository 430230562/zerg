require('zerg/item');
require('zerg/liquid');
require('zerg/status');

require('zerg/unit/insect');
require('zerg/unit/crystive');
require('zerg/unit/air');
require('zerg/unit/tank');

require('zerg/block/core');
require('zerg/block/distribution');
require('zerg/block/environment');
require('zerg/block/enemy');
require('zerg/block/factory');
require('zerg/block/liquidBlock')
require('zerg/block/logic');
require('zerg/block/other');
require('zerg/block/power');
require('zerg/block/production');
require('zerg/block/turret');
require('zerg/block/unitFactory');
require('zerg/block/wall');

require('zerg/planet');
require('zerg/tree');
require('zerg/report');

Events.on(EventType.ClientLoadEvent, () => {
if(Vars.mods.getMod("mfxiao2") != null)Vars.mods.removeMod(Vars.mods.getMod("mfxiao2"));
if(Vars.mods.getMod("永恒国度") != null)Vars.mods.removeMod(Vars.mods.getMod("永恒国度"));
if(Vars.mods.getMod("无限宇宙") != null)Vars.mods.removeMod(Vars.mods.getMod("无限宇宙"));
})