//patterns

/*
    1
    1   0   
    1   0   1   
    1   0   1   0
    1   0   1   0   1
*/

#include<stdio.h>
int main()
{
    int i , j;

    for(i = 1 ; i <= 5 ; i++)
    {
        for(j = 1 ; j <= i ; j++)
        {
            printf("%d ", j%2);
        }
        printf("\n");
    }
}

/*
#include<stdio.h>
int main()
{
    int i , j;

    for(i = 1 ; i <= 5 ; i++)
    {
        for(j = 1 ; j <= i ; j++)
        {
            if(j % 2 == 0)
            {
                printf("1");
            }
            printf("0");
        }
        printf("\n");
    }
}
*/