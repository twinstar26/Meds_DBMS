var express = require("express")
var bodyParser = require("body-parser")
var methodOverride = require("method-override")
var expressSanitizer = require("express-sanitizer")
var mysql = require("mysql")

var app = express()

app.set("views","/Meds_DBMS/WebApp/ejs")

app.use(express.static("/Meds_DBMS/WebApp/css"))
app.use(express.static("/Meds_DBMS/WebApp/js"))
app.use(express.static("/Meds_DBMS/WebApp/Photos"))

app.use(expressSanitizer())
app.use(bodyParser.urlencoded({extended:true}))
app.use(methodOverride("_method"))

var db = mysql.createConnection({
	hostname:"localhost",
	user:"root",
	password:"pwd",
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

module.exports = db

app.get("/",function(req,res){
	res.render("home.ejs")
})

app.get("/insert/hospitals",function(req,res){
	res.render("hospitals_form.ejs")
})

InsertFuncHospital = require("./hospital_ins.js")
app.post("/insert/hospitals",InsertFuncHospital)

app.get("/insert/patients",function(req,res){
	res.render("patients_form.ejs")
})

var InsertFuncPatient = require("./patient_ins.js")
app.post("/insert/patients",InsertFuncPatient)

app.get("/insert/doctors",function(req,res){
	res.render("doctors_form.ejs")
})

var InsertFuncDoctor = require("./doctor_ins.js")
app.post("/insert/doctors",InsertFuncDoctor)

app.get("/insert/blood_bank",function(req,res){
	res.render("blood_bank_form.ejs")
})

var InsertFuncBlood_Bank = require("./blood_bank_ins.js")
app.post("/insert/blood_bank",InsertFuncBlood_Bank)

app.get("/insert/pharmacy_products",function(req,res){
	res.render("pharmacy_products_form.ejs")
})

var InsertFuncPharmacy_Product = require("./pharmacy_product_ins.js")
app.post("/insert/pharmacy_products",InsertFuncPharmacy_Product)

var queries = require("./queries.js")
var userin = require("./userin.js")
app.get("/table-view/:table",function(req,res){
	let tablename = req.params.table
	let query_no = req.query.state
	let ins_path = "/insert/"+tablename
	let sel_query = queries[tablename][query_no]
	db.query(sel_query,function(error,tuples,fields){
		if(error){
			console.log(error)
		}
		else{
			res.render("table-view.ejs",{tuples:tuples,fields:fields,ins_path:ins_path,query_no:query_no,userin:userin,tablename:tablename})
		}
	})
})

app.post("/table-view/:table",function(req,res){
	var tablename = req.params.table
	var query = req.body.query
	res.redirect("/table-view/"+tablename+"/?state="+query)
})

var server = app.listen("3000","127.0.0.1",function(){
	console.log(server.address().address + " " + server.address().port)
})