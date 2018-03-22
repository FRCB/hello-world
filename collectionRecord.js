var collection = {
    2548: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    2468: {
        album: "1999",
        artist: "Prince",
        tracks: [
            "1999",
            "Little Red Corvette"
        ]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: []
    },
    5439: {
        album: "ABBA Gold"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));


function updateRecords(id, prop, value) {
    if (value !== "") {
        if (prop !== "tracks") {
            collection[id][prop] = value;
        }
        else if (prop === "tracks") {
            if (!collection[id].hasOwnProperty(prop)) {
                collection[id][prop] = [];
            }
            collection[id][prop].push(value);
        }
    }
    else if (value === "") {
        delete collection[id][prop];
    }
    return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");

/* Write a function which takes an id, a property (prop), and a value.

For the given id in collection:

If value is non-blank (value !== "") 
    and prop is not "tracks" --> update or set the value for the prop.
    and prop is "tracks" --> push the value onto the end of the tracks array.

If "tracks" is non-existent before you update it, create an empty array before pushing a track to it.

If value is blank, delete that prop.

Always return the entire collection object. */
