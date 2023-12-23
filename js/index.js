document.addEventListener('DOMContentLoaded', function() {
    tpsubmit();
    });
const teamurl = "https://www.balldontlie.io/api/v1/teams";
const playerurl = "https://www.balldontlie.io/api/v1/players?search="; // add user/repos
const allplayers = "https://www.balldontlie.io/api/v1/players";
 /////////////////////////////  form submit data  /////////////////////////////
 function tpsubmit(){
    let getsearchdata = document.getElementById("Teams-submit");
    const getdata = document.getElementById("search");
    //let getdata = document.querySelectorAll("input");
                                            //////////////////////////////////////////// first EventListner///////////////////
    getsearchdata.addEventListener("submit", function(e){
                        e.preventDefault();
                        const submitform = e.submitter.id;
                //  console.log("line 17- ",getdata.value);                       
                   
                       if(submitform == "Get-Team-Names"){
                        //console.log("Team names","Get-Team-Names");
                        fetchGetTeam(teamurl,"teams");
                       }else{ 
                              //fetchGetPlayers(playerurl+getdata,"Players");
                              fetchGetPlayers(allplayers,"Players")
                                //console.log(playerurl+getdata.value);
                            };
    
            });
    };  
//////////////////////////////////// Get teams ////////////////////
function fetchGetTeam(data,type){
    fetch(data,{
       method: "GET",
       headers:
       {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
       }
       //,body: JSON.stringify(jsonobject)
     })
         .then(response => response.json())
         .then(json => JSON.stringify(createelements(json)))
         .catch(error => console.log(error))
 }; 
//////////////////////////////////// Get Players ////////////////////   
function fetchGetPlayers(data){
      fetch(data,{
       method: "GET",
       headers:
       {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
       }
       //,body: JSON.stringify(jsonobject)
     })
         .then(response => response.json())
         .then(json => JSON.stringify(Players(json)))
       //.then(json => console.log(json))
       // .then(json => userinfo(json))
         .catch(error => console.log(error))
   }; 

function createelements(data2){
//console.log(Array.isArray(data2.data));
let teamplayerdata = data2.data;
const maindiv= document.getElementById('teamtable');
            
//console.log(teamplayerdata)
////////////////////////////////////////////////////////for each
        teamplayerdata.forEach(element => {
         // console.log(element.full_name)
          const tr =document.createElement("tr");
                          maindiv.append(tr);
                          const td = document.createElement("td");
                          td.setAttribute("id", element.full_name); 
                          td.textContent = (element.full_name);
                          tr.append(td);
                          const lib = document.createElement("button");
                           
                          lib.setAttribute("id",element.abbreviation) ;
                          lib.setAttribute("name", element.full_name)
                          
                          lib.textContent = "Add to Favorites";     
                              ///////////////////////////////////////////////////second Event listener ////////////////////
                          lib.addEventListener('click',function(e){
                                    //fetchGetrepos(userrepo+e.target.id+urepo,e.target.id)
                                      console.log(e.target.name);
                                    });
                          tr.append(lib);
        });

   };
   function Players(data2){
    //console.log(Array.isArray(data2.data));
    let teamplayerdata = data2.data;
    const maindiv= document.getElementById('Playertable');
                
    console.log(teamplayerdata)
    ////////////////////////////////////////////////////////for each
            teamplayerdata.forEach(element => {
             // console.log(element.full_name)
              const tr =document.createElement("tr");
                              maindiv.append(tr);
                              const td = document.createElement("td");
                              td.setAttribute("id", element.last_name); 
                              td.textContent = (element.last_name+", "+element.first_name);
                              tr.append(td);
                              const tdt = document.createElement("td");
                              tdt.setAttribute("id", element.team.full_name); 
                              tdt.textContent = ("Team = "+element.team.full_name);
                              tr.append(tdt);

                              const lib = document.createElement("button");
                               
                              lib.setAttribute("id",element.last_name) ;
                              lib.setAttribute("name", element.last_name)
                              
                              lib.textContent = "Add to Favorites";     
                                  ///////////////////////////////////////////////////second Event listener ////////////////////
                              lib.addEventListener('click',function(e){
                                        //fetchGetrepos(userrepo+e.target.id+urepo,e.target.id)
                                          console.log(e.target.name);
                                        });
                              tr.append(lib);
            });
    
       };

   