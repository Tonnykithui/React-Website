import React from 'react'
import './Home.css'
import Button from '../button/Button'

const Home =
 ({bgLight, 
    imgStrt, 
    title, 
    description, 
    btnMsg, 
    img, 
    paragraphLight,
    textLight
}) => {
    return (
        <>
            <div className={bgLight ? 'home-container container':'home-container drk'}>
                <div className="home-cont-wrapper">
                    <div className="row"
                    style={{display:'flex', flexDirection: imgStrt === 'start' ? 'row-reverse': 'row'}}>
                        <div className="col">
                            <h1 className={textLight ? 'title title-light':'title title-drk' }>{title}</h1>
                            <p className={paragraphLight ? 'par par-light':'par par-drk'}>{description}</p>
                            <Button buttonStyle='btn--primary' buttonColor='red' buttonSize='btn-medium'>{btnMsg}</Button>
                        </div>
                        <div className="col">
                            <img src={img} alt="" className='img'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
