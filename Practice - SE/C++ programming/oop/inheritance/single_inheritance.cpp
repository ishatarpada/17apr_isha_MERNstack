#include <iostream>
using namespace std;

class Base
{
public:
    Base()
    {
        cout << "This is base class.";
    }
};

class Derived : public Base
{
public:
    Derived()
    {
        cout << endl
             << "This is Derived class.";
    }
};

int main()
{
    Derived d1;
    return 0;
}