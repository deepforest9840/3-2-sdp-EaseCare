import React from 'react';

const YourAppointments = () => {
    const appointments = [
        {
            id: 1,
            doctorName: "Dr. John Doe",
            consultationFees: "$100",
            specialist: "Cardiologist",
            time: "10:00 AM, 5th Jan 2025",
        },
        {
            id: 2,
            doctorName: "Dr. Emily Smith",
            consultationFees: "$150",
            specialist: "Dermatologist",
            time: "1:00 PM, 6th Jan 2025",
        },
    ];

    return (
        <div className="bg-gradient-to-r from-teal-50 via-teal-50 to-teal-100 min-h-screen flex items-center justify-center p-4">
            <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg max-w-4xl">
                <h1 className="text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-8 shadow-2xl transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-3xl">
                    Your Appointments
                </h1>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {appointments.map((appointment) => (
                        <div
                            key={appointment.id}
                            className="p-6 bg-white shadow-lg rounded-lg border-2 border-gray-200 hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
                        >
                            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
                                {appointment.doctorName}
                            </h2>
                            <p className="text-gray-700 mb-2">
                                <span className="font-medium">Specialist:</span> {appointment.specialist}
                            </p>
                            <p className="text-gray-700 mb-2">
                                <span className="font-medium">Consultation Fees:</span> {appointment.consultationFees}
                            </p>
                            <p className="text-gray-700 mb-4">
                                <span className="font-medium">Time:</span> {appointment.time}
                            </p>
                            <button className="w-full py-2 px-4 bg-[#00A9E0] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default YourAppointments;
