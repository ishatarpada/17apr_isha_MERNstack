//patterns

/*
    A
    B C
    D E F
    G H I J
    K L M N O
*/

#include<stdio.h>
int main()
{
    int i , j;
    int count = 1;

    for(i = 0 ; i < 5 ; i++)
    {
        for(j = 0 ; j <= i ; j++)
        {
           printf("%d ",count);
            count++;
        }
        printf("\n");
    }
}