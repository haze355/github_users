
//https://www.youtube.com/watch?v=dR_Fol8nAzo&t=15s
import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { USAMap} from "./Charts";
const Locations = () => {
  const { searchs } = React.useContext(GithubContext);
  
  const locations = searchs.map((data, index) => {
        return { id: data.location, value: data.total_count, showtooltip: "1",showlabel: "1",alpha: "100",fontbold: "1"} 
   
  });

//console.log(locations);

//   const los =  
//    [
//     {
//       id: "DC",
//       value: "17.9",
//       showtooltip: "1",
//       showlabel: "1",
//       alpha: "100",
//       fontbold: "1"
//     },
//     {
//       id: "AZ",
//       value: "17.7",
//       showlabel: "1",
//       alpha: "100",
//       fontbold: "1",
//       usehovercolor: "1",
//       showtooltip: "1"
//     },
//     {
//       id: "NM",
//       value: "20.9",
//       showtooltip: "1",
//       showlabel: "1",
//       alpha: "100",
//       fontbold: "1",
//       usehovercolor: "1"
//     },
//     {
//       id: "AR",
//       value: "18.8",
//       showtooltip: "1",
//       showlabel: "1",
//       alpha: "100",
//       fontbold: "1",
//       usehovercolor: "1"
//     },
//     {
//       id: "LA",
//       value: "19.7",
//       showtooltip: "1",
//       showlabel: "1",
//       alpha: "100",
//       fontbold: "1",
//       usehovercolor: "1"
//     },
//     {
//       id: "KY",
//       value: "18.8",
//       showtooltip: "1",
//       showlabel: "1",
//       alpha: "100",
//       fontbold: "1",
//       usehovercolor: "1"
//     },
//     {
//       id: "MS",
//       value: "22.3",
//       showtooltip: "1",
//       showlabel: "1",
//       alpha: "100",
//       fontbold: "1",
//       usehovercolor: "1"
//     },
//     {
//       id: "AL",
//       value: "18.4",
//       showtooltip: "1",
//       showlabel: "1",
//       alpha: "100",
//       fontbold: "1",
//       usehovercolor: "1"
//     },
//     {
//       id: "GA",
//       value: "17.8",
//       showtooltip: "1",
//       showlabel: "1",
//       alpha: "100",
//       fontbold: "1",
//       usehovercolor: "1"
//     },
//     {
//       id: "WV",
//       value: "17.8",
//       showtooltip: "1",
//       showlabel: "1",
//       alpha: "100",
//       fontbold: "1",
//       usehovercolor: "1"
//     }
//   ];

  return (
    <section className="section">
      <Wrapper className="section-center">
        <USAMap  data={locations}     />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Locations;
