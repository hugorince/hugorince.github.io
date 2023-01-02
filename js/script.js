// VARIABLES
//////////////////////////////////////

const capitals = {
    'Afghanistan': 'Kabul',
    'Albania': 'Tirana',
    'Algeria': 'Algiers',
    'Andorra': 'Andorra la Vella',
    'Angola': '	Luanda',
    'Antigua and Barbuda': "Saint John's",
    'Argentina': 'Buenos Aires',
    'Armenia': 'Yerevan',
    'Australia': 'Canberra',
    'Austria': 'Vienna',
    'Azerbaijan': 'Baku',
    'Bahamas': 'Nassau',
    'Bahrain': 'Manama',
    'Bangladesh': 'Dhaka',
    'Barbados': 'Bridgetown',
    'Belarus': 'Minsk',
    'Belgium': 'Brussels',
    'Belize': 'Belmopan',
    'Benin': 'Porto Novo',
    'Bhutan': 'Thimphu',
    'Bolivia': 'La Paz',
    'Bosnia and Herzegovina': 'Sarajevo',
    'Botswana': 'Gaborone',
    'Brazil': 'Brasilia',
    'Brunei': 'Bandar Seri Begawan',
    'Bulgaria': 'Sofia',
    'Burkina Faso': 'Ouagadougou',
    'Burundi': 'Gitega',
    'Cambodia': 'Phnom Penh',
    'Cameroon': 'Yaounde',
    'Canada': 'Ottawa',
    'Cape Verde': 'Praia',
    'Central African Republic': 'Bangui',
    'Chad': "N'Djamena",
    'Chile': 'Santiago',
    'China': 'Beijing',
    'Colombia': 'Bogota',
    'Comoros': 'Moroni',
    'Democratic Republic of the Congo': 'Kinshasa',
    'Republic of the Congo': 'Brazzaville',
    'Costa Rica': 'San Jose',
    "Côte d'Ivoire": 'Yamoussoukro',
    'Croatia': 'Zagreb',
    'Cuba': 'Havana',
    'Cyprus': 'Nicosia',
    'Czech Republic': 'Prague',
    'Denmark': 'Copenhagen',
    'Djibouti': 'Djibouti',
    'Dominica': 'Roseau',
    'Dominican Republic': 'Santo Domingo',
    'East Timor': '	Dili',
    'Ecuador': 'Quito',
    'Egypt': 'Cairo',
    'El Salvador': 'San Salvador',
    'United Kingdom': 'London',
    'Equatorial Guinea': 'Malabo',
    'Eritrea': 'Asmara',
    'Estonia': 'Tallinn',
    'Eswatini': 'Mbabana',
    'Ethiopia': 'Addis Ababa',
    'Federated States of Micronesia': 'Palikir',
    'Fiji': 'Suva',
    'Finland': 'Helsinki',
    'France': 'Paris',
    'Gabon': 'Libreville',
    'Gambia': 'Banjul',
    'Georgia': 'Tbilisi',
    'Germany': 'Berlin',
    'Ghana': 'Accra',
    'Greece': 'Athens',
    'Grenada': "Saint George's",
    'Guatemala': 'Guatemala City',
    'Guinea': 'Conakry',
    'Guinea-Bissau': 'Bissau',
    'Guyana': 'Georgetown',
    'Haiti': 'Port au Prince',
    'Honduras': 'Tegucigalpa',
    'Hungary': 'Budapest',
    'Iceland': 'Reykjavik',
    'India': '	New Delhi',
    'Indonesia': 'Jakarta',
    'Iran': 'Tehran',
    'Iraq': 'Baghdad',
    'Ireland': 'Dublin',
    'Israel': 'Jerusalem',
    'Italy': 'Rome',
    'Jamaica': 'Kingston',
    'Japan': 'Tokyo',
    'Jordan': 'Amman',
    'Kazakhstan': 'Nur-Sultan',
    'Kenya': 'Nairobi',
    'Kiribati': 'Tarawa Atoll',
    'Kosovo': 'Pristina',
    'Kuwait': 'Kuwait City',
    'Kyrgyzstan': 'Bishkek',
    'Laos': 'Vientiane',
    'Latvia': 'Riga',
    'Lebanon': 'Beirut',
    'Lesotho': 'Maseru',
    'Liberia': 'Monrovia',
    'Libya': 'Tripoli',
    'Liechtenstein': 'Vaduz',
    'Lithuania': 'Vilnius',
    'Luxembourg': 'Luxembourg',
    'Madagascar': 'Antananarivo',
    'Malawi': 'Lilongwe',
    'Malaysia': 'Kuala Lumpur',
    'Maldives': 'Male',
    'Mali': 'Bamako',
    'Malta': 'Valletta',
    'Marshall Islands': 'Majuro',
    'Mauritania': 'Nouakchott',
    'Mauritius': 'Port Louis',
    'Mexico': 'Mexico City',
    'Moldova': 'Chisinau',
    'Monaco': 'Monaco',
    'Mongolia': 'Ulaanbaatar',
    'Montenegro': 'Podgorica',
    'Morocco': 'Rabat',
    'Mozambique': 'Maputo',
    'Myanmar': 'Nay Pyi Taw',
    'Namibia': 'Windhoek',
    'Nauru': 'No capital',
    'Nepal': 'Kathmandu',
    'Netherlands': 'Amsterdam',
    'New Zealand': 'Wellington',
    'Nicaragua': 'Managua',
    'Niger': 'Niamey',
    'Nigeria': 'Lagos',
    'North Korea': 'Pyongyang',
    'North Macedonia': 'Skopje',
    'Norway': 'Oslo',
    'Oman': 'Muscat',
    'Pakistan': 'Islamabad',
    'Palau': 'Melekeok',
    'Palestine': 'Jerusalem',
    'Panama': 'Panama City',
    'Papua New Guinea': 'Port Moresby',
    'Paraguay': 'Asuncion',
    'Peru': 'Lima',
    'Philippines': 'Manila',
    'Poland': 'Warsaw',
    'Portugal': 'Lisbon',
    'Qatar': 'Doha',
    'Romania': 'Bucharest',
    'Russia': 'Moscow',
    'Rwanda': 'Kigali',
    'Saint Kitts and Nevis': 'Basseterre',
    'Saint Lucia': 'Castries',
    'Saint Vincent and the Grenadines': 'Kingstown',
    'Samoa': 'Apia',
    'San Marino': 'San Marino',
    'Sao Tome and Principe': 'Sao Tome',
    'Saudi Arabia': 'Riyadh',
    'Senegal': 'Dakar',
    'Serbia': 'Belgrade',
    'Seychelles': 'Victoria',
    'Sierra Leone': 'Freetown',
    'Singapore': 'Singapore',
    'Slovakia': 'Bratislava',
    'Slovenia': 'Ljubljana',
    'Solomon Islands': 'Honiara',
    'Somalia': 'Mogadishu',
    'South Africa': 'Pretoria',
    'South Korea': 'Seoul',
    'South Sudan': 'Juba',
    'Spain': 'Madrid',
    'Sri Lanka': 'Sri Jayawardenapura Kotte',
    'Sudan': 'Khartoum',
    'Suriname': 'Paramaribo',
    'Sweden': 'Stockholm',
    'Switzerland': 'Bern',
    'Syria': 'Damascus',
    'Taiwan': 'Taipei',
    'Tajikistan': 'Dushanbe',
    'Tanzania': 'Dodoma',
    'Thailand': 'Bangkok',
    'Togo': 'Lome',
    'Tonga': "Nuku'alofa",
    'Trinidad and Tobago': 'Port of Spain',
    'Tunisia': 'Tunis',
    'Türkiye': 'Ankara',
    'Turkmenistan': 'Ashgabat',
    'Tuvalu': 'Funafuti',
    'Uganda': 'Kampala',
    'Ukraine': 'Kyiv',
    'United Arab Emirates': 'Abu Dhabi',
    'United States': 'Washington D.C.',
    'Uruguay': 'Montevideo',
    'Uzbekistan': 'Tashkent',
    'Vanuatu': 'Port Vila',
    'Vatican City': 'Vatican City',
    'Venezuela': 'Caracas',
    'Vietnam': 'Hanoi',
    'Yemen': "Sana'a",
    'Zambia': 'Lusaka',
    'Zimbabwe': 'Harare'
}

const cities = ['Herat', 'Rana', 'Shkoder', 'Oran', 'Kouba', 'Llorts', 'Benguela', 'Namibe', 'Woods', 'Salta', 'Rio Grande', 'San Francisco', 'Sydney', 'Adelaide', 'Melbourne', 'Brisbane', 'Salzbourg', 'Graz', 'Quba', 'Xirdalan', 'Chittagong', 'Uttara', 'Rockley', 'White Hill', 'Homiel', 'Antwerp', 'Bruges', 'Sucre', 'Cochabamba', 'Zenica', 'Francistown', 'Sao Paulo', 'Rio de Janeiro', 'Borovan', 'Topoli', 'Sihanoukville', 'Calgary', 'Vancouver', 'Toronto', 'Montreal', 'Durrës', 'Huambo', 'Cordoba', 'Gyumri', 'Freeport', 'Riffa', 'Speightstown', 'Gomel', 'San Ignacio', 'Abomey-Calavi', 'Phuntsholing', 'El Alto', 'Banja Luka', 'Kuala Belait', 'Plovdiv', 'Bobo-Dioulasso', 'Muyinga', 'Siem Reap', 'Mindelo', 'Cotonou', 'Bujumbura', 'Douala', 'Bimbo', 'Moundou', 'Puente Alto', 'Shanghai', 'Medellin', 'Lubumbashi', 'Pointe-Noire', 'Alajuela', 'Abidjan', 'Bouake', 'Split', 'Limassol', 'Brno', 'Ostrava', 'Aarhus', 'Ali Sabieh', 'Portsmouth', 'Dare', 'Guayaquil', 'Alexandria', 'Sanata Ana', 'Bata', 'Keren', 'Tartu', 'Manzini', 'Dire Dawa', 'Nasinu', 'Espoo', 'Tampere', 'Marseille', 'Lyon', 'Port-Gentil', 'Serekunda', 'Batumi', 'Hamburg', 'Kumasi', 'Thessaloniki', 'Gouyave', 'Nzerekore', 'Gabu', 'Linden', 'Gonaives', 'San Pedro Sula', 'Debrecen', 'Kopavogur', 'Mumbai', 'Surabaya', 'Mashhad', 'Basra', 'Cork', 'Tel Aviv', 'Milan', 'Spanish Town', 'Osaka', 'Zarqa', 'Almaty', 'Mombasa', 'Bairiki', 'Hamhung', 'Busan', 'Prizren', 'Al Jahra', 'Osh', 'Pakxe', 'Daugavpils', 'Tripoli', 'Teyateyaneng', 'Gbarnga', 'Benghazi', 'Schaan', 'Kaunas', 'Toamasina', 'Blantyre', 'George Town', 'Addu City', 'Sikasso', 'Ebeye', 'Nouadhibou', 'Weno', 'Tiraspol', 'Darkhan', 'Niksic', 'Casablanca', 'Matola', 'Yangon', 'Rundu', 'Denigomudu', 'Pokhara', 'Rotterdam', 'We', 'Auckland', 'Leon', 'Abuja', 'Bitola', 'Bergen', 'Salalah', 'Lahore', 'Airai', 'Colon', 'Lae', 'Ciudad del Este', 'Arequipa', 'Quezon City', 'Krakow', 'Porto', 'Al Rayyan', 'Constanta', 'Saint-Petersburg', 'Muhanga', 'Charlestown', 'Vaitele', 'Trinidade', 'Jeddah', 'Touba', 'Novi Sad', 'Anse Etoile', 'Bo', 'Kosice', 'Maribor', 'Gizo', 'Hargeisa', 'Yei', 'Barcelona', 'Colombo', 'Port Sudan', 'Lelydorp', 'Gothenburg', 'Geneva', 'Aleppo', 'New Taipei', 'Mwanza', 'Pak Kret', 'Sokode', 'Neiafu', 'San Fernando', 'Sfax', 'Istanbul', 'Asau', 'Gulu', 'Donetsk', 'Dubai', 'Birmingham', 'Los Angeles', 'Maldonado', 'Namangan', 'Luganville', 'Maracaibo', 'Aden', 'Kitwe', 'Bulawayo']

for (let i in capitals){
    cities.push(capitals[i])
}

let countryGuessed =[]
let score = 0
let highScore = 0
let difficulty = 2
let fiftyBonus = 'none'
let shuffled = 'none'
let skipped = 'none'

const button1 = document.getElementById('btn1')
const button2 = document.getElementById('btn2')
const button3 = document.getElementById('btn3')
const button4 = document.getElementById('btn4')
const button5 = document.getElementById('btn5')
const button6 = document.getElementById('btn6')
const button7 = document.getElementById('btn7')
const button8 = document.getElementById('btn8')
const buttons2 = [button1, button2]
const buttons3 = [button1, button2, button5]
const buttons = [button1, button2, button3, button4]
const buttons6 = [button1, button2, button3, button4, button5, button7]
const buttons8 = [button1, button2, button3, button4, button5, button6, button7, button8]


const difficultyDisplay = document.getElementById('diff')
const niveauInput = document.getElementById('niveau')
const propButton = document.getElementById('prop')
const fiftyButton = document.getElementById('fifty')
const skipButton = document.getElementById('skip')
const continuePlay = document.getElementById('continuePlay')
continuePlay.style.display ='none'
const scoreDisplay = document.getElementById("score")
const startPlaying = document.getElementById('enter_link')
scoreDisplay.innerHTML = 'Your score is : ' + '<b>' + score
difficultyDisplay.innerHTML = 'difficulty : medium'




//FUNCTIONS
///////////////////////////////////////

const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const classBtn = ()=>{
    buttons8[0].className = 'btn'
    buttons8[1].className = 'btn'
    buttons8[2].className = 'btn'
    buttons8[3].className = 'btn'
    buttons8[4].className = 'btn'
    buttons8[5].className = 'btn'
    buttons8[6].className = 'btn'
    buttons8[7].className = 'btn'
}

const classNull = ()=>{
    buttons8[0].onclick = null
    buttons8[1].onclick = null
    buttons8[2].onclick = null
    buttons8[3].onclick = null
    buttons8[4].onclick = null
    buttons8[5].onclick = null
    buttons8[6].onclick = null
    buttons8[7].onclick = null
}

const resetBonus = () => {
    fiftyBonus = 'none'
    shuffled = 'none'
    skipped = 'none'
}

const hideBonus = () => {
    propButton.style.display ='none'
    fiftyButton.style.display ='none'
    skipButton.style.display ='none'
}

const showBonus = () => {
    propButton.style.display ='inline'
    fiftyButton.style.display ='inline'
    skipButton.style.display ='inline'
}

const scoreDisplayLose = () =>{
    scoreDisplay.innerHTML = 'Your score is : ' + '<b>' + score
    scoreDisplay.style.scale = '1.5'
    scoreDisplay.style.color = 'gold'
}

const scoreDisplayAgain = () =>{
    scoreDisplay.style.scale = '1'
    scoreDisplay.style.color = 'white'
    scoreDisplay.innerHTML = 'Your score is : ' + '<b>' + score
}

const displayFifty = () => {
    if (difficulty == 1){
        button3.style.display = 'none'
        button4.style.display = 'none'
        button5.style.display = 'none'
        button6.style.display = 'none'
        button7.style.display = 'none'
        button8.style.display = 'none'
    }
    if (difficulty == 2){
        button3.style.display = 'none'
        button4.style.display = 'none'
        button6.style.display = 'none'
        button7.style.display = 'none'
        button8.style.display = 'none'
    }
    if (difficulty == 3){
        button5.style.display = 'none'
        button6.style.display = 'none'
        button7.style.display = 'none'
        button8.style.display = 'none'
    }
}

const displayNoBonus = () => {
    if (difficulty == 1){
        button1.style.display = 'inline'
        button2.style.display = 'inline'
        button3.style.display = 'inline'
        button4.style.display = 'inline'
        button5.style.display = 'none'
        button6.style.display = 'none'
        button7.style.display = 'none'
        button8.style.display = 'none'
    }
    if (difficulty == 2){
        button1.style.display = 'inline'
        button2.style.display = 'inline'
        button3.style.display = 'inline'
        button4.style.display = 'inline'
        button5.style.display = 'inline'
        button6.style.display = 'none'
        button7.style.display = 'inline'
        button8.style.display = 'none'

    }
    if (difficulty == 3){
        button1.style.display = 'inline'
        button2.style.display = 'inline'
        button3.style.display = 'inline'
        button4.style.display = 'inline'
        button5.style.display = 'inline'
        button6.style.display = 'inline'
        button7.style.display = 'inline'
        button8.style.display = 'inline'
    }
}

const checkCountry = (arr1, arr2) => {

    console.log('difficulty = ', difficulty)
    let result = []
    let arrQuest = []
    
    if (arr2.length === 0){
        let keys = Object.keys(arr1)
        let countryQuestion = keys[Math.floor(Math.random() * keys.length)]
        result.push(countryQuestion)
        result.push(arr1[countryQuestion])
        console.log ('Answer is : ', arr1[countryQuestion])
    }
    else {
        for (let i = 0 ; i < Object.values(arr1).length ; i++){
            if (arr2.includes(Object.values(arr1)[i]) == false){
                arrQuest.push(Object.keys(arr1)[i])
             }
            }
    shuffle(arrQuest)
    result.push(arrQuest[0])
    result.push(arr1[arrQuest[0]])
    console.log('Answer is : ', arr1[arrQuest[0]])
    }
return result
}

const split = (ans, finalCapi, countryGuessede, obje) => {
    let finalCap2 = [ans]
    if (difficulty == 1 && fiftyBonus == 'activated'){
        displayFifty()
        for (let i in finalCapi){
            if (finalCapi[i] != ans && finalCap2.length < 2){
                finalCap2.push(finalCapi[i])
            }
        }
        shuffle(finalCap2)
        assignButtons(buttons2, finalCap2, ans, countryGuessede, obje)
    }
    if (difficulty == 2 && fiftyBonus == 'activated'){
        displayFifty()
        for (let i in finalCapi){
            if (finalCapi[i] != ans && finalCap2.length < 3){
                finalCap2.push(finalCapi[i])
            }
        }
        shuffle(finalCap2)
        assignButtons(buttons3, finalCap2, ans, countryGuessede, obje)
    }
    if (difficulty == 3 && fiftyBonus == 'activated'){
        displayFifty()
        for (let i in finalCapi){
            if (finalCapi[i] != ans && finalCap2.length < 4){
                finalCap2.push(finalCapi[i])
            }
        }
        shuffle(finalCap2)
        assignButtons(buttons, finalCap2, ans, countryGuessede, obje)
    }
}

const shuffleAgain = (ans, capi, countryGuessede, obje) =>{
    let finalCap2 = [ans]
    shuffle(capi)
    if (difficulty == 1 && shuffled == 'activated' && fiftyBonus == 'none'){
        for (let i in capi){
            if (capi[i] != ans && finalCap2.length < 4){
                finalCap2.push(capi[i])
            }
        }
        shuffle(finalCap2)
        assignButtons(buttons, finalCap2, ans, countryGuessede, obje)
        console.log('new props = ', finalCap2)
    }
    if (difficulty == 1 && shuffled == 'activated' && fiftyBonus == 'activated'){
        for (let i in capi){
            if (capi[i] != ans && finalCap2.length < 2){
                finalCap2.push(capi[i])
            }
        }
        shuffle(finalCap2)
        assignButtons(buttons2, finalCap2, ans, countryGuessede, obje)
        console.log('new props = ', finalCap2)
    }
    if (difficulty == 2 && shuffled == 'activated' && fiftyBonus == 'none'){
        for (let i in capi){
            if (capi[i] != ans && finalCap2.length < 6){
                finalCap2.push(capi[i])
            }
        }
        shuffle(finalCap2)
        assignButtons(buttons6, finalCap2, ans, countryGuessede, obje)
        console.log('new props = ', finalCap2)
    }
    if (difficulty == 2 && shuffled == 'activated' && fiftyBonus == 'activated'){
        for (let i in capi){
            if (capi[i] != ans && finalCap2.length < 3){
                finalCap2.push(capi[i])
            }
        }
        shuffle(finalCap2)
        assignButtons(buttons3, finalCap2, ans, countryGuessede, obje)
        console.log('new props = ', finalCap2)
    }
    if (difficulty == 3 && shuffled == 'activated' && fiftyBonus == 'none'){
        for (let i in capi){
            if (capi[i] != ans && finalCap2.length < 8){
                finalCap2.push(capi[i])
            }
        }
        shuffle(finalCap2)
        assignButtons(buttons8, finalCap2, ans, countryGuessede, obje)
        console.log('new props = ', finalCap2)
    }
    if (difficulty == 3 && shuffled == 'activated' && fiftyBonus == 'activated'){
        for (let i in capi){
            if (capi[i] != ans && finalCap2.length < 4){
                finalCap2.push(capi[i])
            }
        }
        shuffle(finalCap2)
        assignButtons(buttons, finalCap2, ans, countryGuessede, obje)
        console.log('new props = ', finalCap2)
    }
}

const assignButtons = (buttArr, guessArr, ans, devine, obje) => {

    for (let i in buttArr){
        buttArr[i].innerHTML = guessArr[i]
    }

    for (let i in buttArr){
        buttArr[i].onclick = () => {
        continuePlay.style.display = 'inline'
        if (buttArr[i].innerHTML === ans){
            buttArr[i].className = 'btnWin'
            devine.push(ans)
            console.log( 'Array of Country already guessed = ', devine)
            score += 1
            if (score > highScore){
                highScore = score
            }
            console.log('score is :', score)
            scoreDisplay.innerHTML = 'Your score is : ' + '<b>' + score
            classNull()
            continuePlay.className = 'continueAnim'
            continuePlay.innerHTML = 'Continue'
            for (let j in buttArr){
            if (buttArr[j] != buttArr[i]){
                buttArr[j].className = 'btn2'
            }
        }
            continuePlay.onclick = () => {
                resetBonus()
                continuePlay.style.display ='none'
                document.getElementById('highscore').innerHTML = '🏆 Highscore is : ' + highScore
                classBtn()
                
                countryToGuess(obje)
            }
        }
        else {
            buttArr[i].className = 'btnLose'
            for (let j in buttArr){
                if (buttArr[j] != buttArr[i]){
                    buttArr[j].className = 'btn2'
                }
                if (buttArr[j].innerHTML === ans){
                    buttArr[j].className = 'btnWin'
                } 
            }
            hideBonus()
            resetBonus()
            classNull()
            scoreDisplayLose()
            score = 0
            devine = []
            continuePlay.innerHTML = 'Play Again'
            continuePlay.className = 'playAgain'
            console.log('Country already guessed = ', devine)
            continuePlay.onclick = () => {
                $('.splashScreen').fadeIn()
                continuePlay.style.display ='none'
                scoreDisplayAgain()
                classBtn()
                document.getElementById('highscore').innerHTML = '🏆 Highscore is : ' + highScore
                countryToGuess(obje)
                showBonus()
            }
        }
    }
    }
    continuePlay.onclick = null
}

const assign2 = (capi, ans, finalCapi) => {

    if (difficulty == 1 && fiftyBonus == 'none'){
        displayNoBonus()
        for (let i in capi){
            if (capi[i] != ans && finalCapi.length < 4){
            finalCapi.push(capi[i])
            }   
        }
    }
    if (difficulty == 1 && fiftyBonus == 'activated'){
        displayFifty()
        for (let i in capi){
            if (capi[i] != ans && finalCapi.length < 2){
            finalCapi.push(capi[i])
            }   
        }
    }
    if (difficulty == 2 && fiftyBonus == 'none'){
        displayNoBonus()
        for (let i in capi){
            if (capi[i] != ans && finalCapi.length < 6){
                finalCapi.push(capi[i])
            }
        }
    }
    if (difficulty == 2 && fiftyBonus == 'activated'){
        displayFifty()
        for (let i in capi){
            if (capi[i] != ans && finalCapi.length < 3){
                finalCapi.push(capi[i])
            }
        }
    }
    if (difficulty == 3 && fiftyBonus == 'none'){
        displayNoBonus()
        for (let i in capi){
            if (capi[i] != ans && finalCapi.length < 8){
                finalCapi.push(capi[i])
            }
        }
    }
    if (difficulty == 3 && fiftyBonus == 'activated'){
        displayFifty()
        for (let i in capi){
            if (capi[i] != ans && finalCapi.length < 4){
                finalCapi.push(capi[i])
            }
        }
    }
}
    
const countryToGuess = (obj) =>{

    let countryCkecked = checkCountry(obj, countryGuessed) 
    let countryQuestion = countryCkecked[0]
    let answer = countryCkecked[1]
    let cap = [] 
    document.getElementById("countryToGuess").innerHTML = 'What is the capital of ' + '<em>' + countryQuestion + '</em>' + ' ?'

    for (let i in cities){
        cap.push(cities[i])
    }
    shuffle(cap)
    let finalCap = [answer]
    assign2(cap, answer, finalCap)
    shuffle(finalCap)

    fiftyButton.onclick = () => {
        fiftyBonus = 'activated'
        split(answer, finalCap, countryGuessed, obj)
        fiftyButton.style.display = 'none'  
    }

    propButton.onclick = () => {
        shuffled = 'activated'
        shuffleAgain(answer, cap, countryGuessed, obj)
        propButton.style.display = 'none'  
    }

    skipButton.onclick = () => {
        if (fiftyBonus = 'activated'){
            fiftyBonus = 'none'
        }
        if (shuffled = 'activated'){
            shuffled = 'none'
        }
        skipped = 'activated'
        countryToGuess(obj)
        skipButton.style.display = 'none'
    }

    if (difficulty == 1 && fiftyBonus == 'none' && shuffled == 'none' && skipped == 'none'){
        displayNoBonus()
        assignButtons(buttons, finalCap, answer, countryGuessed, obj)
    }
    if (difficulty == 1 && skipped == 'activated'){
        displayNoBonus()
        assignButtons(buttons, finalCap, answer, countryGuessed, obj)
    }
    if (difficulty == 2 && fiftyBonus == 'none' && shuffled == 'none' && skipped == 'none'){
        displayNoBonus()
        assignButtons(buttons6, finalCap, answer, countryGuessed, obj)
    }
    if (difficulty == 2 && skipped == 'activated'){
        displayNoBonus()
        assignButtons(buttons6, finalCap, answer, countryGuessed, obj)
    }
    if (difficulty == 3 && fiftyBonus == 'none' && shuffled == 'none' && skipped == 'none'){
        displayNoBonus()
        assignButtons(buttons8, finalCap, answer, countryGuessed, obj)
    }
    if (difficulty == 3 && skipped == 'activated'){
        displayNoBonus()
        assignButtons(buttons8, finalCap, answer, countryGuessed, obj)
    }
}

niveauInput.onclick = () =>{
    if (document.getElementById('niveau').value == 1){
        difficultyDisplay.innerHTML = 'difficulty : easy'
    }
    if (document.getElementById('niveau').value == 2){
    difficultyDisplay.innerHTML = 'difficulty : medium'
    }
    if (document.getElementById('niveau').value == 3){
        difficultyDisplay.innerHTML = 'difficulty : hard'
    }
}

$('.enter_link').click(function() { 
    $(this).parent().fadeOut(500);
    difficulty = document.getElementById('niveau').value
    countryToGuess(capitals)
})