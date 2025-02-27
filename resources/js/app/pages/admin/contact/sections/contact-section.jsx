import React from "react";

export default function ContactSection() {
    return (
        <div className="bg-white rounded-md py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-300 lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
                        <div>
                            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900">
                                Get in touch
                            </h2>
                            <p className="mt-4 text-base/7 text-gray-600">
                                Quam nunc nunc eu sed. Sed rhoncus quis
                                ultricies ac pellentesque.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                            <div className="rounded-2xl bg-gray-50 p-10 shadow-md">
                                <h3 className="text-base/7 font-semibold text-gray-900">
                                    Mark Barellano
                                </h3>
                                <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd>
                                            <a
                                                href="barellanojay7@gmail.com
"
                                                className="font-semibold text-indigo-600"
                                            >
                                                barellanojay7@gmail.com
                                            </a>
                                        </dd>
                                    </div>
                                    <div className="mt-1">
                                        <dt className="sr-only">
                                            Phone number
                                        </dt>
                                        <dd>+63 (950) 893-4444</dd>
                                    </div>
                                </dl>
                            </div>
                            <div className="rounded-2xl bg-gray-50 p-10 shadow-md">
                                <h3 className="text-base/7 font-semibold text-gray-900">
                                    Paloma S. Pateño
                                </h3>
                                <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd>
                                            <a
                                                href="palomapateno05@gmail.com"
                                                className="font-semibold text-indigo-600"
                                            >
                                                palomapateno05@gmail.com
                                            </a>
                                        </dd>
                                    </div>
                                    <div className="mt-1">
                                        <dt className="sr-only">
                                            Phone number
                                        </dt>
                                        <dd>+63 (949) 809-0789</dd>
                                    </div>
                                </dl>
                            </div>
                            <div className="rounded-2xl bg-gray-50 p-10 shadow-md">
                                <h3 className="text-base/7 font-semibold text-gray-900">
                                Rhizzy Jay A. Caritan

                                </h3>
                                <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd>
                                            <a
                                                href="mailto:rj.lats122@gmail.com"
                                                className="font-semibold text-indigo-600"
                                            >
                                                rj.lats122@gmail.com
                                            </a>
                                        </dd>
                                    </div>
                                    <div className="mt-1">
                                        <dt className="sr-only">
                                            Phone number
                                        </dt>
                                        <dd>+63 (962) 046-3870</dd>
                                    </div>
                                </dl>
                            </div>
                            <div className="rounded-2xl bg-gray-50 p-10 shadow-md">
                                <h3 className="text-base/7 font-semibold text-gray-900">
                                    Say hello
                                </h3>
                                <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd>
                                            <a
                                                href="mailto:hello@example.com"
                                                className="font-semibold text-indigo-600"
                                            >
                                                hello@example.com
                                            </a>
                                        </dd>
                                    </div>
                                    <div className="mt-1">
                                        <dt className="sr-only">
                                            Phone number
                                        </dt>
                                        <dd>+1 (555) 905-5678</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
