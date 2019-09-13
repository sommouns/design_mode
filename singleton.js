/*
1. 定义

保证一个类仅有一个实例，并提供一个访问它的全局访问点

2. 核心

确保只有一个实例，并提供全局访问

3. 实现

假设要设置一个管理员，多次调用也仅设置一次，我们可以使用闭包缓存一个内部变量来实现这个单例
*/

// Sample 1
function SetManager(name) {
  this.manager = name 
}

SetManager.prototype.getName = function () {
  console.log(this.manager)
}

var SingletonSetManager = (function () {
  var manager = null
  return function (name) {
    if (!manager) {
      manager = new SetManager(name)
    }
    return manager
  }
})
