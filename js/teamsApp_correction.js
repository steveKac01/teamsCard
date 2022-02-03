console.log('teamsApp_full')

// créer toutes les cards pour tous les membres de l'équipe
// on peut s'aider avec cloneNode 
// https://developer.mozilla.org/fr/docs/Web/API/Node/cloneNode
// pour éviter d'avoir trop de code à créer 

// il est peut-être utile ici d'utiliser querySelector sans passer par document.querySelector ^^
// on peut en effet cibler directement un élément du dom et lui appliquer querySelector


// en bonus : vous pourriez également mixer cet exercice avec le caroussel
// et faire défiler les cards de la team 

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

const firstCard =  document.querySelector('.card')

function createAllTeam(){
    firstCard.remove()
    let howManyUser = teams.length
    for (let i = 0; i < howManyUser; i++) {
        const oneUser = teams[i]
        cloneOneCard(i,firstCard)
    }

}

function cloneOneCard(who,firstCard){
    const cloneCard = firstCard.cloneNode(true)
    cloneCard.classList.add('clone_'+who)
    document.body.append(cloneCard)
    setCardInfo(who,cloneCard)
}   


function setCardInfo(who,card){

    const oneGuy   = teams[who]

    const jobTitle = card.querySelector('.card-text .job')
    const fullName = card.querySelector('.card-text h2')
    const verbatim = card.querySelector('.card-text p')
    const profile  = card.querySelector('.card-image')

    jobTitle.textContent = oneGuy.jobTitle
    fullName.textContent = oneGuy.firstName+' '+oneGuy.lastName
    verbatim.textContent = oneGuy.verbatim
    profile.style.background='url(img/'+oneGuy.profilePic+')'
    profile.style.backgroundSize='cover'

    // les technos et les stars 
    const stack = oneGuy.stack

    const statsTechno = card.querySelectorAll('.techno')
    const statsLevel  = card.querySelectorAll('.level')
    for (let i = 0; i < stack.length; i++) {
        const oneTeck = stack[i]
        statsTechno[i].textContent = oneTeck.label
        statsLevel[i].textContent  =''    
        for (let j = 1; j < oneTeck.level; j++) {
             statsLevel[i].textContent+='✨'
        }
    }
}


createAllTeam()


// si vous êtes en avance :
// Regardez un peu l'object destructuring ^^
// > https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
