// console.log(document.getElementById("title"));

// console.log(document instanceof HTMLDocument);


document.addEventListener("DOMContentLoaded",
	function (event) {

	function sayhello (event) {
	console.log(event);
	this.textContent = "said it!"
	var name =
	document.getElementById("name").value;
	var message ="<h2>hello " + name + "! </h2>";


	// document
	// .getElementById("content")
	// .textContent = message;

	document
	.getElementById("content")
	.innerHTML = message;

	if (name === "Jawahar") {
		var title =
		  document
		  	.querySelector("h1")
			.textContent;
		title += " & lovin it";
		document
		  	.querySelector("h1")
			.textContent = title;

		}

	}
	//unobstrusive event blinding
	document.querySelector("button")
	   .addEventListener("click" , sayhello);

	document.querySelector("body")
		.addEventListener("mousemove",
			function (event) {
				if (event.shiftKey === true) {
					console.log("x: " + event.clientX);
					console.log("y: " + event.clientY);
				}
			}
		);



	}
);










// document.querySelector("button")
// 	.onclick = sayhello;