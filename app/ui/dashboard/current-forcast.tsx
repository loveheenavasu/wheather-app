import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { LatestInvoice } from '@/app/lib/definitions';
import Forcast from './forcast';
export default async function LatestInvoices({
  latestInvoices,
}: {
  latestInvoices: LatestInvoice[];
}) {
  const getDate = (date: string) => {
    const dateTime = new Date(date);
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    const seconds = dateTime.getSeconds();

    // Format the time as HH:MM:SS
    const formattedTime = `${hours}:${minutes}`;

    return formattedTime;
  };
  return (
    <div className="flex w-full flex-col md:col-span-3">
      <h2
        className={`${lusitana.className} mb-4 text-xl text-white md:text-2xl`}
      >
        Forecast
      </h2>
      <div
        style={{
          background: 'rgba(170, 170, 170, .3)',
          backdropFilter: 'blur(30px)',
          height: '12.5%',
        }}
        className="flex  flex-col	 justify-between	  gap-4 overflow-auto rounded-xl bg-gray-50 p-4"
      >
        {/* NOTE: comment in this code when you get to this point in the course */}
        {latestInvoices.map((item) => {
          let hours = getDate(item.time);

          return (
            <Forcast
              hours={hours}
              temp={item.temp_c}
              wind={item.wind_kph}
              condition={item.condition.text}
            />
          );
        })}
        {/* <Forcast /> */}
      </div>
    </div>
  );
}
