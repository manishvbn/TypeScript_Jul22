console.log("Demo One");

// function Person(name) {
//     this._name = name;

//     this.getName = function () {
//         return this._name.toUpperCase();
//     }

//     this.setName = function (value) {
//         this._name = value;
//     }
// }

var Person = function (name) {
    this._name = name;

    this.getName = function () {
        return this._name.toUpperCase();
    }

    this.setName = function (value) {
        this._name = value;
    }
}

var p1 = new Person("Manish");
console.log(p1.getName());
p1.setName("Abhijeet");
console.log(p1.getName());

var p2 = new Person("Subodh");
console.log(p2.getName());
p2.setName("Ramakant");
console.log(p2.getName());

// 280 bytes (140 bytes / instance)
