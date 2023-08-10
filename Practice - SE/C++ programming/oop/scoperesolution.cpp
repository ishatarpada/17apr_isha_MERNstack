#include <iostream>
using namespace std;

int no = 100;

int main()
{
    int no = 10;
    cout << endl<< "Value of the local variable is: " << no;
    cout << "\nValue of the global variable is: " << ::no;
    return 0;
}