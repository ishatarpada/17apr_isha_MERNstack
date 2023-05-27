//WAP Find out length of string without using inbuilt function

#include <stdio.h>
int main()
{
    char str[1000];
    int count = 0;

    printf("enter the value of string : ");
    scanf("%s", &str);

    for (int i = 0; i < 10; i++)
    {
        if(str[i] == '\0') //str[i] is null character than break 
        {
            break;
        }
        count++;
    }
    printf("\nlenth of the string is %d", count); //print the length of string 
}