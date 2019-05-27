export function random(arr){
    return arr[Math.floor(Math.random()*arr.length)];
  }
export function randomTitle (){
    const arr = ["welcome to class", "Bye bye !", "see you tomo","i don't know "];
    return random(arr);
  }