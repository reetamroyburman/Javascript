const age = (presentYear , birthYyear)=>{
    return presentYear - birthYyear;
}

const details =(name , age )=>{
    console.log(`his name is ${name} ans his age is ${age}`);
}


let nameis ="Reetam"

details(nameis,  age(2023,2000) )

