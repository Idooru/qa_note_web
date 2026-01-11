import "../../../app/index.css";
import "react-datepicker/dist/react-datepicker.css";
import style from "./UpdateDateModal.module.css";
import { type FC, useState } from "react";
import NumberCard from "../../common/number/number_card/NumberCard.tsx";
import DateArea from "./date_area/DateArea.tsx";
import { SlCalender } from "react-icons/sl";
import Separator from "../../common/number/separator/Separator.tsx";
import { useDate } from "../../../hooks/useDate.ts";
import { generateDateString } from "../../../utils/generate_date_string.ts";
import { DatePicker } from "react-datepicker";
import { formatDate } from "../../../utils/format_date.ts";
import { generateDateQuery } from "../../../utils/generate_date_query.ts";
import { useNavigate } from "react-router-dom";

interface UpdateDateModalProps {
  onClose: () => void;
}

const UpdateDateModal: FC<UpdateDateModalProps> = ({ onClose }) => {
  const { year, month, day } = useDate();
  const { setDate } = useDate();
  const navigate = useNavigate();

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const [years, setYears] = useState(Array.from(year));
  const [months, setMonths] = useState(Array.from(month));
  const [days, setDays] = useState(Array.from(day));

  const handleClickCalender = () => {
    setIsCalendarOpen((prev) => !prev);
  };

  const handleClickUpdate = () => {
    const year = years.join("");
    const month = months.join("");
    const day = days.join("");
    const dateString = generateDateString({ year, month, day });

    setDate(new Date(dateString));

    alert(`${dateString} 날짜를 설정하였습니다.`);
    onClose();

    const query = generateDateQuery({ year, month, day });
    const newRoute = `${location.pathname.replace("/task/calender", "/task")}${query}`;
    navigate(newRoute, { replace: true });
  };

  const handleSelectDate = (date: Date | null) => {
    if (date === null) return;

    const years = Array.from(String(date.getFullYear()));
    const months = Array.from(String(formatDate(date.getMonth() + 1)));
    const days = Array.from(String(formatDate(date.getDate())));

    setYears(years);
    setMonths(months);
    setDays(days);
    setIsCalendarOpen(false);
  };

  return (
    <div className="modal_backdrop">
      <div className={style.update_date_area}>
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
        {isCalendarOpen && (
          <div className={style.calendar_wrapper}>
            <DatePicker inline onChange={handleSelectDate} />
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdateDateModal;
