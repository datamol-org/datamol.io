import { useState } from 'react';
import Head from 'next/head';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import toast, { Toaster } from 'react-hot-toast';

// Config variables
const SPREADSHEET_ID: any = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
const SHEET_ID: any = process.env.NEXT_PUBLIC_SHEET_ID;
const GOOGLE_CLIENT_EMAIL: any = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
const GOOGLE_SERVICE_PRIVATE_KEY: any =
  process.env.NEXT_PUBLIC_GOOGLE_SERVICE_PRIVATE_KEY;

// GoogleSpreadsheet Initialize
const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

// Append Function
const appendSpreadsheet = async (row: any) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: GOOGLE_CLIENT_EMAIL,
      private_key: GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, '\n')
    });
    // loads document properties and worksheets
    await doc.loadInfo();

    const sheet = doc.sheetsById[SHEET_ID];
    await sheet.addRow(row);
  } catch (e) {
    console.error('Error: ', e);
    throw new Error('An error occured while subscribing.');
  }
};

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasBeenAddedToTheWaitingList, setHasBeenAddedToTheWaitingList] =
    useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setIsSubmitting(true);

    appendSpreadsheet({ Email: email })
      .then(() => {
        setEmail('');
        setHasBeenAddedToTheWaitingList(true);
      })
      .catch((e: any) => {
        toast.error(e.message);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <Head>
        <title>MolGPS</title>
        <meta
          name="description"
          content="MolGPS - General, Powerful and Scalable"
        />
      </Head>

      <div className="relative mx-auto max-w-7xl overflow-x-hidden py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-12 bottom-0 left-3/4 hidden w-screen lg:block" />
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="px-6 text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:px-0 sm:text-left sm:text-4xl md:mt-48">
              The Largest pre-trained model for rich molecular featurization
            </h2>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative md:-mt-60 lg:col-start-2 lg:row-start-1">
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative  overflow-hidden rounded-full bg-brand-500 py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span className="text-gray-50">
                    <span className="mr-4">
                      First Place &middot; Winner of the 2022 OGB Challenge
                    </span>
                    <a href="#" className="font-semibold text-brand-50">
                      <span className="absolute inset-0" aria-hidden="true" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </span>
                </div>
              </div>
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <a href="#" target="_blank" rel="noreferrer">
                    <img
                      className="rounded-lg object-cover object-center shadow-lg"
                      src="/images/ogb-paper.png"
                      alt="Winner of the 2022 OGB Challenge"
                      width={1184}
                      height={1376}
                    />
                  </a>
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <p className="text-center text-lg text-gray-500 sm:text-left">
                Stop worrying about molecular featurization and focus on machine
                learning. Use the world&apos;s largest pre-trained molecular
                featurizer to produce SOTA results in molecular property
                prediction.
              </p>
            </div>
            <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
              {!hasBeenAddedToTheWaitingList && (
                <>
                  <h4 className="text-center text-base font-medium text-gray-900 sm:text-left">
                    Sign up to for early access.
                  </h4>
                  <form onSubmit={handleSubmit} className="mt-3 sm:flex">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full rounded-md border border-gray-300 px-5 py-3 text-base placeholder-gray-500 shadow-sm outline-none focus:border-brand-500 focus:ring-brand-500 sm:flex-1"
                      placeholder="Enter your email"
                    />
                    <button
                      type="submit"
                      className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center"
                    >
                      {isSubmitting && (
                        <svg
                          className="mr-3 -ml-1 h-5 w-5 animate-spin text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      )}
                      {isSubmitting ? 'Processing' : 'Get Early Access'}
                    </button>
                  </form>
                </>
              )}
              {hasBeenAddedToTheWaitingList && (
                <p className="flex items-center pt-3 font-semibold text-brand-500">
                  <CheckCircleIcon className="h-8 w-8" aria-hidden="true" />
                  <span className="ml-2">
                    Thanks, you&apos;ve been added to the waiting list 🎉
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <Toaster />
    </>
  );
}
