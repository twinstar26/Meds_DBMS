var express = require("express")
var bodyParser = require("body-parser")
var methodOverride = require("method-override")
var expressSanitizer = require("express-sanitizer")
var mysql = require("mysql")

var app = express()

app.set("views","./ejs")

app.use(express.static("./css"))
app.use(express.static("./js"))

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
	res.send("Hii")
})
var server = app.listen("3000","127.0.0.1",function(){
	console.log(server.address().address + " " + server.address().port)
})