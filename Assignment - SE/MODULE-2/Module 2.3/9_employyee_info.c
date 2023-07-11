// Write a program of structure employee that provides the following information -print and display empno, empname, address and age
#include <stdio.h>

struct employe 
{ 
    // data mamber 
    int empno;
    char empname[30];
    char address[1000];
    int age;
} emp; // emp => object
int main()
{
    printf("Enter the employee no: ");
    scanf("%d", &emp.empno);

    printf("Enter the employee's name: ");
    scanf("%s", &emp.empname);    

    printf("Enter the employee's age : ");
    scanf("%d" , &emp.age);

    printf("Enter the employee addres : ");
    scanf("%s" , &emp.address);

    printf("\nThe %s's  no  is %d and address is %s and  age is %d", emp.empname, emp.empno , emp.address, emp.age);
    return 0;
}