//your JS code here. If required.
result = "";

for(let num=1; num<=100; num++){
	
	if(num % 3== 0 && num % 5 == 0)
		result += "FizzBuzz\n";
	else if(num % 3== 0)
		result += "Fizz\n";
	else if(num % 5 == 0)
		result += "Buzz\n";
	else
		result += num+"\n";
}

alert(result);