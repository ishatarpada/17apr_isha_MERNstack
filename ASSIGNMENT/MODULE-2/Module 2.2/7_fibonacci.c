//WAP to print Fibonacci series up to given numbers

#include<stdio.h>
int main()
{
    int a = 0;
    int b = 1 ;
    int n;

    printf("enter the first n number of fibonacci series :- ");
    scanf("%d" ,&n);
    for(int i = 0 ; i < 10 ; i++)
    {
        int sum = a + b ;
        printf("%d " , sum);

        a = b ;
        b = sum ;
    }
    
}