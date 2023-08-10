#include<stdio.h>

int main()
{
    int a , b;
    printf("Enter the value of a : ");
    scanf("%d" , &a);
    printf("Enter the value of b : ");
    scanf("%d" , &b);

    //logical and
    if(a>0 && b<0)
    {
        printf("True");
    }
    else{
        printf("\nFalse");
    }

    //logical or
    if(a>0 || b<0)
    {
        printf("\nTrue");
    }
    else{
        printf("\nFalse");
    }

    //logical not 
    if(!(a>0 || b<0))
    {
        printf("\nTrue");
    }
    else{
        printf("\nFalse");
    }
}