import React, { useState, useEffect } from 'react';
import DoctorCard from '../Components/DoctorCard';

const Doctors = () => {
  // State to hold the doctor data
  const [doctorsData, setDoctorsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch doctor data from the backend API
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('http://localhost:9191/api/v1/doctors/all'); // Correct endpoint
        const data = await response.json();

        if (data.message === 'success') {
          // Map over the fetched data and format it
          const formattedData = data.data.map(doctor => ({
            id: doctor.id,
            name: doctor.name,
            image: `http://localhost:9191${doctor.images[0].downloadUrl}`, // Full URL to the image
            brand: doctor.brand,
            price: doctor.price,
            experience: doctor.experience,
            description: doctor.description,
            category: doctor.category.name, // Extract the category name
          }));
          setDoctorsData(formattedData);
        } else {
          throw new Error('Failed to fetch doctor data');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []); // Empty dependency array means this runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-gradient-to-r from-teal-50 via-teal-50 to-teal-100 min-h-screen flex items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Meet Our Doctors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctorsData.map(doctor => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
