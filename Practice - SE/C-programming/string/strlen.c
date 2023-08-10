//strlen() function used for count the length of string .

#include<stdio.h>
#include<string.h>

int main()
{
    char str[20];

    printf("enter the string :-");
    scanf("%s" , &str);

    int len = strlen(str);
    printf("\nlength of the %s is %d " , str , len );
}