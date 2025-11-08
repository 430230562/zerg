const item = require('zerg/item')
const liquid = require('zerg/liquid')
const status = require('zerg/status')

Attribute.add("biomass");
Attribute.add("arkycite");

//arkycite
Blocks.arkyicStone.attributes.set(Attribute.get("biomass"), 0.35)
Blocks.arkyicStone.attributes.set(Attribute.get("arkycite"), 1.5)
Blocks.arkyicStone.attributes.set(Attribute.water, -0.75)

//neoplasm
Blocks.redStone.attributes.set(Attribute.get("biomass"), 0.45);
Blocks.redStone.attributes.set(Attribute.get("arkycite"), 1);
Blocks.denseRedStone.attributes.set(Attribute.get("biomass"), 0.45);
Blocks.denseRedStone.attributes.set(Attribute.get("arkycite"), 1.1);