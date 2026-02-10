import classes from "./../style/HeadLine.module.css";


export default function HeadLine({ title }) {
  return (
    <div className="overflow-hidden flex-1 min-w-0 relative">
      <div
        className={`capitalize whitespace-nowrap ${classes.animateMarquee} `}
      >
        {title?.map((v) => v.title).join(" ")}
      </div>
    </div>
  );
}
