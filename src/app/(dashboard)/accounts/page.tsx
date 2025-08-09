import { AccountsInteractive } from '@/components/AccountsInteractive';

export async function generateMetadata() {
  return { title: 'Accounts - Check all your accounts' };
}

const accountsData = [
  {
    id: '1',
    name: 'Wallet',
    balance: 90.24,
    currency: 'zł',
    currencyLong: 'PLN-zł',
    lastUsed: '23.07.2025',
    isDefault: true,
    lastTransaction: {
      price: 12,
      currency: 'zł',
      title: 'Food',
      payee: 'Biedronka',
    },
    incomeInAccount: 120,
    creationDate: '04.07.2025',
  },
  {
    id: '2',
    name: 'Revolut',
    balance: 0.73,
    currency: 'zł',
    currencyLong: 'PLN-zł',
    lastUsed: '23.07.2025',
    isDefault: false,
    lastTransaction: {
      price: 0.04,
      currency: 'zł',
      title: 'Food',
      payee: 'Biedronka',
    },
    incomeInAccount: 10,
    creationDate: '04.07.2025',
  },
  {
    id: '3',
    name: 'Revolut - joint',
    balance: 1023,
    currency: 'zł',
    currencyLong: 'PLN-zł',
    lastUsed: '28.07.2025',
    isDefault: false,
    lastTransaction: {
      price: 98.0,
      currency: 'zł',
      title: 'Food',
      payee: 'Lidl',
    },
    incomeInAccount: 1200,
    creationDate: '04.07.2025',
  },
  {
    id: '4',
    name: 'Pekao',
    balance: 5000,
    currency: 'zł',
    currencyLong: 'PLN-zł',
    lastUsed: '23.07.2025',
    isDefault: false,
    lastTransaction: {
      price: 600,
      currency: 'zł',
      title: 'Transfer',
      payee: 'Joint - account',
    },
    incomeInAccount: 5600,
    creationDate: '04.07.2025',
  },
  {
    id: '5',
    name: 'ING',
    balance: 100,
    currency: 'zł',
    currencyLong: 'PLN-zł',
    lastUsed: '23.07.2025',
    isDefault: false,
    lastTransaction: {
      price: 10.2,
      currency: 'zł',
      title: 'Food',
      payee: 'Biedronka',
    },
    incomeInAccount: 1020,
    creationDate: '04.07.2025',
  },
];

export default function Accounts() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Accounts</h1>
      <AccountsInteractive accountsData={accountsData} />
    </>
  );
}
