// Rock Paper Scissors

function rockpaperscissors(play1,play2){
    ///Draw if both players choose the same option
    if (play1==play2)
    console.log('Draw');

    else {
       
         /// rock crushes scissors
        /// paper covers rock
        /// scissors cut paper
        
        if (play1=='rock' && play2=='paper')
        console.log('Second player wins');

        if (play1=='rock' && play2=='scissors')
        console.log('First player wins');

        if (play1=='paper' && play2=='rock')
        console.log('First player wins');

        if (play1=='paper' && play2=='scissors')
        console.log('Second player wins');

        if (play1=='scissors' && play2=='rock')
        console.log('Second player wins');
        
        if (play1=='scissors' && play2=='paper')
        console.log('First player wins');
    }
        
}

rockpaperscissors ("scissors", "paper")