function findRecursiveIterative(n){

let arr=[0,1]

if(n<2)return arr[n]

for(let i=2;i<=n;i++){
  arr.push(arr[i-2]+arr[i-1])
}

return arr[n]

}

console.log(findRecursiveIterative(5));

/*
Time complexity = O(n)
Space complexity= O(n)
*/