import { UserPlusIcon } from "@heroicons/react/24/outline";
import React from "react";
import FilterDrawerComponent from "./filter-drawer-component";
import { Link } from "@inertiajs/react";
import { useSelector } from "react-redux";

export default function BenefeciaryTableComponent() {
    const { personal_informations } = useSelector(
        (store) => store.personal_information
    );
    const { user } = useSelector(
        (store) => store.app
    );
    console.log("user", user.role);
    return (
        <div className="px-4 sm:px-6 lg:px-8 mt-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold text-gray-900">
                        Active Beneficiary
                    </h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the active benefeciary in the system
                        including their rsbsa number, registration no.,
                        fullname, association and livelihood.
                    </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    {/* <a
                        href="/verifier/beneficiary/register?status=register"
                        type="button"
                        className="block justify-items-center rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                    >
                        <UserPlusIcon className="size-4" />
                        Register Benefeciary
                    </a> */}
                </div>
            </div>
            {/* <FilterDrawerComponent /> */}
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-0"
                                    >
                                        RSBSA No.
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Register No.
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Lastname
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Firstname
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Middlename
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Livelihood/Organization
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Barangay
                                    </th>
                                    <th
                                        scope="col"
                                        className="relative py-3 pl-3 pr-4 sm:pr-0"
                                    >
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {personal_informations?.data?.map((person) => (
                                    <tr key={person.email}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                            {person.register_id}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                            {person.id}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900">
                                            {person.lastname}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900">
                                            {person.firstname}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900">
                                            {person.middlename}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                            <p className="text-gray-500 italic">
                                                {person?.farm_profile
                                                    ?.main_livelihood ?? "N/A"}
                                            </p>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                                {person.status}
                                            </span>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900">
                                            {person.barangay}
                                        </td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                            <Link
                                                href={`/verifier/profile/${person.id}`}
                                                className="text-indigo-600 hover:text-indigo-900"
                                            >
                                                View Profile
                                                <span className="sr-only">
                                                    , {person.rsbsa}
                                                </span>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
