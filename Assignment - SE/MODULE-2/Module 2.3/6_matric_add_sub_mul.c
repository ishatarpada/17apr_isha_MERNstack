// WAP to make addition, Subtraction and multiplication of two matrix using 2-D Array.

#include <stdio.h>

//addition of matrix
void addition(int array1[20][20], int array2[20][20], int sum[20][20], int n)
{
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            sum[i][j] = array1[i][j] + array2[i][j];
        }
    }
}

//substraction of matrix
void substraction(int array1[20][20], int array2[20][20], int sub[20][20], int n)
{
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            sub[i][j] = array1[i][j] - array2[i][j];
        }
    }
}

//multiplication of matrix
void multiplication(int array1[20][20], int array2[20][20], int mul[20][20], int n)
{
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            mul[i][j] = 0;

            for (int k = 0; k < 3; k++)
            {
                mul[i][j] += array1[i][k] * array2[k][j]; // int result[i][j] = array1[i][k] * array2[k][j];
                                                          // mul[i][j] = mul[i][j] + result[i][j]
            }
        }
    }
}

int main()
{
    int array1[20][20];
    int array2[20][20];
    int sum[20][20];
    int sub[20][20];
    int mul[20][20];
    int n;
    //printf("enter the size of array : ");
    //scanf("%d", &n);

    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            printf("enter the value : ");
            scanf("%d", &array1[i][j]);
        }
    }

    printf("\nmatrix is ........\n");
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            printf("%d  ", array1[i][j]);
        }
        printf("\n");
    }

    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            printf("enter the value : ");
            scanf("%d", &array2[i][j]);
        }
    }

    printf("\nmatrix is ........\n");
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            printf("%d  ", array2[i][j]);
        }
        printf("\n");
    }

    //addition of matrix
    printf("\n addition of the matrix ");
    printf("\n");
    addition(array1, array2, sum, n);
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            printf("%d  ", sum[i][j]);
        }
        printf("\n");
    }

    //substraction of matrix
    printf("\n substraction of the matrix ");
    printf("\n");
    substraction(array1, array2, sub, n);
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            printf("%d  ", sub[i][j]);
        }
        printf("\n");
    }

    //multiplication of matrix
    printf("\n multiplication of the matrix ");
    printf("\n");
    multiplication(array1, array2, mul, n);
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            printf("%d  ", mul[i][j]);
        }
        printf("\n");
    }
}