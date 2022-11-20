import Head from 'next/head';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import {
  BoltIcon,
  SparklesIcon,
  LightBulbIcon,
  CheckCircleIcon,
  CubeIcon,
  ScaleIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'The Story', href: '#' },
  { name: 'DatamolKit', href: '#' },
  { name: 'Docs', href: '#' },
  { name: 'Datamol Fingerprints', href: '#' }
];

const footerNavigation = {
  main: [
    { name: 'The Story', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Datamol Fingerprints', href: '#' }
  ],
  social: [
    {
      name: 'Follow us on Twitter',
      href: 'https://twitter.com/datamol_io',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      )
    },
    {
      name: 'Discuss on GitHub',
      href: 'https://github.com/datamol-org/datamol/discussions',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path>
          <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path>
        </svg>
      )
    },
    {
      name: 'View Source Code',
      href: 'https://github.com/datamol-org/datamol',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      )
    }
  ]
};

const features = [
  {
    name: 'Highly intuitive',
    icon: LightBulbIcon
  },
  {
    name: 'Dead simple',
    icon: CheckCircleIcon
  },
  {
    name: 'Light as a feather',
    icon: ScaleIcon
  },
  {
    name: 'Feature rich',
    icon: SparklesIcon
  },
  {
    name: 'Extensible',
    icon: CubeIcon
  },
  {
    name: 'Blazing fast',
    icon: BoltIcon
  }
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Datamol - Molecular Manipulation Made Easy</title>
        <meta
          name="description"
          content="Datamol - Molecular Manipulation Made Easy"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon-16x16.png"
        />
        <link rel="manifest" href="site.webmanifest" />
        <link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <div className="isolate bg-white">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#f2994a" />
                <stop offset={1} stopColor="#f6b880" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="px-6 pt-6 lg:px-8">
          <div>
            <nav
              className="flex h-9 items-center justify-between"
              aria-label="Global"
            >
              <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Datamol</span>
                  <img
                    className="h-8"
                    src="https://tailwindui.com/img/logos/mark.svg?color=brand&shade=600"
                    alt=""
                  />
                </a>
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="hidden lg:flex lg:min-w-max lg:flex-1 lg:justify-center lg:gap-x-12">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="font-semibold text-gray-700 transition duration-200 ease-in-out hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                {footerNavigation.social.map((item) => (
                  <a
                    href={item.href}
                    className="inline-block px-3 py-1.5 text-sm font-semibold leading-6 text-gray-700 transition duration-200 ease-in-out hover:text-gray-900"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </nav>
            <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
              <Dialog.Panel
                focus="true"
                className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
              >
                <div className="flex h-9 items-center justify-between">
                  <div className="flex">
                    <a href="#" className="-m-1.5 p-1.5">
                      <span className="sr-only">Your Company</span>
                      <img
                        className="h-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=brand&shade=600"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="flex">
                    <button
                      type="button"
                      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6 text-center">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className="py-6 text-center">
                      {footerNavigation.social.map((item) => (
                        <a
                          href={item.href}
                          target="_blank"
                          className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Dialog>
          </div>
        </div>
        <main>
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
              <div>
                {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                  <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    <span className="text-gray-600">
                      Winner of the 2022 OGB Challenge for Molecular Property
                      Prediction.{' '}
                      <a href="#" className="font-semibold text-brand-600">
                        <span className="absolute inset-0" aria-hidden="true" />
                        Read more <span aria-hidden="true">&rarr;</span>
                      </a>
                    </span>
                  </div>
                </div> */}
                <div>
                  <h1 className="text-center text-4xl font-bold tracking-tight sm:text-6xl">
                    The Cheminformatics toolkit for ML Scientists
                  </h1>
                  <p className="mt-6 text-center text-lg leading-8 text-gray-600">
                    Datamol is an elegant, rdkit-powered python library
                    optimized for machine learning molecular workflow
                  </p>
                  <div className="mt-8 flex justify-center gap-x-4">
                    <a
                      href="https://doc.datamol.io"
                      target="_blank"
                      className="group inline-flex items-center justify-center rounded-lg bg-brand-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-1 ring-brand-600 transition hover:bg-brand-700 hover:ring-brand-700"
                    >
                      Get started
                      <svg
                        className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
                        fill="none"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        aria-hidden="true"
                      >
                        <path
                          className="opacity-0 transition group-hover:opacity-100"
                          d="M0 5h7"
                        ></path>
                        <path
                          className="transition group-hover:translate-x-[3px]"
                          d="M1 1l4 4-4 4"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                  <svg
                    className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                    viewBox="0 0 1155 678"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                      fillOpacity=".3"
                      d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                    />
                    <defs>
                      <linearGradient
                        id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                        x1="1155.49"
                        x2="-78.208"
                        y1=".177"
                        y2="474.645"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#f2994a" />
                        <stop offset={1} stopColor="#f6b880" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white py-24 sm:py-32 lg:py-40">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 lg:px-8">
              <div className="text-center">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Why You'll Love{' '}
                  <span className="text-brand-500">Datamol</span>
                </p>
              </div>

              <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
                <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-48 md:gap-y-10">
                  {features.map((feature) => (
                    <div
                      key={feature.name}
                      className="relative flex flex-col items-center justify-center gap-6 sm:flex-row md:flex-col lg:flex-row"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl text-brand-500 sm:shrink-0">
                        <feature.icon className="h-8 w-8" aria-hidden="true" />
                      </div>
                      <div className="sm:min-w-0 sm:flex-1">
                        <p className="text-lg font-semibold leading-8 text-gray-900">
                          {feature.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white py-8">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="text-center">
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Standing on the Shoulders of Giants
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                  Datamol is built on top of powerful numerical and
                  cheminformatics scientific libraries
                </p>
              </div>

              <div className="mt-20 max-w-lg sm:mx-auto md:max-w-2xl">
                <div className="grid grid-cols-2 items-center justify-center gap-8 md:grid-cols-6 lg:grid-cols-4">
                  <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <a href="https://github.com/rdkit/rdkit" target="_blank">
                      <img
                        width="128"
                        height="128"
                        src="https://avatars.githubusercontent.com/u/2018047?s=400&v=4"
                        alt="RDKit"
                      />
                    </a>
                  </div>
                  <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <a href="https://pandas.pydata.org/" target="_blank">
                      <img
                        width="128"
                        height="128"
                        src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg"
                        alt="Pandas"
                      />
                    </a>
                  </div>
                  <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <a href="https://numpy.org/" target="_blank">
                      <img
                        width="128"
                        height="128"
                        src="https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg"
                        alt="Numpy"
                      />
                    </a>
                  </div>
                  <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                    <a
                      href="https://matplotlib.org/stable/index.html"
                      target="_blank"
                    >
                      <img
                        width="128"
                        height="128"
                        src="https://matplotlib.org/stable/_static/logo2_compressed.svg"
                        alt="Matplotlib"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="mt-20 bg-white sm:mt-24">
          <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
            <nav
              className="-mx-5 -my-2 flex flex-wrap justify-center"
              aria-label="Footer"
            >
              {footerNavigation.main.map((item) => (
                <div key={item.name} className="px-5 py-2">
                  <a
                    href={item.href}
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </nav>
            <div className="mt-8 flex justify-center space-x-6">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 transition duration-200 ease-in-out hover:text-gray-500"
                  target="_blank"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-center text-base text-gray-400">
              &copy; 2021 Datamol &middot; Powered by{' '}
              <a
                href="https://valencediscovery.com"
                target="_blank"
                className="border-b border-dotted border-gray-200 transition duration-200 ease-in-out hover:border-gray-300"
              >
                Valence Discovery
              </a>
              .
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
