import "../../../app/index.css";
import style from "./UpdateDateModal.module.css";
import { type FC, useState } from "react";
import { useToday } from "../../../hooks/useToday.ts";
import NumberCard from "../../common/number/number_card/NumberCard.tsx";
import DateArea from "./date_area/DateArea.tsx";
import { SlCalender } from "react-icons/sl";
import Separator from "../../common/number/separator/Separator.tsx";

interface UpdateDateModalProps {
  onClose: () => void;
}

const UpdateDateModal: FC<UpdateDateModalProps> = ({ onClose }) => {
  const { year, month, day } = useToday();

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const [years, setYears] = useState(Array.from(year));
  const [months, setMonths] = useState(Array.from(month));
  const [days, setDays] = useState(Array.from(day));

  const handleClickCalender = () => {
    setIsCalendarOpen((prev) => !prev);
  };

  const handleClickUpdate = () => {
    onClose();
  };

  return (
    <div className="modal_backdrop">
      <div id={style.update_date_modal}>
        <div className={style.update_date_modal_header}>
          <h1 className={"main_text_color"}>Update Date</h1>
        </div>
        <div className={`${style.update_date_modal_body} center`}>
          <DateArea>
            {years.map((num) => (
              <NumberCard number={num} />
            ))}
          </DateArea>
          <Separator />
          <DateArea>
            {months.map((num) => (
              <NumberCard number={num} />
            ))}
          </DateArea>
          <Separator />
          <DateArea>
            {days.map((num) => (
              <NumberCard number={num} />
            ))}
          </DateArea>
        </div>
        <div className={style.update_date_modal_footer}>
          <button
            onClick={onClose}
            className={`${style.cancel_button} line_none`}
          >
            cancel
          </button>
          <button onClick={handleClickCalender} className={"center"}>
            <SlCalender size={25} />
          </button>
          <button
            onClick={handleClickUpdate}
            className={`${style.update_button} line_none`}
          >
            update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateDateModal;
