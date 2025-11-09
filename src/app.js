import games from './games.json'
import templates from './template-games.hbs'
const list = document.querySelector('.list')

list.innerHTML = templates({ games })

//"images": "https://store-images.s-microsoft.com/image/apps.60323.14294656681058683.4d17bdd8-7026-429a-846f-cf7836bc9e56.a69e6905-8926-4a48-b243-14a039b97aae?mode=scale&q=90&h=1080&w=1920&format=jpg"
