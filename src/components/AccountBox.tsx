'use client';
import type { IAccounts } from '@/app/types/Accounts';

interface AccountBoxProps {
  item: IAccounts;
  onSelect?: (account: IAccounts) => void;
  isSelected?: boolean;
}
export const AccountBox = ({
  item,
  onSelect,
  isSelected = false,
}: AccountBoxProps) => {
  return (
    <>
      <div
        className={`rounded-lg p-4 shadow-xs sm:w-[45%] w-[100%] flex justify-between items-center cursor-pointer transition-all ${
          isSelected
            ? 'shadow-indigo-300 border-2 border-indigo-300 bg-indigo-50'
            : 'shadow-indigo-100 border-2 border-transparent hover:shadow-indigo-200'
        }`}
        onClick={() => {
          onSelect?.(item);
        }}
      >
        <h2 className="text-xl font-bold">{item.name}</h2>
        <div className="">
          <div className="text-xs text-gray-400 mr-1.5">
            <span>
              {item.balance}
              {item.currency}
            </span>
            <br />
            <span>{item.currencyLong}</span>
          </div>
        </div>
      </div>
    </>
  );
};
