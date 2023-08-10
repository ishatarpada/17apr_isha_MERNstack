// do-while loop is exit contoll loop.
// WAP TO PRINT REVERSE NUMBER 1 TO N.

#include <stdio.h>
int main()
{
    int n;
    printf("enter a number : ");
    scanf("%d", &n);

    int i;
    i = n;
    do{
        printf("%d\n",i);
        i--;
    }while(i > 0);
    return 0;
}