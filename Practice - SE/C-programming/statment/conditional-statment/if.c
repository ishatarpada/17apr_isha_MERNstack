#include<stdio.h>
int main()
{
    int no ;
    printf("Enter a number : ");
    scanf("%d",&no);
    if(no % 2 == 0)
    {
        printf("%d is even .", no);
    }
}