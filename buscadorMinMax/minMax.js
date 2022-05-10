function minMax(arr){
    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i< arr.length; i++) {

        if(min > arr[i]){
          min = arr[i]
        } 
        if(max < arr[i]){
          max = arr[i]
        }
    }return[min,max]
}
console.log(minMax([40,4,30,20,10,0,5]))