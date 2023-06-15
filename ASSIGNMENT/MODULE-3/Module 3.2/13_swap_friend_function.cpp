// Write a program to swap the two numbers using friend function without using third variable.

#include <iostream>
using namespace std;

//global variable
int num1;
int num2;

//swap class
class swap
{
public:
    //create friend function (frnd())
    friend int frnd(swap &f1, int num1 , int num2);
};

//friend-function frnd()
int frnd(swap &f1, int a , int b)
{
    //swapping
    num1 = num1 - num2; 
    num2 = num1 + num2;    
    num1 = num2 - num1; 

    //print the numbers after swapping..
    cout<<"\nnow value of first number is : "<<num1;
    cout<<"\nnow value of second number is : "<<num2;
};

//main function
int main()
{
    //create object of swap class...
    swap s1;

    //take the input from the user's
    cout << "enter the first number :";
    cin >> num1;
    cout << "enter the second number :";
    cin >> num2;

    //print the value of numbers
    cout<<"\n value of first number is : "<<num1;
    cout<<"\n value of second number is : "<<num2;

    //after swaping...
    cout<<"--------------------------------------------AFTER SWAPPING--------------------------------------------"
    //call the friend function...
    frnd(s1, num1 , num2);
    return 0;
}
