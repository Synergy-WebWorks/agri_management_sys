import {
    get_lgu_profile_by_id_thunk,
    store_lgu_profile_thunk,
} from "@/app/redux/lgu-profile-thunk";
import store from "@/app/store/store";
import { PhotoIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { FaBuildingFlag, FaPenToSquare } from "react-icons/fa6";
import { useSelector } from "react-redux";
import {
    regions,
    provinces,
    cities,
    barangays,
    regionByCode,
    provincesByCode,
    provinceByName,
} from "select-philippines-address";

export default function LguInformationSection({ id }) {
    const [loading, setLoading] = useState(false);
    const { profile } = useSelector((store) => store.lgu_profile);
    const [address, setAddress] = useState({});
    const [form, setForm] = useState({
        city: "",
        province: "",
        region: null,
    });
    
console.log('addressaddressaddress',address)
    useEffect(() => {
        setForm((prevForm) => ({
            ...prevForm,
            ...profile,
            file: profile.logo,
            lgu_user_id: id,
        }));
    }, [profile]); // Use profile instead of profile.id

    useEffect(() => {
        regions().then((region) =>
            setAddress((prevAddress) => ({
                ...prevAddress,
                region,
            }))
        );
    }, []); // Correctly fetching regions only once

    useEffect(() => {
        if (form?.region_code) {
            provinces(form?.region_code).then((province) =>
                setAddress((prevAddress) => ({
                    ...prevAddress,
                    province,
                }))
            );
        }
    }, [form?.region_code]); // Removed unnecessary default value

    useEffect(() => {
        if (form?.province_code) {
            cities(form?.province_code).then((cities) =>
                setAddress((prevAddress) => ({
                    ...prevAddress,
                    cities,
                }))
            );
        }
    }, [form?.province_code]); // Removed unnecessary default value

    useEffect(() => {
        if (form?.city_code) {
            barangays(form?.city_code).then((barangay) =>
                setAddress((prevAddress) => ({
                    ...prevAddress,
                    barangay,
                }))
            );
        }
    }, [form?.city_code]); // Removed unnecessary default value

    async function update_profile() {
        setLoading(true);
        try {
            const fd = new FormData();
            fd.append("lgu_user_id", form.lgu_user_id);
            fd.append("address", form.address);
            fd.append("barangay", form.barangay);
            fd.append("city", form.city);
            fd.append("province", form.province);
            fd.append("region", form.region);
            fd.append("contact", form.contact);
            fd.append("email", form.email);
            fd.append("brgy_code", form.brgy_code);
            fd.append("city_code", form.city_code);
            fd.append("province_code", form.province_code);
            fd.append("region_code", form.region_code);
            fd.append(
                "municipal_agricultural_office",
                form.municipal_agricultural_office
            );
            fd.append("logo", form.file);

            await store.dispatch(store_lgu_profile_thunk(fd));
            await store.dispatch(get_lgu_profile_by_id_thunk(form.lgu_user_id));
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }
    return (
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-xl">
            <div className="px-4 py-5 sm:px-6 bg-green-600">
                <div className="flex flex-row">
                    <FaBuildingFlag className="text-white size-6 mr-2" />
                    <h3 className="text-base font-medium text-white">
                        Local Government Unit Information
                    </h3>
                </div>
            </div>
            <div className="px-4 py-5 sm:p-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="sm:col-span-2">
                        <div className="overflow-hidden bg-gray-100 shadow sm:rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <img
                                    alt=""
                                    src={form.logo ?? ""}
                                    className="w-full rounded-2xl object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 lg:grid-cols-1">
                            <div className="sm:cols-span-6">
                                <label
                                    htmlFor="region"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    Region
                                </label>

                                <select
                                    name="region"
                                    value={form.region}
                                    onChange={(e) => {
                                        const selectedOption =
                                            e.target.options[
                                                e.target.selectedIndex
                                            ];
                                        setForm({
                                            ...form,
                                            [e.target.name]: e.target.value,
                                            region_code:
                                                selectedOption.dataset.code, // Correct way to get custom attributes
                                        });
                                    }}
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                >
                                    <option value="" disabled selected>
                                        -- Select a Region --
                                    </option>

                                    {address?.region?.map((res, i) => {
                                        return (
                                            <option
                                                key={i}
                                                data-code={res.region_code}
                                                value={res.region_name}
                                            >
                                                {res.region_name}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>

                            <div className="sm:cols-span-6">
                                <label
                                    htmlFor="province"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    Province
                                </label>

                                <select
                                    id="province"
                                    name="province"
                                    value={form.province}
                                    onChange={(e) => {
                                        const selectedOption =
                                            e.target.options[
                                                e.target.selectedIndex
                                            ];
                                        setForm({
                                            ...form,
                                            province: selectedOption.value, // Province name
                                            province_code:
                                                selectedOption.dataset.code, // Province code
                                        });
                                    }}
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                >
                                    <option value="" selected disabled>
                                        -- Select a Province --
                                    </option>

                                    {address?.province?.map((res, i) => (
                                        <option
                                            key={i}
                                            value={res.province_name}
                                            data-code={res.province_code}
                                        >
                                            {res.province_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="sm:cols-span-6">
                                <label
                                    htmlFor="city"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    City/Municipality
                                </label>

                                <select
                                    id="city"
                                    name="city"
                                    value={form.city}
                                    onChange={(e) => {
                                        const selectedOption =
                                            e.target.options[
                                                e.target.selectedIndex
                                            ];
                                        setForm({
                                            ...form,
                                            city: selectedOption.value, // City name
                                            city_code:
                                                selectedOption.dataset.code, // City code
                                        });
                                    }}
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                >
                                    <option value="" selected disabled>
                                        -- Select a City --
                                    </option>

                                    {address?.cities?.map((res, i) => (
                                        <option
                                            key={i}
                                            value={res.city_name}
                                            data-code={res.city_code}
                                        >
                                            {res.city_name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="sm:cols-span-6">
                                <label className="block text-sm/6 font-medium text-gray-900">
                                    Barangay
                                </label>
                                <select
                                    id="barangay"
                                    name="barangay"
                                    value={form.barangay}
                                    onChange={(e) => {
                                        const selectedOption =
                                            e.target.options[
                                                e.target.selectedIndex
                                            ];
                                        setForm({
                                            ...form,
                                            barangay: selectedOption.value, // Barangay name
                                            brgy_code:
                                                selectedOption.dataset.code, // Barangay code
                                        });
                                    }}
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                >
                                    <option value="" selected disabled>
                                        -- Select a Barangay --
                                    </option>

                                    {address?.barangay?.map((res, i) => (
                                        <option
                                            key={i}
                                            value={res.brgy_name}
                                            data-code={res.brgy_code}
                                        >
                                            {res.brgy_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="sm:cols-span-6">
                                <label className="block text-sm/6 font-medium text-gray-900">
                                    Address Details
                                </label>
                                <input
                                    name="address"
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            [e.target.name]: e.target.value,
                                        })
                                    }
                                    value={form?.address ?? ""}
                                    type="text"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                />
                            </div>
                            <div className="sm:cols-span-6">
                                <label
                                    htmlFor="contact"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    LGU Contact
                                </label>
                                <input
                                    name="contact"
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            [e.target.name]: e.target.value,
                                        })
                                    }
                                    value={form?.contact ?? ""}
                                    type="number"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                />
                            </div>

                            <div className="sm:cols-span-6">
                                <label
                                    htmlFor="Email Address"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    LGU Email Address
                                </label>
                                <input
                                    id="Email Address"
                                    name="email"
                                    value={form?.email ?? ""}
                                    type="email"
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            [e.target.name]: e.target.value,
                                        })
                                    }
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-12 mt-3">
                            <label
                                htmlFor="MAO"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                City/Municipal Agricultural Office (MAO)
                            </label>
                            <input
                                id="MAO"
                                name="municipal_agricultural_office"
                                value={
                                    form?.municipal_agricultural_office ?? ""
                                }
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                type="text"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                            />

                            <label
                                htmlFor="cover-photo"
                                className="block text-sm/6 mt-8 font-medium text-gray-900"
                            >
                                City/Municipal Logo
                            </label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div className="text-center">
                                    <PhotoIcon
                                        aria-hidden="true"
                                        className="mx-auto size-12 text-gray-300"
                                    />
                                    <div className="mt-4 flex text-sm/6 text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                            <span>Upload a file</span>
                                            <input
                                                id="file-upload"
                                                name="logo"
                                                type="file"
                                                onChange={(e) => {
                                                    const file =
                                                        e.target.files[0]; // Get the selected file
                                                    if (file) {
                                                        const reader =
                                                            new FileReader();
                                                        reader.readAsDataURL(
                                                            file
                                                        ); // Convert file to Base64
                                                        reader.onload = () => {
                                                            setForm({
                                                                ...form,
                                                                file: file,
                                                                [e.target.name]:
                                                                    reader.result, // Store Base64 string
                                                            });
                                                        };
                                                    }
                                                }}
                                                className="sr-only"
                                            />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs/5 text-gray-600">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={update_profile}
                                type="button"
                                disabled={loading}
                                className="rounded-full bg-green-600 px-3.5 py-2 mt-4 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                            >
                                <FaPenToSquare className="float-left mr-2 size-4" />
                                {loading ? "Loading..." : "UPDATE"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
