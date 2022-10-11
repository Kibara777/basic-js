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
  constructor(direction = true) {
    this.direction = direction;
  }

  encrypt(line,key) {

    if(typeof(line) != 'string' && typeof(key) != 'string' || !line || !key) throw new Error('Incorrect arguments!')
    if(line.length == 0 || key.length == 0) throw new Error('Incorrect arguments!')

    let str3 = ''
    let keyarray = []
   let array = alphabet()


	  line = line.toUpperCase()
	  key = key.toUpperCase()
	  keyarray = key.split('')
	  key  = keychange(line,keyarray)

	  for(let c = 0; c < line.length ; c++) {
      
      if(line[c].charCodeAt() < 65 || line[c].charCodeAt() > 90) {
        str3 += line[c]
        continue
      }
      str3 +=	array[key[c].charCodeAt() - 65][line[c].charCodeAt() - 65]
      
    }
    
  
  console.log(str3)
  
  if(this.direction == false) {
    return str3.split('').reverse().join('')
  }
 
  return str3
  
  }
  decrypt(answer,key) {
    
    if(typeof(answer) != 'string' && typeof(key) != 'string' || !answer || !key) throw new Error('Incorrect arguments!')
    if(answer.length == 0 || key.length == 0) throw new Error('Incorrect arguments!')
    let reverseRes = ''
    let keyarray = []
    let array = alphabet()


	  answer = answer.toUpperCase()
	  key = key.toUpperCase()
	  keyarray = key.split('')

	  key = keychange(answer,keyarray)

	  for(let q = 0; q < answer.length ; q++) {
      
      if(answer[q].charCodeAt() < 65 || answer[q].charCodeAt() > 90) {
        reverseRes += answer[q]
        continue
      }
      reverseRes += array[0][array[key[q].charCodeAt() - 65].indexOf(answer[q])]
      
    }
    

    
    if(this.direction == false) {
      return reverseRes.split('').reverse().join('')
    }


  return reverseRes
  
  }
}


function alphabet() {
	let array = []
	let str ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	let str2 = ''
  let	keyarray = []
	for (i = 0 ; i < 26;i++) {
		str2 = (str.slice(i) + str.slice(0,i))
		array.push(str2)
		str2 = ''
	}
	return array 
}

function keychange(answer, keyarray) {
	let key = ''
	let a = 0
	for(let b = a= 0; b < answer.length; b++) {

		if(+answer[b].charCodeAt() > 64 && +answer[b].charCodeAt() < 91) {
			key += keyarray[a];
			a++;
		}else {
			key += ' ';
		}
		if(a == keyarray.length ) {
			a = 0;
		}
		
	}
	return key
}

new VigenereCipheringMachine(false)


module.exports = {
  VigenereCipheringMachine
};
