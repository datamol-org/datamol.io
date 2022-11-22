import { useState } from 'react';
import { useTimeoutFn } from 'react-use';
import { Transition } from '@headlessui/react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import clsx from 'clsx';
import {
  BoltIcon,
  SparklesIcon,
  LightBulbIcon,
  CheckCircleIcon,
  CubeIcon,
  ScaleIcon
} from '@heroicons/react/24/outline';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import * as constants from '../support/constants';

SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('jsx', jsx);

const { codeBlocks } = constants;

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
  const [codeBlocksCopied, setCodeBlocksCopied] = useState(
    Array(codeBlocks.length).fill(false)
  );
  let [, , resetCodeBlocksCopied] = useTimeoutFn(
    () => setCodeBlocksCopied(Array(codeBlocks.length).fill(false)),
    1300
  );

  return (
    <>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
          <div>
            <div>
              <h1 className="text-center text-4xl font-bold tracking-tight text-gray-700 sm:text-6xl">
                The Cheminformatics Toolkit for ML Scientists
              </h1>
              <p className="mt-6 text-center text-lg leading-8 text-gray-800">
                Datamol is an elegant, RDKit-powered Python library optimized
                for molecular machine learning workflows
              </p>
              <div className="mt-12 flex justify-center gap-x-4">
                <a
                  href="https://doc.datamol.io"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center rounded-lg bg-white px-4 py-1.5 text-base font-semibold leading-7 text-gray-800 shadow-sm transition hover:bg-gray-100"
                >
                  Get started
                  <svg
                    className="mt-0.5 ml-2 -mr-1 stroke-gray-800 stroke-2"
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
              {codeBlocks.map((codeBlock, index) => (
                <div key={index} className={index === 0 ? 'mt-16' : 'mt-8'}>
                  <div className="relative">
                    <CopyToClipboard
                      text={codeBlock.copyContent}
                      onCopy={() => {
                        setCodeBlocksCopied([index === 0, index === 1]);
                        resetCodeBlocksCopied();
                      }}
                    >
                      <button className="group absolute top-0 right-0 ml-2 hidden h-9 w-9 items-center justify-center text-white sm:flex">
                        <Transition
                          show={codeBlocksCopied[index]}
                          enter="transition-opacity duration-500"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="transition-opacity duration-500"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <span className="absolute inset-x-0 bottom-full mb-2.5 flex origin-bottom translate-y-0 scale-100 transform justify-center opacity-100 transition duration-500 ease-out">
                            <span className="rounded-md bg-gray-900 py-1 px-3 text-[0.625rem] font-semibold uppercase leading-4 tracking-wide text-white drop-shadow-md filter">
                              <svg
                                aria-hidden="true"
                                width="16"
                                height="6"
                                viewBox="0 0 16 6"
                                className="absolute top-full left-1/2 -mt-px -ml-2 text-gray-900"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M15 0H1V1.00366V1.00366V1.00371H1.01672C2.72058 1.0147 4.24225 2.74704 5.42685 4.72928C6.42941 6.40691 9.57154 6.4069 10.5741 4.72926C11.7587 2.74703 13.2803 1.0147 14.9841 1.00371H15V0Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                              Copied!
                            </span>
                          </span>
                        </Transition>
                        <svg
                          className={clsx(
                            'h-8 w-8',
                            codeBlocksCopied[index] &&
                              'rotate-[-8deg] stroke-brand-500',
                            !codeBlocksCopied[index] &&
                              'stroke-slate-400 transition group-hover:rotate-[-4deg] group-hover:stroke-slate-300'
                          )}
                          fill="none"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            d="M12.9975 10.7499L11.7475 10.7499C10.6429 10.7499 9.74747 11.6453 9.74747 12.7499L9.74747 21.2499C9.74747 22.3544 10.6429 23.2499 11.7475 23.2499L20.2475 23.2499C21.352 23.2499 22.2475 22.3544 22.2475 21.2499L22.2475 12.7499C22.2475 11.6453 21.352 10.7499 20.2475 10.7499L18.9975 10.7499"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M17.9975 12.2499L13.9975 12.2499C13.4452 12.2499 12.9975 11.8022 12.9975 11.2499L12.9975 9.74988C12.9975 9.19759 13.4452 8.74988 13.9975 8.74988L17.9975 8.74988C18.5498 8.74988 18.9975 9.19759 18.9975 9.74988L18.9975 11.2499C18.9975 11.8022 18.5498 12.2499 17.9975 12.2499Z"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M13.7475 16.2499L18.2475 16.2499"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M13.7475 19.2499L18.2475 19.2499"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <g
                            className={clsx(
                              !codeBlocksCopied[index] && 'opacity-0'
                            )}
                          >
                            <path
                              d="M15.9975 5.99988L15.9975 3.99988"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M19.9975 5.99988L20.9975 4.99988"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M11.9975 5.99988L10.9975 4.99988"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </g>
                        </svg>
                      </button>
                    </CopyToClipboard>
                    <SyntaxHighlighter
                      language={codeBlock.language}
                      style={dracula}
                      customStyle={{
                        padding: '20px',
                        borderRadius: '0.25rem'
                      }}
                    >
                      {codeBlock.content}
                    </SyntaxHighlighter>
                  </div>
                </div>
              ))}
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
              Why You&apos;ll Love{' '}
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
              Datamol is built on top of powerful numerical and cheminformatics
              scientific libraries
            </p>
          </div>

          <div className="mt-20 max-w-lg sm:mx-auto md:max-w-2xl">
            <div className="grid grid-cols-2 items-center justify-center gap-8 md:grid-cols-6 lg:grid-cols-4">
              <div className="col-span-1 flex animate-dance-slow justify-center animation-delay-100 md:col-span-2 lg:col-span-1">
                <a
                  href="https://github.com/rdkit/rdkit"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    width="128"
                    height="128"
                    src="https://avatars.githubusercontent.com/u/2018047?s=400&v=4"
                    alt="RDKit"
                  />
                </a>
              </div>
              <div className="col-span-1 flex animate-dance-slow justify-center animation-delay-200 md:col-span-2 lg:col-span-1">
                <a
                  href="https://pandas.pydata.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    width="128"
                    height="128"
                    src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg"
                    alt="Pandas"
                  />
                </a>
              </div>
              <div className="col-span-1 flex animate-dance-slow justify-center animation-delay-500 md:col-span-2 lg:col-span-1">
                <a href="https://numpy.org/" target="_blank" rel="noreferrer">
                  <img
                    width="128"
                    height="128"
                    src="https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg"
                    alt="Numpy"
                  />
                </a>
              </div>
              <div className="col-span-1 flex animate-dance-slow justify-center animation-delay-700 md:col-span-3 lg:col-span-1">
                <a
                  href="https://matplotlib.org/stable/index.html"
                  target="_blank"
                  rel="noreferrer"
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
    </>
  );
}
