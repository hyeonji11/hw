function printTime() {
    count++;
    console.log(new Date());
    if(count == 10) {
        clearInterval(id);
    }
}
let count=0;

let id = setInterval(printTime, 1000);