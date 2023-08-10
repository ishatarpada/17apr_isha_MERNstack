//strcpy() function used for copy string to another string .

#include<stdio.h>
#include<string.h>

int main()
{
    char str1[20];
    char str2[20];

    printf("Enter the string :- ");
    scanf("%s" , &str1);

    strcpy(str2 , str1);
    printf("now string is : %s" , str1);
    
    return 0;
}