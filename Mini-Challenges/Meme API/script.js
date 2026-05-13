const memeBtn = document.querySelector('.generate-meme')
const title = document.querySelector('.meme-title')
const img = document.querySelector('img')
const author = document.querySelector('.author')

async function generateMeme() {
    const data = await fetch("https://meme-api.com/gimme/wholesomememes")
    const meme = await data.json()
    
    title.innerText = meme.title
    img.src = meme.url
    author.innerText = `Meme By:${meme.author}`
    
}
memeBtn.addEventListener('click', () => {
    generateMeme()
})
