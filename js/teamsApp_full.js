//Ini
let iCard = 0;
const URLJS = "https://stevekac01.github.io/teamsCard/teams.json"

 
let dataTest =   getData()  //Un truc ne va pas ici

 async function getData(){

    try {
        
	    const response = await axios.get(URLJS);
        CardFromScratch(response.data)
        LoadCard(iCard,response.data)
        dataTest=response.data // aucun sens mais ca marche
        return response.data   //aucun sens mais ca marche
      
	  } catch (error) {
	    console.error(error);
	  }
}

//----------------------------------------------- Create cards
function CardFromScratch(data)
{
const body = document.querySelector("body")
const card = CreateElement("div",body,"card");   
const cardImage = CreateElement("div",card,"card-image")
const cardText = CreateElement("div",card,"card-text")
const spanJob = CreateElement("span",cardText,"job")
const nameField =  CreateElement("h2",cardText)
const desField =  CreateElement("p",cardText)
const cardStats = CreateElement("div",card,"card-stats")
const stat = CreateElement("div",cardStats,"stat")
const techno = CreateElement("div",stat,"techno")
const level = CreateElement("div",stat,"level")
const statBorder = CreateElement("div",cardStats,"stat")
statBorder.classList.add("border")
const techno2 = CreateElement("div",statBorder,"techno")
const level2 = CreateElement("div",statBorder,"level")

 
//Event
card.addEventListener("click",NextCard)
}

function CreateElement(type,parent,className="")
{  
    const returnElement = document.createElement(type)
    if(className!="")
    {
        returnElement.classList.add(className)
    }
    parent.append(returnElement)
    return returnElement
}

function NextCard( )
{
    if(iCard<dataTest.length-1){
        iCard++
    }else
    {
        iCard=0
    }
    LoadCard(iCard,dataTest)
}

function LoadCard(numberMember,teams)
{
    const  myCard = document.querySelector('.card');
    myCard .querySelector(".card-image").style='   background: url("../img/'+ teams[numberMember].profilePic +'");  background-repeat: no-repeat;background-size: contain; background-position:center;'
    myCard .querySelector(".job").textContent=teams[numberMember].jobTitle
    myCard .querySelector("h2").textContent= teams[numberMember].firstName + " " + teams[numberMember].lastName
    myCard .querySelector("p").textContent = teams[numberMember].verbatim

    const technoCard = myCard.querySelectorAll(".techno")
    for(let i=0;i<technoCard.length;i++)
    {
        technoCard[i].textContent = teams[numberMember].stack[i].label
    }

    const levelCard = myCard.querySelectorAll(".level")

    for(let i=0;i<levelCard.length;i++)
    {
        levelCard[i].textContent =""
        for(let j=0;j< teams[numberMember].stack[i].level;j++)
        {
          levelCard[i].textContent += "⭐"
         }
    }
}

//Timer
 setInterval(NextCard,2000)

 