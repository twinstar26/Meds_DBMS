import mysql.connector
import pandas as pd

my_db = mysql.connector.connect(host="localhost", user="Divy",passwd="dhruti")
my_cur = my_db.cursor()

#my_cur.execute("create database Hospital_Database")
my_cur.execute("use Hospital_Database")
#my_cur.execute("create table Hospitals(Unique_Id varchar(20) primary key, Name varchar(100),Address text,Contact_det varchar(20),Field_of_Spec varchar(50),Latitude dec(8,4),Longitude dec(8,4),Capacity int (10));")

#my_cur.execute("drop table hospitals")

df = pd.read_csv("../Dataset/hospitals.csv")

keys = []
for k in df:
	keys.append(k)

for i in range(100):
	Tuple = []
	for k in keys:
		Tuple.append(str(df[k][i]))
	tuple(Tuple)
	my_cur.execute("insert into hospitals Values(%s,%s,%s,%s,%s,%s,%s,%s);",Tuple)
	
my_db.commit()
