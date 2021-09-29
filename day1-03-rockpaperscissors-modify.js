// Rock Paper Scissors

function rockpaperscissors(play1,play2){
     
    ///Draw if both players choose the same option
    if (play1==play2){
       res= 'Draw';
       return res;
      
    }
    
    else {
       
        /// rock crushes scissors
        /// paper covers rock
        /// scissors cut paper
        
        if (play1=='rock' && play2=='paper'){
        res='Second player wins';
        return res;
        }

        if (play1=='rock' && play2=='scissors'){
        res='First player wins';
        return res;
        }

        if (play1=='paper' && play2=='rock'){
        res='First player wins';
        return res;
        }

        if (play1=='paper' && play2=='scissors'){
        res='Second player wins';
        return res;
        }

        if (play1=='scissors' && play2=='rock'){
        res='Second player wins';
        return res;
        }
        
        if (play1=='scissors' && play2=='paper'){
        res='First player wins';
        return res;
        }
    }
     ///Error in input
    if (typeof jsVar == 'undefined') {
        res='Argument Error';
        return res;
      }
}
   

r=rockpaperscissors ("scissors", "rock")
console.log(r)