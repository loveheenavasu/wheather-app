'use client';

import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';

export default function Page() {
  const [location, setLocation] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );
  const handleRoute = () => {
    router.push('/dashboard' + '?' + createQueryString('loc', location));
  };
  return (
    <main className="flex min-h-screen flex-col ">
      <div
        className="h-screen"
        style={{
          background: "url('/background.png')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="-screen flex h-screen flex-col items-center justify-center p-4">
          <div className="flex w-1/2 flex-col items-center gap-2 text-lg	 font-medium	italic">
            <label>Enter Your Location</label>
            <input
              className="w-1/2 rounded-2xl"
              onChange={(e) => setLocation(e.target.value)}
              type="text"
            />{' '}
            <button
              onClick={handleRoute}
              className="w-fit rounded-md	bg-gray-900 p-2 text-white"
            >
              Click here
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
