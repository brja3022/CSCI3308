//#include <stdio.h>
#include <iostream>
#include <string>
#include <ctype.h>

#include "mysql_connection.h"

#include <cppconn/driver.h>
#include <cppconn/exception.h>
#include <cppconn/resultset.h>
#include <cppconn/statement.h>




using namespace std;

void dbConnect(){

}

struct node{
    string word;
    node *next;
    node *prev;
};

void insertNode(struct node **head, string newWord){
    struct node *current = new node;
    current->word = newWord;
    current->prev = NULL;
    current->next = *head;
    if(*head != NULL){
        (*head)->prev = current;
    }
    *head = current;
}

void nodeCheck(struct node **head){
    struct node *temp = *head;
    while(temp != NULL){
        if(temp->next != NULL){
            cout << temp->word << "-> ";
        }
        else{
                cout << temp->word;
        }
        temp = temp->next;
    }
}


int main(){

    struct node *wordList = new node;
    char testString[] = "for(int i = 0; i < 10; i++){if(true){printf ('HelloWorld');}}";

    //string temp = "I am a string";
    for(int i = 0; i < sizeof(testString); i++){
        string tempWord;
        //method for getting all non alphanumeric
        while(isalpha(testString[i])){
            tempWord += testString[i];
            i++;
        }
        if(tempWord != ""){
            insertNode(&wordList, tempWord);
        }
    }
    //cout << temp;

    nodeCheck(&wordList);
    return 1;
}