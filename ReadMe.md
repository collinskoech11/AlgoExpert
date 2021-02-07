## Validate Sequence 
Given two non-empty arrays of integers, write a function to determine whether the second array is a subsequence of the first one.
 
 A subsequene of the array is a set of numbers that arent necessarily adjascent in rthe array but are in the same order as they appear in the array. For instance, the numbers `[1,3,4]` form a subsequence in the array `[1,2,3,4]`
 and so do the numbers `[2,4]`. Note that a single number in an array and the array itself are both valid subsequence of the array.


 ### Sample INput 
 `array = [5,1,22,25,6,-1,8,10] </br>
 sequence = [1,6,-1,10]`



 ## River Sizes 
 
 Youre given 2-D array (a matrix) of potential unequal height and width only containing `0`s and `1`s. Each `0` represents land and each `1` represents part of a river. A river consists of any number of `1`s that are either horizontally or vertically adjascent(but not diagonally adjacent). THe number of adjacent `1`s forming a river determine its size.
 
 Write a function that returns an array of the sizes of all the rivers represented in the input matrix. TH esizes dont need to be in any particular order
 

 ## Shift Linked LIst
  Write a function that takes the head of a Singly LInked LIst and  an integer `k`, shifts the list in place (i.e doesnt create a brand new list )
  by k positions , and returns its new head.
 
  Shifting a LInked LIst means movin its nodes forward and backward and wrapping them around the list where appropriate.
  For example, shifting a linked list forward by one position would make its tail become the new  head of the linked list 
  
  Whether nodes are moved forward or backward is determined by whether `k` is positive or negative .
  
  Each `Linked LIst` node has an integer `value` as well as `next` node pointing to the next node in the list or to `none`/`null`
  if its the tai of the list.
  
  you can assume that the input LInked List will always have at least one node; in other words the head will never be `none`/`null`
  
  ### Sample Input
  
  `head = 0 -> 1 -> 2 -> 3 -> 4 -> 5 //the head node with value 0 <br/>
  k = 2`
  
  ### Sample Output 
  
  `4 -> 5 -> 0 -> 1 -> 2 -> 3 // the head node with value 4`

  # Max Profit with K Transactions 


You are given an array of postive integers representing the prices of a single stock on various days (each index in the array represents a single day). 

 You're also given an integer `k`, which represents the number of transactions youre allowed to make. One transaction consists of buying stock on a given day and selling it on another, later day.
  
 Write a function that returns the maximum profit that you can make by buying and selling the stock, given k transactions.
 
 Note that you can only hold one share of the stock at a time; In other words you cant buy more than one share of the stock on any given day, and you cant buy a share of the stock if you are still holding any other share. Also, you dont need to use all k transactions that you're allowed.
  
  ## Sample Input
  
  `prices = [5, 11, 3, 50, 60, 90] <br/>
  k = 2`
  
  ## Sample Output 
  
  `93 //Buy: 5, Sell: 11 Buy: 3, Sell: 90`
  
