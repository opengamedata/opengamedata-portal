function onload() {
    game_options = {
        "lakeland": {
            "display_name": "Lakeland",
            "bg_image": "https://fielddaylab.wisc.edu/assets/img/hero-images/lakeland.jpg",
            "redirect": "https://fielddaylab.wisc.edu/play/lakeland/usda/iframe.html"
        },
        "jowilder": {
            "display_name": "Jo Wilder and the Capitol Case",
            "bg_image": "https://fielddaylab.wisc.edu/assets/img/hero-images/jowilder-bg.jpg",
            "redirect": "https://fielddaylab.wisc.edu/play/jowilder/game/iframe.html"
        }
    }
    let url = window.location.href.toString();
    let params = {};
    let paramstring = url.split("?");
    if (!paramstring[1] == undefined)
    {
        paramstring = paramstring[1].split("&");
        paramstring.forEach(function(item, index) {let param = item.split("="); params[param[0]] = param[1];} );
    }
    else
    {
        params["game"] = "lakeland";
    }

    var selected_game_option = game_options[params["game"]];

    let elem_game_name = document.getElementById("game_name");
    elem_game_name.innerHTML = elem_game_name.innerHTML.replace("$GAMENAME", selected_game_option["display_name"]);
    document.body.style.backgroundImage = `url(${selected_game_option["bg_image"]})`;
    let id_form = document.getElementById("id_form");
    id_form.action = selected_game_option["redirect"];
    let id_box = document.getElementById("id_box");
    id_box.oninvalid = function(event) {
        id_box.setCustomValidity("");
        if (!event.target.validity.valid) {
            id_box.setCustomValidity("Your Player ID should be a letter followed by three numbers.");
        }
    }
}