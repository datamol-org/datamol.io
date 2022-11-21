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

SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('jsx', jsx);

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
  return (
    <>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
          <div>
            <div>
              <h1 className="text-center text-4xl font-bold tracking-tight sm:text-6xl">
                The Cheminformatics toolkit for ML Scientists
              </h1>
              <p className="mt-6 text-center text-lg leading-8 text-gray-600">
                Datamol is an elegant, rdkit-powered python library optimized
                for machine learning molecular workflow
              </p>
              <div className="mt-12 flex justify-center gap-x-4">
                <a
                  href="https://doc.datamol.io"
                  target="_blank"
                  rel="noreferrer"
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
              <div className="mt-16">
                <SyntaxHighlighter
                  language="bash"
                  style={dracula}
                  customStyle={{
                    padding: '20px',
                    borderRadius: '0.25rem'
                  }}
                >
                  {`# All you need is:
$ mamba install -c conda-forge datamol`}
                </SyntaxHighlighter>
              </div>
              <div className="mt-8">
                <SyntaxHighlighter
                  language="python"
                  style={dracula}
                  customStyle={{
                    padding: '20px',
                    borderRadius: '0.25rem'
                  }}
                >
                  {`import datamol as dm

# Common functions
mol = dm.to_mol("O=C(C)Oc1ccccc1C(=O)O", sanitize=True)
fp = dm.to_fp(mol)
selfies = dm.to_selfies(mol)
inchi = dm.to_inchi(mol)

# Standardize and sanitize
mol = dm.to_mol("O=C(C)Oc1ccccc1C(=O)O")
mol = dm.fix_mol(mol)
mol = dm.sanitize_mol(mol)
mol = dm.standardized_mol(mol)

# Dataframe manipulation
df = dm.data.freesolv()
mols = dm.from_df(df)

# 2D viz
legends = [dm.to_smiles(mol) for mol in mols[:10]]
dm.viz.to_image(mols[:10], legends=legends)

# Generate conformers
smiles = "O=C(C)Oc1ccccc1C(=O)O"
mol = dm.to_mol(smiles)
mol_with_conformers = dm.conformers.generate(mol)

# 3D viz (using nglview)
dm.viz.conformers(mol, n_confs=10)

# Compute SASA from conformers
sasa = dm.conformers.sasa(mol_with_conformers)

# Easy IO
mols = dm.read_sdf("s3://my-awesome-data-lake/smiles.sdf", as_df=False)
dm.to_sdf(mols, "gs://data-bucket/smiles.sdf")`}
                </SyntaxHighlighter>
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
