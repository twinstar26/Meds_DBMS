var express = require("express")
var bodyParser = require("body-parser")
var methodOverride = require("method-override")
var expressSanitizer = require("express-sanitizer")
var mysql = require("mysql")

var app = express()

app.set("views","/Meds_DBMS/WebApp/ejs")

app.use(express.static("/Meds_DBMS/WebApp/css"))
app.use(express.static("/Meds_DBMS/WebApp/js"))

app.use(expressSanitizer())
app.use(bodyParser.urlencoded({extended:true}))
app.use(methodOverride("_method"))

var db = mysql.createConnection({
	hostname:"localhost",
	user:"root",
	password:"dhruti",
	database:"hospital_database",
	multipleStatements:true
})
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

db.connect(function(error){
	if(error){
		console.log(error)
	}
	else{
		console.log("Database Connected")
	}
})

app.get("/",function(req,res){
	res.render("home.ejs")
})

app.get("/insert/hospitals",function(req,res){
	res.render("hospitals_form.ejs")
})

app.post("/insert/hospitals",function(req,res){
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
	console.log(ins_query)
	var arr = []
	arr.push(Values)
	db.query(ins_query,arr,function(error,result){
		if(error){
			console.log(error)
			res.redirect("/insert/hospitals")
		}
		else{
			console.log(result)
			res.redirect("/")
		}
	})
})

app.get("/insert/patients",function(req,res){
	res.render("patients_form.ejs")
})

app.post("/insert/patients",function(req,res){
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
	console.log(ins_query)
	var arr = []
	arr.push(Values)
	db.query(ins_query,arr,function(error,result){
		if(error){
			console.log(error)
			res.redirect("/insert/patients")
		}
		else{
			console.log(result)
			res.redirect("/")
		}
	})
})

var server = app.listen("3000","127.0.0.1",function(){
	console.log(server.address().address + " " + server.address().port)
})