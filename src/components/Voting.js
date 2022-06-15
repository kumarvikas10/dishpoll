import React, { useEffect, useState } from "react";
import Votes from "./Votes";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function Voting() {
  const [data, setData] = useState([]);
  const [rating, setRating] = useState([]);
  const [removeduplicate, setremoveDuplicate] = useState([]);
  const [empty, setEmpty] = useState([]);
  const [limit, setLimit] = useState(3);
  const [disable, setDisable] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json"
      );
      const data = await response.json();
      data.map((item) => Object.assign(item, { votes: false }));
      console.log(data);
      setData(data);
    };

    fetchData();
  }, []);

  const handleVotes = (id) => {
    const index = data.findIndex((item) => {
      return item.id === parseInt(id);
    });
    if (index !== -1) {
      data[index].votes = !data[index].votes;
    }
    const newVote = {
      id: `${data[index].id}`,
      vote: `${data[index].dishName}`,
      Ranking: 30,
    };
    setRating((prevstate) => {
      return [...prevstate, newVote];
    });
    const newData = [...data];
    setData(newData);
  };

  function checkCount(id) {
    const index = data.findIndex((item) => {
      return item.id === parseInt(id);
    });
    if (index !== -1) {
      limit === 1
        ? setDisable(true)
        : data[index].votes
        ? setLimit(limit + 1)
        : setLimit(limit - 1);
    }
  }

  function changeVotes() {
    setDisable(false);
    setRating([...empty]);
    setremoveDuplicate([...empty]);
    setLimit(3);
    const arraycopy = data.map((item) => {
      if (item.votes === true) {
        item.votes = !item.votes;
      }
      return item;
    });
    console.log(arraycopy);
    alert("Vote has been Reset")
  }

  function submitVotes() {
    rating.map((x) =>
      removeduplicate.filter((a) => a.id === x.id).length > 0
        ? null
        : removeduplicate.push(x)
    );
    console.log(removeduplicate);
    alert("Vote has been submitted")
  }
  return (
    <div className="voting">
      <Tabs>
        <TabList>
          <Tab>Poll</Tab>
          <Tab>Ranking</Tab>
        </TabList>
        <TabPanel>
          <h1>Food Dishes List</h1>
          <div className="dish">
            {data.map((item, i) => {
              return (
                <Votes
                  item={item}
                  handleVotes={handleVotes}
                  checkCount={checkCount}
                  disable={disable}
                />
              );
            })}
          </div>
          <div className="btnsection">
            <button className="btn" onClick={() => submitVotes()}>
              Submit
            </button>
            <button className="btn" onClick={() => changeVotes()}>
              Change Vote
            </button>
          </div>
        </TabPanel>
        <TabPanel>
          <h1>Ranking points</h1>
          {rating.length === 0 ? (
            <div>Vote for your Favourite Food in Poll Section</div>
          ) : (
            <div className="rating">
              {removeduplicate.length === 0 ? (
                <div className="ratingcontainer">
                  {
                    rating.map((item, key) => (
                      <div className="ratingcard">
                        <h3>{item.vote}</h3>
                        <h3>
                          <span>Ranking Points :</span>
                          {item.Ranking - key * 10}
                        </h3>
                      </div>
                    ))
                  }
                </div>
              ) : (
                <div>{
                  removeduplicate.map((item, key) => (
                    <div className="ratingcard">
                      <h3>{item.vote}</h3>
                      <h3>
                        <span>Ranking Points :</span>
                        {item.Ranking - key * 10}
                      </h3>
                    </div>
                  ))
                }</div>
              )}
            </div>
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
}

// <div className={styles.card}>
//   <div className={styles.imagecontainer}>
//     <img src={item.image} alt="logo" />
//     <h3>{item.dishName}</h3>
//     <div className={styles.btnSection}>
//       <button
//         onClick={() => {
//           handleVotes(`${item.id}`);
//         }}
//       >
//         Vote
//       </button>
//       <button
//         onClick={() => {
//           handleUpVotes(`${item.id}`);
//         }}
//       >
//         Upvote
//       </button>
//     </div>
//   </div>
// </div>
