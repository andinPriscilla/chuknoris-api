import React, {useContext} from 'react'

import MyContext from '../context/MyContext'

const Footer = () => {
    const shop =  useContext(MyContext)
    const {}  = shop


    return (
        <footer>
            <p className="footerText">© Priscila Andinwo 2021</p>
            <p className="footerText">Written with React Hooks</p>
        </footer>
    )
}

export default Footer
