import "./portfolioList.scss";

export default function Portfoliolist({ title, active, setSelected, id }) {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
