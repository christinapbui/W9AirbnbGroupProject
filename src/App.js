import React,{useState,useEffect} from "react";
import ExperiencesList from "./components/ExperiencesList";
// import Pagination from "react-js-pagination";


import AddExperience from "./components/AddExperience";
import ViewExpInfo from "./components/ViewExpInfo";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [experiences,setExperiences] = useState(null)
  let [page, setPage] = useState(1)
  let [totalResult, setTotalResult] = useState(0)
  let [experienceList, setExpereinceList] = useState(null)
  
  // let [originalList, setOriginalList] = useState(null)
  

  // let handlePageChange = async pageNumber => {
  //   console.log(`active page is ${pageNumber}`);
  //  setPage(pageNumber)
  //  let url = `localhost:3000/experiences?page=2&limit=2`
  //   let data = await fetch(url)
  //   let result = await data.json()
  //   setOriginalList(result.results)
  //   setExperienceList(result.results)
  //   //newRelease(result.results)
   
   
  // }

  console.log(experiences)
  return (
    <div>
      
    <Router>
      <Switch>
        <Route path="/add">
          <div className="add">
            <AddExperience />
          </div>
        </Route>
        <Route path="/experience/:eid">
          <ViewExpInfo />
        </Route>
        <Route path="/" exact>
          <div className="experience">
            <ExperiencesList />
          </div>
        </Route>
      </Switch>
    </Router>

    {/* <Pagination
        activePage={page}
        itemsCountPerPage={20}
        totalItemsCount={totalResult}
        pageRangeDisplayed={5}
        onChange={handlePageChange.bind(this)}
        itemClass="page-item"
        linkClass="page-link"
    /> */}

    
    </div>
    
  );
}

export default App;
