var db = require("./app.js")
var InsertFuncPharmacy_Product = function(req,res){
	var Values = []
	var Fields = []
	var sanitize = req.sanitize
	var id = sanitize(req.body.id)
	if(toString(id)=="[object Undefined]")
	{	
		Fields.push("Id")
		Values.push(id)
	}
	var name_of_drug = sanitize(req.body.name_of_drug)
	if(toString(name_of_drug)=="[object Undefined]")
	{
		Fields.push("Name_Of_Drug")
		Values.push(name_of_drug)
	}
	var ins_query = "INSERT INTO pharmacy_products ("
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
			res.redirect("/insert/pharmacy_products")
		}
		else{
			res.redirect("/")
		}
	})
}
module.exports = InsertFuncPharmacy_Product	