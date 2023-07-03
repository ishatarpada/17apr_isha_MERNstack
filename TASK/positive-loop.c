//write a program to take value and print only positive value.

#include<stdio.h>
int main()
{
    int i , n ;
    printf("enter a value : ");
    scanf("%d",&i);
    printf("enter a number : ");
    scanf("%d",&n);

    for(i = i ; i < n ; i++ )
    {
        if(i < 0)
        {
            continue;
        }
        printf("%d\n",i);
    }

    return 0;
}