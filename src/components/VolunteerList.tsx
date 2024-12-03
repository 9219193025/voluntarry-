import React from 'react';
import { Volunteer } from '../types/Volunteer';

interface Props {
  volunteers: Volunteer[];
}

const VolunteerList: React.FC<Props> = ({ volunteers }) => {
  return (
    <div>
      <h2 className="text-xl font-bold">Available Opportunities</h2>
      <ul>
        {volunteers.map((volunteer) => (
          <li key={volunteer.id} className="border p-4 my-2">
            <h3 className="font-bold">{volunteer.name}</h3>
            <p>{volunteer.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VolunteerList;
export{}
