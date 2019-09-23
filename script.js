var list = [":)", ":(", ":')", "xD", ":'("]
var text = document.getElementById("textearea")
var btn = document.getElementsByTagName("button")[0]
var i = 0
var newtext = "--"

btn.addEventListener("click", function() {
    document.getElementsByTagName("div")[0].innerHTML = text.value
})

for (let i = 0; i < list.length; i++) {
    if (list[i]  text.value == true) {
        // replace(list[i], "--")
        alert("plop")
    }
}
