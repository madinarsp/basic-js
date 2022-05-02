const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  val: "",
  len: 0,

  getLength() {
    return this.len;
  },
  addLink(value) {
    if(this.len != 0) this.val += "~~";
    let valAsStr = "" + value;
    if (valAsStr == "undefined") 
      this.val += "( )";
    else {
      this.val += `( ${valAsStr} )`;
    }
    this.len++;
    return this;
  },
  removeLink(position) {
    if(!Number.isInteger(position) || position<0 || this.len < position) {
      this.val = "";
      this.len = 0;
      throw new Error();
    }
    let tempArr = this.val.split("~~");
    tempArr.splice(position-1, 1);
    this.val = tempArr.join("~~");
    this.len--;
    return this;
  },
  reverseChain() {
    let tempArr = this.val.split("~~");
    tempArr.reverse();
    this.val = tempArr.join("~~");
    return this;
  },
  finishChain() {
    let res = this.val;
    this.val = "";
    this.len = 0;
    return res;
  }
};

module.exports = {
  chainMaker
};
