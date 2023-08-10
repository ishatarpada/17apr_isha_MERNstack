#include <iostream>
using namespace std;
class Capsual
{
    // To wrapping the data
protected:
    int no;
    string course;

public:
    // To get the data
    int getdata()
    {
        cout << "************************ Niharika *******************************" << endl;
        cout << "Enter the value of no: ";
        cin >> no;
        cout << "Enter the your course name: ";
        cin >> course;
        return 0;
    }
    int printdata()
    {
        cout << "Your course name " << course << " and no is: " << no;
        return 0;
    }
};
int main()
{
    Capsual cap;
    cap.getdata();
    cap.printdata();
    return 0;
}