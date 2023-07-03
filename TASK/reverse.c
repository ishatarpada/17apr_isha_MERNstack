#include <stdio.h>
#include <string.h>

int main() {
    
    int len ;
    char str[20] ;
    printf("enter the string ");
    scanf ("%s",&str);
    
    len=strlen(str);
    printf("%d\n",len);
    
    for(int i = len - 1 ; i >= 0 ; i-- )
    {
        printf("%c", str[i]);
    }

    return 0;
}