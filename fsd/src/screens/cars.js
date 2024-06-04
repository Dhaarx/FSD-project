import React, { useState} from 'react';
import '../screens_css/cars.css';

const Cars = () => {
    const [image, setImage] = useState("");
    const [displayImage, setDisplayImage] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState("");

    const convertToBase64 = (e) => {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.onerror = console.error;
    };

    const uploadImage = () => {
        fetch("http://localhost:5000/upload-image", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                base64: image,
                cbrand: selectedBrand
            })
        }).then((res) => res.json()).then((data) => console.log(data));
    };

    const getImage = () => {
        fetch(`http://localhost:5000/get-image?brand=${selectedBrand}`, {
            method: "GET",
        }).then((res) => res.json()).then((data) => {
            setDisplayImage(data.data);
        });
    };

    // useEffect(() => {
    //     getImage();
    // }, []);

    return (
        <div className='c1'>
            <h1 style={{marginTop:'5.5rem'}}>UPLOAD YOUR CAR</h1>
            <div className='upload-section'>
                <input
                    accept='image/*'
                    type='file'
                    onChange={convertToBase64}
                />
                <div className='previewimg'>
                    {image && <img width={500} height={500} src={image} alt='preview' />}
                </div>
                <div className='dropdown'>
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
                    </select>
                </div>
                <div className='buttons'>
                    <button onClick={uploadImage}>Upload</button>
                    <button onClick={getImage}>Display</button>
                </div>
            </div>
            <div className='displayimg'>
                {displayImage.map((data, index) => (
                    <div key={index} className="card">
                        <img src={data.image} alt='display' />
                        <div className="model">
                            <p>{data.brand}</p>
                        </div>
                    </div>
                ))}
            </div>
            <br/>
            <br/>
            <br/>
        </div>
    );
};

export default Cars;
