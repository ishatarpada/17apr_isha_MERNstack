//WAP to make simple calculator using switch case(operation include Addition, Subtraction, Multiplication, Division, modulo)

#include<stdio.h>
int main ()
{
    char expression;
    int a , b ,ans;

    printf("available choise :");
    printf("\n1.Addition.('+')\n2.subtraction.('-')\n3.multiplication.('*')\n4.divison.('/')\n5.modulo.('%')\n"); //choise of calculator
    printf("\n-----------------------------------------------------------------------------------------------------------------------------------");

    printf("\nenter your choise :");
    scanf("%c",&expression);
    printf("\nenter value of a :");
    scanf("%d",&a);
    printf("\nenter value of b:");
    scanf("%d", &b);
    
    switch (expression)
    {
    case '+' : //for addition
        ans=a+b;
        printf("\naddition of %d and %d :%d",a ,b ,ans);
        break;
    
    case '-' :  //for substarction
        ans=a-b;
        printf("\nsubstraction of %d and %d :%d",a ,b ,ans);
        break;
    
    case '*' :  //for multiplication
        ans=a*b;
        printf("\nmultiplication of %d and %d :%d",a ,b ,ans);
        break;
    
    case '/' :  //for division
        ans=a/b;
        printf("\ndivision of %d and %d :%d",a ,b ,ans);
        break;

    case '%' : //for modulo
        ans=a%b;
        printf("\nmodulo of %d and %d :%d",a ,b ,ans);
        break;

    default:
        printf("please enter a valid choise........");
        break;
    }
}