export default function Kontakt() {
  return (
    
    <section className="contact" id="contact">
      <h2 className="heading">Kontakt <span>do mnie</span></h2>

      <form action="#">

        <div className="input-box">

          <div className="input-field">
            <input type="text" placeholder="Imię" required/>
            <span className="focus"></span>
          </div>

          <div className="input-field">
            <input type="text" placeholder="Nazwisko" required/>
            <span className="focus"></span>
          </div>

        </div>
        
        <div className="input-box">

          <div className="input-field">
            <input type="email" placeholder="Email" required/>
            <span className="focus"></span>
          </div>

          {/* <div className="input-field">
            <input type="text" placeholder="email" required/>
            <span className="focus"></span>
          </div> */}


        </div>

        <div className="textarea-field">
          <textarea name="" id="" cols="30" rows="10" placeholder="Twoja wiadomość" required></textarea>
          <span className="focus"></span>
        </div>

        <div className="btn-box btns">
          <button type="submit" className="btn">Wyślij</button>
        </div>
      </form>

    </section>

  )
}