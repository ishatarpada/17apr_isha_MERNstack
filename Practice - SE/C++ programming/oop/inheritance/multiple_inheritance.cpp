#include <iostream>
using namespace std;
class A
{
public:
    int aid;
    string anm;
    int adata()
    {
        cout << "-----------------------A------------------------";
        cout << "\nEnter the id of the student: ";
        cin >> aid;
        cout << "\nEnter the name of the student: ";
        cin >> anm;
        return 0;
    };
};
class B
{
public:
    int bid;
    string bnm;
    int bdata()
    {
        cout << "------------------------B-----------------------";
        cout << "\nEnter the id of the student: ";
        cin >> bid;
        cout << "\nEnter the name of the student: ";
        cin >> bnm;
        return 0;
    }
};
class C
{
public:
    int cid;
    string cnm;
    int cdata()
    {
        cout << "------------------------C-----------------------";
        cout << "\nEnter the id of the student: ";
        cin >> cid;
        cout << "\nEnter the name of the student: ";
        cin >> cnm;
        return 0;
    }
};
class D : public A, public B, public C
{
public:
    void display()
    {
        cout << "\n-----------------" << anm << "-------------------------------\n";
        cout << "Your id is: " << aid;
        cout << "\n----------------------" << bnm << "--------------------------\n";
        cout << "Your id is: " << bid;
        cout << "\n-----------------------" << cnm << "-------------------------\n";
        cout << "Your id is: " << cid;
    };
};
int main()
{
    D d1;
    d1.adata();
    d1.bdata();
    d1.cdata();
    d1.display();
    return 0;
}