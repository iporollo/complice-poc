import { Fragment, useState } from 'react';
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  CashIcon,
  ClockIcon,
  ExclamationIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from '@heroicons/react/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Compliance() {
  return (
    <main className="flex-1">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Federal Compliance
            </h3>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-4">
          <Federal />
        </div>
      </div>
      <div className="pt-2 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Delaware State Compliance
            </h3>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-4">
          <Delaware />
        </div>
      </div>
      <div className="pt-2 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              California State Compliance
            </h3>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-4">
          <CaliforniaState />
        </div>
      </div>
      <div className="pt-2 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              San Francisco City Compliance
            </h3>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-4">
          <SanFranciscoCity />
        </div>
      </div>
    </main>
  );
}

const Federal = () => {
  const actions = [
    {
      title: 'Federal Tax Returns (Form 1120)',
      details:
        'The U.S. corporation income tax return - an Internal Revenue Service (IRS) document that American corporations use to report their credits, deductions, losses, gains and income.',
      href: '#',
      icon: ClockIcon,
      iconForeground: 'text-yellow-700',
      iconBackground: 'bg-yellow-50',
    },
  ];
  return (
    <div className="rounded-lg overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:gap-px">
      {actions.map((action, actionIdx) => (
        <div
          key={action.title}
          className={classNames(
            actionIdx === 0
              ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
              : '',
            actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
            actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
            actionIdx === actions.length - 1
              ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
              : '',
            'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
          )}
        >
          <div>
            <span
              className={classNames(
                action.iconBackground,
                action.iconForeground,
                'rounded-lg inline-flex p-3 ring-4 ring-white'
              )}
            >
              <action.icon className="h-6 w-6" aria-hidden="true" />
            </span>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-medium">
              <a href={action.href} className="focus:outline-none">
                {/* Extend touch target to entire panel */}
                <span className="absolute inset-0" aria-hidden="true" />
                {action.title}
              </a>
            </h3>
            <p className="mt-2 text-sm text-gray-500">{action.details}</p>
          </div>
          <span
            className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
            aria-hidden="true"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>
      ))}
    </div>
  );
};

const Delaware = () => {
  const actions = [
    {
      title: 'Delaware Franchise Tax',
      details:
        'Corporations incorporated in Delaware but not conducting business in Delaware have to pay Franchise Tax administered by the Delaware Department of State.',
      href: '#',
      icon: BadgeCheckIcon,
      iconForeground: 'text-teal-700',
      iconBackground: 'bg-teal-50',
    },
    {
      title: 'Registered Agent Renewal',
      details:
        'A registered agent, statutory agent, or agent for SOP provides a legal address within the jurisdiction where legal documents may be served during business hours.',
      href: '#',
      icon: BadgeCheckIcon,
      iconForeground: 'text-teal-700',
      iconBackground: 'bg-teal-50',
    },
  ];
  return (
    <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
      {actions.map((action, actionIdx) => (
        <div
          key={action.title}
          className={classNames(
            actionIdx === 0
              ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
              : '',
            actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
            actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
            actionIdx === actions.length - 1
              ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
              : '',
            'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
          )}
        >
          <div>
            <span
              className={classNames(
                action.iconBackground,
                action.iconForeground,
                'rounded-lg inline-flex p-3 ring-4 ring-white'
              )}
            >
              <action.icon className="h-6 w-6" aria-hidden="true" />
            </span>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-medium">
              <a href={action.href} className="focus:outline-none">
                {/* Extend touch target to entire panel */}
                <span className="absolute inset-0" aria-hidden="true" />
                {action.title}
              </a>
            </h3>
            <p className="mt-2 text-sm text-gray-500">{action.details}</p>
          </div>
          <span
            className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
            aria-hidden="true"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>
      ))}
    </div>
  );
};

const CaliforniaState = () => {
  const actions = [
    {
      title: 'California Statement of Information (Form SI-550)',
      details: `In California a business’s annual report is called the Statement of Information. It's a required filing that keeps the state updated with information about participants in the company.`,
      href: '#',
      icon: ExclamationIcon,
      iconForeground: 'text-rose-700',
      iconBackground: 'bg-rose-50',
    },
    {
      title: 'California Tax Return Form (Form 100)',
      details:
        'California state tax returm used by corporations to report their credits, deductions, losses, gains and income within the state of California.',
      href: '#',
      icon: ClockIcon,
      iconForeground: 'text-yellow-700',
      iconBackground: 'bg-yellow-50',
    },
    {
      title: 'California Franchise Tax',
      details:
        'Every corporation that is incorporated, registered, or doing business in California must pay the minimum franchise tax.',
      href: '#',
      icon: ClockIcon,
      iconForeground: 'text-yellow-700',
      iconBackground: 'bg-yellow-50',
    },
  ];
  return (
    <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
      {actions.map((action, actionIdx) => (
        <div
          key={action.title}
          className={classNames(
            actionIdx === 0
              ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
              : '',
            actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
            actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
            actionIdx === actions.length - 1
              ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
              : '',
            'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
          )}
        >
          <div>
            <span
              className={classNames(
                action.iconBackground,
                action.iconForeground,
                'rounded-lg inline-flex p-3 ring-4 ring-white'
              )}
            >
              <action.icon className="h-6 w-6" aria-hidden="true" />
            </span>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-medium">
              <a href={action.href} className="focus:outline-none">
                {/* Extend touch target to entire panel */}
                <span className="absolute inset-0" aria-hidden="true" />
                {action.title}
              </a>
            </h3>
            <p className="mt-2 text-sm text-gray-500">{action.details}</p>
          </div>
          <span
            className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
            aria-hidden="true"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>
      ))}
    </div>
  );
};

const SanFranciscoCity = () => {
  const actions = [
    {
      title: 'Business Registration Renewal',
      details:
        'All persons doing business in San Francisco must have a current business registration',
      href: '#',
      icon: BadgeCheckIcon,
      iconForeground: 'text-teal-700',
      iconBackground: 'bg-teal-50',
    },
  ];
  return (
    <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:gap-px">
      {actions.map((action, actionIdx) => (
        <div
          key={action.title}
          className={classNames(
            actionIdx === 0
              ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
              : '',
            actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
            actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
            actionIdx === actions.length - 1
              ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
              : '',
            'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
          )}
        >
          <div>
            <span
              className={classNames(
                action.iconBackground,
                action.iconForeground,
                'rounded-lg inline-flex p-3 ring-4 ring-white'
              )}
            >
              <action.icon className="h-6 w-6" aria-hidden="true" />
            </span>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-medium">
              <a href={action.href} className="focus:outline-none">
                {/* Extend touch target to entire panel */}
                <span className="absolute inset-0" aria-hidden="true" />
                {action.title}
              </a>
            </h3>
            <p className="mt-2 text-sm text-gray-500">{action.details}</p>
          </div>
          <span
            className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
            aria-hidden="true"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>
      ))}
    </div>
  );
};
