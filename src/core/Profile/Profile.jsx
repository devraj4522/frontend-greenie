import React from "react";
import Base from "../Base";
const Profile = () => {
	return (
    <Base>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Profile Information</h3>
          <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
            This is your personal profile information. You can edit it by clicking the Edit button below.
          </p>
        </div>
        <div>
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Full name
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                John Doe
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                johndoe@example.com
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Phone number
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                (123) 456-7890
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Address
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                123 Main St<br />
                Anytown, USA 12345
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="flex md:flex-col">
          <button className="py-2 px-4 bg-gray-200 text-gray-700 font-medium rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-300">View Address</button>
          <button className="py-2 px-4 bg-gray-100 text-gray-700 font-medium border-l border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300">Add Address</button>
        </div>
        <div className="md:ml-2">
          <button className="py-2 px-4 bg-gray-900 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600">Use This Address</button>
        </div>
      </div>

    </Base>
	);
};

export default Profile;
