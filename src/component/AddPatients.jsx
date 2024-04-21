import React, { useRef, useState } from "react";
import { useFirebaseContext } from "../utils/firebaseContext";

const AddPatients = () => {
  const patientId = useRef();
  const patientName = useRef();
  const patientWeight = useRef();
  const patientHeight = useRef();
  const patientAge = useRef();
  const patientMobile = useRef();
  const patientGender = useRef();
  const patientDieases = useRef();
  const firebase = useFirebaseContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
 const add = ()=>{
  firebase.addPatient(
    patientId?.current?.value,
    patientName?.current?.value,
    patientWeight?.current?.value,
    patientHeight?.current?.value,
    patientAge?.current?.value,
    patientMobile?.current?.value,
    patientGender?.current?.value,
    patientDieases?.current?.value,
  );
 }

  const handleToggleModal = () => {
    // console.log("isModelOpen");
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button
        onClick={handleToggleModal}
        className="bg-blue-300 hover:bg-blue-700 hover:text-white    text-blue-600 font-bold py-2 px-4 rounded"
      >
        Add Patients
      </button>

      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className=" mt-2 w-96 inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all ">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <img
                  src={import.meta.env.VITE_ICONURL}
                  alt=""
                  className="w-40  mx-auto"
                />
                <div className=" ">
                  <div className=" text-center p-5">
                    <div className="mx-auto k w-[90%]">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Add Basic Details
                      </h3>
                      <div className="mt-2 text-left">
                        <label htmlFor="ID">Enter patient ID</label>
                        <input
                          ref={patientId}
                          id="ID"
                          type="text"
                          className="border border-gray-300 rounded-md p-2 w-full"
                          placeholder="Patient ID"
                        />
                      </div>
                      <div className="mt-2 text-left">
                        <label htmlFor="name">Enter patient name</label>
                        <input
                          ref={patientName}
                          id="name"
                          type="text"
                          className="border border-gray-300 rounded-md p-2 w-full"
                          placeholder="Patient name"
                        />
                      </div>
                      <div className="mt-2 text-left">
                        <label htmlFor="weight">Enter patient weight</label>
                        <input
                          ref={patientWeight}
                          id="weight"
                          type="text"
                          className="border border-gray-300 rounded-md p-2 w-full"
                          placeholder="Weight in kg"
                        />
                      </div>
                      <div className="mt-2 text-left">
                        <label htmlFor="height">Enter patient height</label>
                        <input
                          ref={patientHeight}
                          id="height"
                          type="text"
                          className="border border-gray-300 rounded-md p-2 w-full"
                          placeholder="Height in cm"
                        />
                      </div>
                      <div className="mt-2 text-left">
                        <label htmlFor="age">Enter patient Age</label>
                        <input
                          ref={patientAge}
                          id="age"
                          type="text"
                          className="border border-gray-300 rounded-md p-2 w-full"
                          placeholder="Years"
                        />
                      </div>
                      <div className="mt-2 text-left">
                        <label htmlFor="mobile">Enter contact number</label>
                        <input
                          ref={patientMobile}
                          id="mobile"
                          type="text"
                          className="border border-gray-300 rounded-md p-2 w-full"
                          placeholder="mobile"
                        />
                      </div>
                      <div className="mt-2 text-left">
                        <label htmlFor="gender">Enter Gender</label>
                        <input
                          ref={patientGender}
                          id="gender"
                          type="text"
                          className="border border-gray-300 rounded-md p-2 w-full"
                          placeholder="Gender"
                        />
                      </div>
                      <div className="mt-2 text-left">
                        <label htmlFor="gender">Dieases</label>
                        <input
                          ref={patientDieases}
                          id="gender"
                          type="text"
                          className="border border-gray-300 rounded-md p-2 w-full"
                          placeholder="Dieases"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row">
                  <button
                    onClick={()=>{
                      handleToggleModal();
                      add()
                    }}
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Add
                  </button>
                  <button
                    onClick={handleToggleModal}
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddPatients;
