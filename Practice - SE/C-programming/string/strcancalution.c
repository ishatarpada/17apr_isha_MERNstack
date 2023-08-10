// strcat() function is used for merge two string.

#include <stdio.h>
int main()
{
    char fnm[20];
    char lnm[20];

    printf("enter the first name :-");
    scanf("%s", &fnm);

    printf("enter the last name :-");
    scanf("%s", &lnm);

    strcat(fnm, lnm);
    printf("\nFull Name is %s", fnm);

    return 0;
}