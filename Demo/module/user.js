class User {
    constructor(name, sex, age) {
        this.name = name;
        this.sex = sex;
        this.age = age;
    }

    showInfo() {
        console.log(`user name: ${this.name},user sex: ${this.sex},user age: ${this.age}`);
    }
}

module.exports = User;