import React, {useContext} from 'react'
import MyContext from '../context/MyContext'

const Header = () => {
    const shop =  useContext(MyContext)
    const {categories, select, setSelect}  = shop

    return (
        <div className="header">
            <h1>Chuck Norris Random Jokes</h1>
            <img src='https://image.pngaaa.com/68/3233068-middle.png' alt="chuck" /> 
            <label>Please Choose a Category</label>
            <select value={select} onChange={(e) => setSelect(e.target.value)}>
                {categories.map((category,index) => <option key={index} value={category}>{category}</option>)}
            </select>

        </div>
    )
}

export default Header
