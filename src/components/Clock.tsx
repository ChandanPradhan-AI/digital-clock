"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";

const Clock = () => {
	const [hours, setHours] = useState(parseInt("00"));
	const [minutes, setMinutes] = useState(parseInt("00"));
	const [seconds, setSeconds] = useState(parseInt("00"));
	const [meridiem, setMeridiem] = useState("XX");
	const [date, setDate] = useState(format(new Date(), "eeee, dd LLLL yyyy"));
	// const [timeFormat, setTimeFormat] = useState<boolean>(true);

	useEffect(() => {
		const interval = setInterval(() => {
			// setHours(parseInt(format(new Date(), timeFormat ? "HH" : "hh")));
			setHours(parseInt(format(new Date(), "hh")));
			setMinutes(parseInt(format(new Date(), "mm")));
			setSeconds(parseInt(format(new Date(), "ss")));
			setMeridiem(format(new Date(), "a"));
			setDate(format(new Date(), "eeee, dd LLLL yyyy"));
		}, 1000);

		return () => clearInterval(interval);
	}, []);
	return (
		<>
			<div className="space-y-4">
				<div className="flex justify-center gap-1 font-mono text-9xl">
					<div className="">{hours}</div>{" "}
					<span className="animate-pulse">:</span>
					<div className="">{minutes}</div>
					<span className="animate-pulse">:</span>
					<div className="">{seconds}</div>
					<span className="animate-pulse">:</span>
					<div className="">{meridiem}</div>
				</div>
				<div className="text-center text-6xl">{date}</div>
			</div>
		</>
	);
};

export default Clock;
