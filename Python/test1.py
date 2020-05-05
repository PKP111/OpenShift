#x=input("Please enter the string:- ")
#def f1():
    #print("Type of input is:- ",type(x));
    #print("Value of x is:-",x);
    #for x in x:
     #   print(x)
    
#f1()

#----------------------------
'''
a,b=[int(x) for x in input("Please enter the number:- ").split(',')]
print("product of ",a,"&",b,"is",a*b)
'''
#-------------------------

#Read value from command line argument and print their sum

from sys import argv

args=argv[2:]
sum=0
for x in args:
    n=int(x)
    sum=sum + n
print(sum)

'''a=40
b=30
if(a>b):
    print("Value of a ",a,"is greater than "+str(b))
else:
    print("Value of a \"+str(a) \"is smaller than "+str(b))'''
#--------------------------
'''
list1=[20,"prakash",'kumar',30]
s=input("Please enter the element:- ")
if(s in list1):
    print("Element is already available")
else:
    print(list1)
    list1.append(s)
    print("Element is added now")
print(list1) 
'''
