/*

                 1
                1 1
               1 2 1
              1 2 2 1
             1 2 3 2 1
              2 3 3 2
               3 4 3
                4 4
                 5
*/

//--------------------------------------------------------------------------------------------------------------------------------------------------------//

#include <stdio.h>

int main()
{
    int n;
    printf("Enter the number of rows: ");
    scanf("%d", &n);

    for (int i = 0; i <= n; i++)
    {
        for (int j = 0; j < n - i; j++)
        {
            printf(" ");
        }

        for (int j = 0; j <= i; j++)
        {
            printf("%d", j+1);
        }

        for (int j = i; j >= 1; j--)
        {
            printf("%d", j);
        }
        printf("\n");
    }
    for (int i = 0; i <= n; i++)
    {
        for (int j = 0; j <= i - 1; j++)
        {
            printf(" ");
        }

        for (int j = i; j <= n; j++)
        {
            printf("%d", j+1);
        }

        for (int j = n - 1; j >= i; j--)
        {
            printf("%d", j);
        }

        printf("\n");
    }

    /*for (int i = 1; i < n; i++)
    {
        for (int j = 0; j < i; j++)
        {
            printf(" ");
        }
        for (int j = 0; j < 5 - i; j++)
        {
            printf("%d ", n - i);
        }
        printf("\n");
    }
    */
    return 0;
}