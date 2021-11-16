import React from 'react';
import { Card } from 'react-bootstrap';
import './Brands.css'
import audiGif from '../../../images/audi.gif'
import maseratiGif from '../../../images/maserati.gif'
import ferrariGif from '../../../images/ferrarib.gif'
import marcedesGif from '../../../images/marcedes.gif'
const Brands = () => {
    return (
        <div>
            <div className="container">
            <div className="about-title2 mt-5">
                         
                         <h2 className="top-title text-center">Car Brands <br/>Our Exclusive Collection</h2>
            </div>             

            <div className="about-grid mt-5">
             <div>
             <Card className="pos" style={{ width: '17rem', height: '17rem'}}>
                 <Card.Img variant="top" className="img" src={audiGif} />
                 <Card.Body>

       
              
               
              </Card.Body>
              </Card>
             </div>
             <div>
             <Card className="pos" style={{ width: '17rem', height: '17rem'}}>
                 <Card.Img variant="top" className="img" src={maseratiGif} />
                 <Card.Body>

       
              
              </Card.Body>
              </Card>
             </div>
             <div>
             <Card className="pos" style={{ width: '17rem', height: '17rem'}}>
                 <Card.Img variant="top" className="img" src={ferrariGif} />
                 <Card.Body>

       
              
              </Card.Body>
              </Card>
             </div>
             <div>
             <Card className="pos" style={{ width: '17rem', height: '17rem'}}>
                 <Card.Img variant="top" className="img" src={marcedesGif} />
                 <Card.Body>

       
              
              </Card.Body>
              </Card>
             </div>

            </div>
            </div>
        </div>
    );
};

export default Brands;