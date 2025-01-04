// import React, { useState, useEffect } from 'react';

// const ApplyDoctorForm = () => {
//   const [formData, setFormData] = useState({
//     images: [], // Handling multiple image files
//     name: '',
//     brand: '', // Changed from brand to specialty
//     price: '', // Will be populated with doctorId
//     experience: '',
//     description: '',
//     category: '',
//   });

//   const [doctorId, setDoctorId] = useState(null); // To store the generated doctorId

//   // Fetch the next doctor ID directly from the URL
//   useEffect(() => {
//     // Fetch the next doctorId from the backend
//     fetch('http://localhost:9191/api/v1/doctors/doctor/next-id') // Changed to doctors endpoint
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Fetched next doctor ID:', data); // Debugging: log the fetched doctorId

//         if (data && data.data) { // Data is directly under 'data'
//           setDoctorId(data.data); // Set the new doctorId
//           window.doctorId = data.data; // Global variable to store doctorId
//           console.log('Generated Doctor ID:', window.doctorId); // Debugging: log the generated doctorId
//         } else {
//           console.log('Failed to fetch doctor ID');
//           setDoctorId(1); // Fallback to 1 if something goes wrong
//           window.doctorId = 1;
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching doctor ID:', error); // Log any error from the fetch request
//         setDoctorId(1); // Fallback to 1 if an error occurs
//         window.doctorId = 1;
//       });
//   }, []);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle image file selection
//   const handleImageChange = (e) => {
//     const files = e.target.files;
//     if (files) {
//       setFormData({ ...formData, images: [...formData.images, ...Array.from(files)] }); // Handle multiple images
//     }
//   };

//   // Remove an image from the images list
//   const handleImageRemove = (index) => {
//     const updatedImages = formData.images.filter((_, i) => i !== index);
//     setFormData({ ...formData, images: updatedImages });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Set the consultationFee field to the global doctorId
//     const updatedFormData = { ...formData, consultationFee: window.doctorId }; // Set doctorId as consultationFee value

//     // Submit the doctor details
//     fetch('http://localhost:9191/api/v1/doctors/add', { // Changed to doctors endpoint
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(updatedFormData), // Send form data
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         alert('Doctor application submitted successfully!');
//         console.log('Submitted doctor data:', data);

//         // After the doctor is submitted, upload the images
//         if (formData.images.length > 0) {
//           const formDataImages = new FormData();
//           formData.images.forEach((file) => {
//             formDataImages.append('files', file); // Append multiple images to FormData
//           });

//           // Make sure doctorId is added as a query parameter
//           fetch(`http://localhost:9191/api/v1/images/upload?doctorId=${window.doctorId}`, { // Changed to doctorId
//             method: 'POST',
//             body: formDataImages, // Send image files
//           })
//             .then((response) => response.json())
//             .then((data) => {
//               alert('Images uploaded successfully!');
//               console.log('Image upload response:', data);
//             })
//             .catch((error) => {
//               console.error('Error uploading images:', error);
//               alert('Failed to upload images.');
//             });
//         }
//       })
//       .catch((error) => {
//         console.error('Error submitting doctor:', error);
//         alert('Failed to submit doctor.');
//       });
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">Apply for Doctor Position</h1>
//       <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
//         {/* Name */}
//         <div className="mb-3">
//           <label className="block text-gray-700 font-semibold mb-1">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter doctor's name"
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
//           />
//         </div>

//         {/* Specialty */}
//         <div className="mb-3">
//           <label className="block text-gray-700 font-semibold mb-1">Specialty & Last Degree</label>
//           <input
//             type="text"
//             name="brand" // Changed from brand to specialty
//             value={formData.brand}
//             onChange={handleChange}
//             placeholder="Enter specialty and degree (e.g., local-FCPS)"
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
//           />
//         </div>

//         {/* Consultation Fee (consultationFee set to doctorId) */}
//         <div className="mb-3">
//           <label className="block text-gray-700 font-semibold mb-1">Consultation Fee</label>
//           <input
//             type="number"
//             name="price" // Changed from price to consultationFee
//             value={formData.price} // Set doctorId as the consultationFee value
//             onChange={handleChange}
//             placeholder="Enter consultation fee"
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
//           />
//         </div>

//         {/* Experience */}
//         <div className="mb-3">
//           <label className="block text-gray-700 font-semibold mb-1">Experience</label>
//           <input
//             type="number"
//             name="experience"
//             value={formData.experience}
//             onChange={handleChange}
//             placeholder="Enter experience in years"
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
//           />
//         </div>

//         {/* Description */}
//         <div className="mb-3">
//           <label className="block text-gray-700 font-semibold mb-1">Description</label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             placeholder="Enter a brief description"
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 h-20"
//           ></textarea>
//         </div>

//         {/* Category */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-semibold mb-1">Category</label>
//           <input
//             type="text"
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//             placeholder="Enter category (e.g., Cardiologist)"
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
//           />
//         </div>

//         {/* Image Upload */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-semibold mb-1">Upload Images</label>
//           <input
//             type="file"
//             name="images"
//             onChange={handleImageChange}
//             accept="image/*"
//             multiple // Allow multiple files
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
//           />
//         </div>

//         {/* Display selected images */}
//         <div className="mb-4">
//           {formData.images.length > 0 && (
//             <div className="flex flex-wrap gap-4">
//               {formData.images.map((image, index) => (
//                 <div key={index} className="relative">
//                   <img
//                     src={URL.createObjectURL(image)}
//                     alt={`selected-img-${index}`}
//                     className="w-20 h-20 object-cover rounded-md"
//                   />
//                   <button
//                     type="button"
//                     className="absolute top-0 right-0 text-red-500 text-xs"
//                     onClick={() => handleImageRemove(index)}
//                   >
//                     &times;
//                   </button>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
//         >
//           Apply
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ApplyDoctorForm;
import React, { useState, useEffect } from 'react';

const ApplyDoctorForm = () => {
  const [formData, setFormData] = useState({
    images: [],
    name: '',
    brand: '',
    price: '',
    experience: '',
    description: '',
    category: '',
  });

  const [doctorId, setDoctorId] = useState(null);

  useEffect(() => {
    fetch('http://localhost:9191/api/v1/doctors/doctor/next-id')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data) {
          setDoctorId(data.data);
          window.doctorId = data.data;
        } else {
          setDoctorId(1);
          window.doctorId = 1;
        }
      })
      .catch((error) => {
        setDoctorId(1);
        window.doctorId = 1;
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    if (files) {
      setFormData({ ...formData, images: [...formData.images, ...Array.from(files)] });
    }
  };

  const handleImageRemove = (index) => {
    const updatedImages = formData.images.filter((_, i) => i !== index);
    setFormData({ ...formData, images: updatedImages });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedFormData = { ...formData, consultationFee: window.doctorId };

    fetch('http://localhost:9191/api/v1/doctors/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedFormData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Doctor application submitted successfully!');
        if (formData.images.length > 0) {
          const formDataImages = new FormData();
          formData.images.forEach((file) => formDataImages.append('files', file));

          fetch(`http://localhost:9191/api/v1/images/upload?doctorId=${window.doctorId}`, {
            method: 'POST',
            body: formDataImages,
          })
            .then((response) => response.json())
            .then((data) => {
              alert('Images uploaded successfully!');
            })
            .catch((error) => {
              console.error('Error uploading images:', error);
              alert('Failed to upload images.');
            });
        }
      })
      .catch((error) => {
        alert('Failed to submit doctor.');
      });
  };

  return (
    <div className="bg-gradient-to-r from-teal-50 via-teal-50 to-teal-100 min-h-screen flex items-center justify-center p-4">
      <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg max-w-md">
        <h1 className="text-2xl font-semibold text-center text-teal-600 mb-4">Apply for Doctor Position</h1>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter doctor's name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-teal-500"
            />
          </div>

          {/* Specialty */}
          <div className="mb-3">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Specialty & Last Degree</label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              placeholder="Enter specialty and degree (e.g., FCPS)"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-teal-500"
            />
          </div>

          {/* Consultation Fee */}
          <div className="mb-3">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Consultation Fee</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter consultation fee"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-teal-500"
            />
          </div>

          {/* Experience */}
          <div className="mb-3">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Experience</label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Enter experience in years"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-teal-500"
            />
          </div>

          {/* Description */}
          <div className="mb-3">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter a brief description"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-teal-500 h-20"
            ></textarea>
          </div>

          {/* Category */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Enter category (e.g., Cardiologist)"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-teal-500"
            />
          </div>

          {/* Image Upload */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Upload Images</label>
            <input
              type="file"
              name="images"
              onChange={handleImageChange}
              accept="image/*"
              multiple
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-teal-500"
            />
          </div>

          {/* Display selected images */}
          <div className="mb-4">
            {formData.images.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {formData.images.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`selected-img-${index}`}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <button
                      type="button"
                      className="absolute top-0 right-0 text-red-500 text-xs"
                      onClick={() => handleImageRemove(index)}
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700"
          >
            Apply
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyDoctorForm;
