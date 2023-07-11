//Write a program you have to make a summation of first and last Digit. (E.g., 1234 Ans: -5)

#include<stdio.h>
int main()
{
    int array[20]; //{1 , 5 , 2 , 3}
    int n ;
    
    for( int i = 0; i < 5; i++)
    {
        printf("\nEnter the value of array[%d]:", i);
        scanf("%d", &array[i]);
    }
    for(int i = 0; i < 5; i++)
    {
        printf("\nThe array is: %d", array[i]); // 12543
    }


    int i = 0;
    int sum = array[i] + array[5-i-1];
    printf("\nsummation of number :- %d" , sum);
    return 0;
}