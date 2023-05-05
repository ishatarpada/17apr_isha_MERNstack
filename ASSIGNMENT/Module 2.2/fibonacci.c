//WAP to print Fibonacci series up to given numbers

#include<stdio.h>
int main()
{
    int a = 0;
    int b = 1 ;
    for(int i = 0 ; i < 10 ; i++)
    {
        int sum = a + b ;
        printf("%d " , sum);

        a = b ;
        b = sum ;
    }
    
}