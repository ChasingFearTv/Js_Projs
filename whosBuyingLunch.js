var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names) {
    
    var position = names.length;
    
    var whoposition = (Math.floor(Math.random() * position));

    var who = names[whoposition];
    
    return(who + " is going to buy lunch today!");
    
}

