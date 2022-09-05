// Q.2 You are given an array of length N (1 < N <= 100) and a number K. Print the array after K rotations in clockwise direction.
// E.g. 
// N = 10, K = 3
// Arr = [1,2,3,4,5,6,7,8,9,10]
// after K rotations
// Arr = [4,5,6,7,8,9,10,1,2,3]

// Please mention use of any in-built javascript function is not allowed like shift, unshift, substr etc.


let arr=[1,2,3,4,5,6,7,8,9,10]
let k=3


let i=0
let j=arr.length-1

while(k!=0){
  while(i<j){
    let temp=arr[i]
    arr[i]=arr[i+1]
    arr[i+1]=temp
    i++
  }
  k--
  i=0
}
console.log(arr)
