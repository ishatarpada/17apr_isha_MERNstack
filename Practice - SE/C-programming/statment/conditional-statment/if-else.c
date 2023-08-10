#include<stdio.h>
int main()
{
    int age;
    printf("enter a your age : ");
    scanf("%d", &age);

    if(age > 18 && age < 60)
    {
        printf("user is eligible .");
    }
    else
    {
        printf("user is not eligible. ");
    }
}