import Link from "next/link"

export default function Omnie() {
  return (
   <section className="about" id="about">

        <h2 className="heading">O <span>mnie</span></h2>

        <div className="about-img">
            <img src="images/ptak.jpg" alt="" />
            <span className="circle-spin"></span>
        </div>

        <div className="about-content">
          <h3>Trader Spekulant</h3>
          <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium modi eligendi doloribus dolores quia eveniet quae tempore! Enim, exercitationem soluta laudantium maxime mollitia cumque placeat numquam repellendus sint rem, illo quos eius, dolores voluptatibus ea animi ipsum dicta ratione? Nemo dolores officia inventore sequi corrupti dolorem fugiat, expedita aspernatur distinctio.</p>
        </div>

        <div className="btn-box btns">
          <Link href="/" className="btn">Witaj</Link>
        </div>

   </section>
  )
}