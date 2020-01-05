var displayName = "João Henrique Xavier";
var inventoryType = "furniture";
var trackingNumber = "FD12345";
var createDate = new Date();
// the "type Cost" above is the way to reuse its value for string and number union!!
// let originalCost: Cost = 425;
var originalCost;
// let originalCost: any = 425;
// let cost: number = originalCost; 
// the code above gives an error because the type script could be a number, but also a string 
// and being a string is not possible, to solve that we can use JS buit in typeof operator to check 
if (typeof originalCost === "number") {
    var cost = originalCost;
}
else {
    var x = originalCost;
}
originalCost = "A lot of money";
var InventoryItemType;
(function (InventoryItemType) {
    InventoryItemType["Computer"] = "Computer";
    InventoryItemType["Furniture"] = "Furniture";
})(InventoryItemType || (InventoryItemType = {}));
function getInventoryItem(trackingNumber) {
    return null;
}
function saveInventoryItem(item) {
    // item.trackingNumber = "121212"
    // you can't alter the value because it's read-only 
    // as specified on line 11
}
var inventoryItem = getInventoryItem(trackingNumber);
inventoryItem.createDate = new Date();
saveInventoryItem({
    displayName: "MacBook",
    // inventoryType:InventoryItemType.Computer,
    inventoryType: "Computer",
    trackingNumber: "MD12345",
    createDate: new Date()
    // originalCost: 3234
});
// Much like a function parameter introduces a variable to a function, 
//this syntax introduces what's called a type variable to the function definition, 
//which stands for any type that you want it to, and you can use it anywhere that 
//you'd use a regular type name, like this.
function clone(source) {
    var serialized = JSON.stringify(source);
    return JSON.parse(serialized);
}
var cloned = clone(inventoryItem);
