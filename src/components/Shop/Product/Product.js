import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright, faExclamationCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2';
import Fade from 'react-reveal/Fade';
import Bounce from "react-reveal/Bounce";
import Heart from "react-animated-heart";


const Product = () => {

    const { productId } = useParams();

    const [products, setProducts] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        try {
            async function callApi() {
                let results = await fetch('https://pacific-reef-42193.herokuapp.com/products');
                results = await results.json();
                results = await results.find(pd => pd?._id === productId);
                setProducts(results);
                setIsLoading(false);
            }
            callApi();
        } catch (error) {
            console.log(error);
        }
    }, [productId])


    const handleMoreDetails = () => {
        Swal.fire({
            title: 'T-Shirt Size',
            imageUrl: 'https://i.ibb.co/Bj9hrSC/size-chart.jpg',
            imageAlt: 'Custom image',
            confirmButtonColor: 'black'
        })
    }

    // love button
    const [isClick, setClick] = useState(false);

    return (
        <div className="container my-5">
            <div className="px-2 py-4 px-md-4 py-md-3 bg-white shadow-sm rounded">
                {

                    isLoading ?

                        <Loading></Loading>

                        :


                        <div className="row my-5">

                            <Bounce bottom cascade>
                                <h2 className="text-center display-4">
                                    {products?.name}
                                </h2>
                            </Bounce>

                            <div className="col-md-6 ">
                                <Fade >
                                    <div>
                                        <img src={products?.image} className="img-fluid" alt="" />
                                    </div>
                                </Fade>
                            </div>
                            <div className="col-md-6 mt-5">
                                <Fade >
                                    <h4 className="fw-bold display-6">$ {products?.price}</h4>
                                    <p className="fw-bold">{products?.name}</p>
                                    <p>
                                        {products?.description}
                                    </p>
                                </Fade>
                                <Link to={`/placeOrder/${productId}`}>
                                    <button className="btn custom-black-btn">
                                        <FontAwesomeIcon icon={faShoppingCart} /> Buy Now
                                    </button>

                                </Link>
                                


                                
                                <p className=" fw-bold d-flex align-items-center">
                                    Love this product:<Heart isClick={isClick} onClick={() => setClick(!isClick)} />
                                </p>
                                <hr />


                                

                            </div>
                        </div>
                }
            </div>

            
        </div>


    );
};

export default Product;