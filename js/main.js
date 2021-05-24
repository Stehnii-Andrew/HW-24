const person = {
    name: "Alex",
    lastname: "Fish",
    middlename: "Alexovich",

    get fullname() {
        return this.name + this.lastname + this.middlename;
    }
}

console.log(person.fullname);