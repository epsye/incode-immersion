function printVowels(arg)
{

    //vowelsCount = 0;
    
    //turn the input into a string
    var string = arg.toString();
 
    //loop through the string
    for (var i = 0; i <= string.length - 1; i++) 

    //identify a vowel
     if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") 
     {
        //vowelsCount += 1;
        //vowelsDisplay = arg.charAt(i);
        console.log(arg.charAt(i));
    }
//return vowelsCount;
//return VowelsDisplay;
}


//r=printVowels ("epsyeiosqert")
//console.log(r);
//console.log(vowelsDisplay);

printVowels("you tube")