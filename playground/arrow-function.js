var square = x => x*x;

console.log(square(9));

var user = {
    name:'Mario',
    sayHi: () =>
    {
        console.log(arguments);
        console.log('Hi I am' + this.name);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log('Hi I am ' + this.name);
    }

};

user.sayHi(1,2,3);
user.sayHiAlt(1,2,3);
