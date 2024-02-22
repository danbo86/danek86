import Galeria from "../../components/Galeria"
const fs = require("fs")

// Ścieżka do folderu z obrazkami
const folderPath = "./public/gallery"

// Odczytaj zawartość folderu
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Błąd odczytu folderu:", err)
    return
  }

  // Filtruj tylko pliki obrazków (np. JPG, PNG)
  const imageFiles = files.filter((file) => {
    const extension = file.split(".").pop().toLowerCase()
    return ["jpg", "jpeg", "png", "gif"].includes(extension)
  })

  const imagess = imageFiles.map(file => `/gallery/${file}`);
  console.log(imagess)
  
})

const images = [
  '/gallery/1708560660753.jpg',
  '/gallery/1708560682815.jpg',
  '/gallery/1708560690224.jpg',
  '/gallery/1708560702059.jpg',
  '/gallery/1708560705809.jpg',
  '/gallery/1708560710896.jpg',
  '/gallery/1708560714083.jpg',
  '/gallery/1708560718602.jpg',
  '/gallery/1708560723176.jpg',
  '/gallery/1708560758977.jpg',
  '/gallery/1708560770672.jpg',
  '/gallery/1708560797762.jpg',
  '/gallery/1708560809191.jpg',
  '/gallery/1708560961815.jpg'
]

function page() {
  return (
    <section>
      <div className="galeria">
        <Galeria images={images} />
      </div>
    </section>
  )
}
export default page
