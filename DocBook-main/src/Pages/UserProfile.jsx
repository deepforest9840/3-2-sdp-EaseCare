import React from "react";

const UserProfile = () => {
  const userDetails = {
    fullName: "John Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
    address: "123, Main Street, Springfield",
    dob: "1990-01-01",
  };

  const appointmentHistory = [
    {
      id: 1,
      doctorName: "Dr. Emily Smith",
      date: "5th Jan 2025",
      time: "10:00 AM",
      specialist: "Dermatologist",
      status: "Completed",
    },
    {
      id: 2,
      doctorName: "Dr. John Watson",
      date: "6th Jan 2025",
      time: "2:00 PM",
      specialist: "Cardiologist",
      status: "Scheduled",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-teal-50 via-teal-50 to-teal-100 min-h-screen p-6 flex items-center justify-center">
      <div className="max-w-7xl w-full bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Main Container with Two Rows */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          {/* Personal Details Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
              Personal Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-medium">Full Name:</span>{" "}
                  {userDetails.fullName}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Email:</span>{" "}
                  {userDetails.email}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-medium">Phone:</span>{" "}
                  {userDetails.phone}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Date of Birth:</span>{" "}
                  {userDetails.dob}
                </p>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              <span className="font-medium">Address:</span>{" "}
              {userDetails.address}
            </p>
          </div>

          {/* Appointment History Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
              Appointment History
            </h2>
            <div className="space-y-6">
              {appointmentHistory.map((appointment) => (
                <div
                  key={appointment.id}
                  className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-200"
                >
                  <div className="flex justify-between">
                    <div>
                      <p className="text-gray-700 font-semibold">
                        Doctor: {appointment.doctorName}
                      </p>
                      <p className="text-gray-600">
                        Specialist: {appointment.specialist}
                      </p>
                      <p className="text-gray-600">Date: {appointment.date}</p>
                      <p className="text-gray-600">Time: {appointment.time}</p>
                    </div>
                    <div>
                      <p
                        className={`text-sm font-medium ${
                          appointment.status === "Completed"
                            ? "text-green-500"
                            : "text-blue-500"
                        }`}
                      >
                        {appointment.status}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Edit Profile Button */}
        <div className="text-center py-4">
          <button className="px-8 py-3 bg-[#00A9E0] text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-200">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
