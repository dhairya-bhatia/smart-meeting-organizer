export const checkIfMeetingsClash = (
  startTime,
  endTime,
  currentStartMeetingTime, // start time of current meeting
  currentEndMeetingTime // end time of current meeting
) => {
  // Both Meeting time passes midnight
  if (startTime > endTime && currentStartMeetingTime > currentEndMeetingTime) {
    return (
      // current meeting's start time lies b/w scheduled meeting
      currentStartMeetingTime >= startTime ||
      currentStartMeetingTime < endTime ||
      // current meeting's end time lies b/w scheduled meeting
      currentEndMeetingTime > startTime ||
      currentEndMeetingTime <= endTime ||
      // scheduled meeting lies b/w current meeting
      (currentStartMeetingTime < startTime && endTime < currentEndMeetingTime)
    );
  }
  // Scheduled meeting time passes midnight
  else if (startTime > endTime) {
    return (
      // current meeting's start time lies b/w scheduled meeting
      currentStartMeetingTime >= startTime ||
      currentStartMeetingTime < endTime ||
      // current meeting's end time lies b/w scheduled meeting
      currentEndMeetingTime > startTime ||
      currentEndMeetingTime <= endTime
    );
  }
  // Current meeting time passes midnight
  else if (currentStartMeetingTime > currentEndMeetingTime) {
    return (
      // current meeting's start time lies b/w scheduled meeting
      startTime >= currentStartMeetingTime ||
      startTime < currentEndMeetingTime ||
      // current meeting's end time lies b/w scheduled meeting
      endTime > currentStartMeetingTime ||
      endTime <= currentEndMeetingTime
    );
  } else {
    return (
      // current meeting's start time lies b/w scheduled meeting
      (currentStartMeetingTime > startTime &&
        currentStartMeetingTime <= endTime) ||
      // current meeting's end time lies b/w scheduled meeting
      (currentEndMeetingTime > startTime && currentEndMeetingTime <= endTime) ||
      // scheduled meeting lies b/w current meeting
      (currentStartMeetingTime <= startTime && endTime <= currentEndMeetingTime)
    );
  }
};
