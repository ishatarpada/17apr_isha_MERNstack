/*
Define a class to represent a bank account. Include the following members:
    1. Data Member:
        -Name of the depositor
        -Account Number
        -Type of Account
        -Balance amount in the account
    2. Member Functions
        -To assign values
        -To deposited an amount
        -To withdraw an amount after checking balance
        -To display name and balance
*/

#include <iostream>
using namespace std;

//class bank_account
class bank_Account
{
    //data member
    string depositor_name; // depositor name
    double account_no;     // account number
    string account_type;   // which type of account like saving...
    double bank_balance;   // depositor bank balance

public:
    // create function for user's assign value
    void assign_value(string name, double acc_no, string acc_type, double balance)
    {
        //assign the value
        depositor_name = name;
        account_no = acc_no;
        account_type = acc_type;
        balance = bank_balance;
    }

    // create function for deposite amount in bank.
    void deposite_amount(double amount , double balance)
    {
        bank_balance = balance;
        bank_balance = amount + bank_balance;
        cout << "\nAmount " << amount << " deposited successfully.";
    }

    // create function for withdraw amount in user's account.
    void withdraw(double amount)
    {
        if (bank_balance >= amount) // if bank balance is greater than amount then amount is subdtract in bank balance
        {
            bank_balance = bank_balance - amount;
            cout << "\n"<< "Amount " << amount << " withdrawn successfully.";
        }
        else // if amount is large of bank balance then print the msg insufficient balance
        {
            cout << "\n"<< "Insufficient balance.";
        }
    }

    // create function for show thw user's information.
    void display()
    {
        cout << "\n"<< "Account Number: " << account_no;
        cout << "\nDepositor Name: " << depositor_name;
        cout << "\nAccount Type: " << account_type;
        cout << "\nBalance: " << bank_balance << "\n";
    }
} bank; // create the object

int main()
{
    //variable
    string name;
    double acc_no;
    string acc_type;
    double balance;
    double d_amount;
    double w_amount;

    //input take from the user's
    cout << "enter the depositor name :- ";
    cin >> name;

    cout << "enter the account number :- ";
    cin >> acc_no;

    cout << "enter the which type of account :- ";
    cin >> acc_type;

    cout << "enter the balance in account :- ";
    cin >> balance;

    cout << "enter the depoiste amount :- ";
    cin >> d_amount;

    cout << "enter the withdraw amount :-";
    cin >> w_amount;

    //call the function
    bank.assign_value(name, acc_no, acc_type, balance);
    bank.display();
    cout << "--------------------------------------------------------------------------------------------------";
    bank.deposite_amount(d_amount , balance);
    bank.display();
    cout << "--------------------------------------------------------------------------------------------------";
    bank.withdraw(w_amount);
    bank.display();
    
    return 0;
}