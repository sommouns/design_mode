/*
 * @Description: In User Settings Edit
 * @Author: sommouns
 * @Date: 2019-09-13 10:00:57
 * @LastEditTime: 2019-09-13 14:12:15
 * @LastEditors: Please set LastEditors
 */

 /**
  * @description: constructor 结合singleton
  */ 
 
const AA = {
  zaomen: function (huawen, suo) {
    this.suo = 'normal' || suo
    this.huawen = 'normal' || huawen
    this.create = function () {
      return "【锁头】" + this.suo + "【花纹】" + this.huawen
    }
  }
}

const person = new AA.zaomen() 
console.log(person.create())