import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

const Error = () => {
    const router = useRouter()
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8 mt-16">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-red-50 rounded-full opacity-30 blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-50 rounded-full opacity-30 blur-3xl"></div>
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
                {/* Error Icon and Text */}
                <div className="mb-8">
                    <div className="inline-flex items-center justify-center w-32 h-32 bg-red-100 rounded-full mb-8 shadow-lg ">
                        <AlertTriangle className="w-16 h-16 text-red-500" aria-hidden="true" />
                    </div>
                    <h1 className="text-8xl md:text-9xl font-black text-gray-900 mb-4 tracking-tight">
                        500
                    </h1>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-tight">
                        This is totally your fault...
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Just kidding! It&apos;s definitely us. I&apos;m looking into it , like right now.
                    </p>
                </div>

                {/* Enhanced Error Details */}
                <div className="mb-10 p-6 bg-red-50 rounded-2xl shadow-xl border border-red-200 inline-block">
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <Bug className="w-5 h-5 text-red-500" />
                        <p className="text-lg font-semibold text-red-700">Error Details</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-sm text-red-600">
                            Error Code: <span className="font-bold bg-red-100 px-2 py-1 rounded">500</span>
                        </p>
                        <p className="text-sm text-red-600">
                            Time: <span className="font-bold">{new Date().toLocaleString()}</span>
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">

                    <button
                        onClick={() => router.refresh()}
                        className="group relative inline-flex items-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 "
                        aria-label="Retry the request"
                    >
                        <RefreshCw className="w-6 h-6 mr-3 group-hover:rotate-180 transition-transform duration-500" aria-hidden="true" />
                        All good, let&apos;s try that again
                        <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </button>


                    <Link
                        href={`/`}
                        className="group relative inline-flex items-center px-8 py-4 bg-gray-600 hover:bg-gray-700 text-white rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-offset-2"
                        aria-label="Go back to previous page"
                    >
                        <Home className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" aria-hidden="true" />
                        Pretend This Never Happened and Go Back Home
                        <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </Link>
                </div>



                <div className="mt-8 p-4 bg-white rounded-xl border border-gray-200">
                    <p className="text-sm text-gray-500 italic">
                        I was going to blame you, but then I remembered I&apso;m a professional... sort of  🤷‍♂️
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Error