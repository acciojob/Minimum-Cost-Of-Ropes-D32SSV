function calculateMinCost(arr, n) {
  //your code here
	arr.sort();
  let elementSum = [] ;
	let sum = arr[0] ;
	for(let i = 1; i<n; i++){
		sum+= arr[i] ;
		elementSum.push(sum);
	}

	result = 0;

	for(let i in elementSum){
		result += arr[i] ;
	}
	return result ;  
}  
