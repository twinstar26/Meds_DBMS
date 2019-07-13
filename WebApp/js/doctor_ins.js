var db = require("./app.js")
var InsertFuncDoctor = function(req,res){
	var Values = []
	var Fields = []
	var sanitize = req.sanitize
	var id = sanitize(req.body.id)
	if(toString(id)=="[object Undefined]")
	{
		Fields.push("Id")
		Values.push(id)
	}
	var name = sanitize(req.body.name)
	if(toString(name)=="[object Undefined]")
	{
		Fields.push("Name")
		Values.push(name)
	}
	var hospital_id = sanitize(req.body.hospital_id)
	if(toString(hospital_id)=="[object Undefined]")
	{
		Fields.push("Hospital_Id")
		Values.push(hospital_id)
	}
	var field_of_spec = sanitize(req.body.field_of_spec)
	if(toString(field_of_spec)=="[object Undefined]")
	{
		Fields.push("Field_of_Spec")
		Values.push(field_of_spec)
	}
	var years_of_exp = sanitize(req.body.years_of_exp)
	if(toString(years_of_exp)=="[object Undefined]")
	{
		Fields.push("Years_of_Exp")
		Values.push(years_of_exp)
	}
	var ins_query = "INSERT INTO doctors ("
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
			res.redirect("/insert/doctors")
		}
		else{
			res.redirect("/")
		}
	})
}
module.exports = InsertFuncDoctor