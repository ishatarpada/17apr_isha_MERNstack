//WAP to print factorial of given number

#include<stdio.h>
int main()
{
    int fact = 1;
    int num ;
    printf("enter the number : ", num);
    scanf("%d", &num);

    for(int i = 1 ; i <= num ; i++)
    {
        fact = fact * i ;
    }
    printf("\nfactorial of %d is : %d", num , fact);
}