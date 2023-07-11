#include<stdio.h>

int main(){

    char a;
    printf("Enter the value of a : ");
    scanf("%c",&a );

    if(a >= 'A' && a <= 'Z')
    {
        printf("%c is uppercase latter ",a);
    }
    else if (a >= 'a' && a <= 'z')
    {
        printf("%c is lowercase latter ",a);
    }
    
    else{
        printf("%c is integer value",a);
    }

    return 0;
}