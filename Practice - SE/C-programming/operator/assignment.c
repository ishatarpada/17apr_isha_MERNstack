#include<stdio.h>
int main()
{
    int a , b;
    printf("Enter the value : \na :");
    scanf("%d", &a);
    printf("b :");
    scanf("%d", &b);

    a+=b;
    printf("addition of %d and %d is : %d " , a , b , a);

    a-=b;
    printf("\nsubstraction of %d and %d is : %d", a , b , a );

    a*=b;
    printf("\nmultiplication of %d and %d is : %d" , a , b , a);

    a/=b;
    printf("\ndivision of %d and %d is : %d ", a , b, a);

    a%=b;
    printf("\nmodulo of %d and %d is : %d" , a, b , a);

   return 0;
}