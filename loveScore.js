
var name1 = prompt("What is your name? ");

var name2 = prompt("What is your lovers name? ");


var loveScore = Math.random();

loveScore = loveScore * 100;
loveScore = ((loveScore + 1) / 100) * 100;


if (loveScore >= 70) {
    alert(name1.slice(0,1).toUpperCase() + name1.slice(1,name1.length).toLowerCase() + 
          " and " + name2.slice(0,1).toUpperCase() + name2.slice(1,name2.length).toLowerCase() + 
          " Your love score is " + Math.floor(loveScore) + "% : wow, you love eachother like kanye loves kanye.");
} 

if (loveScore > 30 && loveScore <= 70){
    alert(name1.slice(0,1).toUpperCase() + name1.slice(1,name1.length).toLowerCase() +
          " and " + name2.slice(0,1).toUpperCase() + name2.slice(1,name2.length).toLowerCase() + 
          " Your love score is " + Math.floor(loveScore) + "% : You two better figure stuff out.");
}
    
if (loveScore <= 30) {
    alert(name1.slice(0,1).toUpperCase() + name1.slice(1,name1.length).toLowerCase() +
          " and " + name2.slice(0,1).toUpperCase() + name2.slice(1,name2.length).toLowerCase() + 
          " Your love score is " + Math.floor(loveScore) + "% : You guys need to break up ASAP...");
}

