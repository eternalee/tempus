import React, { Component } from 'react';

const AWS = require('aws-sdk');
import { FilePond, File, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

export default class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    };
  }

  // submitFile = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append('file', this.state.file[0]);

  //   fetch('/api/file-upload', {
  //     method: 'POST',
  //     body: formData
  //   })
  //     .then(res => {
  //       res.json()
  //     })
  //     .catch(err =>
  //       console.log(err));
  // }

  // handleFileUpload = (e) => {
  //   this.setState({ file: e.target.files });
  // }

  // render() {
  //   return (
  //     <form onSubmit={this.submitFile} >
  //       <input label='upload file' type='file' onChange={this.handleFileUpload} />
  //       <button type='submit'>Send</button>
  //     </form>
  //   );
  // }

  handleInit() {
    console.log('FilePond instance has initialised', this.pond);
  }

  render() {
    let s3 = new AWS.S3({
      accessKeyId: "AKIAIZ6TAHCVEHB5I2EA",
      secretAccessKey: "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",
      region: "us-east-2"
    });
    return (
      <div className="App">

        <FilePond
          ref={ref => this.pond = ref}
          allowMultiple={true}
          maxFiles={3}
          server={
            {
              url: '/uploader',
              process: function (fieldName, file, metadata, load, error, progress, abort) {
                s3.upload(
                  {
                    Bucket: "eterna-tempus",
                    Key: Date.now() + "_" + file.name,
                    Body: file,
                    ContentType: file.type,
                    ACL: "public-read"
                  },
                  function (err, data) {
                    if (err) {
                      error("Something went wrong");
                      return;
                    }
                    // pass file unique id back to filepond
                    load(data.Key);
                  }
                );
              }
            }
          }
          oninit={() => this.handleInit()}
          onupdatefiles={(fileItems) => {
            // Set current file objects to this.state
            this.setState({
              files: fileItems.map(fileItem => fileItem.file)
            });
          }}
          onDrop={this.handleUploadImages}
        >

          {/* Update current files  */}
          {this.state.files.map(file => (
            <File key={file} src={file} origin="local" />
          ))}

        </FilePond>

      </div >
    );
  }

}