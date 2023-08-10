#include <iostream>
using namespace std;
class Abstract
{
    int no;

public:
    int data(int n)
    {
        no = n;
        return no;
    }
};
int main()
{
    Abstract ab;
    cout << ab.data(345);
}