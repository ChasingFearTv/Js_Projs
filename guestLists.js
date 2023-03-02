

var guestList = ["Martin", "Alejandra", "Jesus", "Amy", "Nacho" ,"Adrian", "Nelson", "Jon"];

var guestName = prompt("whats your name?")
 
if (guestList.includes(guestName)) {
    alert("Welcome to the party!");
} else {
    alert("no sneakers...");
}