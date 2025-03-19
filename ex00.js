function creerPersonne(nom, age, ville) {
	// return "{nom: " + nom + ("age" + age) + ("ville" + ville + "}");
	let persone = {
		nom: nom,
		metier: age,
		ville: ville,
	};
	return persone;
}

console.log(creerPersonne("Alice", 30, "Paris")); // { nom: 'Alice', age: 30, ville: 'Paris' }
console.log(creerPersonne("Bob", 25, "Lyon")); // { nom: 'Bob', age: 25, ville: 'Lyon' }
