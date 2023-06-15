// WAP to create simple calculator using class

#include <iostream>
using namespace std;

class calculator
{
    int a;
    int b;

public:
    // create a function for get data 
    int getdata()
    {
        cout << "enter the a : ";
        cin >> a;

        cout << "enter the b : ";
        cin >> b;

        return 0;
    }

    //create a function for calculator
    int calc()
    {
        int add = a + b; // for addition
        cout << "\n"
             << a << " and " << b << " addition is : " << add;

        int sub = a - b; //for substraction
        cout << "\n"
             << a << " and " << b << " substraction is : " << sub;

        int mul = a * b; // for multiplication
        cout << "\n"
             << a << " and " << b << " multiplication is : " << mul;

        int div = a / b; //for divison
        cout << "\n"
             << a << " and " << b << " division is : " << div;

        int modulo = a % b; // for modulo
        cout << "\n"
             << a << " and " << b << " modulo is : " << modulo;

        return 0;
    }

    // int addition() //for addition
    // {
    //     int add = a + b;
    //     cout < < < < a << " and " << b << " addition is : " << add;
    //     return 0;
    // }

    // int substraction() // for substraction
    // {
    //     int sub = a - b;
    //     cout << "\n"<< a << " and " << b << " substraction is : " << sub;
    //     return 0;
    // }

    // int multiplication() //for multiplication
    // {
    //     int mul = a * b;
    //     cout << "\n"<< a << " and " << b << " multiplication is : " << mul;
    //     return 0;
    // }

    // int divison() //for division
    // {
    //     int div = a / b;
    //     cout << "\n"<< a << " and " << b << " division is : " << div;
    //     return 0;
    // }
    
    // int modulo() // for modulo
    // {
    //     int modulo = a % b;
    //     cout << "\n"<< a << " and " << b << " modulo is : " << modulo;
    //     return 0;
    // }

} c1; // create object of class

int main()
{
    //call the getdata function
    c1.getdata();

    //call the calc function
    c1.calc();

    // c1.addition();
    // c1.substraction();
    // c1.multiplication();
    // c1.divison();
    // c1.modulo();
    return 0;
}