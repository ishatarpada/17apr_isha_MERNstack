// WAP to find reverse of string using recursion

#include <stdio.h>
#include <string.h>

void reverse(char str[20], int i, int n)
{
    if (i >= n)  // if value of i greater than or equal to n  than return 
    {
        return ;
    }
    else // else swap the value of i and n th index 
    {
        char ch = str[i]; 
        str[i] = str[n];
        str[n] = ch;
        reverse(str, i+1, n-1); //call the function it self in function
    }
}

int main()
{
    int len;

    char str[20];
    printf("enter the string ");
    scanf("%s", &str);

    int n = strlen(str);
    reverse(str, 0, n - 1);// call the reverse function
    printf("revrese string is : %s" , str); // print the reverse string 

    return 0;
}