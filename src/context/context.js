import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import mockSearchs from "./mockData.js/mockSearchs";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();
//Search API rate limit 10 requests per mininute, can only display states on an insterest list
let states = ["WA","OR","CA"] ;

// Provider, Consumer - GithubContext.Provider

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  const [searchs, setSeearch] = useState(mockSearchs);
  // request loading
  const [requests, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  // error
  const [error, setError] = useState({ show: false, msg: "" });

  const searchGithubUser = async (user) => {
    toggleError();
    setIsLoading(true);
    const response = await axios(`${rootUrl}/users/${user}`).catch((err) =>
      console.log(err)
    );
    if (response) {
      setGithubUser(response.data);
      const { login, followers_url } = response.data;

      await Promise.allSettled([
        axios(`${rootUrl}/users/${login}/repos?per_page=100`),
        axios(`${followers_url}?per_page=100`),
      ])
        .then((results) => {
          const [repos, followers] = results;
          const status = "fulfilled";
          if (repos.status === status) {
            setRepos(repos.value.data);
          }
          if (followers.status === status) {
            setFollowers(followers.value.data);
          }
        })
        .catch((err) => console.log(err));
    } else {
      toggleError(true, "there is no user with that username");
    }
    checkRequests();
    setIsLoading(false);
  };

  //  check rate
  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        setRequests(remaining);
        if (remaining === 0) {
          toggleError(true, "sorry, you have exceeded your hourly rate limit!");
        }
      })
      .catch((err) => console.log(err));
  };
  
  //https://stackoverflow.com/questions/56532652/axios-get-then-in-a-for-loop
  //https://www.storyblok.com/tp/how-to-send-multiple-requests-using-axios
 
  let totals = [];
  
  let promises = [];
  

  for (let i = 0; i < states.length; i++) {
    let state = states[i];
    promises.push(
       axios.get(`${rootUrl}/search/users?q=location:${states[i]}`)
    )
  }
  axios.all(promises).then(axios.spread((...responses) => {
    for (let i = 0; i < responses.length; i++) { 
      totals.push(responses[i].data.total_count)
    }

  })).catch(errors => {
    console.log(errors)
  })

 


  function toggleError(show = false, msg = "") {
    setError({ show, msg });
  }

  // error
  useEffect(checkRequests, []);

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        searchs,
        followers,
        requests,
        error,
        searchGithubUser,
        isLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
