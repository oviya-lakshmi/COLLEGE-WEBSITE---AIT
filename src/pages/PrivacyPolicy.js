import React, { useState } from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    const [activeCard, setActiveCard] = useState(null);

    const handleCardClick = (index) => {
        setActiveCard(activeCard === index ? null : index);
    };

    const policySections = [
        {
            title: "1. What Do We Do with Your Information?",
            content: "When you buy from us, we collect personal information such as your name, address, and email address. When you browse our website, we automatically receive your computer's IP address to provide us with information that helps us learn about your browser and operating system."
        },
        {
            title: "2. Consent",
            content: "When you provide us with personal information to complete a transaction, verify your credit card, or place an order, you imply that you consent to our collecting it and using it for that specific reason only. If we ask for your personal information for a secondary reason, we will either ask you directly for your expressed consent or provide you with an opportunity to decline."
        },
        {
            title: "3. Retention",
            content: "We retain your data only for as long as necessary to fulfill the purpose for which it was collected. Once it is no longer required, it is securely deleted. We also retain certain data for accounting and legal purposes as required by law."
        },
        {
            title: "4. Disclosure",
            content: "We may disclose your personal information if we are required by law or if you violate our Terms of Service. We do not sell, rent, or share your personal data with third parties for marketing purposes without your consent."
        },
        {
            title: "5. Payment",
            content: "Your payment data is encrypted using the Payment Card Industry Data Security Standard (PCI-DSS). Your payment information is stored only as long as necessary to complete your purchase transaction. After the transaction is complete, your payment information is not stored on our servers."
        },
        {
            title: "6. Third-party services",
            content: "Third-party providers used by us will only collect, use, and disclose your information to the extent necessary to allow them to perform the services they provide to us. Some providers have their own privacy policies regarding the information we are required to provide them."
        },
        {
            title: "7. Security",
            content: "We take reasonable precautions to protect your personal information and follow industry standards to prevent loss, misuse, or alteration. Our security measures include encrypted connections and access controls to ensure data protection."
        }
    ];

    return (
        <div className="privacy-policy-container">
            {/* Circle Animation */}
            <div className="circle-container">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="circle"></div>
                ))}
            </div>

            <header>
                <h1>Privacy Policy</h1>
            </header>

            <main>
                {policySections.map((section, index) => (
                    <div 
                        key={index}
                        className={`policy-card ${activeCard === index ? 'active' : ''}`}
                        onClick={() => handleCardClick(index)}
                    >
                        <h2>{section.title}</h2>
                        <div className="policy-content">
                            <p>{section.content}</p>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default PrivacyPolicy;