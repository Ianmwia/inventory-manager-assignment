const myInventory = ['Flour', 'Flour', 'Sugar', 'Baking Soda']
const moreInventory = ['Salt', 'Yeast', 'Corn Starch', ...myInventory]
console.log(moreInventory)

//add items
function combineInventory(inventory1, inventory2){
    return [...inventory1, ...inventory2]
}

const allInventory = combineInventory(myInventory, moreInventory)

console.log(allInventory)

//remove items
function removeInventory(inventory, removeitems){
    return inventory.filter(item => !removeitems.includes(item))
}

const updateInventory = removeInventory(moreInventory, ['Sugar', 'Yeast'])
console.log(updateInventory)

//display summary
function displaySummary(inventory){
    const summary = inventory.reduce((acc, item) =>{
        acc[item] = (acc[item] || 0) + 1
        return acc
    }, {})
    return summary
}

console.log(updateInventory)

const inventorySummary = displaySummary(updateInventory)
console.log('Inventory Summary:')
for (let item in inventorySummary){
    console.log(`${item}: ${inventorySummary[item]}`)
}

