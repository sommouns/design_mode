/*
 * @Description: factory
 * @Author: sommouns
 * @Date: 2019-09-13 09:29:47
 * @LastEditTime: 2019-09-13 09:50:16
 * @LastEditors: Please set LastEditors
 */

/**
 * @description: 简单工厂模式
 */
function createPop(type, text) {
  var o = new Object();
  o.content = text;
  o.show = function () {
    //显示方法   
  }
  if (type == 'alert') {

  } if (type == 'prompt') {

  } if (type == 'confirm') {

  }
}
//创建警示框
var userNameAlert = createPop('alert', '用户名只能是26个字母和数字')



/**
 * @description: 工厂方法模式
 */

// 简单工厂模式
var Java = function (content) {
  this.content = content
    (function () {
      var div = document.createElement('div')
      div.innerHtml = content;
      div.style.color = 'green';
      dicument.getElementById('container').appendChild('div')
    })(content)
}
var Php = function (content) { }
var JavaScript = function (content) { }
function JobFactory(type, content) {
  switch (type) {
    case 'java': return new Java(content)
    case 'php': return new Php(content)
    case 'javascript': return new JavaScript(content)
  }
}

// 工厂方法
Factory.prototype = {
  Java: function (content) {
    //...    
  },
  JavaSctipt: function (content) {
    //...    
  },
  Java: function (content) {
    //...  
  }
}

/**
 * @description: 安全的工厂方法
 */

var Factory = function (type, content) {
  if (this instanceof Factory) {
    var s = new this[type](content)
    return s
  } else {
    return new Factory(type, content)
  }
}
Factory.prototype = {
  Java: function (content) {
    //...    
  },
  JavaSctipt: function (content) {
    //...    
  },
  Java: function (content) {
    //...  
  }
}     

/**
 * @description: 抽象工厂模式
 */
let agency = function(subType, superType) {
  //判断抽象工厂中是否有该抽象类
  if(typeof agency[superType] === 'function') {
    function F() {};
    //继承父类属性和方法
    F.prototype = new agency[superType] ();
    //将子类的constructor指向子类
    subType.constructor = subType;
    //子类原型继承父类
    subType.prototype = new F();
    // 之后子类可以重写父类的一些方法
  } else {
    throw new Error('抽象类不存在!')
  }
}

