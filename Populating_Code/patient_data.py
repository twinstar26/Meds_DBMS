import mysql.connector as mysql
import pandas as pd
import random as rd

my_db = mysql.connect(host="localhost",user="Divy",passwd="pwd")

my_cur = my_db.cursor()

my_cur.execute("use Hospital_Database")
my_cur.execute("drop table patients")
my_cur.execute("create table Patients(Id int (10) primary key,Name varchar(50),Age int(10),Height int(10),Weight int(10),Gender varchar(2),Blood_Group varchar(3),Illness varchar(50),Medication_Drug varchar(100),Doctor_Id varchar(256));")

df_pat = pd.read_csv("../Dataset/patients.csv")
df_doc = pd.read_csv("../Dataset/doctors.csv")
df_phar = pd.read_csv("../Dataset/pharmacy.csv")

keys = []
for k in df_pat:
	keys.append(k)

blood_grp = ["AB","A","B","O"]
illness = ["Ischaemic heart disease","Cancer","Diabetes","AIDS","Parkinson disease","Chronic lung","Alzheimer’s disease","Paralysis"]

keys.append("NAME")
keys.append("UNIQ_ID")
keys.append("Blood_grp")
keys.append("Illness")
keys.append("Drug")

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
		elif key=="Blood_grp":
			Tuple.append(blood_grp[rd.randrange(1,len(blood_grp)+1)-1])
		elif key=="Illness":
			Tuple.append(illness[rd.randrange(1,len(illness)+1)-1])
		elif key=="Drug":
			Tuple.append(str(df_phar[key][rd.randrange(1,len(df_phar)+1)-1]))
		else:
			Tuple.append(str(df_pat[key][i]))
	Tuple = tuple(Tuple)
	print("hello")
	my_cur.execute("insert into Patients (Id, Age,Gender,Weight,Height,Name,Doctor_Id,Blood_Group,Illness,Medication_Drug) Values(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s);",Tuple)

my_db.commit()