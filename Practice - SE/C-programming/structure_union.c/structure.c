// Structure is  a user define datatype
#include<stdio.h>
// define structure
struct student{

    // define data member
    int id;
    char name[30];

}st; //defining the object

int main()
{
    printf("Enter the student's id: ");
    scanf("%d", &st.id);
    printf("Enter the student's name: ");
    scanf("%s", &st.name);
    printf("\nThe %s's id is: %d",st.name ,st.id);
    return 0;
}