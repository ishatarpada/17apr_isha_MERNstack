#include<stdio.h>

int main()
{
    int n ;
    int i;
    printf("enter the length of the number : ");
    scanf("%d" , &n);
    int array[n] ;
    
    for( i = 0; i < n; i++)
    {
        printf("\nEnter the value of array[%d]:", i);
        scanf("%d", &array[i]);
    }
    for(i = 0; i < n; i++)
    {
        printf("\nThe array is: %d", array[i]); 
    }
    return 0;
}
