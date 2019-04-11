import mysql.connector as mysql
import pandas as pd
import random as rd

my_db = mysql.connect(host="localhost",user="Divy",passwd="pwd")

my_cur = my_db.cursor()

my_cur.execute("use Hospital_Database")
my_cur.execute("drop table blood_bank")	
my_cur.execute("create table Blood_Bank(Id int (10) primary key,Recipents varchar(50),Donors varchar(50),Blood_Group varchar(50),Quantity varchar(50));")

df_blood_bank = pd.read_csv("../Dataset/blood_bank.csv")

keys = []
for k in df_blood_bank:
	keys.append(k)

for i in range(1000):
	Tuple = [] 
	for key in keys:
		Tuple.append(str(df_blood_bank[key][i]))
	Tuple = tuple(Tuple)
	my_cur.execute("insert into Blood_Bank (Id, Recipents,Donors,Blood_Group,Quantity) Values(%s,%s,%s,%s,%s);",Tuple)

my_db.commit()