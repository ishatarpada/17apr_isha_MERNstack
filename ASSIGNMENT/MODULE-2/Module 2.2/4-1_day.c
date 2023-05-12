//Monday to Sunday using switch case

#include<stdio.h>
int main()
{
    int days;
    printf("<---------------------------------------------------days------------------------------------------------------->");
    printf("\n1.Sunday\n2.Monday\n3.Tuesday\n4.Wednesday\n5.Thursday\n6.Friday\n7.Saturday\n");

    printf("enter a days : ");
    scanf("%d",&days);

    switch (days)
    {
    case 1:
        printf("Sunday");
        break;
    
    case 2:
        printf("Monday");
        break;

    case 3:
        printf("Tuesday");
        break;

    case 4:
        printf("Wednesday");
        break;

    case 5:
        printf("Thursday");
        break;

    case 6:
        printf("Friday");
        break;

    case 7:
        printf("Saturday");
        break;

    default:
        printf("please!... enter a valid choice");
        break;
    }
    return 0;

}