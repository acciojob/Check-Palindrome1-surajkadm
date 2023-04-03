// complete the given function

function palindrome(str){
	strLen=str.length;
	var a=null;
	for (let index = 0; index < strLen/2; index++) {
		if(str[i]!===str[strLen-1-i]){
				a=false;
		}
		else{
			a=true;
		}
		
	}return a;
}
module.exports = palindrome
