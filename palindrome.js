function checkPalindrome(N, str) {
    //write code here
    let b=""; 
    let c="";
  for(let i=0; i<N; i++){
      b=b+str[i];}
     for(let j=N-1; j>=0; j--){
         c=c+str[i];
     }
     if(b==c){console.log("No");
     }
     else{
         console.log("Yes")
     
     
  }
  

