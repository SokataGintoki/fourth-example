'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    Birthday: '20/04/1993',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
};

for (const key in user) {
    console.log(user[key]);
}
const arr = ['b', 'a', 'c'];
