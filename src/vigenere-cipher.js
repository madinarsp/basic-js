const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(boolVal) {
    if(boolVal == undefined || boolVal) this.modification = "direct";
    else this.modification = "reverse";
  }
  encrypt(message, key) {
    if(!message || !key) throw new Error('Incorrect arguments!');
    let keyIndex = 0;
    let encryptedStr = "";
    let messageStr = message.toUpperCase();
    let keyStr = key.toUpperCase();
    for(let i=0; i<messageStr.length; i++) {
      if(messageStr.charCodeAt(i) >= 65 && messageStr.charCodeAt(i) <= 90) {    // 60 & 90 are ascii codes for 'A' & 'Z', respectively
        let encrCharCode = 65 + (messageStr.charCodeAt(i) + keyStr.charCodeAt(keyIndex) - 65*2) % 26;  //26 letters
        encryptedStr += String.fromCharCode(encrCharCode);
        if(keyIndex == keyStr.length - 1) keyIndex = 0;
        else keyIndex++;
      }
      else encryptedStr += messageStr[i];
    }
    if(this.modification == "reverse") return encryptedStr.split("").reverse().join("");
    else return encryptedStr;
  }
  decrypt(encryptedMessage, key) {
    if(!encryptedMessage || !key) throw new Error('Incorrect arguments!');
    let keyIndex = 0;
    let decryptedStr = "";
    let encrMessageStr = encryptedMessage.toUpperCase();
    let keyStr = key.toUpperCase();
    for(let i=0; i<encrMessageStr.length; i++) {
      if(encrMessageStr.charCodeAt(i) >= 65 && encrMessageStr.charCodeAt(i) <= 90) {
        let decrCharCode = 65 + (encrMessageStr.charCodeAt(i) - keyStr.charCodeAt(keyIndex) + 26) % 26;
        decryptedStr += String.fromCharCode(decrCharCode);
        if(keyIndex == keyStr.length - 1) keyIndex = 0;
        else keyIndex++;
      }
      else decryptedStr += encrMessageStr[i];
    }
    if(this.modification == "reverse") return decryptedStr.split("").reverse().join("");
    else return decryptedStr;
  }
}

module.exports = {
  VigenereCipheringMachine
};
