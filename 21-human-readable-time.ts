/**
 * Daily Challenge #21 - Human Readable Time
 * https://dev.to/thepracticaldev/daily-challenge-21-human-readable-time-31pf
 *
 * The function will accept an input of non-negative integers. If it is zero, it just returns "now".
 * Otherwise, the duration is expressed as a combination of years, days, hours, minutes, and seconds,
 * in that order.
 *
 * The resulting expression is made of components like 4 seconds, 1 year, etc. The unit of time is
 * used in plural if the integer is greater than 1. The components are separated by a comma and a
 * space (", "), except the last component which is separated by " and ", just like it would be
 * written in English. For the purposes of this challenge, a year is 365 days and a day is 24 hours.
 * Note that spaces are important.
 *
 * The challenge is much easier to understand through example:
 * format_duration(62) # returns "1 minute and 2 seconds"
 * format_duration(3662) # returns "1 hour, 1 minute and 2 seconds"
 */

/*
 * This solution is based on https://dev.to/graciano/comment/d9oc since I thought it was clever
 * I cleaned it up, added types, and fixed the "comma"/"and" issue
 */

type TimeFn = (time: number) => number;
type TimeSegment = "year" | "day" | "hour" | "minute" | "second";

interface LabelValue {
  label: string;
  value: string | number;
}

const TimeSegmentsFns: { [key in TimeSegment]: TimeFn } = {
  year: (time: number) => Math.floor(time / (365 * 24 * 60 * 60)),
  day: (time: number) => Math.floor((time / (24 * 60 * 60)) % 365),
  hour: (time: number) => Math.floor((time / (60 * 60)) % 24),
  minute: (time: number) => Math.floor((time / 60) % 60),
  second: (time: number) => Math.floor(time % 60)
};

function readableTimeSegment({ label, value }: LabelValue): string {
  return value > 1 ? `${value} ${label}s` : `${value} ${label}`;
}

function formatDuration(time: number): string {
  const segments = Object.entries(TimeSegmentsFns)
    .map(([label, timeFn]): LabelValue => ({ label, value: timeFn(time) }))
    .filter(({ value }) => value >= 1)
    .map(readableTimeSegment);

  return segments.length > 1
    ? `${segments.slice(0, -1).join(", ")} and ${segments.slice(-1)}`
    : segments.toString();
}

console.log(formatDuration(24 * 60 * 60 * 12.52));
