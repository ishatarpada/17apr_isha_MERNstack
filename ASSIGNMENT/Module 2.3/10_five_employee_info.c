// Write a program of structure for five employee that provides the following information -print and display empno, empname, address and age.

#include <stdio.h>

struct employee
{
    //data member 
    int id;
    char name[30];
    char address[1000];
    int age;
};
int main()
{
    // defining the object
    struct employee emp[20];
    int i;
    for (i = 0; i < 5; i++)
    {
        printf("Enter the employee's id: ");
        scanf("%d", &emp[i].id);

        printf("Enter the employee's name: ");
        scanf("%s", &emp[i].name);

        printf("Enter the employee's age : ");
        scanf("%d", &emp[i].age);

        printf("Enter the employee addres : ");
        scanf("%s", &emp[i].address);
    }
    printf("\n-------------------------------------------------------------------------------------------------------------\n");
    printf("Name\t\t|\t\tId\t\t|\t\taddress\t\t|\t\tage");
    printf("\n---------------------------------------------------------------------------------------------------------------");
    for (i = 0; i < 5; i++)
    {
        printf("\n%s\t\t|\t\t%d\t\t|\t\t%s\t\t|\t\t%d", emp[i].name, emp[i].id , emp[i].address, emp[i].age);
    }

    return 0;
}