// Sample Input :
// 1
// 6
// 11 6 7 5 11 11

// Sample Output :

// 3 2 2 1 1 0 


// var queue = [11,6,7,5,11,11]
// var length = 6
// var a = []
// var ans = []
// for(var i=0; i<length; i++){
//     while(length!=0 && queue[i]<=a[a.length-1]){
//         a.pop()
//     }
//     if(a.length===0){
//         ans[i]=-1
//     }
//     else{
//         ans[i] = a[a.length-1]
//     }
//     a.push(queue[i])
// }
// console.log(ans.join(" "));



// Sample Input: 

// 2
// 1
// 3

// Sample Output: 

// 1
// 123


var input1 = 1
var input = 3
var res = input1 * input1;
var res1 = input1 + input1;
var length = Infinity;

for(var i=0; i<length; i++){
    if(input1 % res >= res1)
    {
        console.log(i);
    }
}
 

