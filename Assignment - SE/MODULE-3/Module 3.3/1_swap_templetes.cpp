// Write a program of to swap the two values using templates.

#include <iostream>
using namespace std;

// create templates
template <typename swap>
class Template
{
public:
    swap num1;
    swap num2;

    // for swapping
    swap swapping(swap num1, swap num2)
    {
        // without using third variable
        num1 = num1 - num2;
        num2 = num1 + num2;
        num1 = num2 - num1;

        cout << "after swapping first number is:- " << num1 << endl;
        cout << "after swapping second number is:- " << num2 << endl;
    }
};

int main()
{
    // create object
    Template<int> s1;

    int num1;
    int num2;

    // take the input from the user's
    cout << "enter the first number :";
    cin >> num1;
    cout << "enter the second number :";
    cin >> num2;

    cout << "<--------------------------------------------------------------------------------->" << endl;

    // print the value of numbers
    cout << "before swapping value of first number is : " << num1 << endl;
    cout << "before swapping value of second number is : " << num2 << endl;

    cout << "<-------------------------------------after swapping-------------------------------------------->" << endl;

    // call the function
    s1.swapping(num1, num2);
    return 0;
}

/*using template function and using third variable
#include <iostream>
using namespace std;
template <typename t>
t swap(t num1, t num2)
{
    // using third variable
    int temp = num1;
    num1 = num2;
    num2 = temp;

    cout << "after swapping first number is:- " << num1 << endl;
    cout << "after swapping second number is:- " << num2 << endl;
}
int main()
{
    // print the value of numbers
    cout << "before swapping value of first number is : " << "91" << endl;
    cout << "before swapping value of second number is : " << "52" << endl;

    cout << "<-------------------------------------after swapping-------------------------------------------->" << endl;

    // call the function
    swap<int>(91, 52);
    return 0;
}*/