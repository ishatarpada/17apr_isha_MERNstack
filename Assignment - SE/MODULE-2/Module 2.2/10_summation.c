//Write a program make a summation of given number (E.g., 1523 Ans: -11)

#include<stdio.h>
int main()
{
    int array[20]; //{1 , 5 , 2 , 3}
    int i , n ;
    int sum = 0;

    for( i = 0; i < 5; i++)
    {
        printf("\nEnter the value of array[%d]:", i);
        scanf("%d", &array[i]);
    }
    for(i = 0; i < 5; i++)
    {
        printf("\nThe array is: %d", array[i]); // 12543
    }

    for(int i = 0 ; i < 5 ; i++)
    {
        sum = sum + array[i];
    }
    printf("\nsummation of number :- %d" , sum);
    return 0;
}