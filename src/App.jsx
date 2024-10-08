import { useState, useEffect } from "react"

function App() {

  const URL = 'https://jsonplaceholder.typicode.com/posts';

  
  const [posts, setPosts] = useState([])


    useEffect(() => {
      const fetchData = async () => {
        const result = await fetch(URL)
        result.json()
          .then(json => {
            console.log(json) 
          })
          
      }
      fetchData()
    }, [])
  

  return (

    <div className="App">
      <h1>Posts</h1>
      {posts}
    </div>
  )
}

export default App
