#include <stdio.h>

void displayMenu()
{
    int food, n, price;
    char str[10];
    // Food MEnu
    printf("\n--------------------------Food Menu--------------------------\n");
    printf("\n1.Pizza               price = 180rs/pcs");
    printf("\n2.Burger              price = 120rs/pcs");
    printf("\n3.Dhosa               price = 100rs/pcs");
    printf("\n4.Idali               price = 50rs/pcs");

    // displayMenu();

    // prlease Enter your choice
    printf("\nPlease enter your choice : ");
    scanf("%d", &food);

    // use Switch Case
    switch (food)
    {
    case 1:
        printf("\nYou have selcted the Pizza.");

        printf("\nEnter the quantity : ");
        scanf("%d", &n);

        price = 180 * n;
        printf("Amount : %d", price);

        break;
    case 2:
        printf("\nYou have selected the Burger.");

        printf("\nEnter the quantity : ");
        scanf("%d", &n);

        price = 120 * n;
        printf("Amount : %d", price);

        break;
    case 3:
        printf("\nYou have selected the Dhosa.");

        printf("\nEnter the quantity : ");
        scanf("%d", &n);

        price = 100 * n;
        printf("Amount : %d", price);

        break;
    case 4:
        printf("\nYou have selected the Idali.");

        printf("\nEnter the quantity : ");
        scanf("%d", &n);

        price = 50 * n;
        printf("Amount : %d", price);

        break;
    }

    printf("\nTotal Amount is : %d", price);

    // printf("\nDo you want place more order y ? n :  ");
    // scanf("%s",&str);
}

int main()
{
    int price;
    char str;
    do
    {
        displayMenu();
        printf("\nDo you want place more order y ? n :  ");
        char str;
        scanf("%c", &str);
        if (str == 'y')
        {
            displayMenu();
        }
    } while (str == 'y');

    return 0;
}