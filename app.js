const staffMembers = [];

let staffRecords = [
        {
            id: 1, 
            name: "Divine",
            position: "Manager"
            
        },
        {
            id: 2, 
            name: "Prince",
            position: "Senior Developer"
            
        },
        {
            id: 3, 
            name: "Chamberlain",
            position: "Junior Deloper"
            
        },
        {
            id: 4, 
            name: "Dennis",
            position: "Senior Deloper"

            
        }
    ]

    function staffAttendance(){
        let newStaff = document.getElementById("staffId").value;
        let date = document.getElementById("staffDate").value;
        let signIn = document.getElementById("signIn")
        for(let p=0; p < staffRecords.length; p++){
            if(newStaff==staffRecords[p].id){
                let staffData = {
                    id: newStaff,
                    name: staffRecords[p].name,
                    position: staffRecords[p].position,
                    date : staffRecords[p].date = date  
     
                }
                signIn.classList.remove('d-none');
                setTimeout(() => {
                    signIn.classList.add('d-none');
                }, 1000);
                staffMembers[p] = staffData;
                staffMembers.push(staffData);
                console.log(staffMembers);
            }
        }
     }
     
          function checkPayment(){

            let customerId = document.getElementById("checkPay").value;
            let days = 0
            for(let tdays = 0; tdays < staffMembers.length; tdays++){
                if(staffMembers[tdays].id == customerId){
                    days +=1
                }
            }
            if (days >=4){
                alert("You can receive payment")
                
            }else{
                alert("No payment")
            }
     }
