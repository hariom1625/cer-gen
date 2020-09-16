import React from 'react';
import axios from 'axios';
import {saveAs} from 'file-saver';
import './App.css';

class App extends React.Component {
state = {
name: ' ',
}

handleChange = ({target : {value,name} }) => this.setState({ [name] :value })

createAndDownloadPdf = () => {

axios.post('/create-pdf', this.state)
.then(() => axios.get('fetch-pdf', { responseType: 'blob'}))
.then((res) => {
const pdfBlob = new Blob([res.data], {type: 'application/pdf' });

saveAs(pdfBlob,'newPdf.pdf');
})
}
render() {

  return (
    <div className="App">
<input type="text" placeholder="Name" name = "name" onChange={this.handleChange} />
<button onClick={this.createAndDownloadPdf}>
Download Certificate

</button>

    </div>
  );
}
}

export default App;
