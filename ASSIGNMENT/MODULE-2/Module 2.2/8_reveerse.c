//WAP to print number in reverse order e.g.: number = 64728 ---> reverse = 82746

/*#include<stdio.h>
int main()
{
    int n;
    printf("enter the number ");
    scanf("%d" , &n);

     while(n != 0) {
        int i = n % 10; //  last digit of the number        i = 64728 % 10 = 8     i = 6472 % 10 = 2   i = 647 % 10 = 7  i = 64 % 2 = 4  i = 6 % 10 = 6
        printf("%d", i); // print the last digit            8                      2                   7                 4               6
        n = n/10; // remove the last digit from the number  n = 64728 / 10 = 6472  n = 6472 / 10 = 647 n = 647 / 10 = 64 n = 64 / 10 = 6 n = 6 /10 = 0
    }
    return 0;
}
*/


#include<stdio.h>
int main()
{
    int array[20]; //{1 , 5 , 2 , 3}
    int i , n ;
    int sum = 0;

    printf("enter the length of number : ");
    scanf("%d" , &n);

    for( i = 0; i < n; i++)
    {
        printf("\nEnter the value of array[%d]:", i);
        scanf("%d", &array[i]);
    }
    for(i = 0; i < n; i++)
    {
        printf("\nThe array is: %d", array[i]); // 12543
    }
    printf("\n");
    for(i = n-1 ; i >= 0; i--)
    {
        printf("%d",array[i]);
    }
    return 0;
}
