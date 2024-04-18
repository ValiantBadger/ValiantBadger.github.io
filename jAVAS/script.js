console.log("välkommen")

let namn1 = document.getElementById("input1")
let namn2 = document.getElementById("input2")
let namn3 = document.getElementById("input3")

let namn4
let namn5
let namn6


function setText() {
    document.getElementById("text").innerHTML = namn1.value + "." + namn2.value + "@" + namn3.value + ".com"

    namn4 = Math.floor(Math.random() * 256)
    namn5 = Math.floor(Math.random() * 256)
    namn6 = Math.floor(Math.random() * 256)

    document.body.style.backgroundColor = `rgb(${namn4},${namn5},${namn6})`


}
//document.body.style.backgroundColor = `rgb(${100},${255},${0})` ;