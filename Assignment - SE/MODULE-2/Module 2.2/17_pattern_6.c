//patterns

/*
    A
    A B 
    A B C
    A B C D
    A B C D E
*/

#include<stdio.h>
int main()
{
    int i , j;

    for(i = 0 ; i < 5 ; i++)
    {
        char count = 'A';
        for(j = 0 ; j <= i ; j++)
        {
           printf("%c ",count);
            count++;
        }
        printf("\n");
    }
}