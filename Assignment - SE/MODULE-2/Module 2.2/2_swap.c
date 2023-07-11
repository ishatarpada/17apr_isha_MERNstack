//WAP to swap two numbers without using third variable

#include<stdio.h>
int main()
{

    int a , b ; // 2 , 3
    printf("enter the value of a :");
    scanf("%d" , &a);
    printf("enter the value of b : ");
    scanf("%d", &b);

    a = a - b;  // a = 2 - 3  = -1 
    b = a + b;  // b = -1 + 3 = 2
    a = b - a;  // a = 2 - -1 = 3
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