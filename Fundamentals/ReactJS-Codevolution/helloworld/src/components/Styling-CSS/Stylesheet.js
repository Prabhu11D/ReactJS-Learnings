import React from 'react'
import './style.css'
import st from './moduleStyling.module.css'

function Stylesheet(props) {
    let className = props.primary ? 'primary' : '';
    return (
        <div>
            <h2 className={`${className} font-xl`}>Prabhu</h2>
            <h3 className='success'>Normal Style</h3>
            <h3 className={st.success}>Module Style</h3>
        </div>
    )
}

export default Stylesheet
