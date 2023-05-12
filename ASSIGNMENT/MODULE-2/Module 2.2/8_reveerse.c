//WAP to print number in reverse order e.g.: number = 64728 ---> reverse = 82746

#include<stdio.h>
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
