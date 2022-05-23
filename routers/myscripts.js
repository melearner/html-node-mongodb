async function funcName(){
    const response = await fetch("https://localhost/5000");
    var data = await response.json();
    console.log(data);
    }

const fetch=funcName()