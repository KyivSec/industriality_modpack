const RecipeOutputToDelete = [
    "ad_astra:iron_plate", 
    "ad_astra:steel_nugget",
    "ad_astra:steel_plate",
    "ad_astra:steel_ingot",
    "ad_astra:etrionic_blast_furnace",
    "ad_astra:ostrum_fluid_pipe",
    "ad_astra:desh_fluid_pipe",
    "ad_astra:steel_cable",
    "ad_astra:desh_cable",
    "ad_astra:compressor",
    "automobility:auto_mechanic_table",
    "automobility:launch_gel"
];

const RecipesToDelete = [
    "ad_astra:compressing/iron_plate_from_compressing_iron_ingot",
    "ad_astra:compressing/calorite_plate_from_compressing_calorite_blocks",
    "ad_astra:compressing/ostrum_plate_from_compressing_ostrum_blocks",
    "ad_astra:compressing/steel_plate_from_compressing_steel_blocks",
    "ad_astra:compressing/desh_plate_from_compressing_desh_blocks",
    "ad_astra:compressing/desh_plate_from_compressing_desh_ingots",
    "ad_astra:compressing/calorite_plate_from_compressing_calorite_ingots",
    "ad_astra:compressing/steel_plate_from_compressing_steel_ingots",
    "ad_astra:compressing/ostrum_plate_from_compressing_ostrum_ingots",
    "ad_astra:compressing/iron_plate_from_compressing_iron_block"
];

ServerEvents.recipes(event => {
    
    for (let i = 0; i < RecipeOutputToDelete.length; i++) {
        event.remove({output: RecipeOutputToDelete[i]})
    }

    for (let i = 0; i < RecipesToDelete.length; i++) {
        event.remove({id: RecipesToDelete[i]})
    }

    event.shaped(
        Item.of('kubejs:money_block', 1), // arg 1: output
        [
          'AAA',
          'AAA', // arg 2: the shape (array of strings)
          'AAA'
        ],
        {
          A: 'minecraft:andesite'
        }
      )

    event.replaceInput(
        { input: "ad_astra:desh_fluid_pipe" },
        "ad_astra:desh_fluid_pipe",
        "tfmg:plastic_smart_fluid_pipe"
      )

})

ServerEvents.tags('item', event => {
    for (let i = 0; i < RecipesToDelete.length; i++) {
        event.removeAllTagsFrom(RecipesToDelete[i])
    }
})