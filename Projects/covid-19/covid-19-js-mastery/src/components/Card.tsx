import React from 'react';
import '../styles/card.css';
import CountUp from 'react-countup';

interface Props {
  data: {
    confirmed: number;
    recovered: number;
    deaths: number;
    lastUpdate: string;
  };
}

function Card(props: Props) {
  const { confirmed, deaths, lastUpdate, recovered } = props.data;

  if (confirmed === -1) return <div className="loading"></div>;

  return (
    <div className="card-container">
      <CardItem
        title="Infected"
        value={confirmed}
        desc="Number of active cases of COVID-19"
        date={lastUpdate}
        classname="infected"
      />
      <CardItem
        title="Recovered"
        value={recovered}
        desc="Number of recoveries from COVID-19"
        date={lastUpdate}
        classname="recovered"
      />
      <CardItem
        title="Deaths"
        value={deaths}
        desc="Number of deaths caused by COVID-19"
        date={lastUpdate}
        classname="deaths"
      />
    </div>
  );
}

interface CardItemProps {
  title: string;
  value: number;
  desc: string;
  date: string;
  classname: string;
}

const CardItem = (props: CardItemProps) => {
  const { title, value, desc, date, classname } = props;
  return (
    <div className={`card-item ${classname}`}>
      <p className="title">{title}</p>
      <p className="value">
        <CountUp end={value} start={0} duration={2} />
      </p>
      <p className="date">{date}</p>
      <p className="desc">{desc}</p>
    </div>
  );
};

export default Card;
