var queries = {
	hospitals:[
				"SELECT * FROM hospitals",
				"SELECT COUNT(*) as Total_Number_Of_Hospitals FROM hospitals",
				"SELECT COUNT(*) as Number_of_Hospitals, Field_of_Spec from hospitals GROUP BY Field_of_Spec",
				"SELECT * FROM hospitals WHERE Field_of_Spec='MILITARY'",
				"SELECT * FROM hospitals ORDER BY Capacity DESC",
				"SELECT * FROM hospitals WHERE Capacity>50",
				"SELECT * FROM hospitals WHERE Capacity<50",
				"SELECT * FROM hospitals WHERE (Latitude>40 and Latitude<50) and (Longitude>40 and Longitude<50)",
				"SELECT SUM(Capacity) as Total_Capcity FROM hospitals",
				],
	doctors:[
				"SELECT * FROM doctors",
				"SELECT COUNT(*) AS Number_Of_Doctors FROM doctors",
				"SELECT hospitals.Name, COUNT(*) as Number_Of_Doctors from doctors, hospitals where doctors.Hospital_Id=hospitals.Unique_Id GROUP BY Hospital_Id",
				"SELECT * FROM doctors WHERE Years_of_Exp>10",
				"SELECT * FROM doctors WHERE Years_of_Exp<10",
				"SELECT Field_of_Spec, COUNT(*) as Number_of_Doctors FROM doctors GROUP BY Field_of_Spec",
				"SELECT Field_of_Spec, MAX(Number_of_Doctors) AS Max_Number_of_Doctors FROM (SELECT Field_of_Spec, COUNT(*) AS Number_of_Doctors FROM doctors GROUP BY Field_of_Spec) as Count_Spec_Table",
				"SELECT * FROM doctors WHERE Years_of_Exp=(SELECT MAX(Years_of_Exp) FROM doctors)",
				"SELECT * FROM doctors WHERE Years_of_Exp=(SELECT MIN(Years_of_Exp) FROM doctors)"],
	patients:[
				"SELECT * FROM patients",
				"SELECT COUNT(*) AS Number_of_Patients FROM patients",
				"SELECT * FROM patients WHERE Gender='M'",
				"SELECT * FROM patients WHERE Gender='F'"]
}