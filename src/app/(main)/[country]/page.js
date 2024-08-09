import React from "react";
import LineChart from "@/components/SingleCountry/LineChart";

export default async function page({ params }) {
  const { country } = params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/alpha/${country}`
  );
  const countryData = await response.json();

  return (
    <>
      <div className="text-white grid grid-cols-5 gap-20 mt-10">
        <div className="col-span-2">
          <h2 className="text-3xl"></h2>
        </div>
        <div className="col-span-3">
          <LineChart />
        </div>
      </div>
    </>
  );
}
