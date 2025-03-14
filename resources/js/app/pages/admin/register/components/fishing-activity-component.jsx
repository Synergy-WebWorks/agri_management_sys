import { setPersonalInformation } from "@/app/redux/personal-information-slice";
import { setForm } from "@/app/redux/register-slice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function FishingActivityComponent() {
    const dispatch = useDispatch();

    const { personal_information } = useSelector(
        (store) => store.personal_information
    );
    return (
        <div className="sm:col-span-3">
            <div className="border border-green-900/80 border- rounded-md px-3 py-4">
                <div className="text-center text-md font-medium text-gray-700">
                    <p>For Fisherfolks</p>
                    <p className="text-justify text-xs italic mt-2 mb-1">
                        The Lending Conduit shall coordinate with the Bureau of
                        Fisheries and Aquatic Resources (BFAR) in the issuance
                        of a certification that the fisherfolk-borrower under
                        PUNLA/PLEA/ is registered under the Municipal
                        Registration (FishR).
                    </p>
                    <p className="text-left mt-2 text-sm">
                        Type of Fishing Activity:
                    </p>
                </div>
                <div className="space-y-5 mt-5">
                    <div className="flex gap-3">
                        <div className="flex h-6 shrink-0 items-center">
                            <div className="group grid size-4 grid-cols-1">
                                <input
                                    name="farm_activity"
                                    type="checkbox"
                                    value="Fishing Capture"
                                    onChange={(e) => {
                                        const newValue = e.target.value;
                                        const updatedFarmActivity = e.target
                                            .checked
                                            ? [
                                                  ...personal_information
                                                      ?.farm_profile
                                                      ?.farm_activity,
                                                  newValue,
                                              ] // Add the value if checked
                                            : personal_information?.farm_profile?.farm_activity.filter(
                                                  (activity) =>
                                                      activity !== newValue
                                              );

                                        dispatch(
                                            setPersonalInformation({
                                                ...personal_information,
                                                farm_profile: {
                                                    ...personal_information?.farm_profile, // Spread the existing home_address fields
                                                    farm_activity:
                                                        updatedFarmActivity, // Dynamically set the updated field
                                                },
                                            })
                                        );
                                    }}
                                    className="col-start-1 row-start-1 appearance-none rounded border border-green-300 bg-white checked:border-green-600 checked:bg-green-600 indeterminate:border-green-600 indeterminate:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-green-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                    fill="none"
                                    viewBox="0 0 14 14"
                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                >
                                    <path
                                        d="M3 8L6 11L11 3.5"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-[:checked]:opacity-100"
                                    />
                                    <path
                                        d="M3 7H11"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="text-sm/6">
                            <label
                                htmlFor="fishing"
                                className="font-medium text-gray-900"
                            >
                                Fishing Capture
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex h-6 shrink-0 items-center">
                            <div className="group grid size-4 grid-cols-1">
                                <input
                                    name="farm_activity"
                                    type="checkbox"
                                    value="Aquaculture"
                                    onChange={(e) => {
                                        const newValue = e.target.value;
                                        const updatedFarmActivity = e.target
                                            .checked
                                            ? [
                                                  ...personal_information
                                                      ?.farm_profile
                                                      ?.farm_activity,
                                                  newValue,
                                              ] // Add the value if checked
                                            : personal_information?.farm_profile?.farm_activity.filter(
                                                  (activity) =>
                                                      activity !== newValue
                                              );

                                        dispatch(
                                            setPersonalInformation({
                                                ...personal_information,
                                                farm_profile: {
                                                    ...personal_information?.farm_profile, // Spread the existing home_address fields
                                                    farm_activity:
                                                        updatedFarmActivity, // Dynamically set the updated field
                                                },
                                            })
                                        );
                                    }}
                                    className="col-start-1 row-start-1 appearance-none rounded border border-green-300 bg-white checked:border-green-600 checked:bg-green-600 indeterminate:border-green-600 indeterminate:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-green-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                    fill="none"
                                    viewBox="0 0 14 14"
                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                >
                                    <path
                                        d="M3 8L6 11L11 3.5"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-[:checked]:opacity-100"
                                    />
                                    <path
                                        d="M3 7H11"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="text-sm/6">
                            <label
                                htmlFor="aquaculture"
                                className="font-medium text-gray-900"
                            >
                                Aquaculture
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex h-6 shrink-0 items-center">
                            <div className="group grid size-4 grid-cols-1">
                                <input
                                    name="farm_activity"
                                    type="checkbox"
                                    value="Gleaning"
                                    onChange={(e) => {
                                        const newValue = e.target.value;
                                        const updatedFarmActivity = e.target
                                            .checked
                                            ? [
                                                  ...personal_information
                                                      ?.farm_profile
                                                      ?.farm_activity,
                                                  newValue,
                                              ] // Add the value if checked
                                            : personal_information?.farm_profile?.farm_activity.filter(
                                                  (activity) =>
                                                      activity !== newValue
                                              );

                                        dispatch(
                                            setPersonalInformation({
                                                ...personal_information,
                                                farm_profile: {
                                                    ...personal_information?.farm_profile, // Spread the existing home_address fields
                                                    farm_activity:
                                                        updatedFarmActivity, // Dynamically set the updated field
                                                },
                                            })
                                        );
                                    }}
                                    className="col-start-1 row-start-1 appearance-none rounded border border-green-300 bg-white checked:border-green-600 checked:bg-green-600 indeterminate:border-green-600 indeterminate:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-green-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                    fill="none"
                                    viewBox="0 0 14 14"
                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                >
                                    <path
                                        d="M3 8L6 11L11 3.5"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-[:checked]:opacity-100"
                                    />
                                    <path
                                        d="M3 7H11"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="text-sm/6">
                            <label
                                htmlFor="gleaning"
                                className="font-medium text-gray-900"
                            >
                                Gleaning
                            </label>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <div className="flex h-6 shrink-0 items-center">
                            <div className="group grid size-4 grid-cols-1">
                                <input
                                    name="farm_activity"
                                    type="checkbox"
                                    value="Fish Processing"
                                    onChange={(e) => {
                                        const newValue = e.target.value;
                                        const updatedFarmActivity = e.target
                                            .checked
                                            ? [
                                                  ...personal_information
                                                      ?.farm_profile
                                                      ?.farm_activity,
                                                  newValue,
                                              ] // Add the value if checked
                                            : personal_information?.farm_profile?.farm_activity.filter(
                                                  (activity) =>
                                                      activity !== newValue
                                              );

                                        dispatch(
                                            setPersonalInformation({
                                                ...personal_information,
                                                farm_profile: {
                                                    ...personal_information?.farm_profile, // Spread the existing home_address fields
                                                    farm_activity:
                                                        updatedFarmActivity, // Dynamically set the updated field
                                                },
                                            })
                                        );
                                    }}
                                    className="col-start-1 row-start-1 appearance-none rounded border border-green-300 bg-white checked:border-green-600 checked:bg-green-600 indeterminate:border-green-600 indeterminate:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-green-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                    fill="none"
                                    viewBox="0 0 14 14"
                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                >
                                    <path
                                        d="M3 8L6 11L11 3.5"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-[:checked]:opacity-100"
                                    />
                                    <path
                                        d="M3 7H11"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="text-sm/6">
                            <label
                                htmlFor="fishprocessing"
                                className="font-medium text-gray-900"
                            >
                                Fish Processing
                            </label>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <div className="flex h-6 shrink-0 items-center">
                            <div className="group grid size-4 grid-cols-1">
                                <input
                                    name="farm_activity"
                                    type="checkbox"
                                    value="Fish vending"
                                    onChange={(e) => {
                                        const newValue = e.target.value;
                                        const updatedFarmActivity = e.target
                                            .checked
                                            ? [
                                                  ...personal_information
                                                      ?.farm_profile
                                                      ?.farm_activity,
                                                  newValue,
                                              ] // Add the value if checked
                                            : personal_information?.farm_profile?.farm_activity.filter(
                                                  (activity) =>
                                                      activity !== newValue
                                              );

                                        dispatch(
                                            setPersonalInformation({
                                                ...personal_information,
                                                farm_profile: {
                                                    ...personal_information?.farm_profile, // Spread the existing home_address fields
                                                    farm_activity:
                                                        updatedFarmActivity, // Dynamically set the updated field
                                                },
                                            })
                                        );
                                    }}
                                    className="col-start-1 row-start-1 appearance-none rounded border border-green-300 bg-white checked:border-green-600 checked:bg-green-600 indeterminate:border-green-600 indeterminate:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-green-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                    fill="none"
                                    viewBox="0 0 14 14"
                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                >
                                    <path
                                        d="M3 8L6 11L11 3.5"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-[:checked]:opacity-100"
                                    />
                                    <path
                                        d="M3 7H11"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="text-sm/6">
                            <label
                                htmlFor="fishvending"
                                className="font-medium text-gray-900"
                            >
                                Fish Vending
                            </label>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <div className="flex h-6 shrink-0 items-center">
                            <div className="group grid size-4 grid-cols-1">
                                <input
                                    name="farm_activity"
                                    type="checkbox"
                                    value="Others"
                                    onChange={(e) => {
                                        const newValue = e.target.value;
                                        const updatedFarmActivity = e.target
                                            .checked
                                            ? [
                                                  ...personal_information
                                                      ?.farm_profile
                                                      ?.farm_activity,
                                                  newValue,
                                              ] // Add the value if checked
                                            : personal_information?.farm_profile?.farm_activity.filter(
                                                  (activity) =>
                                                      activity !== newValue
                                              );

                                        dispatch(
                                            setPersonalInformation({
                                                ...personal_information,
                                                farm_profile: {
                                                    ...personal_information?.farm_profile, // Spread the existing home_address fields
                                                    farm_activity:
                                                        updatedFarmActivity, // Dynamically set the updated field
                                                },
                                            })
                                        );
                                    }}
                                    className="col-start-1 row-start-1 appearance-none rounded border border-green-300 bg-white checked:border-green-600 checked:bg-green-600 indeterminate:border-green-600 indeterminate:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-green-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                    fill="none"
                                    viewBox="0 0 14 14"
                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                >
                                    <path
                                        d="M3 8L6 11L11 3.5"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-[:checked]:opacity-100"
                                    />
                                    <path
                                        d="M3 7H11"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="text-sm/6">
                            <label
                                htmlFor="otherfish"
                                className="font-medium text-gray-900"
                            >
                                Others
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
