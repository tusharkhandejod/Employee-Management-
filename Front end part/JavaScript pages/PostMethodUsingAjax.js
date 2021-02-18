register =(Event)=>{
    console.log("calling method")
    let obj={
        "firstName":document.getElementById("text").value,
        "lastName":document.getElementById("text2").value,
        "email":document.getElementById("email").value,
        "mobile":document.getElementById("number").value,
        "age":document.getElementById("number2").value,
        "jobRole":document.getElementById("text3").value
    }
    
    console.log("Object : ",obj);
   
    $.ajax({
        type:'post',
        url:"http://localhost:3000/employee/addEmployee",
        data:JSON.stringify(obj),
        contentType:"application/json",
        success:function(result){
            console.log(result)
            if (result.success == false) {
               
                alert("Invalid Input..!!");
            }
            else {
                
                alert("Employee Data Added Sucessfully");
                
            }
        },
        error:function(err){
            console.log(err);
        }
    })     
}

function clickButton(event){
location.href = "dashboard.html"
}