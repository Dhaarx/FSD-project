import React, { useState, useEffect } from 'react';
import '../screens_css/cars.css';

const Showcase = () => {
    const [displayImage, setDisplayImage] = useState([]);
    const[selectedBrand,setSelectedBrand]=useState("");

    const getspecifiedImage = () => {
        fetch(`http://localhost:5000/get-specifiedimage?brand=${selectedBrand}`, {
            method: "GET",
        }).then((res) => res.json()).then((data) => {
            setDisplayImage(data.data);
        });
    };

    const getImage = () => {
        fetch(`http://localhost:5000/get-image?brand=${selectedBrand}`, {
            method: "GET",
        }).then((res) => res.json()).then((data) => {
            setDisplayImage(data.data);
        });
    };

    useEffect(() => {
        if(selectedBrand==="all")
            {
                getImage();
            }
        else if (selectedBrand) {
            getspecifiedImage();
        } 
        else {
            getImage();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedBrand]);

    return (
        <div className='c1'>
            <h1>Our Cars</h1>
            <div className='dropdown'>
                
                     <label style={{ fontWeight: 'bold', marginRight: '10px' ,fontSize:'22px',color:'grey'}}>Filter</label>
                    <label htmlFor="carBrand">Select Car Brand:</label>
                    <select
                        id="carBrand"
                        value={selectedBrand}
                        onChange={(e) => setSelectedBrand(e.target.value)}
                    >
                        <option value="">Select a brand</option>
                        <option value="Audi">Audi</option>
                        <option value="Mercedes-Benz">Mercedes-Benz</option>
                        <option value="Rolls-Royce">Rolls-Royce</option>
                        <option value="BMW">BMW</option>
                        <option value="Aston-Martin">Aston-Martin</option>
                        <option value="Land-Rover">Land-Rover</option>
                        <option value="all">Show-All</option>

                    </select>
            </div>
            
            <div className='displayimg'>
                {displayImage.map((data, index) => (
                    <div key={index} className="card">
                        <img src={data.image} alt='car' />
                        <div className="model">
                            <p>{data.brand}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Showcase;
