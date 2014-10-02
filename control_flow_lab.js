//if-else
var foods = ["pizza","tacos","soda","candy","vegetables","rice"];
if (foods.length === 0){
	console.log("No food for you!");
}
else if(foods.length === 1) {
	console.log("You have one food.");
}
else {
	console.log("You have a lot of food.");
}

//99 bottles
i==99;

while(i > 0){
	console.log(i + " bottles of beer on the wall.");
	console.log(i + " bottles of beer.");
	console.log("Take one down, pass it around.");
	i--;
	console.log(i + " bottles of beer on the wall.");
}

//favorite people
var people = ["Tim", "Tom", "Jonny"];
for(i=0; i < people.length; i++){
	console.log{"Hello, " + people[i] + "!"};
}