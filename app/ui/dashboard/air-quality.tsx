// 'use client';

import { lusitana } from '@/app/ui/fonts';
import { AirQuality } from '@/app/lib/definitions';

import Mapbox from './mapbox';

export default async function RevenueChart({
  airQuality,
  lat,
  lon,
}: {
  airQuality: AirQuality[];
  lat: number;
  lon: number;
}) {
  // console.log(airQuality, 'quality');
  const chartHeight = 350;
  // NOTE: comment in this code when you get to this point in the course

  return (
    <div id="forcast" className="w-full md:col-span-5">
      <h2
        className={`${lusitana.className} mb-4 text-xl text-white md:text-2xl`}
      >
        Air Quality
      </h2>
      {/* NOTE: comment in this code when you get to this point in the course */}

      <div
        style={{
          background: 'rgba(170, 170, 170, .3)',
          backdropFilter: 'blur(30px)',
        }}
        className="rounded-xl bg-gray-50 "
      >
        <div className="mt-0 grid grid-cols-12 items-end gap-2 rounded-xl p-4 sm:grid-cols-13 md:gap-4">
          <Mapbox airQuality={airQuality} lat={lat} lon={lon} />
        </div>
      </div>
    </div>
  );
}
