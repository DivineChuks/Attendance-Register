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
            
        }
    ]

    function staffAttendance(){
        let newStaff = document.getElementById("staffId").value;
        let date = document.getElementById("staffDate").value;
        for(let p=0; p < staffRecords.length; p++){
            if(newStaff==staffRecords[p].id){
                let staffData = {
                    id: newStaff,
                    name: staffRecords[p].name,
                    position: staffRecords[p].position,
                    date: date,  
     
                }
                staffMembers.push(staffData);
                console.log(staffMembers);
            }
        }

        staffShow()
     }

        function staffShow(){
            document.getElementById("staffShow").innerHTML = ""
            for (show of staffMembers){
                let staffCreate = document.createElement("p");
                let staffDisplay = document.createTextNode(`
                    Staff Id: ${show.id} \n
                    Staff Name: ${show.name} \n
                    staff Position : ${show.position} \n
                    Sign In: ${show.date}

                `)
                staffCreate.appendChild(staffDisplay);
                console.log(staffDisplay);
            }

        }
     


