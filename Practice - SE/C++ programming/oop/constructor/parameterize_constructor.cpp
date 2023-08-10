#include <iostream>
using namespace std;

class square
{
public:
    square(int no)
    {
        int square = no * no;
        cout << no << " square is : " << square << endl;
    }
};

int main()
{
    int no;
    cout << "enter the number : ";
    cin >> no;
    square s1(no);
    return 0;
}