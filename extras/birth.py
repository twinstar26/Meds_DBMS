import pandas
import numpy
import random

#csv = pandas.read_csv(filepath_or_buffer='~/projects/Meds_DBMS/Dataset/birth.csv', encoding='utf-8')
#csv = pandas.DataFrame
births = []
for o in range(6485):
    births.append(random.randint(0,280))
gender = []
for o in range(6485):
    gender.append(random.randint(1,2))
defective = []
for o in range(6485):
    defective.append(random.randint(0,28))
csv = pandas.DataFrame(births)
#csv.insert(value=births, loc=0, column='FOETUS_BORN',allow_duplicates=True)
csv.insert(value=gender, loc=1, column='GENDER',allow_duplicates=True)
csv.insert(value=defective, loc=2, column='UNHEALTHY_FOETUS',allow_duplicates=True)

csv.to_csv(path_or_buf='~/projects/Meds_DBMS/Dataset/birth.csv', encoding='utf-8',sep=',', header=True, )