let sum = 0;
for(let i=1; i<=55; i++) {
    if(i % 3 == 0)
        sum = sum + i;
    else
        continue;
}
console.log(sum);