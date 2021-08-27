f = open("nigga.txt", "a")

f.write("yeah. this is first statement. And this is Second statement and its first letter is in Cap like this. samjha nigga.")
f.close()

f = open("nigga.txt", "r")
print(f.read())
f.close()

lst = [line.strip(" ") for line in open("nigga.txt")]

print("\n\n After shitting>> ",lst)