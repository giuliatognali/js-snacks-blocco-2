'use strict';


const nameList = ['Pippo', 'Pluto', 'Paperino'];
const surnameList = ['Black', 'Blue', 'Pink'];

const fullNameList = [];
for (let i = 0; i < 3; i++){

    const randomNameNumber = Math.floor(Math.random() * nameList.length);
    const randomLastNameNumber = Math.floor(Math.random() * surnameList.length);
    const newFullName = `${nameList[randomNameNumber]} ${surnameList[randomLastNameNumber]}`;

    fullNameList.push(newFullName);
    
}
console.log(fullNameList);

