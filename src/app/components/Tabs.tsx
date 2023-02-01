import { FC, MouseEventHandler, useState } from "react";
import { useSearchParams } from "react-router-dom";
import TypeFilter from "./TypeFilter";

interface IProps {
  arr: string[];
  types?: string[];
}

const Tabs: FC<IProps> = ({ arr, types }) => {
  const [params, setSearchParams] = useSearchParams();
  const [active, setActive] = useState(params.get("theme") || "all");

  const clickHandler: MouseEventHandler<HTMLLIElement> = (e) => {
    const theme = e.currentTarget.dataset.theme?.toLowerCase();

    if (theme) {
      setSearchParams({ theme });
      setActive(theme);
    }
  };

  return (
    <>
      {arr.map((item, i) => {
        const withBefore = types ? (
          <TypeFilter
            type={item}
            before={
              item === "All"
                ? types.length
                : types.filter((value) => value === item).length
            }
          />
        ) : null;

        const without = <TypeFilter type={item} />;

        const isActive = item.toLowerCase() === active ? "active" : "";
        return (
          <li
            className={`type relative transition-none ${isActive}`}
            key={i}
            data-theme={item}
            onClick={clickHandler}
          >
            {withBefore || without}
          </li>
        );
      })}
    </>
  );
};

export default Tabs;
