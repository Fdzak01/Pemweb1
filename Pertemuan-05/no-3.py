'''
3.Buat program untuk minta input jumlah baris dan buat
rangkaian berikut ini
*
**
***
****
Dan seterusnya sejumlah baris yang diinputkan
Gunakan for loop dengan range
'''
string = " "
bar = 1

x= int(input("masukkan angka ="))

while bar<= x:
    kol = bar

    while kol > 0:
        string = string + '='
        kol = kol -1
    string = string + "\n"
    bar = bar + 1
    print(string)




