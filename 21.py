def suma_u_diapazoni(n1, n2):
    if n1 > n2:
        n1, n2 = n2, n1
    return sum(range(n1, n2 + 1))

print("___________________________________________________________")

def dob_k_spysku(chysla):
    dob = 1
    for x in chysla:
        dob *= x
    return dob

print("___________________________________________________________")

def minimum_spysku(chysla):
    return min(chysla)

print("___________________________________________________________")

def kilkist_prostych(chysla):
    def prost(n):
        if n < 2:
            return False
        for i in range(2, int(n ** 0.5) + 1):
            if n % i == 0:
                return False
        return True
    k = 0
    for x in chysla:
        if prost(x):
            k += 1
    return k

print("___________________________________________________________")

def vydaly_znach(spysok, znach):
    k = 0
    novy_spysok = []
    for x in spysok:
        if x == znach:
            k += 1
        else:
            novy_spysok.append(x)
    return novy_spysok, k

print("___________________________________________________________")

def objednaty_spysky(a, b):
    return a + b

print("___________________________________________________________")

def stupin_spysku(spysok, stupin):
    novy_spysok = []
    for x in spysok:
        novy_spysok.append(x ** stupin)
    return novy_spysok