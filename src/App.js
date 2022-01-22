import axios from "axios";
import { useEffect} from "react"

  function App() {

      useEffect( ()=>{
        axios({
          url:"http://www.mapquestapi.com/search/v4/place",
          dataResponse: "json",
          method: "GET",
          params:{
            key:"xOG9wyWI46505EyeBFsyk2RAHOt2QD6G",
            q:"hotels",
            sort:"relevance",

          }
        }).then ( (res)=>{
          console.log(res.data.results);
        })

      })




  return (
    <div className="App">
      
    </div>
  );
}

export default App;
