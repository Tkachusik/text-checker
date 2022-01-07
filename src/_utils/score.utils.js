const longestCommonSubsequence = (t1, t2) => {
    const text1 = t1.split(" ");
    const text2 = t2.split(" ");

    const dp = Array(text1.length + 1)
      .fill(0)
      .map(() => Array(text2.length + 1).fill(0));

    let maxLength = 0;
    for (let i = 1; i <= text1.length; i++) {
        for (let j = 1; j <= text2.length; j++) {
          if(text1[i-1] === text2[j-1]) {
            dp[i][j] = dp[i-1][j-1] + 1;
          } else {
              dp[i][j]= Math.max(dp[i][j-1], dp[i-1][j]);
            
        }

    }
    
  };
  return dp[text1.length][text2.length];
};

export default longestCommonSubsequence;
