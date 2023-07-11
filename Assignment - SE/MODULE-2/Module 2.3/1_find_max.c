// Write a program to find out the max number from given array using function.

#include <stdio.h>

int findMax(int array[], int n)
{
    int max = 0;
    for (int i = 0; i < n; i++)
    {
        if (array[i] > max) //check the condition array of i greater than max value or not . 
        {
            max = array[i]; //if arraay of i is max than max value change and now =>  max = array[i]
        }
    }
    return max;
}
int main()
{
    int n;
    printf("enter the length of the number : ");
    scanf("%d", &n);
    int array[n];

    //get the value of array from user.
    for (int i = 0; i < n; i++)
    {
        printf("\nEnter the value of array[%d]:", i);
        scanf("%d", &array[i]);
    }

    //print the array
    for (int i = 0; i < n; i++)
    {
        printf("\nThe array is: %d", array[i]);
    }

    int maxNum = findMax(array, n); //call the function .
    printf("\nThe maximum number is: %d\n", maxNum); //print the max value .
    return 0;
}