var trains = [{
    name: "18",
    rail: 1
}, {
    name: "38",
    rail: 1
}, {
    name: "51",
    rail: 2
}, {
    name: "4877",
    rail: 1
}, {
    name: "685",
    rail: 1
}, {
    name: "2",
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