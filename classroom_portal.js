function onload() {
    game_options = {
        "lakeland": {
            "display_name": "Lakeland",
            "bg_image": "https://fielddaylab.wisc.edu/assets/img/hero-images/lakeland.jpg",
            "redirect": "https://fielddaylab.wisc.edu/play/lakeland/game/iframe.html"
        }
        // "jowilder": {
        //     "display_name": "Jo Wilder and the Capitol Case",
        //     "bg_image": "https://fielddaylab.wisc.edu/assets/img/hero-images/jowilder-bg.jpg",
        //     "redirect": "https://fielddaylab.wisc.edu/play/jowilder/game/iframe.html"
        // }
    }
    // let url = window.location.href.toString();
    // let params = {};
    // let paramstring = url.split("?");
    // if (!paramstring[1] == undefined)
    // {
    //     paramstring = paramstring[1].split("&");
    //     paramstring.forEach(function(item, index) {let param = item.split("="); params[param[0]] = param[1];} );
    // }
    // else
    // {
    //     params["game"] = "lakeland";
    // }

    // var selected_game_option = game_options[params["game"]];
    var selected_game_option = game_options["lakeland"];

    let elem_game_name = document.getElementById("game_name");
    elem_game_name.innerHTML = elem_game_name.innerHTML.replace("$GAMENAME", selected_game_option["display_name"]);
    document.body.style.backgroundImage = `url(${selected_game_option["bg_image"]})`;
    let id_box = document.getElementById("class_id_box");
    id_box.oninvalid = function(event) {
        id_box.setCustomValidity("");
        if (!event.target.validity.valid) {
            id_box.setCustomValidity("Your Class ID should be a letter followed by three numbers.");
        }
    }
    let username_box = document.getElementById("username_box");
    username_box.oninvalid = function(event) {
        username_box.setCustomValidity("");
        if (!event.target.validity.valid) {
            username_box.setCustomValidity("Your User Name should only use letters and numbers.");
        }
    }

    let player_id = new Uint32Array(1);
    window.crypto.getRandomValues(player_id);
    console.log(`player id: ${player_id.join()}`);
    let player_id_box_sub = document.getElementById("player_id_box_submission");
    player_id_box_sub.value = player_id.join();
    let player_id_box_play = document.getElementById("player_id_box_play");
    player_id_box_play.value = player_id.join();

    let id_form = document.getElementById("id_form");
    id_form.onsubmit = function(event) {
        document.getElementById("btn_submit").disabled = true;
        document.getElementById("btn_play").disabled = false;
    }
    let play_form = document.getElementById("play_form");
    play_form.action = selected_game_option["redirect"];
}