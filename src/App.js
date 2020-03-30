// import React from 'react';
//  import {UserProvider,UserConsumer} from './context'

// import './App.css';
// import Input from './Input'
// import User from './User';

// function App() {

//   const inputLabel = Array(5).fill(React.useRef(null));
//   const [labelWidth, setLabelWidth] = React.useState(0)
//   React.useEffect(() => {
//     inputLabel.map((label, i) => {
//       setLabelWidth({...labelWidth, [i]: label.current.offsetWidth});
//     });
//   }, []);

//   return (

//     <div className="App">


//       <Input></Input>
//       <br></br>
//       <br></br>
//       <br></br>


//       <User></User>


//     </div>
//   );
// }

// export default App;
// import React, { Component } from 'react'
// import Post from './Post'

// export default class App extends Component {

//   state = {
//     postArray:[
//       {
//         id: 1, body: "Aa fdbfdb bvfdb"
//       },
//       {
//         id: 2, body: 'Bb fbdfb  fdbdfbdfb'
//       },
//       {
//         id: 3, body: 'Cc lefhefkh kjhkekvbfvb'
//       },

//     ]

//   }
//   deleteEvent=(index)=>{
//     const copyPostArray=Object.assign([],this.state.postArray);
//     copyPostArray.splice(index,1)

//   }



//   render() {
//     return (
//       <div>
//         <ul>
//           {
//             this.state.postArray.map((post,index) =>{
//               return (
//                 <Post>
//                   id={post.id}
//                   body={post.body}
//                   delete={this.deleteEvent.bind(this,index)}
//                 </Post>)
//             })
//           }

//         </ul>

//       </div>
//     )
//   }
// }
import React, { useState } from 'react'
import { MyForm } from './MyForm'
import { MyTable } from './MyTable'
import { generate } from 'shortid'
 import Category from './Category'
import DialogSelect from './DialogButton'



const App = () => {


  const [rows, setRows] = useState([
    {
      // id: "45",
      // productName: "Abc",
      // productContent: "abc",
      // productNumber: "70 Adet",
      // categorys: "Avm"
    }
  ]);
  return (
    <div style={{ textAlign: "center" }}>
      <MyForm onSubmit={(data) => {
        setRows(currentRows => [...currentRows,
        {
          id: generate(),
          ...data
        },
        ...currentRows
        ])

      }}>
      </MyForm>
      <br></br>
      <Category></Category>
      <br></br>
      <DialogSelect/>
      <br></br>
      <MyTable rows={rows}></MyTable>

    </div>
  )
}
export default App;

