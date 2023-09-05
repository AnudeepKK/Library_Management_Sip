import React from 'react';
import Footer from '../Components/footer'; // Corrected component import
import CustomNavbar from '../Components/Navbar';

function LibraryPolicies() {
  return (
    <div>
        <CustomNavbar/>
      <div className="container mt-5">
        <h1 className="text-white">Library Policies</h1>

        <div className="parallax text-white p-4 rounded shadow">
          <h2 className="mb-4">1. Borrowing Policies</h2>
          <div className="mb-4">
            <h3>1.1. Membership</h3>
            <p>To borrow materials, you must be a registered library member.</p>
            <p>Membership is free and available to residents of [Location] and [Other Eligibility Criteria].</p>
            <p>Membership cards are non-transferable.</p>
          </div>

          <div className="mb-4">
            <h3>1.2. Loan Periods</h3>
            <p>Books: [Loan Period]</p>
            <p>DVDs and CDs: [Loan Period]</p>
            <p>Magazines: [Loan Period]</p>
            <p>Renewals: You may renew items unless they are on hold for another patron.</p>
          </div>

          <div className="mb-4">
            <h3>1.3. Overdue Materials</h3>
            <p>Fines are charged for overdue items. Please return materials on time.</p>
            <p>Notifications will be sent via email for overdue items.</p>
          </div>

          <div>
            <h3>1.4. Holds and Reservations</h3>
            <p>You can place holds on items that are currently checked out.</p>
            <p>Reserved items will be held for [Hold Period] days.</p>
          </div>
        </div>

        <div className="parallax text-white p-4 mt-4 rounded shadow">
          <h2 className="mb-4">2. Code of Conduct</h2>
          <div className="mb-4">
            <h3>2.1. Quiet Zones</h3>
            <p>Please maintain a quiet atmosphere in designated quiet zones.</p>
            <p>Use your mobile devices with headphones in common areas.</p>
          </div>

          <div className="mb-4">
            <h3>2.2. Respect for Others</h3>
            <p>Treat library staff and fellow patrons with respect.</p>
            <p>Refrain from disruptive behavior.</p>
          </div>

          <div>
            <h3>2.3. Food and Drinks</h3>
            <p>Food and drinks are allowed only in designated areas.</p>
            <p>Please clean up after yourself.</p>
          </div>
        </div>

        <div className="parallax3 text-white  p-4 mt-4 mb-3 rounded shadow ">
          <h2 className="mb-4">3. Privacy Policy</h2>
          <p>We respect your privacy. Please refer to our <a href="link">Privacy Policy</a> to learn how we handle your personal information.</p>
        </div>
        {/* Add more sections as needed */}
      </div>
      <Footer />
    </div>
  );
}

export default LibraryPolicies;
