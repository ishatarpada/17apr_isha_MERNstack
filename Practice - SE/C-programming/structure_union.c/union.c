#include<stdio.h>

union student
{
    /* data */

    int id;
    char name[30];
};

int main()
{
    union student stud;
    
    printf("Enter the student's id: ");
    scanf("%d", &stud.id);
    printf("Enter the student's name: ");
    scanf("%s", &stud.name);
    printf("\nThe %s's id is: %d",stud.name ,stud.id);
    return 0;
}