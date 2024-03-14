# class 的 polyfill

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

编译后(调整以提升易读性)

```javascript
function Person(name, age) {
  if (!(this instanceof Person)) {
    throw new TypeError("Cannot call a class as a function");
  }
  this.name = name
  this.age = age
}

Object.defineProperty(Person, 'prototype', {
  writable: false
})
```