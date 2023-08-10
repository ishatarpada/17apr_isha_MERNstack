#include<stdio.h>
int main()
{
    int a , b;
    printf("Enter the value : \na :");
    scanf("%d", &a);
    printf("b :");
    scanf("%d", &b);

    if(a>b){
        printf("%d is grater than %d", a, b);
    }
    else
    {
        printf("\n%d is not grater than %d", a, b);
    }
    printf("\n-------------------------------------");

    if(a<b){
        printf("\n%d is less than %d", a, b);
    }
    else
    {
        printf("\n%d is not less than %d", a, b);
    }
    printf("\n-------------------------------------");

    if(a >= b){
        printf("\n%d is grater than equal to  %d", a, b);
    }
    else
    {
        printf("\n%d is not grater than equal to  %d", a, b);
    }
    printf("\n-------------------------------------");

    if(a<=b){
        printf("\n%d is less than equal to  %d", a, b);
    }
    else
    {
        printf("\n%d is not less than equal to  %d", a, b);
    }
    printf("\n-------------------------------------");

    if(a == b)
    {
        printf("\n%d is  equal to  %d", a, b);
    }
    printf("\n-------------------------------------");

    if(a != b)
    {
        printf("\n%d is not equal to  %d", a, b);
    }
    return 0;
}