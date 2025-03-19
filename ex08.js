function afficherProprietes(obj) {
	let a = "";
	for (const [key, value] of Object.entries(obj)) {
		a += `${key}: ${value}` + ", ";
	}
	let b = a.split("");
	b.pop();
	b.pop();
	return b.join("");
}

console.log(afficherProprietes({ nom: "Alice", age: 30, ville: "Paris" })); // 'nom: Alice, age: 30, ville: Paris'
