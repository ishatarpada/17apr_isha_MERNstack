//WAP to convert years into days and days into years

#include<stdio.h>
int main()
{
    float year , day;
    printf("Enter the year : ");
    scanf("%f", &year);
    printf("Enter the day : ");
    scanf("%f", &day);

    float ans = day / 365; //days to year 
    float ans1 = year * 365; // year to day
    printf("%f days is equal %f year ", day ,ans );
    printf("\n%f years is equal %f days", year , ans1 );

    return 0; 
}