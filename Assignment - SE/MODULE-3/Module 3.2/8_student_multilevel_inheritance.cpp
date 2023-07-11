// Assume that the test results of a batch of students are stored in three different classes. Class Students are storing the roll number. Class Test stores the marks obtained in two subjects and class result contains the total marks obtained in the test. The class result can inherit the details of the marks

#include <iostream>
using namespace std;

//grand parent class  student
class student
{
public:
    //data members
    int roll_no;

    //constructor
    student()
    {
        cout << "enter the student'roll number :- ";
        cin >> roll_no;
    }

    //create the display_rollno() function
    void display_rollno()
    {
        cout << "Roll number is : " << roll_no << endl;
    }
};

// parent class (test) of student
class test : public student
{
public:

    //data members
    int mark_sub1;
    int mark_sub2;

    //constructor
    test()
    {
        cout << "enter the first subject marks :- ";
        cin >> mark_sub1;

        cout << "enter the second subject marks :- ";
        cin >> mark_sub2;
    }

    //create the display_mark() function
    void display_mark()
    {
        cout << "first subject marks is :- " << mark_sub1 << endl;
        cout << "second subject marks is :- " << mark_sub2 << endl;
    }
};

//child class(result) of 
class result : public test
{
public:
    
    //data member
    float total_marks;

    //constructor
    result()
    {
        total_marks = mark_sub1 + mark_sub2;
    }

    //create the display_result() function
    void display_result()
    {
        cout << "Roll number is :-  " << roll_no << endl;
        cout << "first subject marks is :- " << mark_sub1 << endl;
        cout << "second subject marks is :- " << mark_sub2 << endl;
        cout << "Total Marks :-  " << total_marks << endl;

        // display_rollno();
        // display_mark();
        // cout << "Total Marks :-  " << total_marks << endl;
    }
};

//main class
int main()
{
    //create the object of child class(result)
    result r1;

    //call the display_result()
    cout<<"-----------------------information about student-----------------------------"<<endl;
    r1.display_result();

    return 0;
}
