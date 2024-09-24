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
    "automobility:launch_gel",
    "ad_astra:fuel_refinery",
    "ad_astra:coal_generator",
    'ad_astra:oxygen_loader',
    'ad_astra:steel_plate',
    'ad_astra:iron_plate',
    "tfmg:rebar",
    "tfmg:turbine_blade"
];

['ad_astra:fan', 'tfmg:heavy_plate', 'ad_astra:oxygen_loader', 'tfmg:heavy_cable_hub', 'tfmg:resistor_', 'ad_astra:gas_tank', 'ad_astra:gas_tank']

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
        Item.of('kubejs:money_block', 1),
        [
          'AAA',
          'AAA',
          'AAA'
        ],
        {
          A: 'kubejs:money'
        }
    )

    event.shaped(
        Item.of('tfmg:turbine_blade', 1),
        [
          'A A',
          ' B ',
          'A A'
        ],
        {
          A: 'tfmg:aluminum_ingot',
          B: 'ad_astra:steel_rod'
        }
    )

    event.shaped(
        Item.of('ad_astra:oxygen_loader', 1),
        [
          'ADA',
          'BEB',
          'ACA'
        ],
        {
          A: 'tfmg:heavy_plate',
          B: 'ad_astra:gas_tank',
          C: 'tfmg:electric_casing',
          D: 'ad_astra:fan',
          E: 'tfmg:resistor_'
        }
    )

    event.shapeless(
        Item.of("kubejs:money", 9),
        [
            "kubejs:money_block"
        ]
    )

    event.replaceInput(
        { input: "ad_astra:steel_plate" },
        "ad_astra:steel_plate",
        "tfmg:heavy_plate"
    )

    event.replaceInput(
        { input: "ad_astra:iron_plate" },
        "ad_astra:iron_plate",
        "create:iron_sheet"
    )

    event.replaceInput(
        { input: "ad_astra:steel_ingot" },
        "ad_astra:steel_ingot",
        "tfmg:steel_ingot"
    )

    event.replaceInput(
        { input: "tfmg:rebar" },
        "tfmg:rebar",
        "ad_astra:steel_rod"
    )

    event.replaceInput(
        { input: "scguns:ancient_brass" },
        "scguns:ancient_brass",
        "create:brass_ingot"
    )

    event.replaceInput(
        { input: "scguns:ancient_brass" },
        "scguns:ancient_brass",
        "create:brass_ingot"
    )

    event.remove({input: "ad_astra:steel_plate"})
    event.remove({input: "ad_astra:iron_plate"})
    event.remove({input: "ad_astra:steel_ingot"})
    event.remove({input: "scguns:ancient_brass"})

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
