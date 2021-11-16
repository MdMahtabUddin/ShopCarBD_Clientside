import React from 'react';
import Latest from '../../Shop/Latest/Latest';
import HeroSection from '../HeroSection/HeroSection';
import quotesImg from '../../../images/qoutes-img.png'
import Review from '../Review/Review';



import Fade from 'react-reveal/Fade';
import Brands from '../Brands/Brands';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
<Brands></Brands>
            <Latest></Latest>

            

            

            <Fade bottom>
                <Review></Review>
            </Fade>

            <Fade bottom>
                <div className="container-fluid py-5 px-0">
                    <div>
                        <img src={quotesImg} className="img-fluid" alt="" />
                    </div>
                </div>
            </Fade>

        </div>
    );
};

export default Home;