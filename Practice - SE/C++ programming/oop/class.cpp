#include <iostream>
using namespace std;

class info
{
    int id;
    string name;
public:
    int getdata()
    {
        cout << "enter the id : ";
        cin >> id;

        cout << "enter the name : ";
        cin >> name;

        return 0;
    }

    int showdata()
    {
        cout << name << " ...your id is " << id;

        return 0;
    }
}i1;

int main()
{
    i1.getdata();
    i1.showdata();
}