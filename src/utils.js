export const checkIfMeetingsClash = (
  startTime,
  endTime,
  currentStartMeetingTime, // start time of current meeting
  currentEndMeetingTime // end time of current meeting
) => {
  return (
    // current meeting's start time lies b/w scheduled meeting
    (currentStartMeetingTime > startTime &&
      currentStartMeetingTime < endTime) ||
    // current meeting's end time lies b/w scheduled meeting
    (currentEndMeetingTime > startTime && currentEndMeetingTime < endTime) ||
    // scheduled meeting lies b/w current meeting
    (currentStartMeetingTime < startTime && endTime < currentEndMeetingTime)
  );
};
