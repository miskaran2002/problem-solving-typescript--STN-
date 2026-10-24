
// PROBLEM 1: Staircase


function staircase(n: number): string {
  if (typeof n !== 'number' || n <= 0) {
    return '';
  }

  const resultRows: string[] = [];
  for (let i = 1; i <= n; i++) {
    const spaces: string = ' '.repeat(n - i);
    const hashes: string = '#'.repeat(i);
    resultRows.push(spaces + hashes);
  }

  return resultRows.join('\n');
}

// --- Test Problem 1 ---
console.log('example 1 Output');
console.log(staircase(4));
console.log('\n');

console.log('example 2 Output ');
console.log(staircase(1));
console.log('\n');

// PROBLEM 2: Grading Students


function gradingStudents(grades: number[]): number[] {
  if (!Array.isArray(grades)) {
    return [];
  }

  return grades.map((grade) => {
    
    if (grade < 38) {
      return grade;
    }

    const nextMultipleOfFive = Math.ceil(grade / 5) * 5;
    const difference = nextMultipleOfFive - grade;

    if (difference < 3) {
      return nextMultipleOfFive;
    }

    return grade;
  });
}


// --- Test Problem 2 ---
console.log('example 1 Output');
console.log(gradingStudents([73, 67, 38, 33]));
console.log('\n');

console.log('example 2 Output');
console.log(gradingStudents([84, 29, 57]));
console.log('\n');


// PROBLEM 3: Time Conversion


function timeConversion(s: string): string {
  if (!s || typeof s !== 'string') {
    return '';
  }

  const modifier = s.slice(-2);
  
  const timeWithoutModifier = s.slice(0, -2);
  let [hoursStr, minutes, seconds] = timeWithoutModifier.split(':');

  let hours = parseInt(hoursStr, 10);

  if (modifier === 'AM') {
   
    if (hours === 12) {
      hours = 0;
    }
  } else if (modifier === 'PM') {
    
    if (hours !== 12) {
      hours += 12;
    }
  }

  
  const formattedHours = String(hours).padStart(2, '0');

  return `${formattedHours}:${minutes}:${seconds}`;
}


// --- Test Problem 3 ---
console.log('example 1 Output');
console.log(timeConversion('07:05:45PM'));
console.log('\n');

console.log('example 2 Output');
console.log(timeConversion('12:00:00AM'));
console.log('\n');

console.log('example 3 Output');
console.log(timeConversion('12:30:45PM'));
console.log('\n');

// PROBLEM 4: String Repeat


function repeatStr(n: number, s: string): string {
  if (typeof n !== 'number' || n <= 0 || typeof s !== 'string') {
    return '';
  }
 
  return s.repeat(n);
}


// --- Test Problem 4 ---
console.log('example 1 Output');
console.log(repeatStr(3, 'ha'));
console.log('\n');

console.log('example 2 Output');
console.log(repeatStr(0, 'hello'));
console.log('\n');

console.log('example 3 Output');
console.log(repeatStr(4, 'a'));
console.log('\n');

// PROBLEM 5: Reversed Strings


function solution(str: string): string {
  if (typeof str !== 'string') {
    return '';
  }
  return str.split('').reverse().join('');
}


// --- Test Problem 5 ---
console.log('example 1 Output');
console.log(solution('world'));
console.log('\n');

console.log('example 2 Output');
console.log(solution('hello'));
console.log('\n');

console.log('example 3 Output');
console.log(solution(''));
console.log('\n');

// PROBLEM 6: Sum of Positive


function positiveSum(arr: number[]): number {
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0;
  }

  
  return arr.reduce((sum, num) => {
    return num > 0 ? sum + num : sum;
  }, 0);
}


// --- Test Problem 6 ---
console.log('example 1 Output');
console.log(positiveSum([1, -4, 7, 12]));
console.log('\n');

console.log('example 2 Output');
console.log(positiveSum([-1, -2, 0, -5]));
console.log('\n');

// PROBLEM 7: Grasshopper — Summation


function summation(num: number): number {
  if (typeof num !== 'number' || num <= 0) {
    return 0;
  }

  return (num * (num + 1)) / 2;
}


// --- Test Problem 7 ---
console.log('example 1 Output');
console.log(summation(8));
console.log('\n');

console.log('example 2 Output');
console.log(summation(1));
console.log('\n');

// PROBLEM 8: Convert a Boolean to a String


function booleanToString(b: boolean): string {
  
  return String(b);
}


// --- Test Problem 8 ---
console.log('example 1 Output');
console.log(booleanToString(true));
console.log('\n');

console.log('example 2 Output');
console.log(booleanToString(false));
console.log('\n');

// PROBLEM 9: Fizz Buzz


function fizzBuzz(n: number): string[] {
  if (typeof n !== 'number' || n <= 0) {
    return [];
  }

  const result: string[] = [];

  for (let i = 1; i <= n; i++) {
   
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz');
    } 
    
    else if (i % 3 === 0) {
      result.push('Fizz');
    } 
   
    else if (i % 5 === 0) {
      result.push('Buzz');
    } 
    
    else {
      result.push(String(i));
    }
  }

  return result;
}


// --- Test Problem 9 ---
console.log('example 1 Output');
console.log(fizzBuzz(5));
console.log('\n');

console.log('example 2 Output');
console.log(fizzBuzz(15));
console.log('\n');

// PROBLEM 10: Running Sum of 1D Array


function runningSum(nums: number[]): number[] {
  if (!Array.isArray(nums)) {
    return [];
  }

  let currentSum = 0;

  return nums.map((num) => {
    currentSum += num;
    return currentSum;
  });
}


// --- Test Problem 10 ---
console.log('example 1 Output');
console.log(runningSum([1, 2, 3, 4]));
console.log('\n');

console.log('example 2 Output');
console.log(runningSum([1, 1, 1, 1, 1]));
console.log('\n');

// PROBLEM 11: Richest Customer Wealth


function maximumWealth(accounts: number[][]): number {
  if (!Array.isArray(accounts) || accounts.length === 0) {
    return 0;
  }

  let maxWealth = 0;

  
  for (const customerAccounts of accounts) {
    const currentCustomerWealth = customerAccounts.reduce(
      (sum, balance) => sum + balance,
      0
    );

    if (currentCustomerWealth > maxWealth) {
      maxWealth = currentCustomerWealth;
    }
  }

  return maxWealth;
}


// --- Test Problem 11 ---
console.log('example 1 Output');
console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]));
console.log('\n');

console.log('example 2 Output');
console.log(maximumWealth([[1, 5], [7, 3], [3, 5]]));
console.log('\n');

// PROBLEM 12: Remove Duplicates from Sorted Array


function removeDuplicates(nums: number[]): number {
  if (!Array.isArray(nums) || nums.length === 0) {
    return 0;
  }

  
  let k = 1;

  for (let i = 1; i < nums.length; i++) {
   
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}


// --- Test Problem 12 ---
console.log('example 1 Output');
const nums1 = [1, 1, 2];
const k1 = removeDuplicates(nums1);
console.log(`k = ${k1}, unique elements =`, nums1.slice(0, k1));
console.log('\n');

console.log('example 2 Output');
const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const k2 = removeDuplicates(nums2);
console.log(`k = ${k2}, unique elements =`, nums2.slice(0, k2));
console.log('\n');

// PROBLEM 13: Contains Duplicate


function containsDuplicate(nums: number[]): boolean {
  if (!Array.isArray(nums) || nums.length <= 1) {
    return false;
  }

 
  const uniqueElements = new Set(nums);
  return uniqueElements.size !== nums.length;
}


// --- Test Problem 13 ---
console.log('example 1 Output');
console.log(containsDuplicate([1, 2, 3, 1]));
console.log('\n');

console.log('example 2 Output');
console.log(containsDuplicate([1, 2, 3, 4]));
console.log('\n');

console.log('example 3 Output');
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log('\n');

// PROBLEM 14: Move Zeroes


function moveZeroes(nums: number[]): void {
  if (!Array.isArray(nums) || nums.length === 0) {
    return;
  }

  let nonZeroIndex = 0;

  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }

  
  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
}


// --- Test Problem 14 ---
console.log('example 1 Output');
const p14Nums1 = [0, 1, 0, 3, 12];
moveZeroes(p14Nums1);
console.log(p14Nums1);
console.log('\n');

console.log('example 2 Output');
const p14Nums2 = [0, 0, 1];
moveZeroes(p14Nums2);
console.log(p14Nums2);
console.log('\n');

console.log('example 3 Output');
const p14Nums3 = [1, 2, 3];
moveZeroes(p14Nums3);
console.log(p14Nums3);
console.log('\n');

export {};

// PROBLEM 15: Merge Sorted Array


function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = m - 1; 
  let p2 = n - 1; 
  let p = m + n - 1; 

  
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }

  
  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
  }
}


// --- Test Problem 15 ---
console.log('example 1 Output');
const p15Nums1_1 = [1, 2, 3, 0, 0, 0];
merge(p15Nums1_1, 3, [2, 5, 6], 3);
console.log(p15Nums1_1);
console.log('\n');

console.log('example 2 Output');
const p15Nums1_2 = [1];
merge(p15Nums1_2, 1, [], 0);
console.log(p15Nums1_2);
console.log('\n');

console.log('example 3 Output');
const p15Nums1_3 = [0];
merge(p15Nums1_3, 0, [1], 1);
console.log(p15Nums1_3);
console.log('\n');

export {};

// PROBLEM 16: 3Sum


function threeSum(nums: number[]): number[][] {
  if (!Array.isArray(nums) || nums.length < 3) {
    return [];
  }

  const result: number[][] = [];
  
  
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    
    if (nums[i] > 0) break;

    
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        
        while (left < right && nums[left] === nums[left + 1]) left++;
       
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}


// --- Test Problem 16 ---
console.log('example 1 Output');
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log('\n');

console.log('example 2 Output');
console.log(threeSum([0, 1, 1]));
console.log('\n');

console.log('example 3 Output');
console.log(threeSum([0, 0, 0]));
console.log('\n');

export {};

// PROBLEM 17: Plus One


function plusOne(digits: number[]): number[] {
  if (!Array.isArray(digits) || digits.length === 0) {
    return [];
  }

  
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    
    digits[i] = 0;
  }

  
  digits.unshift(1);
  return digits;
}


// --- Test Problem 17 ---
console.log('example 1 Output');
console.log(plusOne([1, 2, 9]));
console.log('\n');

console.log('example 2 Output');
console.log(plusOne([4, 3, 2, 1]));
console.log('\n');

console.log('example 3 Output');
console.log(plusOne([9, 9, 9]));
console.log('\n');

export {};

// PROBLEM 18: Reverse String


function reverseString(s: string[]): void {
  if (!Array.isArray(s) || s.length <= 1) {
    return;
  }

  let left = 0;
  let right = s.length - 1;

  
  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    left++;
    right--;
  }
}


// --- Test Problem 18 ---
console.log('example 1 Output');
const p18S1 = ["h", "e", "l", "l", "o"];
reverseString(p18S1);
console.log(p18S1);
console.log('\n');

console.log('example 2 Output');
const p18S2 = ["H", "a", "n", "n", "a", "h"];
reverseString(p18S2);
console.log(p18S2);
console.log('\n');

export {};

// PROBLEM 19: Length of Last Word


function lengthOfLastWord(s: string): number {
  if (typeof s !== 'string') {
    return 0;
  }

  
  const words = s.trim().split(/\s+/);

  if (words.length === 0 || words[0] === '') {
    return 0;
  }

  return words[words.length - 1].length;
}


// --- Test Problem 19 ---
console.log('example 1 Output');
console.log(lengthOfLastWord('Hello World'));
console.log('\n');

console.log('example 2 Output');
console.log(lengthOfLastWord('   fly me   to   the moon  '));
console.log('\n');

console.log('example 3 Output');
console.log(lengthOfLastWord('luffy is still joyboy'));
console.log('\n');

export {};

// PROBLEM 20: Longest Common Prefix


function longestCommonPrefix(strs: string[]): string {
  if (!Array.isArray(strs) || strs.length === 0) {
    return '';
  }

 
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      
      if (prefix === '') {
        return '';
      }
    }
  }

  return prefix;
}


// --- Test Problem 20 ---
console.log('example 1 Output');
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log('\n');

console.log('example 2 Output');
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log('\n');

console.log('example 3 Output');
console.log(longestCommonPrefix(["interspecies", "interstellar", "interstate"]));
console.log('\n');

export {};