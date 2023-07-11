// Create a class person having members name and age. Derive a class student having member percentage. Derive another class teacher having member salary. Write necessary member function to initialize, read and write data. Write also Main function (Multiple Inheritance)

#include <iostream>
using namespace std;

// parent class person
class person
{
public:
    //data members
    string p_name;
    int p_age;

    //constructor
    person()
    {
        cout << "enter the person name :-";
        cin >> p_name;

        cout << "enter the person age :- ";
        cin >> p_age;
    }
};

//child class student
class student : public person
{
public:
    //data members
    float percentage;

    //constructor
    student()
    {
        cout << "enter the percentage :- ";
        cin >> percentage;
    }

    //function of display information
    void display_data()
    {
        cout << p_name << " your age is " << p_age << " and your percentage is " << percentage << endl;
    }
};

//child class teacher
class teacher : public person
{
public:
    //data members
    double sellary;

    //constructor
    teacher()
    {
        cout << "enter the sellary :- ";
        cin >> sellary;
    }

    //function of display information
    void display_data()
    {
        cout << p_name << " your age is " << p_age << " and your sellary is " << sellary << endl;
    }
};

//main-function
int main()
{
    //create onject of student class
    student s1;
    cout<<"-----------------------information about student-----------------------------"<<endl;
    s1.display_data();

    //create object of teacher class
    teacher t1;
    cout<<"-----------------------information about teacher-----------------------------"<<endl;
    t1.display_data();
    return 0;
}