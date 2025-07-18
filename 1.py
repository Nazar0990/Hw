def print_quote():
    print("Don't compare yourself with anyone in this world.")
    print("If you do so, you are insulting yourself.")
    print("    Bill Gates")

print("___________________________________________________________")

def print_even_numbers(a, b):
    for i in range(a, b + 1):
        if i % 2 == 0:
            print(i)

print("___________________________________________________________")

def print_square(n, symb, filled):
    for i in range(n):
        if filled or i == 0 or i == n - 1:
            print(symb * n)
        else:
            print(symb + ' ' * (n - 2) + symb)

print("___________________________________________________________")

def min_of_five(a, b, c, d, e):
    return min(a, b, c, d, e)

print("___________________________________________________________")

def digits_count(n):
    return len(str(abs(n)))

print("___________________________________________________________")

def is_palindrome(number):
    s = str(number)
    return s == s[::-1]