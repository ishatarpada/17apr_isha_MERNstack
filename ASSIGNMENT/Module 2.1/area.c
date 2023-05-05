//write a program to find area of circle , ractangle and tringle

#include<stdio.h>

int main(){
    int a , b , r;
    printf("enter the value of a :");
    scanf("%d" , &a);
    printf("enter the value of b : ");
    scanf("%d", &b);
    printf("enter the value of r : ");
    scanf("%d", &r);

    float circle = 3.14*r*r; // area of circle
    float rectangle = a * b; //area of rectangle
    float triangle = 0.5 * a * b ; //area of tringle

    printf("area of circle is : %f " , circle);
    printf("\narea of rectangle  is : %f", rectangle );
    printf("\narea of triangle is : %f" , triangle);

    return 0;
}