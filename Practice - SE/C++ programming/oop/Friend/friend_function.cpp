#include <iostream>
using namespace std;

class Friend
{
private:
    int no;

public:
    friend int frnd(Friend &f1, int n);
};

int frnd(Friend &f1, int n)
{
    f1.no = n;
    return f1.no;
};

int main()
{
    Friend obj;
    cout << frnd(obj, 12);
    return 0;
}