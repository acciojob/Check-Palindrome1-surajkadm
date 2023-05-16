// complete the given function

function palindrome(str){
	 strLen=str.length;
	var a=null;
	for (let i = 0; i < strLen/2; i++) {
		if(str[i]!==str[strLen-1-i]){
				a=false;
				break;
		}
		a=true;
		
	}
	return a;
}
module.exports = palindrome
