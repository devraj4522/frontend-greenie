import React, { useEffect, useState } from 'react'
import { HomeIcon, OfficeBuildingIcon } from "@heroicons/react/solid";
import { createUserAddresses } from '../../core/helper/coreapicalls';
import { toast } from 'react-hot-toast';
import { toTitleCase } from '../../utlis/helper';

const AddAddressCard = (updateAddress) => {
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [pincode, setPincode] = useState();
    const [phone, setPhone] = useState();
    const [type, setType] = useState("HOME");
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const address_info = {
            "city": toTitleCase(city),
            "state": toTitleCase(state),
            "address": toTitleCase(address),
            "pincode": pincode,
            "phone": phone,
            "type": type
        }
        await createUserAddresses(address_info).then((data) => {
            const postedData = data?.data_dict;
            console.log(postedData)
            updateAddress(postedData)
            setSuccess(true);
        })
            .catch(e => {
                toast.error(`Error Occured loading in CardGallery`);
            });
    };

    return (
        <div className='w-full md:w-2/3  '>
            {success && <h2 className="flex font-bold text-lg"> Successfully added address</h2>}
            {!success &&
            <form>
                <div className=''>
                    <div className="mb-4 ">
                        <label className="block mb-2 md:w-1/4 uppercase text-sm text-gray-500 font-bold md:pr-4 lg:pr-6">
                            Address
                        </label>
                        <div className="block md:w-3/4">
                            <input value={address} onChange={e => setAddress(e.target.value)} className="block w-full px-4 py-2 leading-tight bg-gray-50 border border-gray-100 rounded-md focus:bg-white" id="input-id" type="text" placeholder="Your Address" />
                        </div>
                    </div>

                    <div className="mb-4 ">
                        <label className="block mb-2 md:w-1/4 uppercase text-sm text-gray-500 font-bold md:md:pr-4 lg:pr-6">
                            City
                        </label>
                        <div className="block md:w-3/4">
                            <input value={city} onChange={e => setCity(e.target.value)} className="block w-full px-4 py-2 leading-tight bg-gray-50 border border-gray-100 rounded-md focus:bg-white" id="input-id" type="text" placeholder="Your City" />
                        </div>
                    </div>

                    <div className="mb-4 ">
                        <label className="block md:w-1/4 md:md:pr-4 lg:pr-6 uppercase text-sm text-gray-500 font-bold ">
                            State
                        </label>
                        <div className="block md:w-3/4">
                            <input value={state} onChange={e => setState(e.target.value)} className="block w-full px-4 py-2 leading-tight bg-gray-50 border border-gray-100 rounded-md focus:bg-white" id="input-id" type="text" placeholder="Your State" />
                        </div>
                    </div>

                    <div className="mb-4 ">
                        <label className="block mb-2 md:w-1/4 uppercase text-sm text-gray-500 font-bold md:md:pr-4 lg:pr-6">
                            Pin Code
                        </label>
                        <div className="block md:w-3/4">
                            <input value={pincode} onChange={e => setPincode(e.target.value)} className="block w-full px-4 py-2 leading-tight bg-gray-50 border border-gray-100 rounded-md focus:bg-white" id="input-id" type="text" placeholder="Your Pin Code" />
                        </div>
                    </div>

                    <div className="mb-4 ">
                        <label value={phone} onChange={e => setPhone(e.target.value)} className="block mb-2 md:w-1/4 uppercase text-sm text-gray-500 font-bold md:md:pr-4 lg:pr-6">
                            Phone
                        </label>
                        <div className="block md:w-3/4">
                            <input className="block w-full px-4 py-2 leading-tight bg-gray-50 border border-gray-100 rounded-md focus:bg-white" id="input-id" type="text" placeholder="Your Phone" />
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div onClick={(e) => {
                            e.preventDefault()
                            setType("HOME")
                        }} className={`bg-gray-100 ${type=="HOME" && "bg-gray-600 text-gray-50"} hover:bg-gray-600 text-gray-900 hover:text-gray-50 px-7 py-2 rounded-full hover:cursor-pointer`}>
                            <HomeIcon className="h-5 w-5 " aria-hidden="true" />
                        </div>
                        <div onClick={(e) => {
                            e.preventDefault();
                            setType("WORK");
                        }} className={`bg-gray-100 ${type=="WORK" && "bg-gray-600 text-gray-50"} hover:bg-gray-600 text-gray-900 hover:text-gray-50 px-7 py-2 rounded-full hover:cursor-pointer`}>
                            <OfficeBuildingIcon className="h-5 w-5 " aria-hidden="true" />
                        </div>
                    </div>

                    <div className="mb-6">
                        <button onClick={e => handleSubmit(e)} className="md:w-3/4 mt-6 uppercase text-sm font-bold tracking-wide bg-lime-600 hover:bg-lime-800 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">Submit</button>
                    </div>
                </div>
                </form>
            }
        </div>
    );
};

export default AddAddressCard;