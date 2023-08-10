#include <iostream>
using namespace std;

int no = 56;

class This
{
public:
    int no = 40;
    void data()
    {
        int no = 78;
        cout << endl<< "Value of the global variable is: " << ::no;
        cout << "\nValue of the data member is: " << this->no;
        cout << endl<< "Value of the local variable is: " << no;
    }
};

int main()
{
    This t1;
    t1.data();
    return 0;
}