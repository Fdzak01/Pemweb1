'''
2.Buatlah output menggunakan Python
1 3 + 5 + 7 + 9 + 11 + 1total = 0
'''
total = 0
for i in range(1,20,2):
    print(end="+ ")
    print(i, end=" ")
    total += i
print(" = ", total )