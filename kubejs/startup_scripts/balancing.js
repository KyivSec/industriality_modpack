ItemEvents.modification(event => {

    event.modify("ad_astra:space_suit", item => {
        item.rarity = 'UNCOMMON'
        item.armorProtection = 4
    })

    event.modify("ad_astra:space_pants", item => {
        item.rarity = 'UNCOMMON'
        item.armorProtection = 3
    })

    event.modify("ad_astra:space_boots", item => {
        item.rarity = 'UNCOMMON'
        item.armorProtection = 1
    })

})