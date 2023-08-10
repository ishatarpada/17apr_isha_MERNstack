// Structure is  a user define datatype
#include<stdio.h>
// define structure
struct student{
    // define data member
    int id;
    char name[30];
};
int main()
{
    //defining the object
    struct student st[20];
    int i;
    for (i = 0; i < 5; i++)
    {
        printf("Enter the student's id: ");
        scanf("%d", &st[i].id);
        printf("Enter the student's name: ");
        scanf("%s", &st[i].name);
    }
    printf("\n-------------------------------------\n");
    printf("Name:\t|\tId:");
    printf("\n-------------------------------------");
    for (i = 0; i < 5; i++)
    {
        // printf("\nThe %s's id is: %d",st[i].name ,st[i].id);
        printf("\n%s\t|\t%d",st[i].name ,st[i].id);
    }
    
    return 0;
}