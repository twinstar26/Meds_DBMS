import mysql.connector as mysql
import pandas as pd
import random as rd
my_db = mysql.connect(host="localhost",user="Divy",passwd ="pwd")
my_cur = my_db.cursor()

my_cur.execute("use Hospital_Database")
#my_cur.execute("create table Doctors(Id varchar(256) primary key, Name varchar(50),Hospital_Id varchar(20),Field_of_Spec varchar(50),Years_of_Exp int(10));")

df_doc = pd.read_csv("../Dataset/doctors.csv")
df_hos = pd.read_csv("../Dataset/hospitals.csv")

keys = []
for k in df_doc:
	keys.append(k)

keys.append("ID")
keys.append("TYPE")

for i in range(3000,3500):
	Tuple = []
	for key in keys:
		if key=="ID" or key=="TYPE":
			Tuple.append(str(df_hos[key][i-2999]))
		else:
			Tuple.append(str(df_doc[key][i]))
	Tuple.append(str(rd.randrange(5,15)))
	Tuple = tuple(Tuple)
	my_cur.execute("insert into Doctors(Name,Id,Hospital_Id,Field_of_Spec,Years_of_Exp) Values(%s,%s,%s,%s,%s);",Tuple)
	
my_db.commit()