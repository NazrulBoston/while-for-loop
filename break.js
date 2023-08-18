
// break for for loop

// for (var i =0; i <= 20; i++){
//     console.log(i)
//     if(i > 5 ){
//         break;
//     }
// }

// // break for while loop
// var age = 0;
// while( age < 21 ){
//     console.log('you are qualified' );
//     console.log(age);
//     age++;
//     if(age > 10 ){
//         break;
//     }
// }


// Another example with for loop

var items = ['bottle', 'mouse', 'sunglasses', 'pen', 'notebook']
for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if( item =='pen'){
        break;
    }
    console.log(item);

}
