import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimeField } from "@mui/x-date-pickers/DateTimeField";
import dayjs, { Dayjs } from "dayjs";
import { Dispatch, SetStateAction } from "react";
import { TO_HEX_COLORS } from "../../../../../lib/constants/themeHardcoded";

interface IDatePickerProps {
  activeColor: string;
  startDate: Dayjs | null;
  setStartDate: Dispatch<SetStateAction<Dayjs | null>>;
  endDate: Dayjs | null;
  setEndDate: Dispatch<SetStateAction<Dayjs | null>>;
  errorDate: boolean;
  setErrorDate: Dispatch<SetStateAction<boolean>>;
}

export default function DatePicker({
  activeColor,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  errorDate,
  setErrorDate,
}: IDatePickerProps) {
  const themeSx = {
    input: {
      color: TO_HEX_COLORS.gray,
      fontWeight: "bold",
      textAlign: "center",
      fontSize: "large",
      letterSpacing: "0.05rem",
      backgroundColor: "rgba(255,255,255,0.4)",
    },
    "& .MuiInputBase-root.Mui-focused .MuiInputBase-input": {
      color: TO_HEX_COLORS.gray,
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: TO_HEX_COLORS[activeColor as keyof typeof TO_HEX_COLORS],
      },
    },
    "& .MuiFormLabel-root": {
      color: TO_HEX_COLORS[activeColor as keyof typeof TO_HEX_COLORS],
    },
  };

  function hasError(date1: Dayjs, date2: Dayjs) {
    return date1 > date2;
  }

  const format = "DD.MM.YYYY   HH:mm";

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="flex pb-6 justify-between">
        <div className="w-full pr-6">
          <DateTimeField
            label="START"
            name="startDate"
            value={dayjs(startDate)}
            onChange={(newValue) => {
              setStartDate(dayjs(newValue));
              if (hasError(dayjs(newValue), endDate!)) setErrorDate(true);
              else setErrorDate(false);
            }}
            format={format}
            fullWidth={true}
            sx={themeSx}
            formatDensity="spacious"
            InputLabelProps={{
              classes: { root: `${errorDate ? "Mui-error" : ""}` },
            }}
            InputProps={{
              classes: {
                root: `${errorDate ? "Mui-error" : ""}`,
              },
            }}
          />
        </div>
        <div className="w-full">
          <DateTimeField
            label="END"
            name="endDate"
            value={dayjs(endDate)}
            onChange={(newValue) => {
              setEndDate(dayjs(newValue));
              if (hasError(startDate!, dayjs(newValue))) setErrorDate(true);
              else setErrorDate(false);
            }}
            format={format}
            fullWidth={true}
            formatDensity="spacious"
            sx={themeSx}
            InputLabelProps={{
              classes: { root: `${errorDate ? "Mui-error" : ""}` },
            }}
            InputProps={{
              classes: { root: `${errorDate ? "Mui-error" : ""}` },
            }}
          />
        </div>
      </div>
    </LocalizationProvider>
  );
}
