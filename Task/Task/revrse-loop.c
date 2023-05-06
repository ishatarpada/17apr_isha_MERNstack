//write a program  print reverse number .

#include<stdio.h>
int main()
{
    int i;
    printf("Enter a number : ");
    scanf("%d" , &i);

    for(i = i ; i > 0 ; i--)
    {
        printf("%d\n" , i);
    }
    
    return 0;
}