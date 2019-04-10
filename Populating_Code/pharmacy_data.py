import mysql.connector as mysql
import pandas as pd
import random as rd

my_db = mysql.connect(host="localhost",user="Divy",passwd="pwd")

my_cur = my_db.cursor()

my_cur.execute("use Hospital_Database")
my_cur.execute("drop table pharmacy_products")	
my_cur.execute("create table Pharmacy_Products(Id int (10) primary key,Name_Of_Drug varchar(50));")

df_phar = pd.read_csv("../Dataset/pharmacy.csv")

keys = []

keys.append("Drug")

for i in range(len(df_phar)):
	Tuple = [] 
	for key in keys:
		Tuple.append(str(i+1))
		Tuple.append(str(df_phar[key][i]))
	Tuple = tuple(Tuple)
	my_cur.execute("insert into Pharmacy_Products (Id,Name_Of_Drug) Values(%s,%s);",Tuple)

my_db.commit()