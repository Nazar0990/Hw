#try:
#    price = float(input("Ціна: "))
#    discount = float(input("Знижка (%): "))
#    suma = price - price * discount / 100
#    print("Фінальна ціна:", round(suma, 2))
#except ValueError:
#    print("Треба ввести числа!")
#finally:
#    print("Готово")

print("________________________________________________")

#try:
#    usd = float(input("Долари: "))
#    kours = float(input("Курс долара до євро: "))
#    if kours == 0:
#        raise Exception("Курс не може бути 0")
#    eur = usd / kours
#    print("Відповідь в євро:", round(eur, 2))
#except ValueError:
#    print("Помилка вводу!")
#except Exception as e:
#    print(e)
#finally:
#    print("Завершено")

print("________________________________________________")

try:
    s = input("Оцінки через пробіл: ")
    m = [int(x) for x in s.split()]
    if len(m) == 0:
        raise ZeroDivisionError
    ser = sum(m) / len(m)
    print("Середнє:", round(ser, 2))
except ValueError:
    print("Вводь тільки цифри!")
except ZeroDivisionError:
    print("Немає оцінок!")
finally:
    print("Завершення обчислень")

print("________________________________________________")

try:
    suma = int(input("Скільки грошей зняти: "))
    balans = 1000
    if suma % 10 != 0 or suma > balans:
        raise Exception("Некоректна сума для зняття")
    print("Операція успішна!")
except ValueError:
    print("Введи число!")
except Exception as e:
    print(e)
finally:
    print("Транзакція завершена")

print("________________________________________________") 

try:
    ordernum = input("Enter the order number > ")
    if not ordernum.startswith("ORD"):
        raise Exception("Incorrect number of order.")
    if ordernum[3:].isdigit() is False:
        raise Exception("Incorrect number of order.")
except Exception as e:
    print(e)
finally:
    print("The check has been completed.")

print("________________________________________________")    

try:
    s = input("Введи числа через пробіл: ")
    nums = []
    for x in s.split():
        try:
            nums.append(int(x))
        except ValueError:
            continue  
    if nums:
        print("Список чисел:", nums)
        print("Середнє:", round(sum(nums)/len(nums), 2))
    else:
        print("Немає чисел для обробки!")
finally:
    print("Обробка завершена")