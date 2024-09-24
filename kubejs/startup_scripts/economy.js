StartupEvents.registry('block', event => {

    event.create('money_block')
    .fullBlock(true)
    .displayName('Money Block')
    .soundType('wool')
    .hardness(1.0)
    .tagBlock('industriality:currency')
    .tagBlock('minecraft:mineable/hoe')
    .texture("north", "kubejs:block/moneyblockfront")
    .texture("south", "kubejs:block/moneyblockfront")
    .texture("east", "kubejs:block/moneyblocksides")
    .texture("west", "kubejs:block/moneyblocksides")
    .texture("up", "kubejs:block/moneyblocktop")
    .texture("down", "kubejs:block/moneyblocktop")

})

StartupEvents.registry('item', event => {

    event.create('money').maxStackSize(64).texture('kubejs:item/cash_0').burnTime(160).displayName('Money')

})