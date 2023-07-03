#include <stdio.h>

/*int table(int n)
{
    for (int i = 0; i < 10; i++)
    {
        int ans = n * i;
        fprintf(fptr, "\n%d * %d = %d", n, i, ans);
    }
}*/

int main()
{
    FILE *fptr;
    int n;
    char str[20];
    printf("enter the number : ");
    scanf("%d", &n);
    fptr = fopen("table.txt", "w");
    for (int i = 1; i <= 10; i++)
    {
        int ans = n * i;
        fprintf(fptr, "\n%d*%d=%d", n, i, ans);
    }
    fclose(fptr);

    fptr = fopen("table.txt", "r");
    for (int i = 1; i <= 10; i++)
    {
        
        fscanf(fptr, "%s", &str);
        printf("%s\n", str);
        // printf("\n%d * %d = %d", n, i, ans);
    }
    fclose(fptr);
    /*int i = 0 ;
    while(i != EOF)
    {
        int ans = n * i;
        fprintf(fptr, "\n%d * %d = %d", n, i, ans);
        fprintf(fptr, "table.txt", "w");
        fscanf(fptr, "%s", &str);
        printf("\n%s", str);
        i++;
    }*/
    return 0;
}