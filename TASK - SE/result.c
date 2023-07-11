#include <stdio.h>
int main()
{
    int no, sub1, sub2, sub3;
    char name[20];
    float percantage, total;
    int n;
    total = sub1 + sub2 + sub3;
    percantage = total / 3;

    printf("enter the total no of student : ");
    scanf("%d", &n);

    for (int i = 0; i < n; i++)
    {
        printf("\nenter the number : ");
        scanf("%d", &no);

        printf("enter the name : ");
        scanf("%s", &name[20]);

        printf("enter the first subject name : ");
        scanf("%d", &sub1);

        printf("enter the second subject name : ");
        scanf("%d", &sub2);

        printf("enter the third subject name : ");
        scanf("%d", &sub3);

        printf("\n%d", sub1 + sub2 + sub3);

        printf("\n%d ", (sub1 + sub2 + sub3) / 3);

        if (percantage > 50)
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
    for (int i = 0; i < n; i++)
    {
        printf("\n%d\t|\t %s\t|\t %d\t|\t %d\t|\t %d\t|\t %dt|\t %d\t|\t ", no, name[20], sub1, sub2, sub3, total, percantage);
    }
    return 0;
}
