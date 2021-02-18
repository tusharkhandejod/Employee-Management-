onLoad = () => {
    console.log("ID present in Local Storage : "+localStorage.getItem("id"))
    let employeeId = localStorage.getItem("id")
    $.ajax({
        type: 'get',
        url: "http://localhost:3000/employee/getEmployeeListOne/"+employeeId,
        data: "json",
        
        success: (result) => {
        
         console.log("Employee Data : "+result);
         $("#text").val(result.firstName);
         $("#text2").val(result.lastName);
         $("#email").val(result.email);
         $("#number").val(result.mobile);
         $("#number2").val(result.age);
         $("#text3").val(result.jobRole);
        },

        error : (error) => {
            console.log("Error : ",error)
        }
    })

}


function update(){
        let obj = {
            "firstName": document.getElementById("text").value,
            "lastName": document.getElementById("text2").value,
            "email": document.getElementById("email").value,
            "mobile": document.getElementById("number").value,
            "age": document.getElementById("number2").value,
            "jobRole": document.getElementById("text3").value
        }
    
        console.log("New updated data : ",obj);
        console.log("Updating Employee data.....")
        let id = localStorage.getItem("id")
    
        $.ajax({
            type: "put",
            url: "http://localhost:3000/employee/updateEmployee/"+id,
            data: JSON.stringify(obj),
            contentType: "application/json",
    
    
            success: (result) => {
              alert("Employee data updated successfully")  
              console.log("Result : ",result)
              clickButton3();
             },
    
            error : (error) => {
                console.log("Error : ",error)
            }
        })
        clickButton3();
        localStorage.removeItem("id");
}


function clickButton3(){
    location.href = "dashboard.html"
}