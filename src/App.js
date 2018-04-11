import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

class App extends React.Component {
  handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent());
  }

  render() {
    return (
      <Editor
        initialValue="<p>Escribe aqui</p>"
        init={{
          plugins: 'lists link image code wordcount table searchreplace codesample textcolor colorpicker contextmenu',
          toolbar: ' charmap | undo redo | bold italic | forecolor backcolor | alignleft aligncenter alignright | numlist bullist | codesample | code',
          contextmenu: "link image inserttable | cell row column deletetable",
          codesample_dialog_height: 450,
        }}
        onChange={this.handleEditorChange}
      />
    );
  }
}

export default App;
