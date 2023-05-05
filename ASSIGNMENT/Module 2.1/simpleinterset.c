//write a program to find simple interset

#include<stdio.h>

int main(){
    float p , r , t ;
    printf("enter the value of p :");
    scanf("%f" , &p);
    printf("enter the value of r : ");
    scanf("%f", &r);
    printf("enter the value of t : ");
    scanf("%f", &t);

    float amount = (p * r * t) / 100;

    printf("simple interst is : %f " , amount);

    return 0;
}