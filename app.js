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
    if(arrays == []){
        return null;
    }
    for(let i = 0; i < arrays.length; i++){
       if(max < arrays[i].age ){
        max = arrays[i].age;
       } 
    }
    return max;
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
    "guava apple"
];
function processData(arr){
    let finalArr = [];
    for( let i = 0; i < arr.length; i++){
    let str = arr[i];
    let words = str.split(" ");
    finalArr.push(...words);
}
console.log(finalArr);
let shortedWords = [...new Set(finalArr)];
console.log(shortedWords);

let countObj = {};
for( let word of finalArr){
    if (countObj[word]){
        countObj[word]++;
    }else{
        countObj[word] = 1;
    }
}
let uniqueWords = [];
for(let key in countObj){
    if (countObj[key] === 1){
        uniqueWords.push(key);
    }
}
console.log(uniqueWords);
let finalOutput = {shortedWords, uniqueWords};
console.log(finalOutput);
}
processData(arr);

//Write a JavaScript function that fetches posts from the API:

let URL = "https://jsonplaceholder.typicode.com/posts";

const getProcessedPosts = async () => {
    let response = await fetch(URL);
    let data = await response.json();
    let totalNumPost = {data};
    console.log(totalNumPost);// print object total 
    let arr = data;
    console.log(arr)// print array
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].title.length > 30){
            newArr.push(arr[i].title);
        }
    }
    let countObj = {};
    for(let i = 0; i < arr.length; i++){
        let id = arr[i].userId;
        if(countObj[id]){
            (countObj[id]++);
        }else{
            countObj[id] = 1;
        }
    }
    console.log(countObj);
    for(let key in countObj){
        console.log(`user ID ${key} post count is ${countObj[key]}`)
    }
}
getProcessedPosts();
