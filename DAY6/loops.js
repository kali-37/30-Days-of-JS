// Print in patter i , i sq i cube 

for (let i=0;i<11 ;i++){
    console.log(`${i}   ${i*i}   ${i*i*i} `)

}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let randomId = '';
for (let i=0;i<6;i++){
number_randomizer=(Math.floor(Math.random()*characters.length))
randomId +=characters.charAt(number_randomizer);
}
console.log(randomId );