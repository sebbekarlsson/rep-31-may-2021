const person = {
    firstname: "John",
    lastname: "Doe",
    pet: {
        type: "Dog",
        name: "Boo"
    }
};

const fullName = person.firstname + " " + person.lastname;
const petName = person.pet.name;
const petType = person.pet.type;

const sentence = fullName + " has a " + petType + " and its name is " + petName;

console.log(sentence);