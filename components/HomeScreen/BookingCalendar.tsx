import { useCallback, useMemo, useState } from "react";
import { StyleSheet } from "react-native";
import { CalendarList, DateData } from "react-native-calendars";

const BookingCalendar = () => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [dateBetween, setDatesBetween] = useState<string[]>([]);

  const marked = useMemo(() => {
    return {
      [startDate]: {
        selected: startDate !== "",
        disableTouchEvent: true,
        selectedColor: "#5E60CE",
        selectedTextColor: "white",
      },
      [endDate]: {
        selected: endDate !== "",
        disableTouchEvent: true,
        selectedColor: "#5E60CE",
        selectedTextColor: "white",
      },
      
    };
  }, [startDate, endDate]);

  const onDayPress = useCallback(
    (day: DateData) => {
      console.log(day);
      if (startDate === "") {
        setStartDate(day.dateString);
      } else {
        setEndDate(day.dateString);
      }

      setDatesBetween(getDatesArray(startDate, endDate));
    },
    [startDate, endDate]
  );

  const getDatesArray = (startDateStr: string, endDateStr: string) => {
    const datesArray = [];
    const currentDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
    while (currentDate <= endDate) {
      datesArray.push(currentDate.toISOString().slice(0, 10));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return datesArray;
  };
  return (
    <CalendarList
      current={new Date().toString()}
      pastScrollRange={2}
      futureScrollRange={2}
      onDayPress={onDayPress}
      markedDates={marked}
      minDate={new Date().toString()}
      calendarWidth={390}
    />
  );
};

const styles = StyleSheet.create({});

export default BookingCalendar;
