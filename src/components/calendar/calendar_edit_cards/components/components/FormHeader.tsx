import { default as CalendarIcon } from "@mui/icons-material/EventAvailable";
import { default as DeleteIcon } from "@mui/icons-material/DeleteOutline";
import { default as Restart } from "@mui/icons-material/RestartAlt";
import { LEGEND_COLORS } from "../../../../../lib/constants/valuesHardcoded";
import { TO_HEX_COLORS } from "../../../../../lib/constants/themeHardcoded";
import { useAtom } from "jotai";
import {
  activeEventAtom,
  eventsAtom,
  selectedDatesAtom,
} from "../../../../../lib/atoms/globalAtoms";
import { Dispatch, SetStateAction } from "react";
import dayjs from "dayjs";

interface IFormHeaderProps {
  activeColor: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const FormHeader = ({ activeColor, setOpen }: IFormHeaderProps) => {
  const [events, setEvents] = useAtom(eventsAtom);
  const [activeEvent, setActiveEvent] = useAtom(activeEventAtom);
  const [selectedDates, setSelectedDates] = useAtom(selectedDatesAtom);

  function handleDelete() {
    if (activeEvent !== null) {
      const eventsAfterDelete = events.filter(function (returnableObjects) {
        return returnableObjects.id !== activeEvent.id;
      });
      setEvents(eventsAfterDelete);
    }
    setOpen(false);
  }

  function handleReset() {
    if (activeEvent === null)
      setSelectedDates({
        start: dayjs(selectedDates.start).startOf("day"),
        end: dayjs(selectedDates.end).startOf("day"),
      });
    else
      setSelectedDates({
        start: dayjs(activeEvent.start + "").startOf("day"),
        end: dayjs(activeEvent.end + "").startOf("day"),
      });
    setActiveEvent(null);
  }

  const themeSx = {
    "&.MuiSvgIcon-root": {
      color: TO_HEX_COLORS.gray,
    },
    "&:hover.MuiSvgIcon-root": {
      color: TO_HEX_COLORS.purple,
    },
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="mr-2">
          <CalendarIcon style={{ color: TO_HEX_COLORS.purple }} />
        </div>
        {/* meaning of color label */}
        <div className="text-dark-gray">
          {LEGEND_COLORS[activeColor as keyof typeof LEGEND_COLORS].meaning ||
            LEGEND_COLORS.purple.meaning}
        </div>
      </div>
      {/* reset & delete event */}
      <div className="flex">
        <div onClick={handleReset} className="hover:cursor-pointer">
          <Restart sx={themeSx} />
        </div>
        <div onClick={handleDelete} className="hover:cursor-pointer ">
          <DeleteIcon sx={themeSx} />
        </div>
      </div>
    </div>
  );
};
export default FormHeader;
