#include <stdio.h>

int amount = 0;
void food_bill()
{
    int expression;
    int n;

    //price of Food-menu 
    int prs = 180;
    int brs = 100;
    int drs = 120;
    int irs = 50;

    printf("-------------------------------------------------------MANU-------------------------------------------------------");
   
    //Food-menu
    printf("\n1.Pizza -----------price = 180rs/pcs  \n2.Burger-----------price = 100rs/pcs\n3.Dosa  -----------price = 120rs/pcs\n4.Idli  -----------price = 50rs/pcs\n");
    printf("\n-----------------------------------------------------------------------------------------------------------------------------------");

    printf("\nplease enter your choise.......");
    scanf("%d", &expression);

    switch (expression)
    {
    case 1:
        printf("you have selected pizza....");

        //enter the quantity of choise 
        printf("\nenter the quantity : ");
        scanf("%d", &n);
        n = n * prs;

        //print the amount of food
        printf("\namount : %d", n);
        break;

    case 2:
        printf("you have selected Burger....");

        //enter the quantity of choise 
        printf("\nenter the quantity : ");
        scanf("%d", &n);
        n = n * brs;

        //print the amount of food
        printf("\namount : %d", n);
        break;

    case 3:
        printf("you have selected Dosa....");

        //enter the quantity of choise 
        printf("\nenter the quantity : ");
        scanf("%d", &n);
        n = n * drs;

        //print the amount of food
        printf("\namount : %d", n);
        break;

    case 4:
        printf("you have selected Idali....");

        //enter the quantity of choise 
        printf("\nenter the quantity : ");
        scanf("%d", &n);
        n = n * irs;

        //print the amount of food
        printf("\namount : %d", n);
        break;

    default:
        printf("please enter a valid choise........");
        break;
    }
    // n = n * a;
    amount += n;  // amount = n + amount 
    printf("\ntotal amount is : %d", amount);
}

int main()
{
    char choise[10];
    do
    {
        food_bill(); // call the food bill function

        //prefare more items 
        printf("\nDo you want to select more items? (y/n): ");
        scanf("%s", &choise);
    } while (choise[0] == 'y' || choise[0] == 'Y'); //if choise is 'y' or 'Y'than loop will continue .
    printf("Total bill is :- %d", amount);
    return 0;
}