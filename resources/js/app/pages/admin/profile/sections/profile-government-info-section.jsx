import { setPersonalInformation } from "@/app/redux/personal-information-slice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ProfileGovernmentInfoSection() {
    const { personal_information } = useSelector(
        (store) => store.personal_information
    );
    const dispatch = useDispatch();

    const [isIndigenous, setIsIndigenous] = useState(true);
    const [isGovernment, setIsGovernment] = useState(true);
    const [isCooperative, setIsCooperative] = useState(true);
    return (
        <div>
            <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-xl/7 font-semibold text-gray-900 mt-3">
                    <span className="block w-full rounded-full bg-gray-200 px-4 py-2">
                        IV. Government Affiliation
                    </span>
                </h2>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
                    <div className="sm:col-span-4 border-r border-gray-900/30">
                        <label
                            htmlFor="pwd"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Person with Disability (PWD)?
                        </label>
                        <div className="mt-2">
                            <div className="flex items-center gap-x-3 mb-3">
                                <input
                                    name="PWD"
                                    type="radio"
                                    value="YES"
                                    checked={
                                        personal_information
                                            ?.government_affiliation?.PWD ==
                                        "YES"
                                    }
                                    onChange={(e) =>
                                        dispatch(
                                            setPersonalInformation({
                                                ...personal_information,
                                                government_affiliation: {
                                                    ...personal_information.government_affiliation, // Spread the existing home_address fields
                                                    [e.target.name]:
                                                        e.target.value, // Dynamically set the updated field
                                                },
                                            })
                                        )
                                    }
                                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                />
                                <label
                                    htmlFor="pwdyes"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    YES
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    checked={
                                        personal_information
                                            ?.government_affiliation?.PWD ==
                                        "NO"
                                    }
                                    onChange={(e) =>
                                        dispatch(
                                            setPersonalInformation({
                                                ...personal_information,
                                                government_affiliation: {
                                                    ...personal_information.government_affiliation, // Spread the existing home_address fields
                                                    [e.target.name]:
                                                        e.target.value, // Dynamically set the updated field
                                                },
                                            })
                                        )
                                    }
                                    name="PWD"
                                    type="radio"
                                    value="NO"
                                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                />
                                <label
                                    htmlFor="pwdno"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    NO
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-4 border-r border-gray-900/30">
                        <label
                            htmlFor="4ps"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            4P's Beneficiary?
                        </label>
                        <div className="mt-2">
                            <div className="flex items-center gap-x-3 mb-3">
                                <input
                                    name="4Ps"
                                    type="radio"
                                    checked={
                                        personal_information
                                            ?.government_affiliation?.[
                                            "4Ps"
                                        ] === "YES"
                                    }
                                    onChange={(e) =>
                                        dispatch(
                                            setPersonalInformation({
                                                ...personal_information,
                                                government_affiliation: {
                                                    ...personal_information.government_affiliation, // Spread the existing home_address fields
                                                    [e.target.name]:
                                                        e.target.value, // Dynamically set the updated field
                                                },
                                            })
                                        )
                                    }
                                    value="YES"
                                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                />
                                <label
                                    htmlFor="4psyes"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    YES
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    checked={
                                        personal_information
                                            ?.government_affiliation?.[
                                            "4Ps"
                                        ] === "NO"
                                    }
                                    onChange={(e) =>
                                        dispatch(
                                            setPersonalInformation({
                                                ...personal_information,
                                                government_affiliation: {
                                                    ...personal_information.government_affiliation, // Spread the existing home_address fields
                                                    [e.target.name]:
                                                        e.target.value, // Dynamically set the updated field
                                                },
                                            })
                                        )
                                    }
                                    name="4Ps"
                                    type="radio"
                                    value="NO"
                                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                />
                                <label
                                    htmlFor="4psno"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    NO
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-4">
                        <label
                            htmlFor="education"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Member of an Indigenous Group?
                        </label>
                        <div className="mt-2">
                            <div className="flex items-center gap-x-3 mb-3">
                                <input
                                    name="indigenous_group"
                                    type="radio"
                                    value="YES"
                                    checked={
                                        personal_information
                                            ?.government_affiliation
                                            ?.indigenous_group === "YES"
                                    }
                                    onChange={(e) =>
                                        dispatch(
                                            setPersonalInformation({
                                                ...personal_information,
                                                government_affiliation: {
                                                    ...personal_information.government_affiliation, // Spread the existing home_address fields
                                                    [e.target.name]:
                                                        e.target.value, // Dynamically set the updated field
                                                },
                                            })
                                        )
                                    }
                                    onClick={() => setIsIndigenous(false)}
                                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                />
                                <label
                                    htmlFor="indigenousyes"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    YES
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    checked={
                                        personal_information
                                            ?.government_affiliation
                                            ?.indigenous_group === "NO"
                                    }
                                    onChange={(e) =>
                                        dispatch(
                                            setPersonalInformation({
                                                ...personal_information,
                                                government_affiliation: {
                                                    ...personal_information.government_affiliation, // Spread the existing home_address fields
                                                    [e.target.name]:
                                                        e.target.value, // Dynamically set the updated field
                                                },
                                            })
                                        )
                                    }
                                    name="indigenous_group"
                                    type="radio"
                                    value="NO"
                                    onClick={() => setIsIndigenous(true)}
                                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                />
                                <label
                                    htmlFor="indigenousno"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    NO
                                </label>
                            </div>
                            {personal_information?.government_affiliation
                                ?.indigenous_group === "YES" && (
                                <>
                                    <input
                                        name="indigenous_group_name"
                                        type="text"
                                        value={
                                            personal_information
                                                ?.government_affiliation
                                                ?.indigenous_group_name
                                        }
                                        onChange={(e) =>
                                            dispatch(
                                                setPersonalInformation({
                                                    ...personal_information,
                                                    government_affiliation: {
                                                        ...personal_information.government_affiliation, // Spread the existing home_address fields
                                                        [e.target.name]:
                                                            e.target.value, // Dynamically set the updated field
                                                    },
                                                })
                                            )
                                        }
                                        placeholder="If YES, Please Specify"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 mt-4 sm:text-sm/6"
                                    />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
                <div className="sm:col-span-6 border-r border-gray-900/30">
                    <label
                        htmlFor="govid"
                        className="block text-sm/6 font-medium text-gray-900"
                    >
                        With Government ID?
                    </label>
                    <div className="mt-2">
                        <div className="flex items-center gap-x-3 mb-3">
                            <input
                                checked={
                                    personal_information?.government_affiliation
                                        ?.government_id === "YES"
                                }
                                onChange={(e) =>
                                    dispatch(
                                        setPersonalInformation({
                                            ...personal_information,
                                            government_affiliation: {
                                                ...personal_information.government_affiliation, // Spread the existing home_address fields
                                                [e.target.name]: e.target.value, // Dynamically set the updated field
                                            },
                                        })
                                    )
                                }
                                name="government_id"
                                type="radio"
                                value="YES"
                                onClick={() => setIsGovernment(false)}
                                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                            />
                            <label
                                htmlFor="gov_id"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                YES
                            </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <input
                                name="government_id"
                                type="radio"
                                checked={
                                    personal_information?.government_affiliation
                                        ?.government_id === "NO"
                                }
                                onChange={(e) =>
                                    dispatch(
                                        setPersonalInformation({
                                            ...personal_information,
                                            government_affiliation: {
                                                ...personal_information.government_affiliation, // Spread the existing home_address fields
                                                [e.target.name]: e.target.value, // Dynamically set the updated field
                                            },
                                        })
                                    )
                                }
                                value="NO"
                                onClick={() => setIsGovernment(true)}
                                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                            />
                            <label
                                htmlFor="govidno"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                NO
                            </label>
                        </div>
                        {personal_information?.government_affiliation
                            ?.government_id === "YES" && (
                            <>
                                <input
                                    name="government_id_type"
                                    value={
                                        personal_information
                                            ?.government_affiliation
                                            ?.government_id_type
                                    }
                                    onChange={(e) =>
                                        dispatch(
                                            setPersonalInformation({
                                                ...personal_information,
                                                government_affiliation: {
                                                    ...personal_information.government_affiliation, // Spread the existing home_address fields
                                                    [e.target.name]:
                                                        e.target.value, // Dynamically set the updated field
                                                },
                                            })
                                        )
                                    }
                                    type="text"
                                    placeholder="If YES, Please Specify ID Type"
                                    className="block w-1/2 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 mt-4 sm:text-sm/6"
                                />

                                <input
                                    name="government_id_number"
                                    value={
                                        personal_information
                                            ?.government_affiliation
                                            ?.government_id_number
                                    }
                                    onChange={(e) =>
                                        dispatch(
                                            setPersonalInformation({
                                                ...personal_information,
                                                government_affiliation: {
                                                    ...personal_information.government_affiliation, // Spread the existing home_address fields
                                                    [e.target.name]:
                                                        e.target.value, // Dynamically set the updated field
                                                },
                                            })
                                        )
                                    }
                                    type="text"
                                    placeholder="ID Number"
                                    className="block w-1/2 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 mt-4 sm:text-sm/6"
                                />
                            </>
                        )}
                    </div>
                </div>

                <div className="sm:col-span-6 border-r border-gray-900/30">
                    <label
                        htmlFor="farmassoc"
                        className="block text-sm/6 font-medium text-gray-900"
                    >
                        Member of any Farmers Association/Cooperative?
                    </label>
                    <div className="mt-2">
                        <div className="flex items-center gap-x-3 mb-3">
                            <input
                                name="farmers_association"
                                type="radio"
                                value="YES"
                                checked={
                                    personal_information?.government_affiliation
                                        ?.farmers_association == "YES"
                                }
                                onChange={(e) =>
                                    dispatch(
                                        setPersonalInformation({
                                            ...personal_information,
                                            government_affiliation: {
                                                ...personal_information.government_affiliation, // Spread the existing home_address fields
                                                [e.target.name]: e.target.value, // Dynamically set the updated field
                                            },
                                        })
                                    )
                                }
                                onClick={() => setIsCooperative(false)}
                                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                            />
                            <label
                                htmlFor="farm_assocyes"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                YES
                            </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <input
                                checked={
                                    personal_information?.government_affiliation
                                        ?.farmers_association == "NO"
                                }
                                onChange={(e) =>
                                    dispatch(
                                        setPersonalInformation({
                                            ...personal_information,
                                            government_affiliation: {
                                                ...personal_information.government_affiliation, // Spread the existing home_address fields
                                                [e.target.name]: e.target.value, // Dynamically set the updated field
                                            },
                                        })
                                    )
                                }
                                name="farmers_association"
                                type="radio"
                                value="NO"
                                onClick={() => setIsCooperative(true)}
                                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                            />
                            <label
                                htmlFor="farmassocno"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                NO
                            </label>
                        </div>
                        {personal_information?.government_affiliation
                            ?.farmers_association == "YES" && (
                            <>
                                <input
                                    onChange={(e) =>
                                        dispatch(
                                            setPersonalInformation({
                                                ...personal_information,
                                                government_affiliation: {
                                                    ...personal_information.government_affiliation, // Spread the existing home_address fields
                                                    [e.target.name]:
                                                        e.target.value, // Dynamically set the updated field
                                                },
                                            })
                                        )
                                    }
                                    name="farmers_association_name"
                                    type="text"
                                    value={
                                        personal_information
                                            ?.government_affiliation
                                            ?.farmers_association_name
                                    }
                                    placeholder="If YES, Please Specify"
                                    className="block w-1/2 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 mt-4 sm:text-sm/6"
                                />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
