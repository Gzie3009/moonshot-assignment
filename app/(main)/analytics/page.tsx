"use client";
import React, { useEffect, useState } from "react";
import BarChartComponent from "./components/BarChartComponent";
import LineChartComponent from "./components/LineChartComponent";
import { Filter } from "lucide-react";
import Select from "react-select";
import DatePicker, { DateObject } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import { useParams, useRouter } from "next/navigation";
import { StringParam, useQueryParam, withDefault } from "use-query-params";

type Props = {};
interface Option {
  value: string;
  label: string;
}
export default function AnalyticsPage({}: Props) {
  const [ageParam, setAgeParam] = useQueryParam(
    "age",
    withDefault(StringParam, "")
  );
  const [genderParam, setGenderParam] = useQueryParam(
    "gender",
    withDefault(StringParam, "")
  );
  const [startDateParam, setStartDateParam] = useQueryParam(
    "start",
    withDefault(StringParam, "")
  );
  const [endDateParam, setEndDateParam] = useQueryParam(
    "end",
    withDefault(StringParam, "")
  );
  const ageOptions: Option[] = [
    { value: "15-25", label: "15-25" },
    { value: ">25", label: ">25" },
  ];
  const genderOptions: Option[] = [
    { value: "male", label: "male" },
    { value: "female", label: "female" },
  ];
  const [selectedOption, setSelectedOption] = useState();
  const handleAgeChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
    setAgeParam(selectedOption.value);
  };
  const handleGenderChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
    setAgeParam(selectedOption.value);
  };
  const [dateValues, setDateValues] = useState([
    new DateObject(),
    new DateObject(),
  ]);
  // useEffect(() => {
  //   let startExits = false;
  //   if (dateValues[0].day && dateValues[0].month.number && dateValues[0].year) {
  //     const start = `${dateValues[0].day}/${dateValues[0].month.number}/${dateValues[0].year}`;
  //     setStartDateParam(start);
  //     startExits = true;
  //   }
  //   if (
  //     startExits &&
  //     dateValues[1].day &&
  //     dateValues[1].month.number &&
  //     dateValues[1].year
  //   ) {
  //     const end = `${dateValues[1].day}/${dateValues[1].month.number}/${dateValues[1].year}`;
  //     setEndDateParam(end);
  //   }
  // }, [dateValues]);
  console.log(dateValues);
  return (
    <div className="px-5">
      <h1 className="px-5 text-2xl py-5 lg:py-10 font-bold border-b">
        User Analytics : {startDateParam}
        {endDateParam}
      </h1>
      <div className="flex flex-col md:flex-row gap-x-5 items-center">
        <div className="py-5">
          <p className="text-xl font-semibold flex gap-x-2">
            <Filter /> Filters :
          </p>
        </div>
        <div className="flex gap-x-5 items-center flex-col md:flex-row gap-y-5">
          <Select
            defaultInputValue={ageParam}
            name="age"
            options={ageOptions}
            value={selectedOption}
            onChange={handleAgeChange}
            className="basic-multi-select w-[30vh]"
            classNamePrefix="select"
            placeholder="Select Age Group"
          />

          <Select
            defaultInputValue={genderParam}
            name="age"
            options={genderOptions}
            value={selectedOption}
            onChange={handleGenderChange}
            className="basic-multi-select w-[30vh]"
            classNamePrefix="select"
            placeholder="Select Gender"
          />

          <DatePicker
            placeholder="Select Date"
            style={{ height: "2rem" }}
            range
            rangeHover
            value={dateValues}
            //@ts-expect-error
            onChange={setDateValues}
            plugins={[<DatePanel />]}
          />
        </div>
      </div>
      <div className="border rounded-lg p-5 flex flex-col lg:flex-row flex-wrap">
        <div className="flex-1">
          <BarChartComponent />
        </div>
        <div className="flex-1">
          <LineChartComponent />
        </div>
      </div>
    </div>
  );
}
