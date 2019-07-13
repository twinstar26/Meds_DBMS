var db = require("./app.js")
var InsertFuncBlood_Bank = function(req,res){
	var Values = []
	var Fields = []
	var sanitize = req.sanitize
	var id = sanitize(req.body.id)
	if(toString(id)=="[object Undefined]")
	{
		Fields.push("Id")
		Values.push(id)
	}
	var recipents = sanitize(req.body.recipents)
	if(toString(recipents)=="[object Undefined]")
	{
		Fields.push("Recipents")
		Values.push(recipents)
	}
	var donors = sanitize(req.body.donors)
	if(toString(donors)=="[object Undefined]")
	{
		Fields.push("Donors")
		Values.push(donors)
	}
	var blood_group = sanitize(req.body.blood_group)
	if(toString(blood_group)=="[object Undefined]")
	{
		Fields.push("Blood_Group")
		Values.push(blood_group)
	}
	var quantity = sanitize(req.body.quantity)
	if(toString(quantity)=="[object Undefined]")
	{
		Fields.push("Quantity")
		Values.push(quantity)
	}
	var ins_query = "INSERT INTO blood_bank ("
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
			res.redirect("/insert/blood_bank")
		}
		else{
			res.redirect("/")
		}
	})
}
module.exports = InsertFuncBlood_Bank