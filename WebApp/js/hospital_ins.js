var db = require("./app.js")
var InsertFuncHospital = function(req,res){
	var Values = []
	var Fields = []
	var sanitize = req.sanitize
	var unique_id = sanitize(req.body.unique_id)
	if(toString(unique_id)=="[object Undefined]")
	{
		Fields.push("Unique_Id")
		Values.push(unique_id)
	}
	var name = sanitize(req.body.name)
	if(toString(name)=="[object Undefined]")
	{
		Fields.push("Name")
		Values.push(name)
	}
	var address = sanitize(req.body.address)
	if(toString(address)=="[object Undefined]")
	{
		Fields.push("Address")
		Values.push(address)
	}
	var contact_det = sanitize(req.body.contact_det)
	if(toString(contact_det)=="[object Undefined]")
	{
		Fields.push("Contact_det")
		Values.push(contact_det)
	}
	var field_of_spec = sanitize(req.body.field_of_spec)
	if(toString(field_of_spec)=="[object Undefined]")
	{
		Fields.push("Field_of_Spec")
		Values.push(field_of_spec)
	}
	var latitude = sanitize(req.body.latitude)
	if(toString(latitude)=="[object Undefined]")
	{
		Fields.push("Latitude")
		Values.push(latitude)
	}
	var longitude = sanitize(req.body.longitude)
	if(toString(longitude)=="[object Undefined]")
	{
		Fields.push("Longitude")
		Values.push(longitude)
	}
	var capacity = sanitize(req.body.capacity)
	if(toString(capacity)=="[object Undefined]")
	{
		Fields.push("Capacity")
		Values.push(capacity)
	}
	var ins_query = "INSERT INTO hospitals ("
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
			res.redirect("/insert/hospitals")
		}
		else{
			res.redirect("/")
		}
	})
}
module.exports = InsertFuncHospital