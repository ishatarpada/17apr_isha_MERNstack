// WAP to reverse a string and check that the string is palindrome or not
#include<stdio.h>
#include <string.h>

void reverse(char str[20], int n)
{
    for (int i = n ; i >= 0; i--)
    {
        printf("%c", str[i]);
    }
}

void palindrom(char str[20] , int n)
{
    int i = 0;
    while(i < n)
    {
        if(str[i] != str[n]) //if str[i] and str[n] are not same than print string is not palindrom 
        {
           printf("\nstring is not palindrom"); 
           return;
        }
           i++;
           n--;
    }
     printf("\nstring is  palindrom"); //other wise string is palindrome 
}

int main()
{

    int len;
    char str[20];
    printf("enter the string ");
    scanf("%s", &str);

    len = strlen(str); // count the length of string 
    printf("%d\n", len); 

    reverse(str , len-1);//call the reverse function
    palindrom(str , len-1);//call the check string is palindrom or not function

    return 0;
}