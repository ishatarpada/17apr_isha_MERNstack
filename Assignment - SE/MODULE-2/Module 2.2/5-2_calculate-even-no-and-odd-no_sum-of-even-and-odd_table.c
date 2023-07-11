//WAP to take 10 no. Input from user and find out …
//How many Even numbers are there
//How many odd numbers are there
// Sum of even numbers
// Sum of odd numbers 
//WAP to print table up to given numbers.

#include<stdio.h>
int main()
{
    int num;
    int even = 0;
    int odd = 0;
    int sum = 0;
    int sum_of_even = 0;
    int sum_of_odd = 0;
    
    for(int i = 0 ; i < 10 ; i++)
    {
        printf("\nenter the number :");
        scanf("\n%d" , &num);

        //calculate the odd & even numbers 
        if(num % 2 == 0)
        {
            even++;
            sum_of_even= sum_of_even + num ; //sum of even numbers
        }
        else
        {
           odd++;
           sum_of_odd= sum_of_odd + num ; //for sum of odd numbers
        }

        //for sum
        sum = sum + num;

        //for printing the table 
        for(int j = 1; j <= 10 ; j++)
        {
            int ans = num * j ;
            printf("\n%d * %d = %d", num, j, ans);
        }

    }
    printf("\nTotal even numbers is : %d",even); // printing even numbers
    printf("\nTotal odd numbers is : %d", odd); // printing odd numbers

    //calculate the sum 
    printf("\nSum of all the numbers is : %d" , sum);
    printf("\nSum of all even numbers is : %d" , sum_of_even);
    printf("\nSum of all odd numbers is : %d " , sum_of_odd);
}
