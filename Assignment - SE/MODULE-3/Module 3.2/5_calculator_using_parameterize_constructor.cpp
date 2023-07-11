// Write a program of Addition, Subtraction, Division, Multiplication using constructor.

#include <iostream>
using namespace std;

//global variable
float num1;
float num2;

//class calculator
class calculator
{
    public:

    //constructor calculator 
    calculator(float num1, float num2)
    {
        float add = num1 + num2; // for addition
        cout << "\n"<< num1 << " and " << num2 << " addition is : " << add;

        float sub = num1 - num2; //for substraction
        cout << "\n"<< num1 << " and " << num2 << " substraction is : " << sub;

        float mul = num1 * num2; // for multiplication
        cout << "\n"<< num1 << " and " << num2 << " multiplication is : " << mul;

        float div = num1 / num2; //for divison
        cout << "\n"<< num1 << " and " << num2 << " division is : " << div;

    }
};

//main function
int main()
{
    //take the input from the user's
    cout<<"enter the firsr number : ";
    cin>>num1;
    cout<<"enter the second number : ";
    cin>>num2;

    //create the object of calculator class
    calculator c1(num1 , num2);

    return 0;
}