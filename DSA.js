

// var intToBinary = function(num) {
//     res=''
//     while(num!=1){
//         if(num%2==1){
//             res+='1';
//         }
//         else {res+='0'}
//         num=num/2;
//     }
//     return res;
   
// };

// console.log(intToBinary(7));


// var intToBinary = function(num) {
//     res = '';
//     while (num != 1) {
//         if (num % 2 == 1) {
//             res += '1';
//         } else {
//             res += '0';
//         }
//         num = num / 2;
//     }
//     return res;
// };

// console.log(intToBinary(7));  // Output: '111'


// num1=2
// num2=3

// var sum = function(num1, num2) {
//     while (num2 !== 0) {
//         let carry = num1 & num2;
//         num1 = num1 ^ num2;
//         num2 = carry << 1;
//     }
//     return num1;
// };

// console.log(sum(num1,num2)); // Output: 17

// //iteration 1
// //num1&num2 
// 10
// 11
// ==
// 10
// carry= 10
// num1^num2
// 10
// 11
// ==
// num1=01//1

// num2=carry<<1

// 10

// 100//4

// iteratio2 

// num1 0001
// num2 0100
// num1&num2

// carry=0000
// num1^num2
// 0001
// 0100
// ====
// 0101=num1
// num2=carry<<1 termintion condiotion met

// 1. Initial values: `num1 = 2`, `num2 = 3`
// 2. Iteration 1:
//    - `carry = 2 & 3 = 2` (0010 & 0011 = 0010)
//    - `num1 = 2 ^ 3 = 1` (0010 ^ 0011 = 0001)
//    - `num2 = 2 << 1 = 4` (0010 << 1 = 0100)
// 3. Iteration 2:
//    - `carry = 1 & 4 = 0` (0001 & 0100 = 0000)
//    - `num1 = 1 ^ 4 = 5` (0001 ^ 0100 = 0101)
//    - `num2 = 0` (termination condition met)

// Final output: `num1 = 5`, which matches the expected output for the input values `2` and `3`.




// var binaryToInteger= function(str) {
//     let intvalue=0
//     let exp=0
//     for(let i=str.length-1;i>=0;i--){
//         if(str[i]==='1'){
//             intvalue=intvalue+Math.pow(2,exp)
//         }
//         exp++;
//     }
//     return intvalue;
       
//      };
    
//     var str = "1010"; // Example binary string
//     var intValue = binaryToInteger(str); // Convert binary string to integer
//     console.log(intValue); // Output: 10
    


//=================lower bound============

// function lowerBound(arr,n,x){
//     let low=0;
//     let high=n-1;
//     let ans=n;
//     while(low<=high){
//         let mid=Math.floor((low+high)/2)
//         if(arr[mid]>=x){
//             ans=mid
//             high=mid-1;
//         }
//     else{
//         low=mid+1
//     }
//     }
//     return ans
// }

// let arr = [3, 5, 8, 15, 19];
// let n = 5, x = 6;
// let ind = lowerBound(arr, n, x);
// console.log("The lower bound is the index:", ind);



// function findFloor(arr,x,n){
//     let low=0;
//     let high=n-1;
//     let ans=n; //arr = [3, 4, 4, 7, 8, 10]; 5
//     while(low<=high){
//         let mid=Math.floor((low+high)/2)
//         if(arr[mid]>=x){
//             ans=arr[mid]
            
//             low=mid+1
//         }
//     else{
//         high=mid-1;
//     }
//     }
//     return ans
// }
// function findCiel(arr,x,n){
//     let low=0;
//     let high=n-1;
//     let ans=n;
//     while(low<=high){
//         let mid=Math.floor((low+high)/2)
//         if(arr[mid]>=x){
//             ans=arr[mid]
//             high=mid-1;
//         }
//     else{
//         low=mid+1
//     }
//     }
//     return ans
// }

//  arr = [3, 4, 4, 7, 8, 10];
//  let n = 6, x = 5;
// //let ind = findFloor(arr, x, n);
// let ind2= findCiel(arr, x, n);
// //console.log("floor:", ind);
// console.log("Ciel:", ind2);




//================22 April
// function upperBound (arr,x,n){
//     let high=n-1, low =0;
//     let ans=0;
//     while(low<=high){
//         let mid=Math.floor((high+low)/2)
//         if(arr[mid]>=x){
//             ans=mid;
//             high=mid-1;
//         }
//         else low=mid+1
//     }
//     return ans
// }

// let arr = [3, 5, 8, 9, 15, 19];
// let n = 6, x = 9;
// let ind = upperBound(arr, x, n);
// console.log("The upper bound is the index:", ind);

//Count Occurrences in Sorted Array

// var countF = function(nums, target) {
//     let len=nums.length;
//     let low=0;
//     let high=len-1
//     let count=0;
//     while(low<=high){
//         let mid= Math.floor((low+high)/2) 
//         if(nums[mid]===target) {
//             count=mid;
//             high=mid-1
//         } 
//         if(nums[mid]>target){
//             high=mid-1
//         }
//         if(nums[mid]<target) {
//             low = mid+1
//         }
//     }
//     return count
// };


// var countSL = function(nums, target) {
//     let len=nums.length;
//     let low=0;
//     let high=len-1
//     let count=0;
//     while(low<=high){
//         let mid= Math.floor((low+high)/2) 
//         if(nums[mid]===target) {
//             count=mid;
//             low=mid+1
//         } 
//         if(nums[mid]>target){
//             high=mid-1
//         }
//         if(nums[mid]<target) {
//             low = mid+1
//         }
//     }
//     return count
// };

// let arr = [2, 4, 6, 8 ,8,8,11, 13];
// let  x = 8;
// let ans = countF(arr, x);
// let ans2 = countSL(arr, x);
// console.log("The number F of occurrences is:", ans);
// console.log("The number S of occurrences is:", ans2);

//var nums = [3, 1, 4, 1, 5, 9, 2, 6, 5];
// nums = [-1,2,-3,3]
// console.log(nums.sort((a, b) => b-a)); // Output: [9, 6, 5, 5, 4, 3, 2, 1, 1] (descending order)

//console.log(nums.sort()); // Output: [1, 1, 2, 3, 4, 5, 5, 6, 9] (ascending order)



// let abc={
//     name:"Ankit",
//     class:"10th",
//     abcd:function(){
        
//        console.log(`
//        Fist Name is ${this.name},
//        Class Name is ${this.class},

//        `);
//     }


// }

// let qq={
//     name:"Ankita",
//     class:"10000th",
// }
// // abc.abcd()
// abc.abcd.bind(qq)()

//let name=9

// let abc =setTimeout(()=>{
// console.log(`counter ${name}`);

// },1000)

// let abc =setInterval(()=>{
//     console.log(`counter ${name}`);
//     name=name+1;
//     },1000)
//     setTimeout(()=>{
//     clearInterval(abc)
//     },5000)
   
   


// const abcd= setInterval(()=>{
//     console.log(`hiiiiiii`);
// },1000)
// clearInterval(abcd)
    

// obj={
//     "Name":"Ankit"
// }
// console.log(obj.keys().length);


// Input: s = "abcde", t = "edbac"

// Output: 12
// let s = "abcde";
// let t = "edbac";

// var findPermutationDifference = function(s, t) {
//     let sum = 0;
    
//     for (let i = 0; i < s.length; i++) {
//         let index = t.indexOf(s[i]);
//         sum += Math.abs(i - index);
//     }
    
//     return sum;
// };

// console.log(findPermutationDifference(s, t)); // Output: 12


// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
// var maxScore = function(grid) {
//     const m = grid.length;
//     const n = grid[0].length;
//     let maxScore = 0;

//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             let currentScore = 0;
//             let maxValue = grid[i][j];

//             for (let x = i; x < m; x++) {
//                 for (let y = j; y < n; y++) {
//                     if (grid[x][y] > maxValue) {
//                         currentScore = Math.max(currentScore, grid[x][y] - maxValue);
//                         maxValue = grid[x][y];
//                     }
//                 }
//             }

//             maxScore = Math.max(maxScore, currentScore);
//         }
//     }

//     return maxScore;
// };

// // Test the function
// const grid = [[9,5,7,3],[8,9,6,1],[6,7,14,3],[2,5,3,1]];
// console.log(maxScore(grid)); // Output: 9


// let arr=[22,44,66,1,3,9,0]
// arr.unshift("Hi")

// console.log(arr);



// var str = '{"names":[' +                    // crate JSON object
// '{"first":"Hakuna","lastN":"Matata" },' +
// '{"first":"Jane","lastN":"Doe" },' +
// '{"first":"Air","last":"Jordan" }]}';
// obj = JSON.parse(str);                      // parse
// console.log(str);

// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @param {number} k
//  * @return {number}
//  */
// var numberOfPairs = function(nums1, nums2, k) {
//     let count = 0;
//     for (let i = 0; i < nums1.length; i++) {
//         for (let j = 0; j < nums2.length; j++) {
//             if (nums1[i] % (nums2[j] * k) === 0) {
//                 count++;
//             }
//         }
//     }
//     return count;
// };


// var numberOfPairs = function(nums1, nums2, k) {
//     count=0
//      for(let i =0;i<nums1.length;i++){
//        for(let j=0;j<nums2.length;j++){
//          if(nums1[i]%(nums2[j]*k)===0) count++
//        }
//      }
//      return count
//  };

// //  num1=[1,3,4]
// //  num2=[1,3,4]
// //  k=1

//  num1 = [1,2,4,12]
//  num2 = [2,4]
//  k = 3


// console.log(numberOfPairs(num1,num2,k))



// var compressedString = function(word) {
//     let map = new Map();

//     // Count the occurrences of each character
//     for (let i of word) {
//         map.set(i, (map.get(i) || 0) + 1);
//     }

//     // Construct the compressed string
  
//     let str = [];
//     for (let [key, value] of map) {
//         while (value > 0) {
//             let count = Math.min(value, 9);
//             str.push(count + key);
//             value =value- count;
//         }
//     }

//     return str.join('');
// }

// console.log(compressedString('abcdeeeeeeeeeeeeeee')); 

// var compressedString = function(word) {
//     let comp = "";
//     let i = 0;

//     while (i < word.length) {
//         let count = 0;
//         let char = word[i];

//         // Count the occurrences of char, but not more than 9
//         while (i < word.length && word[i] === char && count < 9) {
//             count++;
//             i++;
//         }

//         // Append the count followed by the character to the result
//         comp += count + char;
//     }

//     return comp;
// }

// // Test cases
// console.log(compressedString("abcde")); // Output: "1a1b1c1d1e"
// console.log(compressedString("aaaaaaaaaaaaaabb")); // Output: "9a5a2b"
// console.log(compressedString("mrm")); // Output: "1m1r1m"
// console.log(compressedString("aabbccddeeff")); // Output: "2a2b2c2d2e2f"
// console.log(compressedString("a")); // Output: "1a"
// console.log(compressedString("")); // Output: ""


// var numSteps = function(s) {
//     count=0
//     let num=parseInt(s,2)
//     while(num>1){
//         if(num%2!=0) {
//             num++;
//             count++
//         }
//         else {
//             num=num/2;
//             count++
//         }
//     }
//     return count
// };


// console.log(numSteps("1111011110000011100000110001011011110010111001010111110001"));


// var countPrimes = function(n) {
//     let count=0;
//     for(let i=1;i<n.length/2;i++){
//         if(n%i===0) count ++
//     }
// return count
// };

// console.log(countPrimes(10));


// var minimumChairs = function(s) {
//     let sum=0;
//     let count=0

//     for(let i =0;i<s.length;i++){
        
//         if(s.charAt(i)==='E'){
//             count++
//         }
//         else {
//             count--
//         }
//         sum=Math.max(sum,count)
//     }
//     return sum
// };


// // s =
// // "ELEELEELLL"
// // Use Testcase
// // Output
// // 2
// // Expected
// // 3

// console.log(minimumChairs("ELEELEELLL"));



// var countDays = function(days, meetings) {
//     var result = new Set()

// for (var i = 0; i < meetings.length; i++) {
//     var start = meetings[i][0];
//     var end = meetings[i][1];
    
//     for (var j = start; j <= end; j++) {
//         result.add(j);
//     }
// } 


//     var availableDays = days - result.size

//     return availableDays;

// };



// var days = 5;
// var meetings = [[2,4],[1,3]];

// console.log(countDays(days,meetings));



// var numberOfChild = function(n, k) {
//     let position = 0;
//     let direction = 1; // 1 means right, -1 means left

//     for (let i = 0; i < k; i++) {
//         position += direction;

//         // Reverse direction if we reach either end
//         if (position === n - 1 || position === 0) {
//             direction = -direction
//         }
//     }

//     return position;
// };



// console.log(numberOfChild(5,6));

// let bloomDay = [1,10,3,10,2]
// let  m = 3, k = 1

// var minDays = function(bloomDay, m, k) {
//     let n=bloomDay.length
//     if(m*k>n) return -1
//     let low =Math.min(...bloomDay)
//     let high= Math.max(...bloomDay)

//     const makeBouquets=(day)=>{
//         let bouq=0;
//         let flow=0
//         for( let i=0;i<n;i++){
//             if(bloomDay[i]<=day){ 
//                 flow++
//                 if(flow==k){
//                     bouq++;
//                     flow=0
//                 }
//             } else{
//                 flow=0
//             }
//             if(bouq>=m) return true
//         }
//         return false
        
//     };
//     while(low<high){
//         const mid=Math.floor((low+high)/2)
    
//         if(makeBouquets(mid)) high=mid
//         else low =mid+1
//     }
//     return low
// };
// console.log(minDays(bloomDay, m, k))


// nums = [8,2,4,7]
// limit = 4

// /**
//  * @param {number[]} nums
//  * @param {number} limit
//  * @return {number}
//  */
// var longestSubarray = function (nums, limit) {
//     debugger
//     let max = [],
//       min = [],
//       start = 0,
//       end = 0,
//       ans = 0;
//     //iterate till end
//     while (end < nums.length) {
//       //update the max and the min queues
//       while (max.length > 0 && max[max.length - 1] < nums[end]) {
//         max.pop();
//       }
//       while (min.length > 0 && min[min.length - 1] > nums[end]) {
//         min.pop();
//       }
//       max.push(nums[end]);
//       min.push(nums[end]);
//       //shrink the window if the max and min are out of bounds
//       while (max[0] - min[0] > limit) {
//         if (max[0] == nums[start]) {
//           max.shift();
//         }
//         if (min[0] == nums[start]) {
//           min.shift();
//         }
//         start++;
//       }
//       ans = Math.max(ans, end - start + 1);
//       end++;
//     }
//     return ans;
//   };

//   console.log(longestSubarray(nums,limit));



// var minKBitFlips = function(nums, k) {
//   let n = nums.length;
//   debugger
//   let flip_count = 0;
//   let result = 0;
//   let is_flipped = new Array(n).fill(0);

//   for (let i = 0; i < n; i++) {
//       // Adjust flip_count for the current window
//       if (i >= k) {
//           flip_count -= is_flipped[i - k];
//       }

//       // If the current element needs to be flipped to become 1
//       if ((nums[i] + flip_count) % 2 === 0) {
//           // If there's not enough space to flip a subarray of length k, return -1
//           if (i + k > n) return -1;
//           // Perform a flip
//           is_flipped[i] = 1;
//           flip_count++;
//           result++;
//       }
//   }

//   return result;
// };
// nums = [0,1,0], k = 1
// console.log(minKBitFlips(nums,k));

// edges = [[1,2],[2,3],[4,2]]

// var findCenter = function(edges) {
//     debugger
//     if(edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1]) return edges[0][0];
//      return edges[0][1];
//  };

// console.log(findCenter(edges));



// /**
//  * @param {number} n
//  * @param {number[][]} roads
//  * @return {number}
//  */
// var maximumImportance = function(n, roads) {
//     debugger
//     let res=0,cost=1
//     let arr= new Array(n).fill(0)
//     for(let i of roads){
//         arr[i[0]]++
//         arr[i[1]]++
//     }
//     arr.sort((a,b)=>a-b)
//     for(let j of arr){
//         res=res+j*cost++
//     }
//     return res
    
// };
// n = 5, roads = [[0,1],[1,2],[2,3],[0,2],[1,3],[2,4]]
// console.log(maximumImportance(n,roads));


// /**
//  * @param {number[]} candies
//  * @param {number} extraCandies
//  * @return {boolean[]}
//  */

// let candies =[2,3,5,1,3]
// let extraCandies =3
// var kidsWithCandies = function(c, e) {
//    debugger
//    c.sort((a,b)=>a-b)
//    let j=0;
//    let arr = new Array(c.length).fill(false);
//    let max=c[c.length]
//    for(let i =0;i<c.length;i++){
//            if((c[i]+e)>=max){
//                arr[j]=true
//            }
//            j++
//    }
// return arr
// };

// console.log(candies,extraCandies)

let nums=[1,2,3,3,4,5,7,8,4,3]
let size=3

var ques=function(nums,size){
    debugger
    let res=[]
for(let i=0;i<nums.length;i+=size){
    let chunks=nums.slice(i,i+size)
    res.push(chunks)
}
return res

}

console.log(ques(nums,size));