/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, maxLength = 0) {
  if (words.length === 0) return maxLength;

  if (words[0].length > maxLength) maxLength = words[0].length;

  return longest(words.slice(1), maxLength);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, newStr = '') {
  if (idx >= str.length) return newStr;

  newStr += str[idx];

  return everyOther(str, idx + 2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
  let start = idx;
  let end = str.length - idx - 1;
  if(start >= end) return true;
  if(str[start] !== str[end]) return false;
  return isPalindrome(str, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx >= arr.length) return -1;

  if (arr[idx] === val) return idx;

  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, newStr = '') {
  let end = str.length - idx - 1;
  if (end < 0) return newStr;

  newStr += str[end];

  return revString(str, idx + 1, newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arr = [];
  
  for (let key in obj) {
    if (typeof obj[key] === 'string') arr.push(obj[key]);
    if (typeof obj[key] === 'object') arr.push(...gatherStrings(obj[key]));
  }

  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start = 0, end = arr.length) {
  if (start > end) return -1;

  let middle = Math.floor((start + end) / 2);

  if (val === arr[middle]) return middle;
  if (val < arr[middle]) return binarySearch(arr, val, start, middle - 1);
  return binarySearch(arr, val, middle + 1, end);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
