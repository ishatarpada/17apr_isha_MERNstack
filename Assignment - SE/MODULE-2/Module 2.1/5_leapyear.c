//WAP to check if the given year is a leap year or not.

#include<stdio.h>
int main()
{
    int year;
    printf("Enter the year : ");
    scanf("%d", &year);
    if(year % 4 == 0) //condition for  year is the leap year 
    {
        printf("%d is leap year ", year); // if year is leap year than print year is leap year
    }
    else{
        printf("%d is not leap year ", year); // if year is not leap year than print year is not leap year
    }
}