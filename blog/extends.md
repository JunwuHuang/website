# 继承

```javascript
// 定义父类 
function SuperType(name, age) {
  this.name = name
  this.age = age
}
SuperType.prototype.getName = function() {
  return this.name
}
```

## 组合式继承

- 常用的继承方式，`instanceof`与`isPrototypeOf()`能够识别基于此种方式继承创建的对象。
- 但是其中调用了2次父类的构造函数，若父类的构造函数较为复杂，则会造成更多的资源浪费

```javascript
function SubType() {
  // 继承属性
  SuperType.apply(this, arguments)
}
// 继承方法
SubType.prototype = new SuperType()
SubType.prototype.constructor = SubType
```

## 原型式继承

```javascript
function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}
// 以上方式相当于
```

以上方式相当于`Object.create(o)`，所以引用类型的属性还是会共享相应的值，举个例子

```javascript
var person = {
  friends: ['Bob']
}
var person2 = Object.create(person)
person2.friends.push('Jack')
var person3 = Object.create(person)
person3.friends.push('Rose')
console.log(person.friends)
// Bob, Jack, Rose
```

MDN上提供了基于`Object.create`实现继承的写法

```javascript
function SubType() {
  SuperType.apply(this, arguments)
}
SubType.prototype = Object.create(SuperType.prototype, {
  constructor: {
    value: SubType,
  }
})
```

## 寄生组合式继承

最理想的继承范式，`babel`对于`extends`关键字的转译也是用的这个

```javascript
function inheritPrototype(subType, superType) {
  var prototype = object(superType.prototype)
  prototype.constructor = subType
  subType.prototype = prototype
}
function SubType(name, age) {
  SuperType.call(this, name, age)
}
inheritPrototype(SubType, SuperType)
```