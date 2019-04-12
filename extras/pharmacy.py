import pandas as pd
import numpy as np
from random import randint 


csv = pd.read_csv("pharmacy.csv", encoding='utf-8')
#print(csv.head(20))
cost = []
for i in range(430):
    cost.append(int(randint(1,2000)))
exp_date = []
for i in range(430):
    exp_date.append(str(randint(1,28))+'-'+str(randint(1,12))+'-'+str(randint(2019,2023)))
stock = []
for i in range(430):
    stock.append(randint(0,5000))
csv.insert(value=cost,loc=1,column='COST',allow_duplicates=True)
csv.insert(value=exp_date,loc=2,column='EXPIRY_DATE',allow_duplicates=True)
csv.insert(value=stock,loc=3,column='STOCK',allow_duplicates=True)


csv.to_csv("pharmacy.csv", sep=',', encoding='utf-8', mode='w', header=True)
