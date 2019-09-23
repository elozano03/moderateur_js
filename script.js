var list = [":)", ":(", ":')", "xD", ":'("]
var text = document.getElementById("textearea")
var btn = document.getElementsByTagName("button")[0]
var i = 0


btn.addEventListener("click", function () {

    var newText = text.value
    for (let i = 0; i < list.length; i++) {

        if (text.value.includes(list[i]) == true) {
            newText = newText.replace(list[i], "--")
            console.log("plop")
        }

    }
    document.getElementById("lol").innerHTML = newText
})



