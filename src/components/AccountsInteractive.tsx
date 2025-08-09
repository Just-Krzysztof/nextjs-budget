'use client';

import { useState, useRef } from 'react';
import { AccountBox } from './AccountBox';
import { CiMenuKebab } from 'react-icons/ci';
import { useOutsideClick } from '@/utils/useOutsideClick';
import type { IAccounts } from '@/app/types/Accounts';

interface AccountsInteractiveProps {
  accountsData: IAccounts[];
}

export const AccountsInteractive = ({
  accountsData,
}: AccountsInteractiveProps) => {
  const [selectedAccount, setSelectedAccount] = useState<IAccounts | null>(
    null,
  );
  const [dropdownActive, setDropdownActive] = useState<boolean>(false);

  const detailsRef = useOutsideClick(() => {
    setSelectedAccount(null);
  });

  const dropdownRef = useOutsideClick(() => {
    setDropdownActive(false);
  });

  const handleAccountSelect = (account: IAccounts) => {
    selectedAccount?.id === account.id
      ? setSelectedAccount(null)
      : setSelectedAccount(account);
  };

  const handleDefaultAccount = (account: IAccounts) => {
    const checkAllAccounts = accountsData.find(x => x.isDefault === true);
    console.log(checkAllAccounts);
    if (checkAllAccounts?.id !== account.id) {
      account.isDefault = true;
      if (checkAllAccounts) {
        checkAllAccounts.isDefault = false;
      }
    } else return;

    console.log('checkAllAccounts', checkAllAccounts);
    console.log('account', account);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row mt-4 gap-4">
      <div className="lg:w-[70%]">
        <div className="flex flex-wrap gap-2">
          {accountsData.map(item => (
            <AccountBox
              key={item.id}
              item={item}
              onSelect={handleAccountSelect}
              isSelected={selectedAccount?.id === item.id}
            />
          ))}
        </div>
      </div>
      <div className="lg:w-[50%]">
        {selectedAccount && (
          <div
            className="rounded-lg p-4 shadow-xs shadow-indigo-100 w-[100%]"
            ref={detailsRef}
          >
            <h3 className="text-xl font-bold text-center">
              {selectedAccount.name} details
            </h3>
            <p className="flex justify-between">
              <span className="text-lg">Balance</span>
              <span className="text-gray-400">
                {selectedAccount.balance} {selectedAccount.currency}
              </span>
            </p>
            <p className="flex justify-between">
              <span className="text-lg">Last used</span>
              <span className="text-gray-400">{selectedAccount.lastUsed}</span>
            </p>
            <p className="flex justify-between">
              <span className="text-lg">Last transaction</span>
              <span className="text-gray-400">
                {selectedAccount.lastTransaction.title}
              </span>
            </p>
            <p className="flex justify-between">
              <span className="text-lg">Initial amount in this month</span>
              <span className="text-gray-400">
                {selectedAccount.incomeInAccount}
                {selectedAccount.currency}
              </span>
            </p>
            <p className="flex justify-between">
              <span className="text-lg">Creation date</span>
              <span className="text-gray-400">
                {selectedAccount.creationDate}
              </span>
            </p>
            <div className="flex justify-center">
              <div
                className="relative w-10 text-center cursor-pointer group"
                onClick={() => setDropdownActive(!dropdownActive)}
                ref={dropdownRef}
              >
                <span className="inline-flex divide-x divide-gray-300 overflow-hidden duration-450 group-hover:scale-150 transform transition-transform">
                  <CiMenuKebab className="rotate-90" />
                </span>

                {dropdownActive && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setDropdownActive(false)}
                    />
                    <div
                      role="menu"
                      className="absolute end-0 top-5 z-20 w-56 divide-y divide-gray-200 overflow-hidden rounded border border-gray-300 bg-white shadow-sm text-left"
                    >
                      <div>
                        <p className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900">
                          Transakcje
                          {/* (otwiera modal transakcji) */}
                        </p>
                        <p className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900">
                          Zasil konto
                          {/* (Modal transakcji na stronie income) */}
                        </p>
                        <p className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900">
                          Transfer
                          {/* modal, z wyborem na jakie accoutn z tego account */}
                        </p>
                        <p
                          className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                          onClick={() => handleDefaultAccount(selectedAccount)}
                        >
                          Default account
                          {/* modal, z wyborem na jakie accoutn z tego account */}
                        </p>
                      </div>

                      <div>
                        <button
                          type="button"
                          className="block w-full px-3 py-2 text-left text-sm font-medium text-red-700 transition-colors hover:bg-red-50"
                          onClick={() => setDropdownActive(false)}
                        >
                          Remove account
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
