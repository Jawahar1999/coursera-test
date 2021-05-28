// //**string operator**//
// var string = "hello";
// //string += " world"//
// string = string +" world"
// console.log(string + "!")




// // regular mat operator///

// console.log((5+4)/3);
// console.log(undefined / 5);
// function test1(a){
// 	console.log(a/5);
// }
// test1()


// // equality //
// var x =4, y=4;
// if(x==y){
// 	console.log("x=y")
// }
// x="4";//string 4 is converted to numerical 4 and its eqaual its and gn output to  avoid use strictly equal//
// if(x==y){
// 	console.log("x=y")
// }

// //strict equality//
// var x ="4", y=4;
// if(x===y){
// 	console.log("x=y")
// }

// else{
// 	console.log('x!=y')
// }


// // if statement (all false)//
// if (false || null ||
//  undefined || "" || 0 || NaN) {
// 	console.log("this line won't even execute");
// }
// else{
// 	console.log("all false")
// }

// //if statement (all true)//
// if (true && "hello" && 
// 	1 && -1 && "false") {
// 	console.log("all true")
// }

// best practice of {} style
// culy brace on the same or next line
// it it just a style?
// function a()
// {
// 	return
// 	{
// 		name :"jawa"
// 	};
// }

// function b() {
// 	return {
		
// 		name :"jawa"
// 	};
// }
// console.log(a());
// console.log(b());

// // for loop
// var sum =0;
// for (var i = 0; i < 10; i++) {
// 	console.log(i);
// 	sum=sum + i;
// }
// console.log("sum of 0 to 9 :" + sum);



// Default values
// function ordera(book){
// 	book=book||"comic book";
// 	console.log("Order a book with " + book);
// }

// ordera("supernatural book");
// ordera();
// ordera();


//object creation//

// //with dot product//

// var company = new Object();
// company.name ="fb";
// company.ceo = new Object();
// company.ceo.firstname = "jawa";
// company.ceo.favcolor="blue"

// console.log(company);

// console.log("company ceo name is " + company.ceo.firstname )

// console.log(company["name"]);


// company["stock of company"]=110;
// console.log("stock =" + company["stock of company"]);


// better way object litteral
// var facebook ={
// 	name:"facebook",
// 	ceo:{
// 		firstname:"mark",
// 		favocolor:"blue"
// 	},
// 	// $stock:100
// 	"stock of company":150
// };
// console.log(facebook)



















// function are first -class data types
// //function ARE objects
// function multiply(x,y){
// 	return x * y ;
// }
// console.log(multiply(5,3));
// multiply.version="v.1.0.0";
// console.log(multiply.version);

// // function factory
// function makemultiplier (multiply) {
// 	var myfunc = function (x) {
// 		return multiply * x;
// 	};
// 	return myfunc;
// }  

// var multiplyby3 = makemultiplier(3);
// console.log(multiplyby3(10));

// var doubleall = makemultiplier(2);
// console.log(doubleall(100));





// //passing fn as arguments
// function dooperation(x, operation){
// 	return operation(x);
// }
// var result=dooperation(5,multiplyby3);
// console.log(result);
// var result=dooperation(100 , doubleall)
// console.log(result)




//  