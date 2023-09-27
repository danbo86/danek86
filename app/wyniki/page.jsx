
import Podsumowanie from '../wyniki/podsumowanie.jsx' 
import Dzienne from '../wyniki/dzienne.jsx' 

import Widget from '@/components/Widget.jsx'

export default function Wyniki() {
  return (
    <section className="wyniki" id="wyniki">

      <h2 className="heading">Moje <span>wyniki</span></h2>

      <div className="wyniki-row">

        

        {/* <div className="wyniki-column">

          <h3 className="title">Podsumowanie dzienne</h3>

          <div className="wyniki-box">
            <div className="wyniki-content">

              <div className="progres">
                <h3>Html <span>90%</span></h3>
                <div className="wyniki-bar"><span></span></div>
              </div>

              <div className="progres">
                <h3>Css <span>80%</span></h3>
                <div className="wyniki-bar"><span></span></div>
              </div>

              <div className="progres">
                <h3>Javascript <span>70%</span></h3>
                <div className="wyniki-bar"><span></span></div>
              </div>
              
              <div className="progres">
                <h3>Python <span>60%</span></h3>
                <div className="wyniki-bar"><span></span></div>
              </div>

            </div>
          </div>

        </div> */}
        {<Podsumowanie/>}

        {<Dzienne/>}

    
        

      </div>
      
      
      <div className='wyniki-row'>
      
        <div className="wyniki-column">
          {<Widget/>}
        </div>

      </div>


     
      
    </section>
  )
}