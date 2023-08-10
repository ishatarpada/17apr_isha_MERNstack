#include <iostream>
using namespace std;
class Construct
{
public:
    int no;
    Construct()
    {
        cout << "Enter value of the no: ";
        cin >> no;
    }
    int show()
    {
        return no;
    };
};
int main()
{
    Construct con;
    cout << "Value of no is:" << con.show();
    return 0;
}