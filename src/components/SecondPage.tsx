import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DepartmentList from './departmentItems';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const SecondPageComponent1 = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 500 },
  ];

  return (
    <>
      <DataGrid rows={posts} columns={columns} autoHeight />
      <DepartmentList/>
    </>
  )
};

export default SecondPageComponent1;