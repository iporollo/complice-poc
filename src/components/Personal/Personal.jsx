import { Fragment, useState } from 'react';
import {
  PaperClipIcon,
  BookOpenIcon,
  CashIcon,
} from '@heroicons/react/outline';

export default function Personal() {
  return (
    <main className="flex-1">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Personal</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-4">
          <GeneralInfo />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-5">
          <FileList />
        </div>
      </div>
    </main>
  );
}

const stats = [
  {
    id: 1,
    name: 'Current Salary',
    stat: '120,000',
    icon: CashIcon,
    view: 'Gusto',
  },
  {
    id: 2,
    name: 'Current Shares',
    stat: '4,000,000',
    icon: BookOpenIcon,
    view: 'Clerky',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const GeneralInfo = () => {
  return (
    <div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
            <dt>
              <div className="absolute bg-indigo-500 rounded-md p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                {item.name}
              </p>
            </dt>
            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">
                {item.stat}
              </p>
              <p
                className={classNames(
                  item.changeType === 'increase'
                    ? 'text-green-600'
                    : 'text-red-600',
                  'ml-2 flex items-baseline text-sm font-semibold'
                )}
              ></p>
              <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    View in {item.view}
                  </a>
                </div>
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

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
