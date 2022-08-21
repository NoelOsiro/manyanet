import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import { faHouseSignal,faVideo,faCloudDownload,faLaptopCode ,faBoxesPacking,faNetworkWired} from '@fortawesome/free-solid-svg-icons'
library.add(faVideo,faLaptopCode,faBoxesPacking,faHouseSignal,faCloudDownload,faNetworkWired)
export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Services</h2>
          <p>
            We offer a broad range of services ranging from BroadBand connectivity to 
            IT and software integration
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <FontAwesomeIcon icon={d.icon} size="4x"/>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
