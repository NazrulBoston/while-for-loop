// continue for for loop
var numbers = [23, 11, 32, 45, 56, 97, 45, 36, 67];
for (var i = 0; i < numbers.length; i++){
   var number = numbers[i]
   if(number == 56){
    continue;
   }
   console.log(number);   
}



// another continue example
var friends = [ 'noman', 'aminul', 'billal', 'rony', 'karim', 'rubel', 'uzzal', 'jahangir', 'sajek']
 
for( var i = 0; i < friends.length; i++){
   var friend = friends [i];
   if(friend == 'karim'){
      continue;
   }
   console.log(friend)
}