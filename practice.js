let size = prompt("Enter size of array:");
let newArray = [];
for(let i=0;i<size;i++){
	newArray[i] = prompt(`Enter the index ${i} element:`);
}


while(newArray.length!=1){
	for(let i=0 ; i<newArray.length ; i++){
		let len = newArray.length;
		newArray[i] = Number(newArray[i]) + Number(newArray[let])
		newArray.pop();
	}
}
console.log(`result is: ${newArray[0]}`);