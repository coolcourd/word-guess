let words = `Actor Gold Painting Advertisement Grass Parrot Afternoon Greece Pencil Airport Guitar Piano Ambulance Hair Pillow Animal Hamburger Pizza Answer Helicopter Planet Apple Helmet Plastic Army Holiday Portugal Australia Honey Potato Balloon Horse Queen Banana Hospital Quill Battery House Rain Beach Hydrogen Rainbow Beard Ice Raincoat Bed Insect Refrigerator Belgium Insurance Restaurant Boy Iron River Branch Island Rocket Breakfast Jackal Room Brother Jelly Rose Camera Jewelry Russia Candle Jordan Sandwich Car Juice School Caravan Kangaroo Scooter Carpet King Shampoo Cartoon Kitchen Shoe China Kite Soccer Church Knife Spoon Crayon Lamp Stone Crowd Lawyer Sugar Daughter Leather Sweden Death Library Teacher Denmark Courd-is-Great! Lighter Telephone Diamond Lion Television Dinner Lizard Tent Disease Lock Thailand Doctor London Tomato Dog Lunch Toothbrush Dream Machine Traffic Dress Magazine Train Easter Magician Truck Egg Manchester Uganda Eggplant Market Umbrella Egypt Match Van Elephant Microphone Vase Energy Monkey Vegetable Engine Morning Vulture England Motorcycle Wall Evening Nail Whale Eye Napkin Window Family Needle Wire Finland Nest Xylophone Fish Nigeria Yacht Flag Night Yak Flower Notebook Zebra Football Ocean Zoo Forest Oil Garden Fountain Orange Gas France Oxygen Girl Furniture Oyster Glass Garage Ghost Carrot Apple Potatoe Whale Fish Hot-Air-Baloon Celery Mushroom Grape Picachu Snorlax Pokeball Zelda Super-Smash-Bros Air-Conditioning Hagrid Harry-Potter`.split(' ')

const newWord = () => words.sort(() => .5 - Math.random()).pop()

let score = 0
let time = 0

const scoreBox = document.querySelector('.score')
const prevScoreBox = document.querySelector('.prev-score')
const wordBox = document.querySelector('.word')
const correct = document.querySelector("#correct")

const startButton = document.querySelector(".start")

const skip = document.querySelector("#skip")
const timer = document.querySelector('.time')

const model = (x) => {
  const overlay = document.querySelector('.overlay')
  overlay.innerHTML = x
  overlay.style.display = 'block'
  setTimeout(() => {
    overlay.style.display = 'none'
  }, 5000)
}

const next = () => {
  wordBox.innerHTML = newWord()
}

const handleCorrect = () => {
  score++
  scoreBox.innerHTML = score
  next()
  
}

const handleSkip = () => {
  next()
}

correct.addEventListener('click', handleCorrect)

skip.addEventListener('click', handleSkip)


const startGame = () => {
  prevScoreBox.innerHTML = score
  next()
  score = 0
  scoreBox.innerHTML = '0'
  startButton.style.display = 'none'
  correct.style.display = 'block'
  skip.style.display = 'block'
  setTimeout(endGame, 60000)
  time = 60
  decrementTime()
}

const endGame = () => {
  startButton.style.display = 'block'
  correct.style.display = 'none'
  skip.style.display = 'none'
  model(`your score is ${score}`)
}

const decrementTime = () => {
  setTimeout(() => {
    time--
    timer.innerHTML = time
    if (time >= 0) {
      decrementTime()
    }
  }, 1000)
}

startButton.addEventListener('click', startGame)

