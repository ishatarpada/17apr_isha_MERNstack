//pointer means it is points to address of varible .

#include<stdio.h>

int main()
{
    int* ptr;
    int a = 5;
    ptr = &a;

    printf("\n value of a : %d" , a);
    printf("\n address of a : %d" ,&a);
    printf("\naddress of a : %d" ,ptr);

    ptr++;
    printf("\naddress of a : %d" ,ptr);

    ptr--;
    printf("\naddress of a : %d" ,ptr);

   

    return 0;
}