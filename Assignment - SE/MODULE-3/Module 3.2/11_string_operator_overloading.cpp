//Write a program to concatenate the two strings using Operator Overloading

#include <iostream>
using namespace std;

//Concatenate class
class Concatenate
{
public:
    //data member
    string name;

    //get_data function
    void get_data()
    {
            cout << "enter the  string :-";
            cin >> name;
    }

    //operator overloading
    Concatenate operator +(Concatenate &str2)
    {
        //create object of Concatenate
        Concatenate str3;

        //merge two string
        str3.name = name + str2.name;
        
        return str3;
    }

    //display function
    void display()
    {
        cout<<"Full string is :- "<<name<<endl;
    }
};

int main()
{
    //create the Concatenate objects
    Concatenate str1 , str2;

    //call the get_data() 
    str1.get_data();
    str2.get_data();

    //create the Concatenate object
    Concatenate str3;

    //concatenate two string
    str3 = str1 + str2;

    //call the display function
    str3.display();
    return 0;
}