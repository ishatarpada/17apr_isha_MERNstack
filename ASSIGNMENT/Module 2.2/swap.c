//WAP to swap two numbers without using third variable

#include<stdio.h>
int main()
{

    int a , b ; // 2 , 3
    printf("enter the value of a :");
    scanf("%d" , &a);
    printf("enter the value of b : ");
    scanf("%d", &b);

    a = a - b; 
    b = a + b;
    a = b - a;
    printf("\nnow value of first number is : %d"  , a );
    printf("\nnow value of second number is : %d"  , b );
    
    //using third variable
    /*temp = a;
    a = b;
    b = temp;

    printf("now value of first number is : %d"  , a );
    printf("\nnow value of second number is : %d"  , b );*/
    return 0;
}