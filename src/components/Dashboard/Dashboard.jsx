import { Fragment, useState } from 'react';
import { ExclamationIcon, XIcon, CheckIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const stats = [
  { name: 'Total Subscribers', stat: '71,897' },
  { name: 'Avg. Open Rate', stat: '58.16%' },
  { name: 'Avg. Click Rate', stat: '24.57%' },
];

export default function Dashboard() {
  return (
    <main className="flex-1">
      <div className="py-6">
        <Banner />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <Cards />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 shadow rounded-lg p-6 pb-2">
            <Timeline />
          </div>
        </div>
      </div>
    </main>
  );
}

const Banner = () => {
  return (
    <div className="inset-x-0 pb-2 sm:pb-5">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="p-2 rounded-lg bg-indigo-600 shadow-lg sm:p-3">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-indigo-800">
                <ExclamationIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span className="inline">
                  Upcoming{' '}
                  <a href="#" className="font-bold underline">
                    California Statement of Information
                  </a>{' '}
                  filing deadline <b>June 21st</b>.
                </span>
              </p>
            </div>
            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <a
                href="#"
                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
              >
                File now
              </a>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
              <button
                type="button"
                className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span className="sr-only">Dismiss</span>
                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cards = () => (
  <div>
    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
      <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
        <dd className="mb-1 text-3xl font-semibold text-gray-900">
          Vocable Inc.
        </dd>
        <dt className="text-sm font-medium text-gray-500 truncate">Address</dt>
        <p className="text-sm font-medium">
          2261 MARKET STREET #4162 SAN FRANCISCO CA 94114
        </p>
        <dt className="mt-1 text-sm font-medium text-gray-500 truncate">
          Registered
        </dt>
        <p className="text-sm font-medium">06/12/2020</p>
        <dt className="mt-1 text-sm font-medium text-gray-500 truncate">EIN</dt>
        <p className="text-sm font-medium">*********</p>
        <Link
          to="company"
          className=" flex justify-center items-center my-2 py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 text-indigo-600 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700"
        >
          See more
        </Link>
      </div>
      <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
        <div className="border-b-2 pb-4">
          <dt className="text-sm font-medium text-gray-500 truncate">
            Business Status
          </dt>
          <dd className="mt-1 text-3xl font-semibold text-green-500">
            Good Standing
          </dd>
        </div>
        <div className="mt-5">
          <List />
        </div>
      </div>
      <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
        <div className="mb-2">
          <dt className="text-sm font-medium text-gray-500 truncate">
            Bank Balance
          </dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900">
            1,234,567.89
          </dd>
        </div>
        <div className="mb-2">
          <dt className="text-sm font-medium text-gray-500 truncate">Burn</dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900">
            100,234.89{' '}
            <span className="text-sm font-medium text-gray-500 truncate">
              / month
            </span>
          </dd>
        </div>
        <div className="mb-2">
          <dt className="text-sm font-medium text-gray-500 truncate">Runway</dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900">
            11 months
          </dd>
        </div>
        <Link
          to="financials"
          className=" flex justify-center items-center mt-3 mb-1 py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 text-indigo-600 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700"
        >
          See more
        </Link>
      </div>
    </dl>
  </div>
);

const List = () => {
  const timeline = [
    {
      id: 1,
      target: 'Federal',
      icon: CheckIcon,
      iconBackground: 'bg-green-500',
      date: 'Jun 20',
    },
    {
      id: 2,
      target: 'Delaware',
      icon: CheckIcon,
      iconBackground: 'bg-green-500',
      date: 'Jun 20',
    },
    {
      id: 3,
      target: 'California',
      icon: CheckIcon,
      iconBackground: 'bg-green-500',
      date: 'Jun 20',
    },
    {
      id: 3,
      target: 'San Francisco',
      icon: CheckIcon,
      iconBackground: 'bg-green-500',
      date: 'Jun 20',
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-4">
              <div className="relative flex space-x-3 ">
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      'h-5 w-5 rounded-full flex items-center justify-center ring-8 ring-white'
                    )}
                  >
                    <event.icon
                      className="h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="min-w-0 flex-1 flex justify-between space-x-4">
                  <div>
                    <p className="text-sm text-gray-500">
                      {event.content}{' '}
                      <a
                        href={event.href}
                        className="font-medium text-gray-900"
                      >
                        {event.target}
                      </a>
                    </p>
                  </div>
                  <div className="text-right text-sm whitespace-nowrap text-gray-500">
                    <a href="#" dateTime={event.datetime} className="underline">
                      Check Status
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

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
          California Statement of Information
          <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
            Incomplete
          </span>
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
          Due June 21st, 2022
        </time>
        <p className="mb-4 text-base font-normal text-gray-500 ">
          In California a business’s annual report is called the Statement of
          Information. It's a required filing that keeps the state updated with
          information about participants in the company.
        </p>
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
          2021 Tax Filing
          <span className="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
            In Progress
          </span>
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
          Due October 17th, 2022
        </time>
        <p className="text-base mb-4 font-normal text-gray-500 ">
          Corporate tax returns detail the company’s profits and expenses to
          determine the amount of tax the company owes to the US government.
          Federal Form 1120 and California Form 100 are required to be filed.
        </p>
        <a
          href="#"
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 text-indigo-600 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700"
        >
          View artifacts
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
          San Francisco Business Registration Renewal
          <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
            Complete
          </span>
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
          Completed May 10th, 2022
        </time>
        <p className="text-base font-normal text-gray-500 mb-4">
          All persons doing business in San Francisco must have a current
          business registration.
        </p>
        <a
          href="#"
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 text-indigo-600 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700"
        >
          View artifacts
        </a>
      </li>
    </ol>
    <a
      href="#"
      className="flex justify-center items-center mb-4 py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 text-indigo-600 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700"
    >
      See more
    </a>
  </>
);
