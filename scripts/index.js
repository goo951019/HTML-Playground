var targetElements = document.querySelectorAll("[data-target]");
var count = 0;

// array["undefined value"] = "value" --> will add to the array
const array = {
    J: 1,
    E: 2,
    R: 3,
    Y: 4,
};

function trans(string){
    let result = '';
    for(let i=0;i<string.length;i++){
        let letter = string[i].toUpperCase();
        if(array[letter] !== undefined)
            result += array[letter];
        else
            result += letter;
    }
    return result;
}

// NoSQLish Database
const database = {
    jerry: {
        lastName: 'Jang',
        phone: '770-756-5552',
        race: 'Asian',
    },
};

function printDB(db, item){
    const key = Object.keys(db);
    key.forEach(function (str){
        let entry = db[str];
        //console.log(item);
        //debugger;
        console.log(entry[item]);
    });
}

// click listener
function respondToClick(){
    console.log('Jerry ' + count);
    console.log(event.target);
    count++;
    // add "css" function when clicked
    //event.target.classList.add('big');

    // click to add function & click again to remove
    event.target.classList.toggle('big');
}

function attachClickHandler(oneElement){
    oneElement.addEventListener("click", respondToClick);
}

targetElements.forEach(attachClickHandler);

// calling other function
function call(f){
    console.log('It says: ' + f());
}
function toCall(){
    return "I'm Ironman";
}
call(toCall);
