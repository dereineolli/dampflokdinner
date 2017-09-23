$(document).foundation()


var settings = {
    "sections": [{
        "name": "state-ready",
        "trains": ["8003", "619"]
    }, {
        "name": "state-onway",
        "trains": ["648"]
    }, {
        "name": "state-return",
        "trains": ["63", "51"]
    }, {
        "name": "state-station",
        "trains": ["2"]
    }]
}




for (var i = 0; i < settings.sections.length; i++) {
    var section = settings.sections[i];

    var $elem = $("#" + section.name);
    for (train of section.trains) {
        $elem.append("<li><div class=\"train train-" + train + "\"><div class=\"desc\">" + train + "</div></div></li>");
    }
}
