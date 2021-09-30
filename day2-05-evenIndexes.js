//Write a function `evenIndexes` that takes a word as argument, and returns an array of the letters situated at even indexes.

function evenIndexes(arg){
    let array=[];
      
       for(index=0;index<arg.length;index++){
       even=index%2
       if (even==0) {
          array.push(arg[index]);
    }

}
console.log(array);
}


evenIndexes("lol")
evenIndexes("You're weird")
evenIndexes("")

/*
Test:   evenIndexes("lol")
Return:
```[ 'l', 'l' ]
```

Test:   evenIndexes("You're weird")
Return:
```[ 'Y', 'u', 'r', ' ', 'e', 'r' ]
```

Test:   evenIndexes("")
Return:
```[]
```
*/