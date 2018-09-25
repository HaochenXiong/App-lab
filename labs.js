//Challenge 1

let reverse = function (word) {
    let reserveWord = "";
    var index = (word.length - 1);
  
    for (var i = index; i >= 0; i--);
    {
      reserveWord += word[i];
    }
  
    return (reserveWord);
  }
  console.log(reverse(`confused`));


//Challenge 3

let someone = function (totalDue,totalGiven){
    if(totalDue = totalGiven > 50){
        return (`Have dinner with Jacky now!`);
    }
    else {
        return (`Focus on learning now!`)
    }
}
console.log(someone(10,20));

//Challenge 4

let ran = function(){
    let n = Math.round(Math.random()* 50);
    return n;
}

let square = function (x){
    return x = Math.pow(x,2)
}

console.log(square(ran()));

//Challenge 5

let countLine = function(Name){
    return Name.split(` `).length;
}
console.log(countLine(`Robert, Jacky, James, Skye, Ginger`));


//Challenge 6

let sub = function (OldSchool){
    let NewSchool = OldSchool.replace(`umbrella`,`coat`);
    return (NewSchool);
}
/console.log(sub(`she didn't like how heavy the rain was, so she decided to take her umbrella`));

