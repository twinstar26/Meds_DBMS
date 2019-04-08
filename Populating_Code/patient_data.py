import mysql.connector as mysql
import pandas as pd

my_db = mysql.connect(host="localhost",user="Divy",passwd="dhruti")

my_cur = my_db.cursor()

my_cur.execute("use Hospital_Database")
my_cur.execute("drop table patients")
my_cur.execute("create table Patients(Id int (10) primary key,Name varchar(50),Age int(10),Height int(10),Weight int(10),Gender varchar(2),Doctor_Id varchar(256));")

df_pat = pd.read_csv("../Dataset/patients.csv")
df_doc = pd.read_csv("../Dataset/doctors.csv")

keys = []
for k in df_pat:
	keys.append(k)

keys.append("NAME")
keys.append("UNIQ_ID")

for i in range(1000):
	Tuple = [] 
	for key in keys:
		if key=="age":
			Tuple.append(str(int(df_pat[key][i]) // 366))
		elif key=="gender":
			if str(df_pat[key][i])=="1":
				Tuple.append("M")
			else:
				Tuple.append("F")
		elif key=="NAME":
			Tuple.append(str(df_doc[key][i]))
		elif key=="UNIQ_ID":
			Tuple.append(str(df_doc[key][i+3000]))
		else:
			Tuple.append(str(df_pat[key][i]))
	Tuple = tuple(Tuple)
	my_cur.execute("insert into Patients (Id, Age,Gender,Weight,Height,Name,Doctor_Id) Values(%s,%s,%s,%s,%s,%s,%s);",Tuple)

my_db.commit()