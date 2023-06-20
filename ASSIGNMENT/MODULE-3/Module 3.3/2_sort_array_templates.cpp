// Write a program of to sort the array using templates.

#include <iostream>
using namespace std;

// create templates
template <class t>

// template class
class Template
{
public:
    // create function for take the elements of array
    t get_array(t array[], t n)
    {
        for (int i = 0; i < n; i++)
        {
            cout << "enter the element of " << i + 1 << "  the index in array :- ";
            cin >> array[i];
        }
    }

    // create function for sorting element of array of array in assending order
    t sort_array(t array[], t n)
    {
        // outer loop
        for (int i = 0; i < n; i++)
        {
            // inner loop
            for (int j = 0; j < n; j++)
            {
                // comparrison
                if (array[j] > array[j + 1])
                {
                    // swap
                    t temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
    }

    // crete function print the array
    t print_array(t array[], t n)
    {
        for (int i = 0; i < n; i++)
        {
            cout << array[i] << "  ";
        }
    }
};

int main()
{
    // create a object
    Template<int> t1;
    int array[5];

    // call the get array function
    t1.get_array(array, 5);

    // call the print array function
    cout << "<----------------------------------------------array--------------------------------------------------->"<<endl; 
    t1.print_array(array, 5);

    // call the sort the array function
    t1.sort_array(array, 5);

    // call the print array function
    cout << endl<< "<------------------------------------------after swapping array is----------------------------------->"<<endl;
    t1.print_array(array, 5);

    return 0;
}