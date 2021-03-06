"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const charactersCollection = new CharactersCollection_1.CharactersCollection("Xaayzhvhgvfxkngzafsghkmjoihbkkjhbfxab");
const linkedList = new LinkedList_1.LinkedList();
const Numbers = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
Numbers.sort();
charactersCollection.sort();
console.log(Numbers.data);
console.log(charactersCollection.data);
linkedList.add(400);
linkedList.add(575);
linkedList.add(66);
linkedList.sort();
linkedList.print();
