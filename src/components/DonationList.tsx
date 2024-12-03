import React from 'react';
import { Donation } from '../types/Donation';

interface Props {
  donations: Donation[];
}

const DonationList: React.FC<Props> = ({ donations }) => {
  return (
    <div>
      <h2 className="text-xl font-bold">Recent Donations</h2>
      <ul>
        {donations.map((donation) => (
          <li key={donation.id} className="border p-4 my-2">
            <p>Donor: {donation.donor}</p>
            <p>Amount: ${donation.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonationList;
export{}
