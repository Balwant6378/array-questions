// Write a JavaScript function getMaXAgePerson(arr) that takes an array of objects and returns the object with the highest age.

const arrays = [
    { 
        name: "Ravi",
        age: 22
    },
    { 
        name: "Amit",
        age: 30
    },
    { 
        name: "Neha",
        age: 27
    }
];
function getMaXAgePerson(arrays){
    let max = 0;
    let empty;
    for(let i = 0; i < arrays.length; i++){
       if(max < arrays[i].age ){
        max = arrays[i].age;
       }else if(arrays == []){
         return null;
       }else{
        return max;
       }
    }
}

for(let i = 0; i < arrays.length; i++){
    if(arrays[i].age == getMaXAgePerson(arrays)){
        console.log(arrays[i])
    }else if(getMaXAgePerson(arrays) == []){
        console.log("null");
    }
}

// Write a JavaScript function processData(arr) that takes an array of strings and returns a processed result based on the following rules.

const arr = [
    "apple banana",
    "banana orange apple", 
    "orange banana", 
    "grape apple"
];
let finalArr = [];
for( let i = 0; i < arr.length; i++){
    str = arr[i];
    finalArr = str.split(" ");
    console.log(finalArr);
}


// function processData(arr){
   
// }
// processData(arr)

//Write a JavaScript function that fetches posts from the API:

let URL = "https://jsonplaceholder.typicode.com/posts";

const getProcessedPosts = async () => {
    let response = await fetch(URL);
    let data = await response.json();
    let totalNumPost = {data};
    console.log(totalNumPost);// print object total 
    let arr = totalNumPost.data;
    console.log(arr)// print array
    let str = "";
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
         str = arr[i].title.split(""); //  
         if(str.length > 30){
            newArr = arr[i].title;
            console.log(newArr);
         }
    }
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].userId == 1){
            count += (arr[i].userId);
        }
    }
    console.log(`userId:1 post count is.${count}`);

}
getProcessedPosts();
