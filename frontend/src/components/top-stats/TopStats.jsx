import { CiLocationOn } from 'react-icons/ci'
import { AiOutlineMail } from 'react-icons/ai'
import { BiPhoneCall, BiTimeFive } from 'react-icons/bi'

import './TopStats.scss'

const TopStats = () => {
  return (
    <div className='top-stats'>
        <div className="left"></div>
        <div className="right">
            <p> 
                <AiOutlineMail size={17} className='icon' /> medicare@gmail.com
            </p>
            <p> 
                <CiLocationOn size={17} className='icon' /> Balmatta, Kankanady
            </p>
            <p> 
                <BiTimeFive size={17} className='icon' /> Monday - Sunday 08:00 - 19:00
            </p>
            <p> 
                <BiPhoneCall size={17} className='icon' /> 555 555 5555
            </p>
        </div>
    </div>
  )
}

export default TopStats