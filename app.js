import { objet1, objet2 } from './Inheritance.js';
import { objectHasProperty } from "./GetAttributesAndValues.js";

console.log("objet1", objet1);
console.log("objet2", objet2)

let objet = {...objet1, ...objet2};
console.log("objet", objet) // return objetTest with objetTest2 modifications


console.log(objectHasProperty(objet.isTrue))