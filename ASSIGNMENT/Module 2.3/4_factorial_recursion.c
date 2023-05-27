// WAP to find factorial using recursion.

#include <stdio.h>

int factorial(int no)
{
    if (no <= 1)
    {
        return 1;
    }

    else
    {
        return no * factorial(no - 1); //recursion
    }
}
int main()
{
    int no;

    printf("enter the  number : ");
    scanf("%d", &no);

    printf("\n factorial of %d is : %d", no, factorial(no)); // print the number of factorial
}