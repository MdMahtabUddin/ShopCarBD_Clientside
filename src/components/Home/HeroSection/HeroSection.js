import React from 'react';
import './HeroSection.css';
// import ferrai from '../../../images/slider/ferrai.gif';
// // import marcides from '../../../images/slider/marcides.gif.jpg';
// import slider3 from '../../../images/slider/slider3.jpg';
// import slider4 from '../../../images/slider/slider4.jpg';
// import slider5 from '../../../images/slider/slider5.jpg';
// import slider6 from '../../../images/slider/slider6.jpeg';


const HeroSection = () => {
    return (
        <div className="banner">
            <div>
                <h1 className="fw-bold lh-base font-monospace heading">Thousands of <br /> smiles delivered everyday</h1>
                <div>
                    <input className="banner-input mt-3" type="text" name="search" placeholder="Search.." />
                </div> 
                <div className="container mt-5 extra-portion">
                    <div className="row">
                        
                    </div>
                </div>
            </div>


        </div>
    );
};

export default HeroSection;