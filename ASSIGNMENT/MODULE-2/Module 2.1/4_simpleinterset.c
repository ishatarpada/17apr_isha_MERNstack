//write a program to find simple interset

#include<stdio.h>

int main(){
    float p , r , t ;
    printf("enter the value of p :");
    scanf("%f" , &p); //get the value of p
    printf("enter the value of r : ");
    scanf("%f", &r);    //get the value of r
    printf("enter the value of t : ");
    scanf("%f", &t);    //get the value of t

    float amount = (p * r * t) / 100; //formula of simple interst

    printf("simple interst is : %f " , amount); //print the simple intert

    return 0;
}