;
  import React, { useState, useEffect } from "react";

  import { IoDiamond } from "react-icons/io5";
 import p1 from '../../assets/p1.png'

  import axios from "axios";
const Pricing = () => {

    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const fetchApiData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://admin.ezicalc.com/api/package/all/get"
        );
        if (response.data.status) {
          setPackages(response.data.data);
          console.log("API Data fetched: ", response.data.data);
        }
      } catch (error) {
        console.error("Error fetching API data:", error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchApiData();
    }, []);
    const [expandedPackageId, setExpandedPackageId] = useState(2);
  
    const toggleExpand = (packageTypeId) => {
      setExpandedPackageId(
        expandedPackageId === packageTypeId ? null : packageTypeId
      );
    };
    console.log(packages);
  
    // const [packages, setPackages] = useState([]);
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    console.log(packages);
    const handleOpenModal = (pkg) => {
      setSelectedPackage(pkg);
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
      setSelectedPackage(null);
    };
  
  return (
    <div>
      <div className="w-[80%] mx-auto mt-10 mb-10">
        <div className=" text-center relative">
            <h1 className=" text-sky-500 italic">---Our Pricing</h1>
          <h1 className="my-5  text-4xl font-bold pollinator">No hidden charges, Choose your plan.</h1>

         <div className=" absolute floating-left-right-image -top-7 left-0">
         <img className="w-16 mt-6 md:mt-0 md:w-full" src={p1} alt="ghrh"  />
         </div>
         
        </div>

        <div>
          {loading ? (
            <div className="text-center text-gray-500 text-lg p-4">
              <span className="loading loading-ring loading-md"></span>
              <h1 className=" text-sky-500"> Loading packages....</h1>
            </div>
          ) : (
            packages.map((pkg) => (
              <div
                key={pkg.package_type_id}
                className="border p-4 my-2 rounded-lg shadow"
              >
                <div className="flex justify-between">
                  <h2
                    className="cursor-pointer text-blue-500 text-xl"
                    onClick={() => toggleExpand(pkg.package_type_id)}
                  >
                    {pkg.package_type}
                  </h2>
                  <h1
                    onClick={() => toggleExpand(pkg.package_type_id)}
                    className="bg-sky-400 hover:bg-green-500 px-2 font-bold text-xl rounded-full text-white cursor-pointer"
                  >
                    {expandedPackageId === pkg.package_type_id ? "-" : "+"}
                  </h1>
                </div>

                {expandedPackageId === pkg.package_type_id && (
                  <div className="mt-2 flex flex-wrap justify-evenly space-y-2">
                    {pkg.packages.map((p) => (
                      <div key={p.id} className="p-2">
                        <div className="flex justify-center items-center mt-10 w-full">
                          <div className="relative rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.1)] py-6 bg-white">
                            <div className="absolute top-[-8px] left-0 w-full h-10 bg-[#2FBDEC] rounded-t-3xl -z-10"></div>
                            <div className="relative -mt-9">
                              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#2FBDEC] rounded-full w-16 h-16 flex items-center justify-center">
                                <IoDiamond className="text-white w-8 h-8" />
                              </div>
                            </div>
                            <div className="text-center mt-12 mb-4">
                              <h2 className="my-1 text-2xl font-bold"></h2>
                              <p className="text-gray-500">
                                One line about the package
                              </p>
                              <p className=" text-sky-500">{p.name}</p>
                            </div>
                            <hr className="border-t border-gray-300 opacity-50" />

                            <div className="bg-slate-100 px-4 md:px-8 py-4">
                              <div className="text-center px-4 flex items-center">
                                <span className="mr-2 text-md md:text-lg text-gray-500">
                                  only
                                </span>
                                <div className="text-2xl md:text-4xl font-bold"></div>
                                <span className="mx-1 text-2xl md:text-4xl font-bold">
                                  ৳ {p.price}
                                </span>
                                <span className="mx-1 text-md md:text-lg text-gray-500">
                                  /month
                                </span>
                              </div>
                              <div className="text-center mt-4">
                                <button
                                  onClick={() => handleOpenModal(p)}
                                  className="bg-[#444DB5] text-white px-6 py-2 rounded font-bold"
                                >
                                  Order Now
                                </button>
                              </div>
                            </div>

                            <hr className="border-t border-gray-300 opacity-50" />

                            <ul className="p-0 text-center">
                              <h1 className="my-2 text-sky-600">
                                Create Business: business {p.business}
                              </h1>
                              <hr className="border-t border-gray-300 my-2 opacity-50 w-[80%] mx-auto" />
                              <h1 className="my-2 text-sky-600">
                                Create User: {p.user}
                              </h1>
                              <hr className="border-t border-gray-300 my-2 opacity-50 w-[80%] mx-auto" />
                              <h1 className="my-2 text-sky-600">
                                Invoice Template: {p.invoice}
                              </h1>
                              <hr className="border-t border-gray-300 my-2 opacity-50 w-[80%] mx-auto" />
                              <h1 className="my-2 text-sky-600">
                                SMS: {p.sms}
                              </h1>
                              <hr className="border-t border-gray-300 my-2 opacity-50 w-[80%] mx-auto" />
                              <h1 className="my-2 text-sky-600">
                                Create Product: {p.product}
                              </h1>
                              <hr className="border-t border-gray-300 my-2 opacity-50 w-[80%] mx-auto" />
                              <h1 className="my-2 text-sky-600">
                                Warehouse: {p.stock}
                              </h1>
                              <hr className="border-t border-gray-300 my-2 opacity-50 w-[80%] mx-auto" />
                              <h1 className="my-2 text-sky-600">
                                Order: {p.order}
                              </h1>
                              <hr className="border-t border-gray-300 my-2 opacity-50 w-[80%] mx-auto" />
                              <h1 className="my-2 text-sky-600">
                                Follow Up: {p.follow_up}
                              </h1>
                              <hr className="border-t border-gray-300 my-2 opacity-50 w-[80%] mx-auto" />
                              <h1 className="my-2 text-sky-600">
                                POS Data: {p.data}
                              </h1>
                              <hr className="border-t border-gray-300 my-2 opacity-50 w-[80%] mx-auto" />
                              <h1 className="my-2 text-sky-600">
                                Fraud Checker:
                              </h1>
                              <hr className="border-t border-gray-300 my-2 opacity-50 w-[80%] mx-auto" />
                              <h1 className="my-2 text-sky-600">
                                Auto Queriar Entry:
                              </h1>
                              <hr className="border-t border-gray-300 my-2 opacity-50 w-[80%] mx-auto" />
                              <h1 className="my-2 text-sky-600">
                                Promotional Marketing
                              </h1>
                              <hr className="border-t border-gray-300 my-2 opacity-50 w-[80%] mx-auto" />
                              <h1 className="my-2 text-sky-600">
                                Target Audience:
                              </h1>
                              <hr className="border-t border-gray-300 my-2 opacity-50 w-[80%] mx-auto" />
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

    </div>
  )
}

export default Pricing
