// 'use client'
import Podsumowanie from '../wyniki/podsumowanie.jsx' 
import Dzienne from '../wyniki/dzienne.jsx' 
import Wykres from '@/components/Wykres.jsx'

import Widget from '@/components/Widget.jsx'

export default function Wyniki() {
  return (
    <section className="wyniki" id="wyniki">

      <h2 className="heading">Moje <span>wyniki</span></h2>

      <div className="wyniki-row">
       
        {<Podsumowanie/>}

        {<Dzienne/>}

      </div>
      
      
      <div className='wyniki-row'>
      
        <div className="wyniki-column">
          
          {<Widget/>}
         
        </div>

      </div>

      <div className='wyniki-row'>
      
        <div className="wyniki-column">
          
          {<Wykres/>}
         
        </div>

      </div>

    </section>
  )
}