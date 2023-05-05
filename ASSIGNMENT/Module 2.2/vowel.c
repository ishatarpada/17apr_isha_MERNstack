//Vowel or Consonant using switch case
#include<stdio.h>
int main()
{
    char vowel;
    printf("<---------------------------------------------------VOWEL------------------------------------------------------->");
    printf("\n1. 'a'\n2. 'e'\n3. 'i'\n4. 'o'\n5. 'u'\n");

    printf("\nenter a character : ");
    scanf("%c",&vowel);

    switch (vowel)
    {
    case 'a':
        printf("a is vowel. ");
        break;

    case 'e':
        printf("e is vowel. ");
        break;

    case 'i':
        printf("i is vowel. ");
        break;

    case 'o':
        printf("o is vowel. ");
        break;

    case 'u':
        printf("u is vowel. ");
        break;
    
    default:
        printf("it is constant.....");
        break;
    }

    return 0;
}