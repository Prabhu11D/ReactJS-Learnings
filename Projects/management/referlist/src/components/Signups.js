import React, { useEffect, useState } from "react";
import Cardless from "./Right/Cardless";
import Table from "./Right/Table";

function SignUpCount(props) {
  return (
    <div>
      <p className="count">{props.count}</p>
      <p>{props.name}</p>
    </div>
  );
}

function Signups() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState({
    signUp: 0,
    referralSignUp: 0,
  });
  const [data, setData] = useState([]);

  const fetchWaitlist = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:5000/users");
    setData(await res.json());
  };

  useEffect(() => fetchWaitlist(), []);
  useEffect(() => {
    setLoading(false);
  }, [data]);
  useEffect(() => {
    setCount({
      signUp: data.length,
      referralSignUp: data.filter((i) => i.referralCode !== undefined).length,
    });
  }, [data]);

  return (
    <div>
      <Cardless>
        <div className="logout">
          <a href="#">Logout</a>
        </div>
      </Cardless>
      {loading ? (
        <p className="message">Loading your sign-ups...</p>
      ) : (
        <>
          <div className="exportBtn">
            <button className="glass">Export to Mailchimp</button>
            <button className="glass">Export to CSV</button>
            <button className="glass">Import from CSV</button>
          </div>
          <div className="signUpCount">
            <SignUpCount name="Sign-ups" count={count.signUp} />
            <SignUpCount
              name="Sign-ups via referral"
              count={count.referralSignUp}
            />
          </div>
          {count.signUp === 0 ? (
            <p className="message">
              No one has signed up for your waitlist yet
            </p>
          ) : (
            <Table users={data} />
          )}
        </>
      )}
    </div>
  );
}

export default Signups;
