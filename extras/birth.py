import pandas
import numpy
import random


csv = pandas.read_csv(filepath_or_buffer='~/projects/Meds_DBMS/Dataset/hospitals.csv', encoding='utf-8')
births = []
for o in range(6485):
    births.append(random.randint(0,280))
gender = []
for o in range(6485):
    gender.append(random.randint(1,2))
defective = []
for o in range(6485):
    defective.append(random.randint(0,28))
csv.insert(value=births, loc=8, column='DISEASE_OUTBREAK',allow_duplicates=True)

