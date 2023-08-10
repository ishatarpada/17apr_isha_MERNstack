#include<stdio.h>
int main()
{
    int no;
    printf("enter a no : ");
    scanf("%d",&no);

    if(no > 0)
    {
        printf("%d is positive.",no);
    }
    else if(no < 0)
    {
        printf("%d is nagative .",no);
    }
    else
    {
        printf("%d is zero .",no);
    }

    
}