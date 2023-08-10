#include<stdio.h>

int main(){

    int num;
    printf("Enter the number : ");
    scanf("%d" , &num);
    (num > 0) ? (printf("%d is positive number ", num)) : (printf("%d is nagative number ",num));
    return 0;
}