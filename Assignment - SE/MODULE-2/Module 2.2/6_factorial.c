//WAP to print factorial of given number

#include<stdio.h>
int main()
{
    int fact = 1;
    int num ;
    printf("enter the number : ", num);
    scanf("%d", &num);

    //for find the factorial => n! = n * (n-1)! => n! = n* (n-1) * (n-2) * ... * 3 * 2 * 1
    for(int i = 1 ; i <= num ; i++)
    {
        fact = fact * i ;   
    }
    printf("\nfactorial of %d is : %d", num , fact); //print the factorial of number 
}