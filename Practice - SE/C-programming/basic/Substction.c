#include<stdio.h>
int main(){
    int a , b;
    int ans ;
    printf("enter the value of a :");
    scanf("%d", &a);
    printf("enter the value of b : ");
    scanf("%d", &b);
    ans = a - b;
    printf("\n Substraction of a and b %d", ans);
    return 0;
}