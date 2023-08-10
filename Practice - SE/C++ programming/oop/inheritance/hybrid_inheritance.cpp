#include <iostream>
using namespace std;

class A
{
public:
    A()
    {
        cout << "This is A class....."<<endl;
    }
};

class B : public A
{
public:
    B()
    {
        cout << "This is B class....."<<endl;
    }
};

class C : public A
{
public:
    C()
    {
        cout << "This is C class....."<<endl;
    }
};

class D : public B, public C
{
public:
    D()
    {
        cout << "This is D class....."<<endl;
    }
};


int main()
{
    D d1;
    return 0;
}