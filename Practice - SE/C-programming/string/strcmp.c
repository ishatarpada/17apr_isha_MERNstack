//strcmp() function used for compair the string.

#include<stdio.h>
#include<string.h>
int main()
{
    char str1[20];
    char str2[20];

    printf("enter the first string : ");
    scanf("%s" ,&str1);

    printf("enter the second string : ");
    scanf("%s" , &str2);

    int value = strcmp(str1 , str2);

    if(value > 0)
    {
        printf("\n%s is max string ." , str1);
    }
    else if (value == 0)
    {
        printf("\n%s and %s both are same string ." , str1 , str2);
    }
    else
    {
        printf("\n%s is max string ." , str2);
    }
    return 0;
}