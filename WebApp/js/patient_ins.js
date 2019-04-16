var db = require("./app.js")
var InsertFuncPatient = function(req,res){
	var Values = []
	var Fields = []
	var sanitize = req.sanitize
	var patient_id = sanitize(req.body.unique_id)
	if(toString(patient_id)=="[object Undefined]")
	{
		Fields.push("Id")
		Values.push(patient_id)
	}
	var name = sanitize(req.body.name)
	if(toString(name)=="[object Undefined]")
	{
		Fields.push("Name")
		Values.push(name)
	}
	var age = sanitize(req.body.age)
	if(toString(age)=="[object Undefined]")
	{
		Fields.push("Age")
		Values.push(age)
	}
	var height = sanitize(req.body.height)
	if(toString(height)=="[object Undefined]")
	{
		Fields.push("Height")
		Values.push(height)
	}
	var weight = sanitize(req.body.weight)
	if(toString(weight)=="[object Undefined]")
	{
		Fields.push("Weight")
		Values.push(weight)
	}
	var gender = sanitize(req.body.gender)
	if(toString(gender)=="[object Undefined]")
	{
		Fields.push("Gender")
		Values.push(gender)
	}
	var illness = sanitize(req.body.illness)
	if(toString(illness)=="[object Undefined]")
	{
		Fields.push("Illness")
		Values.push(illness)
	}
	var medication_drug = sanitize(req.body.medication_drug)
	if(toString(medication_drug)=="[object Undefined]")
	{
		Fields.push("Medication_Drug")
		Values.push(medication_drug)
	}
	var doctor_id = sanitize(req.body.doctor_id)
	if(toString(doctor_id)=="[object Undefined]")
	{
		Fields.push("Doctor_Id")
		Values.push(doctor_id)
	}
	var ins_query = "INSERT INTO patients ("
	ins_query += Fields[0]
	for(let i=1;i<Fields.length;i++){
		ins_query += ", "+Fields[i]
	}
	ins_query += ") VALUES (?)"
	var arr = []
	arr.push(Values)
	db.query(ins_query,arr,function(error,result){
		if(error){
			console.log(error)
			res.redirect("/insert/patients")
		}
		else{
			res.redirect("/")
		}
	})
}
module.exports = InsertFuncPatient