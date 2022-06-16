////======================To-Do-List with no comments================================////

const prompt = require('prompt-sync')({ sigint: true });
console.log("Welcome to the To-Do List Manager Application!\n")

console.log("Select an action: ");
console.log("[1] Create to-do item.");
console.log("[2] Complete to-do item.");
console.log("[3] Exit the application. \n");


let choice = Number(prompt("> "));

let items = [""]; 
let statusArray = [""]; 

while (choice !== 3) {
    if (choice === 1) {
        console.log("\nCreate a new item\n");
        
        let answer = prompt("Please enter an item: ");
        items.push(answer);
        statusArray.push(false);

        console.log("To do list: ");
        
        printList();
        selectChoice();

    } else if (choice === 2) {
        if (statusArray > 1) {

            console.log("\nSelect an item to complete\n");
            let indexChoice = Number(prompt("Enter a number: "));

            while (indexChoice > statusArray.length - 1 || indexChoice === 0 || isNaN(indexChoice)) {
                console.log("Please chpoose a number that corresponds to an item in the list.");
                indexChoice = Number(prompt("Enter a number: "));
            }

            if (statusArray[indexChoice] === false) {
                statusArray[indexChoice] = true;
            }

        } else {
            console.log("You have no items in your to-do list.");
        }
        printList();
        selectChoice();

    } else {
        console.log("\nPlease choose either [1] [2] or [3]\n");
        selectChoice();
    }
}


// Functions
function selectChoice() {
    console.log("Select an action: ");
    console.log("[1] Create to-do item.");
    console.log("[2] Complete to-do item.");
    console.log("[3] Exit the application. \n");
    choice = Number(prompt("> "));
}

function printList() {
    console.log("\nCurrent To-Do list: ")
    let currentStatus = "";
    for (i = 1; i < items.length; i++) {
        if (statusArray[i] === false) {
            currentStatus = "[incomplete] ";
        } else if (statusArray[i] === true) {
            currentStatus = "[complete] ";
        }
        console.log(i + ". " + currentStatus + items[i])
    }
    console.log("")
}



////===============================To-Do-List=================================

/*

1. Figure out the UI
-console.logs()
    -different user options
    -welcome message
-prompts
    -check if they input 1 - 3 - if statement
    1 for adding an item
    2 for completing an item
    3 for ending the application
-display the list to user

2. Store to-do list items (choice === 1)
-prompt user for to-do list item
-start an array with an empty string. // it accounts for us looping through the array from index 1
-array to store prompts
-.push() add toDo list item to array
-start to-do list at 1 (instead index of 0)

///////////////////
-store those items as incomplete

incomplete = false
complete = true

let statusArray = [];

["", "Wash dog", "walk", "groceries", "mo"]
["",  false,      true,   false,       false]

3. Completing incomplete items (choice === 2)
-prompt for number that corresponds to the array index of the item we want to complet

statusArray[2]
statusArray[1]
-st the index
-conditional to check completion status



*/

// ////=======================To-Do-List with comments==================================

// const prompt = require('prompt-sync')({ sigint: true });

// console.log("Welcome to the To-Do List Manager Application!\n")

// console.log("Select an action: ");
// console.log("[1] Create to-do item.");
// console.log("[2] Complete to-do item.");
// console.log("[3] Exit the application. \n");


// let choice = Number(prompt("> ")); //user can input their choice here

// let items = [""]; // our list of to do items
// let statusArray = [""]; // our list of completion statuses (true/false)


// while (choice !== 3) {
//     if (choice === 1) {
//         console.log("\nCreate a new item\n");
//         // prompt to ask user for a new item
//         let answer = prompt("Please enter an item: ");
//         items.push(answer);
//         statusArray.push(false);

//         console.log("To do list: ");
//         // console.log(items);
//         printList();
//         selectChoice();

//     } else if (choice === 2) {
//         if (statusArray > 1) {

//             console.log("\nSelect an item to complete\n");
//             //prompt the user tfor item number to complete
//             let indexChoice = Number(prompt("Enter a number: "));

//             /* 
//                 Error checking
//                 indexChoice cannot be: 
//                 -a number greater than the size of the current list
//                 -0
//                 -a String
//             */

//             while (indexChoice > statusArray.length - 1 || indexChoice === 0 || isNaN(indexChoice)) {
//                 // if user selects number greater than array length
//                 console.log("Please chpoose a number that corresponds to an item in the list.");
//                 indexChoice = Number(prompt("Enter a number: "));
//             }

//             if (statusArray[indexChoice] === false) {
//                 statusArray[indexChoice] = true;
//             }

//         } else {
//             console.log("You have no items in your to-do list.");
//         }
//         //showcase changed list
//         printList();
//         selectChoice();

//     } else {
//         // if they pick anything that isnt 1 or 2
//         console.log("\nPlease choose either [1] [2] or [3]\n");
//         selectChoice();
//     }
// }

// // Functions
// function selectChoice() {
//     console.log("Select an action: ");
//     console.log("[1] Create to-do item.");
//     console.log("[2] Complete to-do item.");
//     console.log("[3] Exit the application. \n");
//     choice = Number(prompt("> "));
// }

// function printList() {
//     console.log("\nCurrent To-Do list: ")
//     let currentStatus = "";
//     for (i = 1; i < items.length; i++) {
//         // if statement to check if status is true or false
//         if (statusArray[i] === false) {
//             currentStatus = "[incomplete] ";
//         } else if (statusArray[i] === true) {
//             currentStatus = "[complete] ";
//         }
//         console.log(i + ". " + currentStatus + items[i])
//     }
//     console.log("")
// }




////===============================================
/*
for(i = 1; i < items.length; i++){
    console.log(i + ". " + items[i]) // i is showing the index number. // items[i] is showing the item in that index
}

*/


