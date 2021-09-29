function averageMinMax(array){
    
    array.sort((a, b) => a - b);
    console.log(array)
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    sum=array.reduce(reducer);
    avg=sum/array.length;
    console.log('Min is:'+ array[0])
    console.log('Max is:'+ array[array.length-1])
    console.log('Average is:'+ avg)
    
}
averageMinMax([-42, 0, 42])
averageMinMax([30, 20, 100])
averageMinMax([-23, -4, -12])
averageMinMax([10,5,6,20])