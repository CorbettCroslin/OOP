// 3
var myArray = [['dog',3]['cat',9]]

// 4
var myArr = [
    ['dog',3], ['cat',9], ['mouse',2]
  ];
  for (var x=0; x < myArr.length; x++) {
    for (var y=0; y < myArr[x].length; y++) {
      console.log(myArr[x][y]);
    }
  }

// 5
var myPetStore = [[['dog',3],['cat',9],[['mouse',2],['hamster',4]],['snake',7]]]

// 6
function myChange(a,b) {
    if ( a > b ){ 
      return a;
    } else {
        return b;
    }
}
console.log(myChange(10,20))

// 7
function myWallet(a,b) {
    if ( a == b ){ 
      return 'equal';
    } else {
        return 'different';
    }
}
console.log(myWallet(10,10))
console.log(myWallet(10,35))