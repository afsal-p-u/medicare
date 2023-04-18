import CurrentService from '../../components/current-service/CurrentService'
import History from '../../components/history/History'
import './BookedServices.scss'

const BookedServices = () => {
  return (
    <div className='booked-services'>
        <CurrentService />
        <History />
    </div>
  )
}

export default BookedServices