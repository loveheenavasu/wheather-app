import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { getWeatherReport } from '@/app/lib/data';

export default async function Page(props: any) {
  const report = await getWeatherReport(props.searchParams.loc);
  const lat = report.location.lat;
  const long = report.location.lon;
  const forcastData = report.forecast.forecastday[0].hour;
  const airQuality = report.current.air_quality;
  return (
    <main>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Location" value={report.location.name} type="location" />
        <Card
          title="Temperature"
          value={`${report.current.temp_c}°C`}
          type="temp"
        />
        <Card
          title="Wind"
          value={`${report.current.wind_kph}/kph`}
          type="wind"
        />
        <Card
          title="Condition"
          value={report.current.condition.text}
          type="condition"
          condition={report.current.condition.text}
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart airQuality={airQuality} lat={lat} lon={long} />
        <LatestInvoices latestInvoices={forcastData} />
      </div>
    </main>
  );
}
