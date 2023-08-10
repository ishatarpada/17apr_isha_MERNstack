#include<stdio.h>
int main()
{
    int a , b;
    printf("Enter the value : \na :");
    scanf("%d", &a);
    printf("b :");
    scanf("%d", &b);

    int add = a + b ;
    int sub = a - b ;
    int mul = a * b ;
    int div = a / b ;
    int modulo = a % b ;
    
    printf("addition of %d and %d is : %d " , a , b , add);
    printf("\nsubstraction of %d and %d is : %d", a , b , sub );
    printf("\nmultiplication of %d and %d is : %d" , a , b , mul);
    printf("\ndivision of %d and %d is : %d ", a , b, div);
    printf("\nmodulo of %d and %d is : %d" , a, b , modulo);

    a++;
    printf("\nincrement of %d is : %d", a,a);

    ++a;
    printf("\nincrement of %d is : %d", a,a);

    b--;
    printf("\ndecrement of %d is : %d", b,b);

    --b;
    printf("\ndecrement of %d is : %d", b,b);
}