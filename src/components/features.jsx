import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import { faTruckFast,faCoins,faUserSecret,faComments } from '@fortawesome/free-solid-svg-icons'
library.add(faCoins,faComments,faTruckFast,faUserSecret)

export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Features</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                  {' '}
                  <div className='feature-icon'>
                  <FontAwesomeIcon icon={d.icon} size="4x" style={{'marginTop':'3rem'}}/>
                  </div>
                  
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
