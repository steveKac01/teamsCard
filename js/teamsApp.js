console.log('teamsApp')

// remplacer dynamiquement les infos de la card avec
// les infos de l'objet oneDev si dessous :

const oneDev  = {
    'firstName' : 'Efrim',
    'lastName'  : 'Menuk',
    'verbatim'  : 'Behaviour-driven Self-driving Conference Calls',
    'jobTitle'  : 'Full Stack 🚀',
    'profilePic': 'profil01.jpg',
    'stack':[{
            'label':'VueJs',
            'level':5
        },
        {
            'label':'php',
            'level':5
        }
    ]
}


const jobTitle = document.querySelector('.job')
jobTitle.textContent = oneDev.jobTitle


document.querySelector('.card-text > h2').textContent=oneDev.firstName+' '+oneDev.lastName

const starLevels = document.querySelectorAll('.stat >.level')
console.log(starLevels)

starLevels[0].textContent=''
starLevels[1].textContent=''


// je m'occupe ici que du level de VueJs

for (let i = 1; i <= oneDev.stack[0].level; i++) {
 starLevels[0].textContent=starLevels[0].textContent+'✨'
}

for (let i = 1; i <= oneDev.stack[1].level; i++) {
 starLevels[1].textContent=starLevels[1].textContent+'✨'
}

// comment faire pour attraper les deux stacks en une seule opération 


// ! Attention le nombre d'étoiles doit bien correspondre au level

// si vous êtes en avance :
// Regardez un peu l'object destructuring ^^
// > https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
