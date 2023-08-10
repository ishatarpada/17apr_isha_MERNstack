#include <iostream>
using namespace std;

int a;
int b;
char op;

class calculator
{

public:
    void get_data()
    {
        // cout << "enter the value of first number : ";
        // cin >> a;

        // cout << "enter the value of second number : ";
        // cin >> b;

        cout << "enter the expression :-  ";
        cin >> a >> op >> b;
    }
};

class Addition : public calculator
{
public:
    void addition()
    {
        int ans = a + b;
        cout << "Addition of " << a << " and " << b << " is : " << ans;
    }
};

class Substration : public calculator
{
public:
    void substraction()
    {
        int ans = a - b;
        cout << "substraction of " << a << " and " << b << " is : " << ans;
    }
};

class Multiplication : public calculator
{
public:
    void multiplication()
    {
        int ans = a * b;
        cout << "Multiplication of " << a << " and " << b << " is : " << ans;
    }
};

class Divison : public calculator
{
public:
    void divison()
    {
        int ans = a / b;
        cout << "Divison of " << a << " and " << b << " is : " << ans;
    }
};

int main()
{
    Addition a;
    Substration s;
    Multiplication m;
    Divison d;

    cout << "-------------------------------choise---------------------------------" << endl;
    cout << " 1.Addition(a+b) \n 2.Substraction(a-b) \n 3.Multiplication(a*b) \n 4.Divison(a/b)" << endl;
    a.get_data();

    switch (op)
    {
    case '+':
        a.addition();
        break;

    case '-':
        s.substraction();
        break;

    case '*':
        m.multiplication();
        break;

    case '/':
        d.divison();
        break;

    default:
        cout << "please enter the valid choise ......";
        break;
    }

    return 0;
}