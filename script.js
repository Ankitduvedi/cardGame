var grid = document.querySelector(".grid")

console.log("happy")
for(let i=0 ; i<8 ;i++){
    var div = document.createElement("div")
    grid.appendChild(div)
}

function shuffle(array){
    let currnetIndex = array.length, randomIndex;
    while(currnetIndex !=0 ){
        randomIndex = Math.floor(Math.random()*currnetIndex);
        currnetIndex--;
       [ array[currnetIndex], array[randomIndex]]=[array[randomIndex], array[currnetIndex]];
    }
    return array;
}

var arr = [0, 1 , 2, 3, 4, 5 ,6 ,7];
shuffle(arr);

for(let i=0 ; i<8 ;i++){
    var x = `css${i}.png`;
    console.log(x)
    document.querySelectorAll(".grid div")[arr[i]].style.backgroundImage = "url("+x+")"
}