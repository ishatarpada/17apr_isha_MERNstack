// Structure is  a user define datatype
#include <stdio.h>
// define structure
struct student
{
    // define data member
    int no, sub1, sub2, sub3;
    char name[20];
    int total = sub1 + sub2 + sub3;
    int percantage= total / 3;
};
int main()
{

    struct student st[20];

    for (int i = 0; i < 5; i++)
    {
        printf("\nenter the number : ");
        scanf("%d", &st[i].no);

        printf("enter the name : ");
        scanf("%s", &st[i].name[20]);

        printf("enter the first subject name : ");
        scanf("%d", &st[i].sub1);

        printf("enter the second subject name : ");
        scanf("%d", &st[i].sub2);

        printf("enter the third subject name : ");
        scanf("%d", &st[i].sub3);

        printf("\n%d", st[i].total);

        printf("\n%d ", st[i].percantage);

        if (st[i].percantage > 50)
        {
            printf("\npass");
        }
        else
        {
            printf("\nfail");
        }
    }

    printf("\n---------------------------------------------------------------------------------------------------------------------------------------------\n");
    printf("no \t|\t name \t|\t sub1 \t|\t sub2 \t|\t sub3 \t|\t total \t|\t percantage \t|\tresult  ");
    printf("\n---------------------------------------------------------------------------------------------------------------------------------------------");
    for (int i = 0; i < 5; i++)
    {
        printf("\n%d\t|\t %s\t|\t %d\t|\t %d\t|\t %d\t|\t %dt|\t %d\t|\t ", st[i].no, st[i].name[20], st[i].sub1, st[i].sub2, st[i].sub3, st[i].total, st[i].percantage);
    }
    return 0;

    return 0;
}