#include <stdio.h>
int main()
{
    char str[1000];
    int count = 0;

    printf("enter the value of string : ");
    scanf("%s", &str);

    for (int i = 0; i < 10; i++)
    {
        if(str[i] == '\0')
        {
            break;
        }
        count++;
    }
    printf("\nlenth of the string is %d", count);
}