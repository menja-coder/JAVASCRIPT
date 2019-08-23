

acnebot();

function acnebot() {
    while (true) {
        var msg = window.prompt(
            "Que veux tu dire à l'ado chatbot!"
        );

        console.log(msg.length);
        if (isAQuestion(msg)) {
            console.log("Ouais Ouais .... ");
        } else if (isUpperCase(msg) && !isEmpty(msg)) {
            console.log("Pwa, calme toi...");
        } else if (includesFortnite(msg)) {
            console.log("on s' fait une partie soum-soum ?");
        } else if (isEmpty(msg)) {
            console.log("t'es en PLS ?");
        } else {
            console.log("balek.")
        }
    }
}

function isAQuestion(msg) {
    result = false;
    lastChar = msg[msg.length - 1];
    return lastChar === "?";
}


function isUpperCase(msg) {
    return msg === msg.toUpperCase();
}

function includesFortnite(msg) {
    return msg.toUpperCase().includes("FORTNITE");
}

function isEmpty(msg) {
    return msg.length === 0;
}