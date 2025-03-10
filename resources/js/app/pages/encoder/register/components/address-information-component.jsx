import { setPersonalInformation } from "@/app/redux/personal-information-slice";
import { setForm } from "@/app/redux/register-slice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AddressInformationComponent() {
    const { personal_information } = useSelector(
        (store) => store.personal_information
    );
    const dispatch = useDispatch();
    return (
        <div>
            <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base/7 font-semibold text-gray-900">
                    Home Address
                </h2>
                <p className="mt-1 text-sm/6 text-gray-600">
                    Use a permanent address where you can receive mail.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
                    <div className="col-span-4">
                        <label
                            htmlFor="street_address"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            House No./Lot/Bldg.No./Purok
                        </label>
                        <div className="mt-2">
                            <input
                                id="street_address"
                                name="street_address"
                                type="text"
                                onChange={(e) =>
                                    dispatch(
                                        setPersonalInformation({
                                            ...personal_information,
                                            address_info: {
                                                ...personal_information.address_info, // Spread the existing home_address fields
                                                [e.target.name]: e.target.value, // Dynamically set the updated field
                                            },
                                        })
                                    )
                                }
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div className="col-span-4">
                        <label
                            htmlFor="street_address_2"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Street/Sitio/Subdv.
                        </label>
                        <div className="mt-2">
                            <input
                                id="street_address_2"
                                name="street_address_2"
                                type="text"
                                onChange={(e) =>
                                    dispatch(
                                        setPersonalInformation({
                                            ...personal_information,
                                            address_info: {
                                                ...personal_information.address_info, // Spread the existing home_address fields
                                                [e.target.name]: e.target.value, // Dynamically set the updated field
                                            },
                                        })
                                    )
                                }
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div className="col-span-4">
                        <label
                            htmlFor="barangay"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Barangay
                        </label>
                        <div className="mt-2">
                            <select
                                id="barangay"
                                name="barangay"
                                placeholder="Barangay"
                                onChange={(e) =>
                                    dispatch(
                                        setPersonalInformation({
                                            ...personal_information,
                                            address_info: {
                                                ...personal_information.address_info, // Spread the existing home_address fields
                                                [e.target.name]: e.target.value, // Dynamically set the updated field
                                            },
                                        })
                                    )
                                }
                                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                            >
                                <option value="" disabled selected>
                                    -- Select a Barangay --
                                </option>
                                <option>Bairan</option>
                                <option>Bagawines</option>
                                <option>Cabulihan</option>
                                <option>Don Esperidion Villegas</option>
                                <option>Guba</option>
                                <option>Macapso</option>
                                <option>Maglahos</option>
                                <option>Malangsa</option>
                                <option>Molobolo</option>
                                <option>Pinocawan</option>
                                <option>Poblacion</option>
                                <option>Puan</option>
                                <option>Tabon</option>
                                <option>Tagbino</option>
                                <option>Ulay</option>
                            </select>
                        </div>
                    </div>

                    <div className="sm:col-span-4 sm:col-start-1">
                        <label
                            htmlFor="city"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Municipality/City
                        </label>
                        <div className="mt-2">
                            <input
                                id="city"
                                name="city"
                                type="text"
                                onChange={(e) =>
                                    dispatch(
                                        setPersonalInformation({
                                            ...personal_information,
                                            address_info: {
                                                ...personal_information.address_info, // Spread the existing home_address fields
                                                [e.target.name]: e.target.value, // Dynamically set the updated field
                                            },
                                        })
                                    )
                                }
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-4">
                        <label
                            htmlFor="Province"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            State / Province
                        </label>
                        <div className="mt-2">
                            <input
                                id="Province"
                                name="Province"
                                type="text"
                                onChange={(e) =>
                                    dispatch(
                                        setPersonalInformation({
                                            ...personal_information,
                                            address_info: {
                                                ...personal_information.address_info, // Spread the existing home_address fields
                                                [e.target.name]: e.target.value, // Dynamically set the updated field
                                            },
                                        })
                                    )
                                }
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-4">
                        <label
                            htmlFor="region"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Region
                        </label>
                        <div className="mt-2">
                            <select
                                id="region"
                                name="region"
                                onChange={(e) =>
                                    dispatch(
                                        setPersonalInformation({
                                            ...personal_information,
                                            address_info: {
                                                ...personal_information.address_info, // Spread the existing home_address fields
                                                [e.target.name]: e.target.value, // Dynamically set the updated field
                                            },
                                        })
                                    )
                                }
                                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                            >
                                <option value="" disabled selected>
                                    -- Select a Region --
                                </option>

                                <optgroup label="Luzon">
                                    <option value="ncr">
                                        National Capital Region (NCR)
                                    </option>
                                    <option value="car">
                                        Cordillera Administrative Region (CAR)
                                    </option>
                                    <option value="region I">
                                        Ilocos Region (Region I)
                                    </option>
                                    <option value="region II">
                                        Cagayan Valley (Region II)
                                    </option>
                                    <option value="region III">
                                        Central Luzon (Region III)
                                    </option>
                                    <option value="region IV-A">
                                        CALABARZON (Region IV-A)
                                    </option>
                                    <option value="region IV-B">
                                        MIMAROPA (Region IV-B)
                                    </option>
                                    <option value="region V">
                                        Bicol Region (Region V)
                                    </option>
                                </optgroup>

                                <optgroup label="Visayas">
                                    <option value="region VI">
                                        Western Visayas (Region VI)
                                    </option>
                                    <option value="region VII">
                                        Central Visayas (Region VII)
                                    </option>
                                    <option value="region VIII">
                                        Eastern Visayas (Region VIII)
                                    </option>
                                </optgroup>

                                <optgroup label="Mindanao">
                                    <option value="region IX">
                                        Zamboanga Peninsula (Region IX)
                                    </option>
                                    <option value="region X">
                                        Northern Mindanao (Region X)
                                    </option>
                                    <option value="region XI">
                                        Davao Region (Region XI)
                                    </option>
                                    <option value="region XII">
                                        SOCCSKSARGEN (Region XII)
                                    </option>
                                    <option value="region XIII">
                                        Caraga (Region XIII)
                                    </option>
                                    <option value="barmm">
                                        Bangsamoro Autonomous Region in Muslim
                                        Mindanao (BARMM)
                                    </option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
