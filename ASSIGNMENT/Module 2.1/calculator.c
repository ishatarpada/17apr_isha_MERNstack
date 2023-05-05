//Write a program to make Simple calculator (to make addition, subtraction, multiplication, division and modulo)

#include<stdio.h>
int main()
{
    int a , b;
    printf("enter the value of a :");
    scanf("%d" , &a);
    printf("enter the value of b : ");
    scanf("%d", &b);

    //for addition
    int add = a + b ;
    printf("addition of %d and %d is : %d " , a , b , add);

    //for substraction
    int sub = a - b ; 
    printf("\nsubstraction of %d and %d is : %d", a , b , sub );

    //for multiplication
    int mul = a * b ;
    printf("\nmultiplication of %d and %d is : %d" , a , b , mul);

    //for division
    int div = a / b ;
    printf("\ndivision of %d and %d is : %d ", a , b, div);

    //for modulo
    int modulo = a % b ;
    printf("\nmodulo of %d and %d is : %d" , a, b , modulo);
  
    return 0;
}