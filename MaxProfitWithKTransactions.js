/**
 * # Max Profit with K Transactions 
 * 
 * 
 * You are given an array of postive integers representing the prices of a single stock on various days (each index in the array represents a single day).
 * 
 * You're also given an integer `k`, which represents the number of transactions youre allowed to make. One transaction consists of buying stock on a given day and selling it on another, later day.
 * 
 * Write a function that returns the maximum profit that you can make by buying and selling the stock, given k transactions.
 * 
 * Note that you can only hold one share of the stock at a time; In other words you cant buy more than one share of the stock on any given day, and you cant buy a share of the stock if you are still holding any other share. Also, you dont need to use all k transactions that you're allowed.
 * 
 * ## Sample Input
 * 
 * `prices = [5, 11, 3, 50, 60, 90] </br>
 * k = 2`
 * 
 * ## Sample Output 
 * 
 * `93 //Buy: 5, Sell: 11 Buy: 3, Sell: 90`
 * 
 */
function maxProfitWithKTransactions(prices, k) {
    // Write your code here.
      if (!prices.length) return 0;
      const profits = [];
      for (let t = 0; t < k + 1; t++) {
          const row = new Array(prices.length).fill(0);
          profits.push(row);
      } 
      for (let t = 1; t < k + 1; t++) {
          let maxThusFar = -Infinity;
          for (let d = 1; d < prices.length; d++) {
              maxThusFar = Math.max(maxThusFar, profits[t - 1][d - 1] - prices[d - 1]);
              profits[t][d] = Math.max(profits[t][d - 1], maxThusFar + prices[d]);
          }
      }
      return profits[k][prices.length - 1];
  }
  
  // Do not edit the line below.
  exports.maxProfitWithKTransactions = maxProfitWithKTransactions;