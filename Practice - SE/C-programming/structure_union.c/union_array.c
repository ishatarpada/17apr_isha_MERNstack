#include <stdio.h>

union student
{
    /* data */

    int id;
    char name[30];
};

int main()
{
    union student stud;
    int i ;
    for (int i = 0; i < 5; i++)
    {
        printf("Enter the student's id: ");
        scanf("%d", &stud.id);
        printf("Enter the student's name: ");
        scanf("%s", &stud.name);
    }
    printf("\n-------------------------------------\n");
    printf("Name:\t|\tId:");
    printf("\n-------------------------------------");
    for (int i = 0; i < 5; i++)
    {
        printf("\n\n%s\t|\t%d", stud.name, stud.id);
    }
    return 0;
}