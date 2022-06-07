import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Financials() {
  return (
    <main className="flex-1">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Financials</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-4">
          <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
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
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Burn
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  100,234.89{' '}
                  <span className="text-sm font-medium text-gray-500 truncate">
                    / month
                  </span>
                </dd>
              </div>
              <div className="mb-2">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Runway
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  11 months
                </dd>
              </div>
              <Link
                to="#"
                className=" flex justify-center items-center mt-3 mb-1 py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 text-indigo-600 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700"
              >
                View in Brex
              </Link>
            </div>
          </dl>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-4">
          <Transactions />
        </div>
      </div>
    </main>
  );
}

const Transactions = () => {
  const transactions = [
    {
      date: 'Jun 03',
      merchant: 'Hubspot',
      category: 'SaaS',
      amount: '$94.00',
    },
    {
      date: 'Jun 02',
      merchant: 'Slack',
      category: 'SaaS',
      amount: '$8.00',
    },
    {
      date: 'May 31',
      merchant: 'Stable',
      category: 'SaaS',
      amount: '$25.00',
    },
    {
      date: 'May 28',
      merchant: 'WeWork',
      category: 'Rent',
      amount: '$5.00',
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Transactions</h1>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            Sync with Bank
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Merchant
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">View</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {transactions.map((transaction) => (
                    <tr key={transaction.date}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {transaction.date}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {transaction.merchant}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {transaction.category}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {transaction.amount}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
