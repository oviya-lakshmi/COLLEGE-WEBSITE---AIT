import React, { useState } from 'react';
import './Careers.css';

const Careers = () => {
    const [activeTab, setActiveTab] = useState('2024');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="careers-container">
            {/* Header */}
            <h1>Placement Statistics</h1>

            <div className="content-wrapper">
                {/* Left Content */}
                <div className="left-content">
                    {/* Tabs */}
                    <div className="tabs">
                        <div 
                            className={`tab ${activeTab === '2024' ? 'active' : ''}`} 
                            onClick={() => handleTabClick('2024')}
                        >
                            Placement 2024
                        </div>
                        <div 
                            className={`tab ${activeTab === '2021-2022' ? 'active' : ''}`} 
                            onClick={() => handleTabClick('2021-2022')}
                        >
                            Placement 2021-2023
                        </div>
                    </div>

                    {/* Tab Content for 2024 */}
                    <div id="2024" className={`tab-content ${activeTab === '2024' ? 'active' : ''}`}>
                        <h3>2024 Passed out Students</h3>
                        <p>Total Number of Offers: <strong>918</strong></p>

                        <table className="stats-table">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Outgoing Students</th>
                                    <th>Placed (Unique offer)</th>
                                    <th>Higher Studies</th>
                                    <th>Entrepreneur</th>
                                    <th>Total</th>
                                    <th>Placement Percentage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>1005</td>
                                    <td>804</td>
                                    <td>92</td>
                                    <td>11</td>
                                    <td>907</td>
                                    <td>90.24%</td>
                                </tr>
                            </tbody>
                        </table>

                        <h4>Salary Details:</h4>
                        <ul>
                            <li>Above 4 Lakhs – <strong>689</strong> students placed</li>
                            <li>Above 7 Lakhs – <strong>103</strong> students placed</li>
                            <li>Above 15 Lakhs – <strong>12</strong> students placed</li>
                        </ul>
                    </div>

                    {/* Tab Content for 2021-2022 */}
                    <div id="2021-2022" className={`tab-content ${activeTab === '2021-2022' ? 'active' : ''}`}>
                        <h3>2021-2023 Placement Details</h3>
                        <p>Total Number of Offers: <strong>850</strong></p>

                        <table className="stats-table">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Outgoing Students</th>
                                    <th>Placed (Unique offer)</th>
                                    <th>Higher Studies</th>
                                    <th>Entrepreneur</th>
                                    <th>Total</th>
                                    <th>Placement Percentage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>970</td>
                                    <td>780</td>
                                    <td>85</td>
                                    <td>10</td>
                                    <td>875</td>
                                    <td>90.1%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="right-content">
                    <img 
                        src="https://media.istockphoto.com/id/1133537960/vector/people-climbing-books-isolated-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=vO4pCKS1YrNz-iGL4jiFdtvS9EvzN-w_YlKFfvH3ImA=" 
                        alt="Placement Image" 
                    />
                </div>
            </div>

            {/* Alumni Feedback Section */}
            <div className="container my-5">
                <h2 className="text-center mb-4" style={{color: '#1F51FF', fontWeight: 'bold'}}>Our Alumni's Feedback</h2>
                
                <div className="row g-4">
                    {/* Alumni Card 1 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="card h-100 shadow-sm">
                            <img 
                                src="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?semt=ais_hybrid&w=740" 
                                className="card-img-top" 
                                alt="Alumni 1" 
                            />
                            <div className="card-body">
                                <h5 className="card-title">Sruthi</h5>
                                <p className="card-text">"My time at this college was life-changing. The faculty and support system helped me achieve my goals."</p>
                            </div>
                        </div>
                    </div>

                    {/* Alumni Card 2 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="card h-100 shadow-sm">
                            <img 
                                src="https://alumni.arizona.edu/sites/default/files/styles/az_full_width_bg_extra_small/public/2025-01/249A1232.jpg.webp?itok=Eju1UJTt" 
                                className="card-img-top" 
                                alt="Alumni 2"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Krithik</h5>
                                <p className="card-text">"The placement cell was very supportive and helped me land my dream job. Grateful for the experience!"</p>
                            </div>
                        </div>
                    </div>

                    {/* Alumni Card 3 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="card h-100 shadow-sm">
                            <img 
                                src="https://www.hindustantimes.com/ht-img/img/2023/07/21/1600x900/Her-wishlist--if-she-had-a-magic-wand--would-be-to_1689929855414.jpg" 
                                className="card-img-top" 
                                alt="Alumni 3" 
                            />
                            <div className="card-body">
                                <h5 className="card-title">Emily Smith</h5>
                                <p className="card-text">"An amazing journey with fantastic mentors and opportunities. I highly recommend this college!"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careers;