let objetTest = {
    isEmpty: {},
    isTrue: true,
    isFalse: false,
    isSimpleArray: [1, 2, 3, 4],
    isObject: {
        name: 'NOM',
    },
    isNumber: 22,
    isString: 'je suis du texte',
    isUndefined: undefined,
    isNull: null, //attention retourne un type objet
}

function getTypes(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            let type = typeof obj[key];
            if (type === 'object') {
                if (Array.isArray(obj[key])) {
                    type = 'array';
                } else if (obj[key] === null) {
                    type = 'null';
                }
            }
            console.log(key + ': ' + type);
        }
    }
}


// getTypes(objetTest);

function getTypeAttribute(prop) {
    let type = typeof prop;
    if (type === 'object') {
        if (Array.isArray(prop)) {
            type = 'array';
        } else if (prop === null) {
            type = 'null';
        }
    }
    console.log(type);
    return type;
}


function objectHasProperty(obj) {
    var type = getTypeAttribute(obj);
    if (type === 'object') {
        getTypes(obj);
    }

    return obj;
}

objectHasProperty(objetTest.isObject)
objectHasProperty(objetTest.isNumber)
objectHasProperty(objetTest.isObject.name)

export { objectHasProperty };