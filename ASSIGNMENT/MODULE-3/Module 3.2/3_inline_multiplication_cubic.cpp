// Write a program to find the multiplication values and the cubic values using inline function

#include <iostream>
using namespace std;

//global variable
int num1;
int num2;
int num3;

//class mul_cubic
class mul_cubic
{
public:

    //inline function

    //for multiplication
    inline int multiplication(int num1, int num2) { return num1 * num2; }

    //for cubic
    inline int cubic(int num1, int num2, int num3) { return num1 * num2 * num3; }
};

// main function
int main()
{
    // create object of mul_cubic()...
    mul_cubic m1;

    //take the input from user's
    cout << "enter the first number :";
    cin >> num1;
    cout << "enter the second number :";
    cin >> num2;
    cout << "enter the third number :";
    cin >> num3;

    // call the multiplication function
    cout << "multiplication of " << num1 << "and " << num2 << " :- " << m1.multiplication(num1, num2) << endl;

    // call the cubic function
    cout << "cubic of " << num1 << "and " << num2 << "and " << num3 << " :- " << m1.cubic(num1, num2, num3) << endl;
    return 0;
}