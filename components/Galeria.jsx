import Image from "next/image"

const Galeria = ({images}) => {
  return (
    <>
    {images.map((image, index) => (
        <div className="obraz" key={index}>
            <Image key={index} src={image} alt={`Image ${index}`}  height={640} width={480} className="img-galeria"  priority={true} />
        </div>
        
    ))}
    
    </>
    
  
  )
}
export default Galeria