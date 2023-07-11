#include<stdio.h>
int main()
{
    int array[20][20];
    int value ;

    for(int i = 0 ; i < 3 ; i++)
    {
        for(int j = 0 ; j < 3 ; j++)
        {
            printf("enter the value : ");
            scanf("%d" , &array[i][j]);
        }
    }

    printf("\nmatrix is ........\n");
    for(int i = 0 ; i < 3 ; i++)
    {
        for(int j = 0 ; j < 3 ; j++)
        {
            printf("%d  " , array[i][j]);
        }
        printf("\n");
    }
}