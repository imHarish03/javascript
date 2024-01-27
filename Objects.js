var userInfo = {
    "id": 1,
    "last name": "hariharan",
    "address": [{
        "name": "Annasalai"
    }],
    "code": 560076
};

//Update the property of the key
userInfo.id = 101;
userInfo.firstName = 'R';

//delete 
//userInfo.code;

//Access via 
var name = userInfo["last name"];
let address = userInfo.address[0].name;
var id = userInfo.id;

console.log(name, "=====", id, "Address: ", address);
console.log(checkUserinfo('code'));


////Check the property contains data or not
function checkUserinfo(referenceObject) {
    return userInfo.hasOwnProperty(referenceObject);
};



////Accessing the nested Array
var myCollection = {
    "2023": {
        "movie name": "Jailer",
        "singers":[],
        "songs": [
            {
                "id": 1,
                "name": "Hukum",
                "singers": ["Anirudh"]
            },
            {
                "id": 2,
                "name": "Kavala",
                "singers": ["Anirudh"]
            }
        ]
    },
    "2022":
    {
        "movie name": "Vikram",
        "singers": ["Anirudh"],
        "songs": [
            {
                "id": 1,
                "name": "Pokanda Singam",
                "singers": ["Anirudh"]
            },
            {
                "id": 2,
                "name": "Amar Theme",
                "singers": ["Anirudh"]
            }
        ]
    }

}

//console.log("Nested Array Accessibility: "+myCollection[1]["songs"][0].name);
var collection = JSON.parse(JSON.stringify(myCollection));

console.log(collection);
//console.log(updateRecords(2023, 'singers', ''));
console.log(updateRecords(2023, 'singers', 'Haris'));

function updateRecords(year, prop, value) {

    if (value == null || value === "") {
        delete myCollection[year][prop];
    } else if (prop === "singers") {

       // if ( !myCollection[id].hasOwnProperty(prop) || myCollection[id][prop].length() == null) {
         //   myCollection[id][prop] = [];
        //}


        myCollection[id][prop]=myCollection[id][prop] || [];
        //myCollection[id][prop].push(value);
    }
     else {
        myCollection[id][prop] = value;
    }
    return myCollection;
};
