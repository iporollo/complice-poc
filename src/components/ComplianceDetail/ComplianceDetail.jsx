import { Fragment, useState } from 'react';
import { PaperClipIcon } from '@heroicons/react/outline';
import { ChatAltIcon, TagIcon, UserCircleIcon } from '@heroicons/react/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ComplianceDetail() {
  return (
    <main className="flex-1">
      <div className="py-6">
        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
          <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
            <div className="ml-4 mt-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                California Statement of Information (Form SI-550)
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                In California a business’s annual report is called the Statement
                of Information. It's a required filing that keeps the state
                updated with information about participants in the company.
              </p>
            </div>
            <div className="ml-4 mt-4 flex-shrink-0">
              <button
                type="button"
                className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                File now
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 rounded-lg p-6 pb-2">
            <Timeline />
          </div>
        </div>
      </div>
    </main>
  );
}

const Timeline = () => (
  <>
    <ol className="relative border-l border-gray-200 ">
      <li className="mb-10 ml-6">
        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white ">
          <svg
            className="w-3 h-3 text-blue-600 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 ">
          2022 SI-550 Form Filing
          <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
            Incomplete
          </span>
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
          Due June 21st, 2022
        </time>
        <a
          href="#"
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 text-indigo-600 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700"
        >
          File now
        </a>
      </li>
      <li className="mb-10 ml-6">
        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white ">
          <svg
            className="w-3 h-3 text-blue-600 0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 ">
          2021 SI-550 Form Filing
          <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
            Complete
          </span>
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
          Completed May 17th, 2021
        </time>
        <dd className="mt-4 text-sm text-gray-900">
          <ul
            role="list"
            className="border border-gray-200 rounded-md divide-y divide-gray-200"
          >
            <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
              <div className="w-0 flex-1 flex items-center">
                <PaperClipIcon
                  className="flex-shrink-0 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span className="ml-2 flex-1 w-0 truncate">
                  2021 Certified 550-C.pdf
                </span>
              </div>
              <div className="ml-4 flex-shrink-0">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Download
                </a>
              </div>
            </li>
          </ul>
        </dd>
      </li>
      <li className="mb-10 ml-6">
        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white ">
          <svg
            className="w-3 h-3 text-blue-600 0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 ">
          2020 SI-550 Form Filing
          <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
            Complete
          </span>
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
          Completed May 10th, 2020
        </time>
        <dd className="mt-4 text-sm text-gray-900">
          <ul
            role="list"
            className="border border-gray-200 rounded-md divide-y divide-gray-200"
          >
            <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
              <div className="w-0 flex-1 flex items-center">
                <PaperClipIcon
                  className="flex-shrink-0 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span className="ml-2 flex-1 w-0 truncate">
                  2020 Certified 550-C.pdf
                </span>
              </div>
              <div className="ml-4 flex-shrink-0">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Download
                </a>
              </div>
            </li>
          </ul>
        </dd>
      </li>
    </ol>
  </>
);

const FileList = () => (
  <div className="sm:col-span-2">
    <div className="flex justify-between items-center">
      <dt className="text-md font-medium">Artifacts</dt>
      <a
        href="#"
        className="flex justify-center items-center mb-4 py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 text-indigo-600 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700"
      >
        Upload new document
      </a>
    </div>
    <dd className="mt-1 text-sm text-gray-900">
      <ul
        role="list"
        className="border border-gray-200 rounded-md divide-y divide-gray-200"
      >
        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
          <div className="w-0 flex-1 flex items-center">
            <PaperClipIcon
              className="flex-shrink-0 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <span className="ml-2 flex-1 w-0 truncate">Board Consent</span>
          </div>
          <div className="ml-4 flex-shrink-0">
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Download
            </a>
          </div>
        </li>
        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
          <div className="w-0 flex-1 flex items-center">
            <PaperClipIcon
              className="flex-shrink-0 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <span className="ml-2 flex-1 w-0 truncate">
              Common Stock Notice of Issuance
            </span>
          </div>
          <div className="ml-4 flex-shrink-0">
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Download
            </a>
          </div>
        </li>
        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
          <div className="w-0 flex-1 flex items-center">
            <PaperClipIcon
              className="flex-shrink-0 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <span className="ml-2 flex-1 w-0 truncate">83(b) Election</span>
          </div>
          <div className="ml-4 flex-shrink-0">
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Download
            </a>
          </div>
        </li>
        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
          <div className="w-0 flex-1 flex items-center">
            <PaperClipIcon
              className="flex-shrink-0 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <span className="ml-2 flex-1 w-0 truncate">
              Assignment of IP and Other Assets
            </span>
          </div>
          <div className="ml-4 flex-shrink-0">
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Download
            </a>
          </div>
        </li>
        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
          <div className="w-0 flex-1 flex items-center">
            <PaperClipIcon
              className="flex-shrink-0 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <span className="ml-2 flex-1 w-0 truncate">
              Confidential Information and Invention Assignment Agreement
            </span>
          </div>
          <div className="ml-4 flex-shrink-0">
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Download
            </a>
          </div>
        </li>
        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
          <div className="w-0 flex-1 flex items-center">
            <PaperClipIcon
              className="flex-shrink-0 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <span className="ml-2 flex-1 w-0 truncate">
              Restricted Stock Purchase Agreement
            </span>
          </div>
          <div className="ml-4 flex-shrink-0">
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Download
            </a>
          </div>
        </li>
      </ul>
    </dd>
  </div>
);
