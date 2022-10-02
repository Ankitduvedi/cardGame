var grid = document.querySelector(".grid")
var count =0;
var ar = -1;

console.log("happy")
for (let i = 0; i < 8; i++) {
    var div = document.createElement("div")
    grid.appendChild(div)
}

function shuffle(array) {
    let currnetIndex = array.length, randomIndex;
    while (currnetIndex != 0) {
        randomIndex = Math.floor(Math.random() * currnetIndex);
        currnetIndex--;
        [array[currnetIndex], array[randomIndex]] = [array[randomIndex], array[currnetIndex]];
    }
    return array;
}

var arr = [0, 1, 2, 3,0,1,2,3];
shuffle(arr);

for (let i = 0; i < 8; i++) {
    document.querySelectorAll(".grid div")[i].addEventListener("click", function () {
        var x = `css${arr[i]}.png`;
        document.querySelectorAll(".grid div")[i].style.backgroundImage = "url(" + x + ")"
        console.log(1)
        count++;
        if(count % 2 === 1){
            ar = i
        }
        else{
        setTimeout(result,1000);
        function result(){
            if(arr[i] === arr[ar]){
                window.alert("you won");
            }

            else{
                document.querySelectorAll(".grid div")[i].style.backgroundImage = "url(cover.jpg)"
                document.querySelectorAll(".grid div")[ar].style.backgroundImage = "url(cover.jpg)"
            } }
        }

    })

}