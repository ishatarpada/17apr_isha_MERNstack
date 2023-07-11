// Write a Program of Two 1D Matrix Addition using Operator Overloading

#include <iostream>
using namespace std;

//global array
int array[5];

//class Matrix
class Matrix
{
public:
    int array[5];

    //create get-data function
    void get_data()
    {
        //user's take the elements of array using loop
        for (int i = 0; i < 5; i++)
        {
            cout << "enter the "<< i+1 <<" element of array :-";
            cin >> array[i];
        }
    }

    //operator overloading
    Matrix operator +(Matrix &m2)
    {
        //create object of Matrix
        Matrix m3;

        //for addition two array using operator overloading and ans store in m3.array[i]
        for (int i = 0; i < 5; i++)
        {
            m3.array[i] = array[i] + m2.array[i];
        }
        return m3;
    }

    //display function.
    void display()
    {
        for (int i = 0; i < 5; i++)
        {
            cout << i+1 <<" th element of "<<"array is :- " << array[i]<<endl;
        }
    }
};

//main function
int main()
{
    //create the object of matrix
    Matrix m1 , m2;

    //call the get-data function
    cout<<"-----------------------------------first array is ----------------------------------------"<<endl;
    m1.get_data();
    cout<<"-----------------------------------second array is----------------------------------------"<<endl;   
    m2.get_data();

    //create the object of matrix
    Matrix m3;
    m3 = m1 + m2;

    //call the display function
    cout<<"------------------------------------------------now addition of two array is ------------------------------------------------"<<endl;
    m3.display();
    return 0;
}