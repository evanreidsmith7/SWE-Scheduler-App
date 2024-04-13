import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import Header from '../components/Header'; // Import Header component
import './Home.css'; // Correct path to Home.css
import flatImage from '../images/flat.jpg'; // Adjusted path to flatImage.png

const Home = () => {
    return (
        <div>
            <Header />
            <div className="fade_in">
                <section id="sched" className="container flex-row">
                    <div className="sched__content">
                        <h1 className="title">Schedule Genius: Organize your college life efficiently</h1>
                        <h2 className="text">Get your stuff done with <i><strong>ease. </strong></i>
                            The ultimate tool for crafting the perfect schedule.</h2>
                        <Link to="/signup" className="btn btn-secondary">Sign Up</Link>
                    </div>
                    <div className="sched__img">
                        <img src={flatImage} alt="Students using laptops." />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
