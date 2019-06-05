let arr = [];
arrLen = prompt("Enter array lenght:");

// take input array elements

for(let i=0 ; i<arrLen ; i++){
	arr[i] = prompt(`Enter item ${i+1}:`);
}

// take input target number

let tar = prompt("Enter the target number:");

// function to remove array item greater than target
// and check if array item is equal to target itself
const popGreater = (arr,tar) => {
	let newArr = [];
	let flag = false;
	arr.forEach((num) =>{
		if(num == tar){
			flag = true;
			newArr.push(num);
		}
	}) 
	if(flag == true){
		return newArr;
	}
	else{
		newArr = arr.filter(num => num<tar);
		return newArr;
	}
}


let filteredArr = popGreater(arr,tar);
console.log('Final Array is:',filteredArr);

