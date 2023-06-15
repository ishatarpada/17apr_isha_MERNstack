// Write a program to Mathematic operation like Addition, Subtraction, Multiplication, Division Of two number using different parameters and Function Overloading

#include <iostream>
using namespace std;

//gloabal varible

int a;
int b;
int c;

float num1;
float num2;
float num3;

//class calculator
class Calculator
{
public:
    //create function calc 
    //function overloading

    //for-addition
    int calc(int a, int b, int c)
    {
        cout << "\n"<< a << " and " << b << " and " << c << " addition is : " << a + b + c<<endl;
        return 0;
    }

    //for-substraction
    int calc(int a, int b)
    {
        cout << "\n"<< a << " and " << b << " substraction is : " << a - b<<endl;
        return 0;
    }

    //for-multiplication
    float calc(float num1, float num2, float num3)
    {
        cout << "\n"<< num1 << " and " << num2 << " and " << num3 << " multiplication is : " << num1 * num2 * num3<<endl;
        return 0;
    }

    //for-divison
    float calc(float num1, float num2)
    {
        cout << "\n"<< num1 << " and " << num2 << " divison is : " << num1 / num2<<endl;
        return 0;
    }
};

//main function
int main()
{
    //create the object of calculator 
    Calculator c1;

    //take the input from the user's
    cout << "enter the first number :";
    cin >> a;
    cout << "enter the second number :";
    cin >> b;
    cout << "enter the third number :";
    cin >> c;

    //take the input from the user's
    cout << "enter the first number :";
    cin >> num1;
    cout << "enter the second number :";
    cin >> num2;
    cout << "enter the third number :";
    cin >> num3;

    //for-addition
    cout << "----------------------------ADDITION--------------------------------------------" << endl;
    c1.calc(a, b, c);

    //for-substraction
    cout << "----------------------------SUBSTRACTION----------------------------------------------" << endl;
    c1.calc(a, b);

    //for-multiplication
    cout << "----------------------------MULTIPLICATION----------------------------------------" << endl;
    c1.calc(num1 , num2, num3);

    //for-divison
    cout << "----------------------------DIVISION--------------------------------------" << endl;
    c1.calc(num1, num2);

    return 0;
}