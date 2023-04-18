//bruteforce method solution

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

let arr = [2, 5, 6, 8, 11];
// console.log(twoSum(arr, 11))
// TC = O(n^2)

//better solution
//it uses hashing

function twoSum(nums, target) {
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in hashMap) {
      return [hashMap[complement], i];
    }
    hashMap[nums[i]] = i;
  }
}

//TC = O(N) & SC = O(N)
