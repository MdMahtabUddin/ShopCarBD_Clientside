import React from 'react';
import { Card } from 'react-bootstrap';
import './TourGuide.css';
import farrariGif from '../../../images/farrari.gif';
import marcedisGif from '../../../images/marcedis.gif'
import masteriGif from '../../../images/masteri.gif'
import rolsGif from '../../../images/rols.gif'

const TourGuide = () => {
    return (
        <div>
            <div className="container">
            <div className="about-title2 mt-5">
                         
                         <h2 className="top-title text-center">Car Brands <br/>Our Exclusive Collection</h2>
            </div>             

            <div className="about-grid mt-5">
             <div>
             <Card className="pos" style={{ width: '17rem', height: '28rem'}}>
                 <Card.Img variant="top" className="img" src={farrariGif} />
                 <Card.Body>

       
              
              </Card.Body>
              </Card>
             </div>
             <div>
             <Card className="pos" style={{ width: '17rem', height: '28rem'}}>
                 <Card.Img variant="top" className="img" src={marcedisGif} />
                 <Card.Body>

       
              <Card.Title className="card-title-s">Stive Son</Card.Title>
              <p className="review-title">Tour Guide</p>
              <Card.Text className="text-r">
                 <div className="d-flex icon">
                 <i class="fab fa-facebook-square me-3 ms-5"></i>
                 <i class="fab fa-instagram-square  me-3"></i>
                 <i class="fab fa-whatsapp-square me-3"></i>
                 <i class="fab fa-twitter-square"></i>
                </div>
              </Card.Text>
              </Card.Body>
              </Card>
             </div>
             <div>
             <Card className="pos" style={{ width: '17rem', height: '28rem'}}>
                 <Card.Img variant="top" className="img" src={masteriGif} />
                 <Card.Body>

       
              <Card.Title className="card-title-s">Marry Cen</Card.Title>
              <p className="review-title">Tour Guide</p>
              <Card.Text className="text-r">
                 <div className="d-flex icon">
                 <i class="fab fa-facebook-square me-3 ms-5"></i>
                 <i class="fab fa-instagram-square  me-3"></i>
                 <i class="fab fa-whatsapp-square me-3"></i>
                 <i class="fab fa-twitter-square"></i>
                </div>
              </Card.Text> 
              </Card.Body>
              </Card>
             </div>
             <div>
             <Card className="pos" style={{ width: '17rem', height: '28rem'}}>
                 <Card.Img variant="top" className="img" src={rolsGif} />
                 <Card.Body>

       
              <Card.Title className="card-title-s">Atif Khan</Card.Title>
              <p className="review-title">Tour Guide</p>
              <Card.Text className="text-r">
                 <div className="d-flex icon">
                 <i class="fab fa-facebook-square me-3 ms-5"></i>
                 <i class="fab fa-instagram-square  me-3"></i>
                 <i class="fab fa-whatsapp-square me-3"></i>
                 <i class="fab fa-twitter-square"></i>
                </div>
              </Card.Text> 
              </Card.Body>
              </Card>
             </div>

            </div>
            </div>
        </div>
    );
};

export default TourGuide;