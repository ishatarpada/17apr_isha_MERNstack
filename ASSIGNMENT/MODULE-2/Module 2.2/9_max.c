//Write a program to find out the max from given number (E.g., No:- 1562 Max number is 6)

#include<stdio.h>
int main()
{
    int array[20]; //{1 , 2, 5, 4, 3}
    int i , n ;
    int max = 0;

    for( i = 0; i < 5; i++)
    {
        printf("\nEnter the value of array[%d]:", i);
        scanf("%d", &array[i]);
    }
    for(i = 0; i < 5; i++)
    {
        printf("\nThe array is: %d", array[i]); // 12543
    }

    for(int i = 0 ; i < 5 ; i ++)  
    {
        if(array[i] > max) // check the element of ith index is greater than to max variable or not 
        {
            max = array[i]; // if greter than than max value is change and max value is ith index value 
        }
    }
    printf("\n maximun number is the : %d" , max); //print the max digit.
    return 0;
}