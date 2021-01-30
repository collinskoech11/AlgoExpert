//Validate Sequence 
/**Given two non-empty arrays of integers, write a function to determine whether the second array is a subsequence of the first one.
 * 
 A subsequene of the array is a set of numbers that arent necessarily adjascent in rthe array but are in the same order as they appear in the array. For instance, the numbers `[1,3,4]` form a subsequence in the array `[1,2,3,4]`
 and so do the numbers `[2,4]`. Note that a single number in an array and the array itself are both valid subsequence of the array.


 Sample INput 
 `array = [5,1,22,25,6,-1,8,10]
 sequence = [1,6,-1,10]`
 */
function isValidSubsequence(array, sequence) {
    // Write your code here.
      let arrIdx =0;
      let seqIdx =0;
      while (arrIdx < array.length && seqIdx < sequence.length){
          if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
          arrIdx++;
      }
      return seqIdx === sequence.length;
  }
  
  // Do not edit the line below.
  exports.isValidSubsequence = isValidSubsequence;