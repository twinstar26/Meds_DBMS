import mysql.connector
import pandas

my_db = mysql.connector.connect(host="localhost", user="Divy",passwd="dhruti")
my_cur = my_db.cursor()

#my_cur.execute("create database Hospital_Database")
my_cur.execute("use Hospital_Database")
my_cur.execute("create table Hospitals(Unique_Id varchar(20) primary key, Name varchar(50),Address text,Contact_det varchar(20),Field_of_Spec varchar(20),Latitude dec(8,4),Longitude dec(8,4),Capacity int (10));")
