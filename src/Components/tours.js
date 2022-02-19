import Tour from './tour'

const tours = ({tours, removeTour}) => {

  return (
    <section className='wrap'>
        <div className='title'>
            <h1>Our Tours</h1>
            <div className='underline'></div>
        </div>
        <div>
            {tours.map(tour => {
                return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
            })}
        </div>
    </section>
  )
}

export default tours