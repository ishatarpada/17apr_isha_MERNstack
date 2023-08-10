#include<stdio.h>

int main(){
    int a ;
    int ans , ans1;
    printf("Enter the value of a :");
    scanf("%d", &a);
    ans = a++;
    ans1 = ++a; 
    printf("\n Increment of a  %d", ans);
    printf("\n Increment of a  %d", ans1);
    return 0;

}