/*
    Created by tymianekk on 12.03.2025
    Last updated: 13.03.2025
*/

#include <stdio.h>
#include <unistd.h>

int main() {
    float money = 0;
    char currency;

    printf("Choose a currency:\n");
    printf("USD (USA) - type \"u\"\n");
    printf("EUR (Euro) - type \"e\"\n");
    printf("GBP (Great Britain) - type \"g\"\n");
    printf("PLN (Poland) - type \"p\"\n");
    scanf("%c", &currency);

    if (currency == 'p') {
        while (1) {
            printf("\r%.2f PLN", money);
            fflush(stdout);
            money += 0.01;
            usleep(1000);
        }
    } else if (currency == 'u') {
        while (1) {
            printf("\r$%.2f", money);
            fflush(stdout);
            money += 0.01;
            usleep(1000);
        }
    } else if (currency == 'e') {
        while (1) {
            printf("\r%.2f €", money);
            fflush(stdout);
            money += 0.01;
            usleep(1000);
        }
    } else if (currency == 'g') {
        while (1) {
            printf("\r%.2f £", money);
            fflush(stdout);
            money += 0.01;
            usleep(1000);
        }
    }
    
    return 0;
}