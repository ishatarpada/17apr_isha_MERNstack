// Assume a class cricketer is declared. Declare a derived class batsman from cricketer. Data member of batsman. Total runs, Average runs and best performance. Member functions input data, calculate average runs, Display data. (Single Inheritance)

#include <iostream>
using namespace std;

//base class cricketer
class cricketer
{
public:
    //data members
    string name1;
    string name2;
    int played_match;

    //constructor 
    cricketer()
    {
        cout << "enter the name :";
        cin >> name1;

        cout << "enter the name :";
        cin >> name2;

        cout << "enter the no played match : ";
        cin >> played_match;
    }
};

//derived class 
class batsman : public cricketer
{
public:
    //data members
    int total_runs1;
    int avg_runs1;
    int total_runs2;
    int avg_runs2;

    //constructor
    batsman()
    {
        cout << "enter the total runs for player " << name1 << ":-";
        cin >> total_runs1;
        cout << "enter the total runs for player " << name2 << ":-";
        cin >> total_runs2;
    }

    //function of average runs 
    int avgruns()
    {
        avg_runs1 = total_runs1 / played_match;
        avg_runs2 = total_runs2 / played_match;
        return 0;
    }

    //function of best performance
    int bestperfomance()
    {
        if (avg_runs1 > avg_runs2)
        {
            cout << name1 << " is best performar ....." << endl;
        }
        else
        {
            cout << name2 << " is best performer ......" << endl;
        }
        return 0;
    }

    //function of display data
    void display_data()
    {
        cout << "no of played match is : " << played_match << endl;
        cout << "first batsman name is : " << name1 << endl;
        cout << "second batsman name is : " << name2 << endl;
        cout << name1 << " total run is : " << total_runs1 << endl;
        cout << name2 << " total run is : " << total_runs2 << endl;
        cout << name1 << " average runs is : " << avg_runs1 << endl;
        cout << name2 << " average runs is : " << avg_runs2 << endl;
    }
};

//main function
int main()
{
    //create the object of derived class(batsman)
    batsman b1;
    cout<<endl;

    //call the avgruns() function
    b1.avgruns(); 
    cout<<endl;

    //call the bestperformance() function
    b1.bestperfomance();
    cout<<endl;

    //call the display_data() function
    b1.display_data();
    cout<<endl;
}