var trains = [{
    name: "648",
    rail: 1
}, {
    name: "51",
    rail: 1
}, {
    name: "2",
    rail: 2
}, {
    name: "15 V200",
    rail: 1
}, {
    name: "7488",
    rail: 1
}, {
    name: "648",
    rail: 1
}, {
    name: "648",
    rail: 1
}, {
    name: "648",
    rail: 1
}, {
    name: "648",
    rail: 1
}];
var settings = {
    sections: [{
        name: "state-ready",
        icon: "schedule",
        text: "Bereit",
        trains: trains
    }, {
        name: "state-onway",
        icon: "send",
        text: "Unterwegs",
        trains: []
    }, {
        name: "state-return",
        icon: "vertical_align_bottom",
        text: "Rückfahrt",
        trains: []
    }, {
        name: "state-station",
        icon: "check_circle",
        text: "Bahnhof",
        trains: []
    }]
};