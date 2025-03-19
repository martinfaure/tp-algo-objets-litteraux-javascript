function afficherProprietes(obj) {
	let a = "";
	a += obj.nom + obj.age + obj.ville;
	return a;
}

console.log(afficherProprietes({ nom: "Alice", age: 30, ville: "Paris" })); // 'nom: Alice, age: 30, ville: Paris'
