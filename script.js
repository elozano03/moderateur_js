// var list = [":)", ":(", ":')", "xD", ":'("]
// var text = document.getElementById("textearea")
// var btn = document.getElementsByTagName("button")[0]

// btn.addEventListener("click", function () {

//     var newText = text.value
//     for (let i = 0; i < list.length; i++) {
//         while (newText.includes(list[i])) {
//             newText = newText.replace(list[i], "--")

//         }
//     }
//     document.getElementById("div").innerHTML = newText
// })

$(document).ready(function () {
    var l = [":)", ":(", ":')", "xD", ":'("]

    $("button").click(function () {
        var newText = $("textarea").html()
        for (let i = 0; i < l.length; i++) {
            while (newText.includes(l[i])) {
                newText = newText.replace(l[i], "--")

            }
        }
    $("#div").html(newText)
    })
});
