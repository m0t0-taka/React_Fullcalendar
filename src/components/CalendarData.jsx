import React, { useCallback, useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const CalendarData = (props) => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      locale="ja" // 日本語化
      events={[
        { title: "event 1", start: "2021-11-01" },
        // endに指定した日付は含まないので注意
        { title: "event 2", start: "2021-11-03", end: "2021-11-05" },
        {
          title: "event 3",
          start: "2021-11-07T10:00:00", // 時間を指定するときはISO 8601の形式で。
        },
      ]}
    />
  );
};
export default CalendarData;