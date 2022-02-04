const teams =[
    {
        'firstName' : 'Menuk',
        'lastName'  : 'Efrim',
        'verbatim'  : 'Behaviour-driven Self-driving Conference Calls',
        'jobTitle'  : 'Full Stack 🚀',
        'profilePic': 'profil01.jpg',
        'stack':[{
                'label':'VueJs',
                'level':3
            },
            {
                'label':'php',
                'level':5
            }
        ]
    },
    {
        'firstName' : 'Elena',
        'lastName'  : 'Stanget',
        'verbatim'  : 'Benchmark wearable eyeballs',
        'jobTitle'  : 'Creative Guru ',
        'profilePic': 'profil02.jpg',
        'stack':[{
                'label':'AE',
                'level':5
            },
            {
                'label':'Patience',
                'level':5
            }
        ]
    },
    {
        'firstName' : 'Alan',
        'lastName'  : 'Vision',
        'verbatim'  : 'Implement vertical convergence',
        'jobTitle'  : 'Techno-Mage',
        'profilePic': 'profil03.jpg',
        'stack':[{
                'label':'Excell',
                'level':2
            },
            {
                'label':'Quora',
                'level':5
            }
        ]
    }
]
//Ini
let iCard = 0;
CardFromScratch()
 
//----------------------------------------------- Create cards
function CardFromScratch()
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

function NextCard()
{
    if(iCard<teams.length-1){
        iCard++
    }else
    {
        iCard=0
    }
    LoadCard(iCard)
}

function LoadCard(numberMember)
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

//loading the first card
LoadCard(iCard)

//Timer
 //setInterval(NextCard,2000)

 console.log("test")
 
const URLJS = "https://stevekac01.github.io/teamsCard/teams.json"

let a =  getData()

async function getData(){

    try {
	    const response = await axios.get(URLJS);
        const test =  response.data 
	     console.log( test[0]);
	 
	  } catch (error) {
	    console.error(error);
	  }

}

/*
 
 const WEATHER_API = 'https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=585ee65ca36290ecc301eab6daa59875&units=metric'
	async function getWeather() {
	  try {
	    const response = await axios.get(WEATHER_API);
	    // console.log(response);
		updateMeteoCard(response.data)
	  } catch (error) {
	    console.error(error);
	  }
	}
	function updateMeteoCard(result){
		console.log(result)
		let iconCode = result.weather[0].icon;
		let temp     = result.main.temp;
		document.getElementById('wicon').src=`http://openweathermap.org/img/w/${iconCode}.png`
		document.querySelector('.temp').textContent=Math.round(temp)+'°c'
		document.querySelector('.city-title').textContent=result.name;


	}

	let goBtn = document.querySelector('#goBtn');
	goBtn.addEventListener('click',async function(){
		let a = await getWeather();
	})
 */ 