#include <iostream>
using namespace std;
class Copy
{
public:
    int no;
    Copy(int n)
    {
        no = n;
        no++;
    }
    Copy(Copy &cpy)
    {
        ++cpy.no;
        no = cpy.no;
    }
    int show()
    {
        cout << "Value no is: " << no << endl;
        return 0;
    }
};
int main()
{
    Copy c1(50);
    c1.show();

    Copy c2 = c1;
    c2.show();
    return 0;
}