async function readBuildFile() {
  console.log("In readBuildFile");
  const url =
    "https://github.com/ONDC-Official/mobility-specification/blob/draft-1.x/ui/build.js";
  let url1 =
    "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits";
  //https://reqres.in/api/users?page=2
  const response = await fetch(url, {
    mode: "no-cors",
    headers: new Headers({'content-type': 'text/plain', 'accept':'*/*',
        'Access-Control-Allow-Origin': 'https://github.com'
}),
    
  });

  let response1 = await fetch(url1);
  let commits = await response1.json();
  try{
    const responseAnuj = await axios.get(url);
    console.log('responseAnuj',responseAnuj)
  }catch(error){
    console.log('error axios', error)
  }
  

  let buildFile = await response.text(); // read response body and parse as JSON
  console.log("response1", commits);
  
  console.log("await fetch", buildFile);
  //   fetch(url,{mode: 'no-cors'})
  //     .then(response => {
  //         // handle the response
  //         console.log('response', response.text())
  //     }).then((response1)=>console.log('om', response1))
  //     .catch(error => {
  //         // handle the error
  //         console.log('error', error)
  //     });

  // const movies = await response.json();
  // console.log('movies', movies, response)
}
