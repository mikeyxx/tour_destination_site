import { useState, useEffect, useReducer } from 'react'
import Loading from './Components/loading'
import Tours from './Components/tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTour] = useState([]);

  function removeTour(id) {
    const newTour = tours.filter(tour => tour.id !== id)
    setTour(newTour)
  }

  async function fetchTours() {
    setIsLoading(true)

    try {
      const res = await fetch(url)
      const tour = await res.json()
      setIsLoading(false)
      setTour(tour)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }

  }

  useEffect(() => {
    fetchTours()
  },[])

  if(isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  
  if(tours.length < 1) {
    return (
      <main>
        <div className='title'>
          <h1>no tours left to show</h1>
          <button onClick={fetchTours} className="btn">
            refresh
          </button>
        </div>
      </main>
    )
  }
  
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
}

export default App;