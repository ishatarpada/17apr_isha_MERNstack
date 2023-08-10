// String isn't data type in c that's why we assign a array to the char datatype variable 
#include<stdio.h>
int main()
{
    char str[20]= {'a','b', 'c','d','e'};
    // char str[20]= {"abcde"};
    printf("\nYour string is:%s",str);

    // Iff you want to print single character
    // printf("\nYour string[3] is:%c",str[3]);

    return 0;
}