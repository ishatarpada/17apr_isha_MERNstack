#include<iostream>
using namespace std;

class Grand_parent
{
    public :
    Grand_parent()
    {
        cout<<"This is Grand Parent Class."<<endl;
    }
};

class Parent : public Grand_parent
{
    public :
    Parent()
    {
        cout<<"This is Parent Class."<<endl;
    }
};

class Child : public Parent
{
    public :
    Child()
    {
        cout<<"This is Child Class."<<endl;
    }
};

int main()
{
    Child c1;
    return 0;
}