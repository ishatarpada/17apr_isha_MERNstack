// Goto statements is used to jump to the exact point
// in the code that is given by the label.
// WAP to check whether the no is prime or not
#include<stdio.h>
int main()
{
    int no, flag = 0;
    int i;
    printf("Enter the number to check whether the number is prime or not:");
    scanf("%d", &no);
    for(i = 2; i < no; i++)
    {
        if(no % i == 0)
        {
            flag = 1;
            goto prime;
        }
    }
    prime:
        if(flag == 0)
        {
            printf("The %d is prime.",no);  
        }
        else
        {
            printf("The %d is not prime." , no);
        }
    return 0;
}