let EmpData = [];
$(document).ready(function(){
    let innerHtml;
    $.ajax({
        type:'get',
        url:'http://localhost:3000/employee/readEmployee',
        contentType: "applicaton/json",
        success: function(result){
            
         console.log("Success");
         console.log("Result :", result);
        

        
         

         $.each(result.data,function(index,value){
           EmpData.push(value._id)
           innerHtml += `<tr><td><br/></td></tr>
                         <tr>
                         <td>${value.firstName}</td>
                         <td>${value.lastName}</td> 
                         <td>${value.email}</td>
                         <td>${value.mobile}</td>
                         <td>${value.age}</td>
                         <td>${value.jobRole}</td>
                         <td><button onclick="getDataById(${index});clickButton2(event)">Edit</button></td>
                         <td><button onclick="deleteEmployee(${index});clickButton(event); return false;">Delete</button></td>
                         </tr>`
         })
         $('#table').append(innerHtml);
        },
        error: function(error){
            console.log("Error occured : ",error)
        }
    })
})


function deleteEmployee(id){
    let temp = EmpData[id];
    console.log(id)
    console.log("Data on that id : ",temp)
    $.ajax({
        method:'delete',
        url:'http://localhost:3000/employee/deleteemployee/'+temp,
        success: function(){
            alert("Record is deleted")
        },
        error: function(){
            alert(error);
        }
    })
}

function clickButton(event){
    location.href = "dashboard.html"
}

function getDataById(id){
    let employeeId = EmpData[id];
    localStorage.setItem("id",employeeId)
    console.log("ID inside the Local Storage : "+localStorage.getItem("id"))
 }

 function clickButton2(event){
    location.href = "update.html"
}
