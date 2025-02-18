import React, { useState } from 'react';
import Footer from './Footer';

// COMPONENTS
import GifContent from './GifContent';

function Calculate({
    gender, weight, height, setPage, setHeight, setGender, setWeight
}) {

    const [resultGif, setResultGif] = useState("");
    const [gifZ, setGifZ] = useState("");
    const [gifN, setGifN] = useState("");
    const [gifF, setGifF] = useState("");
    const [gifS, setGifS] = useState("");
    const [gifAS, setGifAS] = useState("");

    let newHeight = height.toString().split("").slice(0, 1) + "." + height.toString().split("").join("").slice(1);
    let inchHeight = (height / 2.54).toFixed(2);

    const idealKgMale = () => {
        if (gender === 'Male') {
            return ((2.3 * (inchHeight - 60)) + 50)
        }
    };

    const idealKgFemale = () => {
        if (gender === 'Female') {
            return ((2.3 * (inchHeight - 60)) + 45.5)
        }
    };

    const bmi = () => {
        return (weight / (newHeight ** 2))
    };

    const bmiResult = () => {
        if (bmi() >= 0 && bmi() <= 18.4) {
            return <p><span className='bg-secondary text-white'>Weak</span> <br />In this value range, which shows that the person is overweight compared to the height, it is recommended that the person get rid of excess weight with the appropriate diet.</p>
        }
        else if (bmi() >= 18.5 && bmi() <= 24.9) {
            return <p> <span className='bg-success text-white'>Normal</span> <br />This value range indicates that the person is at ideal weight. People with this value are advised to continue to eat regularly, balanced and healthy.</p>
        }
        else if (bmi() >= 25 && bmi() <= 29.9) {
            return <p> <span className='bg-primary text-white'>Overweight</span> <br />In this value range, which indicates that the person is overweight compared to her height, it is recommended that the person get rid of the excess weight with an appropriate diet.</p>
        }
        else if (bmi() >= 30 && bmi() <= 34.9) {
            return <p><span className='bg-warning text-dark'>Fat</span> <br />Obesity, cardiovascular diseases, diabetes, hypertension etc. It is a risk factor for chronic diseases. It is understood that the person's weight is at a level that may pose a health risk within the range of values ​​evaluated in the first degree obese category. It is recommended that these people lose weight with the help of a dietician.</p>
        }
        else if (bmi() >= 35 && bmi() <= 44.9) {
            return <p><span className='bg-danger text-white'>Fat</span><br />People with these values, defined as second-degree obesity, have an increased risk of cardiovascular diseases. It is recommended that the person consult a dietitian to lose weight.</p>
        }
        else if (bmi() > 45) {
            return <p><span className='bg-dark text-white'>Obese</span><br /> The risk of developing the disease is very high in these people who are in the third degree obese category. It is recommended to lose weight under the supervision of a physician and dietician</p>
        }
    };


    // RESET BUTTON 
    const resetOnClick = () => {
        setPage(true)
        setGender("")
        setHeight([])
        setWeight([])
        setResultGif("")

        setTimeout(() => {
            setGifZ("")
        }, 3000)

        setTimeout(() => {
            setGifN("")
        }, 3000)
        
        setTimeout(() => {
            setGifF("")
        }, 3000)

        setTimeout(() => {
            setGifS("")
        }, 3000)

        setTimeout(() => {
            setGifAS("")
        }, 3000)

        // setGifZ("")
        // setGifN("")
        // setGifF("")
        // setGifS("")
        // setGifAS("")
    };

    return (
        <section className="container mt-1">
            <div className="row">

                    {/* FUNCTION  + ROW*/}
                    <div
                        className={
                            (bmi() >= 0 && bmi() <= 18.4) ? "border border-2 border-warning calculate row " :
                            (bmi() >= 18.5 && bmi() <= 24.9) ? "border border-2 border-success calculate row" :
                            (bmi() >= 25 && bmi() <= 29.9) ? "border border-2 border-primary calculate row" :
                            (bmi() >= 30 && bmi() <= 34.9) ? "border border-2 border-dark calculate row" :
                            (bmi() > 35) ? "border border-2 border-danger calculate row" : "border border-2 calculate row"
                        }
                    >
                        {/* RESULT  */}
                        <div className='col-sm-12 col-md-12 col-lg-5 col-xl-6  mt-3 ms-2 oder-1 order-lg-1'>

                            <h3>
                                Gender: <span className={gender === "Male" ? 'calculate-result text-primary' : 'calculate-result text-danger'}>
                                    {
                                        gender === "" ? <span className='alert alert-danger fs-6' role="alert">"Error ! - Choose Gender"</span> : gender
                                    }</span>
                            </h3>

                            <h3>
                                Your Body Surface Area:
                                <span className='calculate-result text-success'>
                                    {
                                        height == "" ? <span className='alert alert-warning fs-5' role="alert">"Error ! - height is between 0-200"</span> : newHeight
                                    }
                                </span>
                            </h3>

                            <h3>
                                Your Body Weight:
                                <span className='calculate-result bg-dark text-warning rounded-circle'>
                                    <strong>
                                        {
                                            weight === "" ? <span className='alert alert-primary fs-6' role="alert">"Error ! - weight is between 0-200"</span> : weight
                                        }
                                    </strong>
                                </span>
                            </h3>

                            <h3>
                                Your Ideal Body Weight:
                                <span className='calculate-result bg-dark text-info rounded-circle fs-4'>
                                    {
                                        gender === "Male" ? Math.floor(idealKgMale()) : Math.floor(idealKgFemale())
                                    }
                                </span>
                            </h3>

                            <h3>
                                Your Body Mass Index (BMI):
                                <span className='calculate-result text-primary'>
                                    {
                                        bmi().toFixed(2)
                                    }
                                </span>
                            </h3>

                            <h3 className='mt-4'><mark>Calculation result:</mark>
                                <span className='calculate-result'>
                                    {
                                        bmiResult()
                                    }
                                </span>
                            </h3>


                            <button type='submit' className='btn btn-danger mb-3'
                                onClick={() => resetOnClick()}>
                                Reset
                            </button>
                        </div>

                        {/* GIF CONTENT */}
                        <div className='col-sm-6 col-md-6 col-lg-3 col-xl-2 order-3 order-lg-1'>
                            <GifContent bmi={bmi()}
                                resultGif={resultGif} setResultGif={setResultGif}
                                gifZ={gifZ} setGifZ={setGifZ} gifN={gifN} setGifN={setGifN}
                                gifF={gifF} setGifF={setGifF} gifS={gifS} setGifS={setGifS}
                                gifAS={gifAS} setGifAS={setGifAS} resetOnClick={resetOnClick}
                            />
                        </div>

                        {/* INFO */}
                        <div className='col-sm-6 col-md-6 col-lg-3 col-xl-3  call order-2 order-lg-1'>
                            <ul>
                                <h3 className='text-dark'>According to the age range of the person <span className='text-primary'>ideal body mass index</span> it is like this:</h3>

                                <li>19-24 Age: 19-24 BMI.</li>
                                <li>25-34 Age: 20-25 BMI.</li>
                                <li>35-44 Age: 21-26 BMI</li>
                                <li>45-54 Age: 22-27 BMI.</li>
                                <li>55-64 Age: 23-28 BMI.</li>
                                <li>65 Age and above: 24-29 BMI.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* alikartalonline footer  */}
                <Footer />

        </section>
    )
};

export default Calculate;