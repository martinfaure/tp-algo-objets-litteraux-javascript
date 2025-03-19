function listerPersonnes(personnes) {
	let a = "";
	for (let i = 0; i < personnes.length; i++) {
		a += personnes[i].nom + " : " + personnes[i].age + " ans";
		if (i === personnes.length - 1) {
			a += ".";
		} else {
			a += ", ";
		}
	}
	return a;
}

const personnes = [
	{ nom: "Alice", age: 30 },
	{ nom: "Bob", age: 25 },
	{ nom: "Charlie", age: 35 },
];

console.log(listerPersonnes(personnes)); // 'Alice : 30 ans, Bob : 25 ans, Charlie : 35 ans.'
