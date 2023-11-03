const objet1 = {
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

const objet2 = {
    isSimpleArray: [1, 2, 4, 5],
    isObject: {
        name: 'NOM & PRENOM',
    },
    isString: 'je suis un autre texte',
}

export {objet1, objet2};