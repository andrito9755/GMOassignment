import  { useState, useEffect } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import SubDepartments from './subDepartment';

const SecondPage = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPostData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Second Page</h1>
      <h2>Fetched Post Data:</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {postData.map(post => (
            <TableRow key={post['id']}>
              <TableCell>{post['id']}</TableCell>
              <TableCell>{post['title']}</TableCell>
              <TableCell>{post['body']}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <SubDepartments />
    </div>
    
  );
};

export default SecondPage;
