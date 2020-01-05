let displayName: string = "João Henrique Xavier";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD12345";
let createDate: Date = new Date();
type Cost = number | string;
// the "type Cost" above is the way to reuse its value for string and number union!!
// let originalCost: Cost = 425;
let originalCost: Cost;
// let originalCost: any = 425;
// let cost: number = originalCost; 
// the code above gives an error because the type script could be a number, but also a string 
// and being a string is not possible, to solve that we can use JS buit in typeof operator to check 
    if(typeof originalCost === "number"){
        let cost:number = originalCost;
    }else{
        let x = originalCost;
    }


originalCost = "A lot of money"

enum InventoryItemType {
    Computer = "Computer",
    Furniture = "Furniture"
}

interface InventoryItem {
    displayName:string;
    // inventoryType: InventoryItemType;
    inventoryType: "Computer" | "Furniture";
    readonly trackingNumber: string;
    createDate: Date;
    originalCost?: number;
   

    // Both ways below are correct and equivalent
    addNote?(note:string):string;
    // addNote:(note:string) => string;
}

function getInventoryItem(trackingNumber: string): InventoryItem {
return null;
}

function saveInventoryItem(item : InventoryItem){
    // item.trackingNumber = "121212"
    // you can't alter the value because it's read-only 
    // as specified on line 11
}

let inventoryItem = getInventoryItem(trackingNumber);

inventoryItem.createDate = new Date();

saveInventoryItem({
    displayName:"MacBook",
    // inventoryType:InventoryItemType.Computer,
    inventoryType:"Computer",
    trackingNumber:"MD12345",
    createDate: new Date()
    // originalCost: 3234
});
// Much like a function parameter introduces a variable to a function, 
//this syntax introduces what's called a type variable to the function definition, 
//which stands for any type that you want it to, and you can use it anywhere that 
//you'd use a regular type name, like this.
function clone<T>(source:T):T{
    const serialized = JSON.stringify(source);
    return JSON.parse(serialized);
}

const cloned = clone(inventoryItem)

declare var Vue: any;