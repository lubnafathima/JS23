const obj1 = {
    name: "foo",
}

const obj2 = {
    age: 12,
}

const obj3 = Object.assign(obj1, obj2);

console.log(obj3);

const arr1 = [1,2];
const arr2 = [1,2];
const arr3 = arr1 + arr2;
console.log(arr3);