// Break is ude to stop the loop at specific condition
#include<stdio.h>
int main()
{
    int i;
    for (i = 0; i < 10; i++)
    {
        if (i == 5){
            break;
        }
        printf("%d\n", i);
    }
    return 0;
}