import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>MolGPS</title>
        <meta
          name="description"
          content="MolGPS - General, Powerful and Scalable"
        />
      </Head>

      <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
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
                <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span className="text-gray-600">
                    <span className="mr-4">
                      Winner of the 2022 OGB Challenge.
                    </span>
                    <a href="#" className="font-semibold text-brand-600">
                      <span className="absolute inset-0" aria-hidden="true" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </span>
                </div>
              </div>
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg object-cover object-center shadow-lg"
                    src="/images/ogb-paper.png"
                    alt="Winner of the 2022 OGB Challenge"
                    width={1184}
                    height={1376}
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <p className="text-center text-lg text-gray-500 sm:text-left">
                Stop worrying about molecular featurization and focus on machine
                learning. Use the world's largest pre-trained molecular
                featurizer to produce SOTA results in molecular property
                prediction.
              </p>
            </div>
            <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
              <p className="text-center text-base font-medium text-gray-900 sm:text-left">
                Sign up to for early access.
              </p>
              <form action="#" method="POST" className="mt-3 sm:flex">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border border-gray-300 px-5 py-3 text-base placeholder-gray-500 shadow-sm outline-none focus:border-brand-500 focus:ring-brand-500 sm:flex-1"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="mt-3 w-full rounded-md border border-transparent bg-gray-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center"
                >
                  Get Early Access
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
