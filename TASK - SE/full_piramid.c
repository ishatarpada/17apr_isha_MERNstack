/*    
        1
      1 2 1
    1 2 3 2 1
  1 2 3 4 3 2 1
1 2 3 4 5 4 3 2 1
*/
#include<stdio.h>
int main()
{
    int i , j , k , l;
    int n = 5;

    for(i = 0 ; i <= n ; i++)//outer loop
    {  
      for(j = 0 ; j <= n-1-i ; j++)//inner loop
      {
        printf("  ");// print the spaces
      } 
       for(k = 1; k <= i; k++) //inner loop
       {
            printf("%d ", k); // print the numbers 
        }
        for(l = i-1; l >= 1; l--)//inner loop
        {
            printf("%d ", l); // print the numbers 
        }
      printf("\n");
    }
}