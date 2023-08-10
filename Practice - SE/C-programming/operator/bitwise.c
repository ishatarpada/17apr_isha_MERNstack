#include<stdio.h>

int main()
{
    int a , b;
    printf("Enter the value of a : ");
    scanf("%d" , &a);
    printf("Enter the value of b : ");
    scanf("%d" , &b);

    printf("bitwise operator and : %d" , a&b);
    printf("\nbitwise operator or : %d" , a|b);
    printf("\nbitwise operator complement : %d" , ~a);
    printf("\nbitwise operator shift-left : %d" , a<<1);
    printf("\nbitwise operator shift-right : %d" , b>>1);

    return 0;
}