import React from 'react';

function FileList({ fileList }) {
  return (
    <ul>
      {fileList.map(f => (<li style={({ color: 'green' })}>{f}</li>))}
    </ul>
  );
}

export default FileList;
