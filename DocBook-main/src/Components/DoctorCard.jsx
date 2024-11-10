import React from 'react';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      {/* Doctor Image */}
      <img
        className="rounded-t-lg w-full h-48 object-cover"
        src={doctor.image}
        alt={`${doctor.name} Profile`}
      />

      <div className="p-5">
        {/* Doctor Name */}
        <h2 className="text-2xl font-bold text-gray-800">{doctor.name}</h2>

        {/* Specialty */}
        <p className="text-sm text-blue-500 mb-2">Specialty: {doctor.brand}</p>

        {/* Consultation Fee */}
        <p className="text-gray-700 font-semibold">Consultation Fee: ${doctor.price}</p>

        {/* Experience */}
        <p className="text-sm text-green-500 mb-2">Experience: {doctor.experience} years</p>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-2">{doctor.description}</p>

        {/* Category */}
        <span className="text-sm bg-blue-100 text-blue-500 px-2 py-1 rounded">
          {doctor.category}
        </span>

        {/* Book Appointment Button */}
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
