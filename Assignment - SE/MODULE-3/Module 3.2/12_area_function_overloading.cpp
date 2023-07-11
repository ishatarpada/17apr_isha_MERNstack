/*Write a program to calculate the area of circle, rectangle and triangle using Function Overloading
Rectangle: Area * breadth
Triangle: ½ *Area* breadth
Circle: Pi * Area *Area */

#include <iostream>
using namespace std;

//global variable
int length;
int breadth;

float base;
float height;

float radius;

//class
class area
{
public:
    // Function to calculate the area of a rectangle
    int Area(int length, int breadth)
    {
        return length * breadth;
    }

    // Function to calculate the area of a triangle
    float Area(float base, float height)
    {
        return 0.5 * base * height;
    }

    // Function to calculate the area of a circle
    float Area(float radius)
    {
        return 3.14 * radius * radius;
    }
};

int main()
{
    //create object of area class.
    area a1;

    cout << "---------------------------------------------Ractangle---------------------------------------" << endl;
    //take the input from the user's
    cout << "enter the length :";
    cin >> length;
    cout << "enter the breadth :";
    cin >> breadth;
    //call the Area() function
    cout << "ractangle area is : " << a1.Area(length, breadth) << endl;

    cout << "---------------------------------------------Triangle---------------------------------------" << endl;
    //take the input from the user's
    cout << "enter the base :";
    cin >> base;
    cout << "enter the height :";
    cin >> height;
    //call the Area() function
    cout << "triangle area is " << a1.Area(base, height) << endl;

    cout << "---------------------------------------------circle---------------------------------------" << endl;
    //take the input from the user's
    cout << "enter the radius :";
    cin >> radius;
    //call the Area() function
    cout << "circle area is :" << a1.Area(radius) << endl;
    return 0;
}