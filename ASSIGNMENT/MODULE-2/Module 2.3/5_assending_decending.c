// WAP to take two Array input from user and sort them in ascending or descending order as per user’s choice.

#include <stdio.h>

int ascending(int array1[], int array2[], int n)
{
    for (int i = 0; i < n; i++)
    {
        for (int j = i + 1; j < n; j++)
        {
            if (array1[i] > array1[j])
            {
                int temp = array1[i];
                array1[i] = array1[j];
                array1[j] = temp;
            }
        }
    }

    for (int i = 0; i < n; i++)
    {
        for (int j = i + 1; j < n; j++)
        {
            if (array2[i] > array2[j])
            {
                int temp = array2[i];
                array2[i] = array2[j];
                array2[j] = temp;
            }
        }
    }
    return 1;
}

int descending(int array1[], int array2[], int n)
{
    for (int i = 0; i < n; ++i)
    {
        for (int j = i + 1; j < n; ++j)
        {
            if (array1[i] < array1[j])
            {
                int temp = array1[i];
                array1[i] = array1[j];
                array1[j] = temp;
            }
        }
    }

    for (int i = 0; i < n; ++i)
    {
        for (int j = i + 1; j < n; ++j)
        {
            if (array2[i] < array2[j])
            {
                int temp = array2[i];
                array2[i] = array2[j];
                array2[j] = temp;
            }
        }
    }
    return 1;
}

int main()
{
    int choise;
    int n;
    printf("enter the length of the number : ");
    scanf("%d", &n);
    int array1[n];
    int array2[n];

    // get the value of array from user.
    for (int i = 0; i < n; i++)
    {
        printf("\nEnter the value of array1[%d]:", i);
        scanf("%d", &array1[i]);
    }

    // print the array
    for (int i = 0; i < n; i++)
    {
        printf("\nThe array is: %d", array1[i]);
    }

    // get the value of array from user.
    for (int i = 0; i < n; i++)
    {
        printf("\nEnter the value of array2[%d]:", i);
        scanf("%d", &array2[i]);
    }

    // print the array
    for (int i = 0; i < n; i++)
    {
        printf("\nThe array is: %d", array2[i]);
    }

    printf("\navailable choise :");
    printf("\n1.Ascending \n2.Descending\n");
    printf("\n-----------------------------------------------------------------------------------------------------------------------------------");

    printf("\nenter your choise :");
    scanf("%d", &choise);

    switch (choise)
    {
    case 1:
        ascending(array1, array2, n);
        for (int i = 0; i < n; i++)
        {
            printf("%d ", array1[i]);
        }
        printf("\n");
        for (int i = 0; i < n; i++)
        {
            printf("%d ", array2[i]);
        }
        break;

    case 2:
        descending(array1, array2, n);
        for (int i = 0; i < n; i++)
        {
            printf("%d ", array1[i]);
        }
        printf("\n");
        for (int i = 0; i < n; i++)
        {
            printf("%d ", array2[i]);
        }
        break;

    default:
        printf("please enter a valid choise........");
        break;
    }
}