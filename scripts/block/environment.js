const item = require('vne/item')
const liquid = require('vne/liquid')
const status = require('vne/status')

Attribute.add("biomass");
Attribute.add("arkycite");

//arkycite
Blocks.arkyicStone.attributes.set(Attribute.get("biomass"), 0.05)
Blocks.arkyicStone.attributes.set(Attribute.get("arkycite"), 1.5)

//neoplasm
Blocks.redStone.attributes.set(Attribute.get("biomass"), 0.06);
Blocks.redStone.attributes.set(Attribute.get("arkycite"), 1);
Blocks.denseRedStone.attributes.set(Attribute.get("biomass"), 0.07);
Blocks.denseRedStone.attributes.set(Attribute.get("arkycite"), 1.1);