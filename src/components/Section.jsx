import React,{useContext} from 'react'
import MyContext from '../context/MyContext'

const Section = () => {
    const shop =  useContext(MyContext)
    const {joke}  = shop

    return (
        <div className="section">
            <h2>{joke}</h2>
        </div>
    )
}

export default Section
