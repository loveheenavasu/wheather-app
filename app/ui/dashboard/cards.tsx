'use client';
import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
  MapPinIcon,
  CloudIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import TempIcon from '@/public/assets/tempIcon';
const iconMap = {
  location: MapPinIcon,
  condition: UserGroupIcon,
  temp: TempIcon,
  wind: CloudIcon,
};

export default async function CardWrapper() {
  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}

      {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      /> */}
    </>
  );
}

export function Card({
  title,
  value,
  type,
  condition,
}: {
  title: string;
  value: number | string;
  type: 'wind' | 'temp' | 'location' | 'condition';
  condition?: string;
}) {
  const Icon = iconMap[type];

  let backgroundImageUrl = '';

  switch (condition) {
    case 'Mist':
      backgroundImageUrl = '/fog4.webp';
      break;
    // case 'Sunny':
    //   backgroundImageUrl = '/sunny.gif';
    //   break;
    // Add more cases as needed

    default:
      // Default background image or handle unknown condition
      backgroundImageUrl = '';
  }
  return (
    <div
      style={{
        background: 'rgba(220, 242, 241, 0.4)',
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
      className="rounded-xl p-2  text-white shadow-sm"
    >
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-white" /> : null}
        <h3 className="ml-2 text-lg font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
           truncate  rounded-xl px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
