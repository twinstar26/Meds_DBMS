import pandas
import numpy
import random

csv = pandas.read_csv(filepath_or_buffer='~/projects/Meds_DBMS/Dataset/hospitals.csv', encoding='utf-8')
#print(csv.head(20))
outbreak = []
year = []
for i in range(6485):
    year.append(random.randint(1947,2018))
gender = []
for o in range(6485):
    gender.append(random.randint(1,2))
deaths = []
for o in range(6485):
    deaths.append(random.randint(0,50000))
age = []
for o in range(6485):
    age.append(random.randint(1,90))
csv.insert(value=outbreak, loc=8, column='DISEASE_OUTBREAK',allow_duplicates=True)
csv.insert()
