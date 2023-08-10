#include<stdio.h>
int main()
{
    int a, b, c;
    printf("enter the value of a : ");
    scanf("%d",&a);
    printf("enter the value of b : ");
    scanf("%d",&b);
    printf("enter the value of c : ");
    scanf("%d",&c);

    if(a>b)
    {
        if(a>c)
        {
            printf("%d is max .",a);
        }
        else
        {
            printf("%d is max .",c);
        }
    }
   else
    {
        if(b>c)
        {
            printf("%d is max .",b);
        }
        else
        {
            printf("%d is max .",c);
        }
    }

}