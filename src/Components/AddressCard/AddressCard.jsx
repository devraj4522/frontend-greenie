import { HomeIcon, OfficeBuildingIcon } from '@heroicons/react/solid';
import React, {useEffect, useState} from 'react'
import { toast } from 'react-hot-toast';
import { getUserAddresses } from '../../core/helper/coreapicalls';
import AddAddressCard from './AddAddressCard';

const AddressCard = ({user, handleCurrentDeleveryAddress}) => {
    const [addresses, setAddresses] = useState([]);
    const [addNewAddress, setAddNewAddress] = useState(false);
    const [currAddressClicked, setCurrAddressClicked] = useState(false)

    useEffect(async () => {
		await getUserAddresses(user?.id).then((data) => {
			setAddresses(data.data_dict);
		})
			.catch(e => {
				toast.error(`Error Occured loading in CardGallery`);
			});
	}, []);

    const toggleSetAddress = () => {
        setAddNewAddress(!addNewAddress);
    }
    const updateAddress = (new_address) =>{
        const all_addresses = addresses;
        all_addresses.push(new_address);
        console.log(all_addresses)
        setAddresses(all_addresses);
    };

  return (
    <div>
        <h2 className="text-2xl font-bold pb-2">Delever to</h2>
          <div className='flex flex-row items-start space-x-4 w-1/1'>
              {addresses.map((item, index) =>
                  <div key={index} className="flex flex-col items-center justify-center w-full md:w-[500px] md:max-w-[500px]">
                      <div onClick={() => {
                        handleCurrentDeleveryAddress(item.id);
                        setCurrAddressClicked(item.id)
                      }
                    } className={`bg-white ${currAddressClicked == item.id && `bg-lime-200`} hover:bg-lime-200 hover:cursor-pointer shadow-lg rounded-lg p-6 text-green-500 hover:text-green-700`}>
                          <div className="grid grid-cols-6 gap-0">
                              <div className="col-span-1 flex items-center justify-center">
                                  {item.type == "HOME" && <HomeIcon className="h-6 w-6 block  text-left" aria-hidden="true" />}
                                  {item.type == "WORK" && <OfficeBuildingIcon className="h-6 w-6" aria-hidden="true" />}
                              </div>
                              <div className='col-span-5 text-left mr-0'>
                                  <p className="text-gray-800 font-semibold">Address</p>
                                  <p className="text-lg font-medium text-gray-600">
                                      {item.address.toLocaleUpperCase()}, {item.city}, {item.state}, {item.pincode}
                                      <p className="text-gray-600"><span className="">Phone:</span> {item.phone} </p>
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>

              )}
				
        </div>
        <button onClick={() => toggleSetAddress()} className="text-white bg-lime-600 border-0 my-8 py-2 px-6 focus:outline-none hover:bg-lime-700 rounded">Add New Address</button>
        {addNewAddress &&  <AddAddressCard updateAddress={updateAddress}/>}

    </div>
  )
}

export default AddressCard