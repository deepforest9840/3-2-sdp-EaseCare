import React from "react";

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
      <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-md p-4 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-teal-600 mb-6">
          Your Appointments
        </h1>

        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="flex flex-col md:flex-row items-center bg-gradient-to-r from-teal-50 to-white rounded-md shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Doctor Image */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold text-lg shadow-md mb-4 md:mb-0 md:mr-4">
                {appointment.doctorName.split(" ")[1][0]}
              </div>

              {/* Appointment Details */}
              <div className="flex-1">
                <h2 className="text-lg md:text-xl font-semibold text-teal-800">
                  {appointment.doctorName}
                </h2>
                <p className="text-gray-600 text-sm md:text-base mt-1">
                  <span className="font-medium text-gray-800">Specialist:</span>{" "}
                  {appointment.specialist}
                </p>
                <p className="text-gray-600 text-sm md:text-base mt-1">
                  <span className="font-medium text-gray-800">
                    Consultation Fees:
                  </span>{" "}
                  {appointment.consultationFees}
                </p>
                <p className="text-gray-600 text-sm md:text-base mt-1">
                  <span className="font-medium text-gray-800">Time:</span>{" "}
                  {appointment.time}
                </p>
              </div>

              {/* View Details Button */}
              <div className="mt-4 md:mt-0 md:ml-4">
                <button className="py-1.5 px-3 bg-[#00A9E0] text-white font-medium text-xs md:text-sm rounded-md shadow-md hover:bg-teal-600 transition duration-200">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YourAppointments;
