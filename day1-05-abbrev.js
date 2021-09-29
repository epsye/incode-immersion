function printAbbrev(arg)
{
  

    if (arg.length>=3){
        console.log(arg.charAt(0) + arg.charAt(1) + arg.charAt(2) + ' '+ arg.length);
    }
    else{
        if (arg.length=1){
            console.log(arg.charAt(0) + ' ' + ' '+ ' '+ arg.length);
        }
        else if (arg.length=2){
            console.log(arg.charAt(0) + arg.charAt(1) + ' '+ ' '+ arg.length);
        }
              
    }
} 

printAbbrev("Diversity")



