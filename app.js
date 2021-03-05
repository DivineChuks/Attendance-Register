const staffMembers = [];

let staffRecords = [
        {
            id: 1, 
            name: "Divine",
            position: "Manager",
            day: 1
            
        },
        {
            id: 2, 
            name: "Prince",
            position: "Senior Developer",
            day: 1 
            
        },
        {
            id: 3, 
            name: "Chamberlain",
            position: "Junior Deloper",
            day: 0 
            
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
                    days : +staffRecords[p].day + 1,
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
            let customerId = document.getElementById("checkPay").value
            let danger = document.getElementById("danger")
            let success = document.getElementById("success")
            let info = document.getElementById("info")
            if(customerId == "") {
                alert("Please enter your ID")
            }
            for (let p = 0; p < staffRecords.length; p++) {

                if (customerId == staffRecords[p].id && staffRecords[p].days >= 4 ) {
                     success.classList.remove('d-none')
                    success.innerHTML =  `dear ${staffMembers[p].name} you can withdraw` 
                    }else{
                        info.classList.remove('d-none')
                        info.innerHTML = `This customer ID cannot withdraw`
                        success.classList.add('d-none')
                    }
                }
            }
