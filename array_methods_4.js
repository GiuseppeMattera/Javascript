const persons = [
    { name: 'Paul', age: 16 },
    { name: 'George', age: 17 },
    { name: 'Lucas', age: 21 },
    { name: 'Marco', age: 32 },
    { name: 'Peter', age: 18 },
    { name: 'Carl', age: 13 },
    { name: 'Simon', age: 24 },
    { name: 'Mark', age: 15 },
    { name: 'Sandra', age: 34 },
    { name: 'Alice', age: 28 }
];

function nicknameMap (arg) {
    const namesModified = arg.map(function(element) {
        let name = element.name;
        let age = element.age;
        if (element.age > 0 && element.age < 18) {
            name = "Little boy!";
        }
        else if (element.age >= 18 && element.age <= 24) {
            name = "Young man!";
        }
        else {
            name = "Adult"
        }
        return {
            name, age
        }
    })
    return namesModified;
};

const nicknames = nicknameMap(persons);
console.log(persons);
console.log(nicknames);
