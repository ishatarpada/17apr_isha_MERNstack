//write a program to check the user give vote or no .

#include<stdio.h>
int main()
{
    int age;
    printf("enter a your age : ");
    scanf("%d", &age);

    (age > 18 && age < 60) ? (printf("user is eligible .")) : (printf("user is not eligible. ")) ;
}