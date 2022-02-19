import {useState} from 'react'

const Tour = ({id, name, image, info, price, removeTour}) => {
    const [readMore, setReadMore] = useState(false)

    function toggleReadMore() {
        if(readMore == false) {
           setReadMore(true)
        } else {
            setReadMore(false)
        }

        return
    }
  return (
    <article className="single-tour">
        <img src={image} alt={name} />
        <footer>
            <div className="tour-info">
                <h4>{name}</h4>
                <h4 className="tour-price">${price}</h4>
            </div>
            {/* You can also use slice here in place of substring */}
            <p>{readMore ? info : `${info.substring(0, 200)}...`}
            <button onClick={() => toggleReadMore()}>{readMore ? 'show less' : 'read more'}</button></p>
            <button onClick={() => removeTour(id)} className="delete-btn">not interested</button>
        </footer>   
    </article>
  )
}

export default Tour