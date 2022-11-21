import Link from 'next/link';
import * as constants from '../support/constants';

export default function Footer() {
  const { navigation } = constants;

  return (
    <footer className="bg-white pt-20 sm:pt-24">
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.main.slice(1).map((item) => (
            <div key={item.name} className="px-5 py-2">
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 transition duration-200 ease-in-out hover:text-gray-500"
              target="_blank"
              rel="noreferrer"
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
            rel="noreferrer"
            className="border-b border-dotted border-gray-200 transition duration-200 ease-in-out hover:border-gray-300"
          >
            Valence Discovery
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
