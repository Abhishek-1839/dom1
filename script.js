//my method

// var element = document.createElement("div");
// element.setAttribute("class", "container");
// var f = document.createElement("div");
// f.setAttribute("class", "row");
// element.append(f);
// var g = document.createElement("div");
// g.setAttribute("class", "col");
// g.innerText = "this is col"
// f.append(g);
// document.body.append(element);

//mentor loc
// var container = document.createElement("div");
// container.className = "container";
// // container.id = "main1";

// var row = document.createElement("div");
// row.className = "row";

// var col = document.createElement("div");
// col.className = "col-1";
// col.innerText = "this is col";


// row.append(col);
// container.append(row);
// document.body.append(container);


function foo(){
    var res = document.getElementById("first").value;
    var res1 = document.getElementById("middle").value;
    var res2 = document.getElementById("last").value;
    var res3 = document.getElementById("email").value;
    var res4 = document.getElementById("addres").value;
    console.log("First name is: ",res);
    console.log("Middle name is: ",res1);
    console.log("Last name is: ",res2);
    console.log("Email-Id is: ",res3);
    console.log("Address is: ",res4);
}