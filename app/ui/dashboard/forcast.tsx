import React from 'react';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import WindIcon from '@/public/assets/windIcon';
import TempIcon from '@/public/assets/tempIcon';
import { fetchCondition } from '@/app/lib/data';
const Forcast = async ({
  hours,
  temp,
  wind,
  condition,
}: {
  hours: string;
  temp: string;
  wind: string;
  condition: string;
}) => {
  const conditionData = await fetchCondition();

  let CurrentCondition = conditionData.find(
    (item) => item.condition === condition,
  );
  let time = parseInt(hours) < 12 ? 'am' : 'pm';

  return (
    <div
      style={{
        background: 'rgba(220, 242, 241, 0.4)',
      }}
      className={`${lusitana.className} rounded-xl p-2 text-center	 text-white shadow-sm`}
    >
      <p>
        Time - {hours} {time}
      </p>
      <div className="relative flex flex-col justify-between gap-5 p-2 ">
        <div className="flex  justify-between">
          <TempIcon />
          <p>{temp}°C</p>
        </div>
        <div
          style={{ transform: 'translate(-50%, -50%)' }}
          className=" absolute left-2/4 top-2/4 flex  flex-col  items-center "
        >
          <Image
            src={
              parseInt(hours) > 18
                ? '/night.png'
                : CurrentCondition?.image || ''
            }
            width={50}
            height={50}
            alt="condition"
          />
          <p>{CurrentCondition?.condition}</p>
        </div>
        <div className="flex justify-between">
          <Image src="/winds.png" width={20} height={15} alt="wind" />
          <p>{wind}/kph</p>
        </div>
      </div>
    </div>
  );
};

export default Forcast;
