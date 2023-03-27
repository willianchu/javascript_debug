const pets = [ 'cat', 'dog', 'rat'];

pets.flatMap( (v,i) => pets[i] += "s")

console.log(pets);