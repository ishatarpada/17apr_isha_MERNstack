// Write a program to find the max number from given two numbers using friend function.

#include<iostream>
using namespace std;

//global variable
int num1;
int num2;

//maximum class
class maximum
{
public:
    //create the friend-function frnd()...
    friend int frnd(maximum &f1, int num1, int num2);
};

//friend-function frnd()...
int frnd(maximum &f1, int num1, int num2)
{
    //for find max numbers..
    if (num1 > num2)
    {
        cout << "\nmaximum number is : " << num1;
    }
    else
    {
        cout << "\nmaximum number is : " << num2;
    }
};

//main function
int main()
{
    //create the object of maximum class
    maximum mux;

    //take the input from user's..
    cout << "enter the first number :";
    cin >> num1;
    cout << "enter the second number :";
    cin >> num2;

    //call the frnd function...
    frnd(mux, num1, num2);
    return 0;
}
