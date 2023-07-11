#include<stdio.h>
int main()
{
    int a , b , ans, choise ;
    char expression;

    printf("<-------------------------------------------------available choise is here  :-------------------------------------------------------------------->");
    printf("\n1.Arithmatic-operator.\n2.assignment-operator.\n3.bitwise-operator.\n4.logical-operator.\n5.relational-operator.\n");
    printf("<------------------------------------------------------------------------------------------------------------------------------------------------>");

    printf("\nenter your choise :");
    scanf("%d",&choise);
    printf("\nenter value of a :");
    scanf("%d",&a);
    printf("\nenter value of b:");
    scanf("%d", &b);

    switch (choise)
    {
    case 1 :
            printf("available choise :");
            printf("\n1.Addition.('+')\n2.subtraction.('-')\n3.multiplication.('*')\n4.divison.('/')\n5.modulo.('%')\n");
            printf("\n-----------------------------------------------------------------------------------------------------------------------------------");
            printf("\nenter your choise :");
            scanf("%d",&expression);
           
            switch (expression)
            {
                case 1 :
                ans=a+b;
                printf("\naddition of %d and %d :%d",a ,b ,ans);
                break;
                
                case 2 :
                    ans=a-b;
                    printf("\nsubstraction of %d and %d :%d",a ,b ,ans);
                    break;
                
                case 3 :
                    ans=a*b;
                    printf("\nmultiplication of %d and %d :%d",a ,b ,ans);
                    break;
                
                case 4 :
                    ans=a/b;
                    printf("\ndivision of %d and %d :%d",a ,b ,ans);
                    break;

                case 5 :
                    ans=a%b;
                    printf("\nmodulo of %d and %d :%d",a ,b ,ans);
                    break;

                default:
                    printf("please enter a valid choise........");
                    break;
            }

    case 2 :
            printf("\navailable choise :");
            printf("\n1.Addition.('+=')\n2.subtraction.('-=')\n3.multiplication.('*=')\n4.divison.('/=')\n");
            printf("\n-----------------------------------------------------------------------------------------------------------------------------------");
            printf("\nenter your choise :");
            scanf("%d",&expression);

                switch (expression)
                {
                    case 1 :
                        a+=b;
                        printf("addition of %d and %d is : %d " , a , b , a);
                        break;

                    case 2 :
                        a-=b;
                        printf("\nsubstraction of %d and %d is : %d", a , b , a );
                        break;

                    case 3 :
                        a*=b;
                        printf("\nmultiplication of %d and %d is : %d" , a , b , a);
                        break;

                    case 4 :
                        a/=b;
                        printf("\ndivision of %d and %d is : %d ", a , b, a);
                        break;
                
                    default:
                        printf("please enter a valid choise........");
                        break;
                }
        case 3 : 
            printf("\navailable choise :");
            printf("\n1.bitwise and ('&') \n2.bitwise or ('|') \n3. bitwise not('~') \n4. bitwise left shift ('<<') \n5.bitwise right shift ('>>') \n");
            printf("\n-----------------------------------------------------------------------------------------------------------------------------------");
            printf("\nenter your choise :");
            scanf("%d",&expression);

                switch (expression)
                {
                    case 1 :
                        ans = a&b ;
                        printf("bitwise operator and : %d" ,ans) ;
                        break;
                    
                    case 2 :
                        ans = a|b;
                        printf("\nbitwise operator or : %d" , ans);
                        break;

                    case 3 :
                        ans = ~a;
                        printf("\nbitwise operator or : %d" , ans);
                        break;

                    case 4 :
                        ans = a<<2;
                        printf("\nbitwise operator or : %d" , ans);
                        break;

                    case 5:
                        ans = b>>2;
                        printf("\nbitwise operator or : %d" , ans);
                        break;

                    default:
                            printf("please enter a valid choise........");
                            break;
                }

        case 4 :
            printf("\navailable choise :");
            printf("\n1.logical and ('&&') \n2. logical or ('||') \n3.logical not ('~') \n");
            printf("\n-----------------------------------------------------------------------------------------------------------------------------------");
            printf("\nenter your choise :");
            scanf("%d",&expression);

                switch (expression)
                {   
                    case 1 :
                        //logical and
                        if(a>0 && b<0)
                        {
                            printf("\nTrue");
                        }
                        else{
                            printf("\nFalse");
                        }
                        break;

                    case 2:
                        //logical or
                        if(a>0 || b<0)
                        {
                            printf("\nTrue");
                        }
                        else{
                            printf("\nFalse");
                        }
                        break;
                    case 3 :
                        //logical not 
                        if(!(a>0 || b<0))
                        {
                            printf("\nTrue");
                        }
                        else{
                            printf("\nFalse");
                        }
                        break;

                    default:
                            printf("please enter a valid choise........");
                            break;
                }

                case 5 :
                    printf("\navailable choise :");
                    printf("\n1.greater than ('>') \n2.grater than eqaul to ('>=') \n3.less than ('<') \n4.less than equal to ('<=') \n5. equal to ('==') \n6. not equal to ('!=') \n");
                    printf("\n-----------------------------------------------------------------------------------------------------------------------------------");
                    printf("\nenter your choise :");
                    scanf("%d",&expression);

                        switch (expression)
                        {   
                            case 1 :
                                if(a>b){
                                    printf("%d is grater than %d", a, b);
                                }
                                else
                                {
                                    printf("\n%d is not grater than %d", a, b);
                                }
                                break;

                                case 2 :
                                if(a >= b){
                                    printf("\n%d is grater than equal to  %d", a, b);
                                }
                                else
                                {
                                    printf("\n%d is not grater than equal to  %d", a, b);
                                }
                                
                                break;

                                case 3 :
                                if(a<b){
                                    printf("\n%d is less than %d", a, b);
                                }
                                else
                                {
                                    printf("\n%d is not less than %d", a, b);
                                }
                                break;

                                case 4 :
                                if(a<=b){
                                    printf("\n%d is less than equal to  %d", a, b);
                                }
                                else
                                {
                                    printf("\n%d is not less than equal to  %d", a, b);
                                }
                               break;

                               case 5 :
                                if(a == b)
                                {
                                    printf("\n%d is  equal to  %d", a, b);
                                }
                                else
                                {
                                    printf("\n%d is not equal to  %d", a, b);
                                }
                                break;

                                case 6 :
                                if(a != b)
                                {
                                    printf("\n%d is not equal to  %d", a, b);
                                }
                                else
                                {
                                    printf("\n%d is  equal to  %d", a, b);
                                }
                                break;
                           
                            default:
                            printf("please enter a valid choise........");
                            break;
                        }
     default:
            ("please enter a valid choise........");
             break;                    
    }
    return 0;
}