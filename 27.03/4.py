file = open("slowa.txt", "r")
f2 = open("wyniki4_1", "w")
f3 = open("wyniki4_2", "w")
for line in file:
    w = line.count('w')
    k = line.count('k')
    if w == k:
        f2.write(line)
    c = line.count('c')
    a = line.count('a')
    j = line.count('j')
    e = line.count('e')
    wakacje = 0
    while w > 0 and k > 0 and c > 0 and a > 0 and j > 0 and e > 0:
        wakacje = wakacje + 1
        w = w - 1
        k = k - 1
        c = c - 1
        a = a - 2
        j = j - 1
        e = e - 1
    f3.write(str(wakacje) + ' ')