import { Paper } from '@mantine/core';
import GridAutoColumn from 'components/GridAutoColumn';
import useUser from 'hooks/useUser';
import React from 'react';

export default function HomePage() {
  // const { error, user } = useUser({
  //   whenNotFoundRedirectTo: '/sign-in'
  // });

  // if (error) return <div>An Error occured in the request</div>;
  // if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>Home Page</h1>
      {/* <p>Welcome, {user.name}</p> */}
      <GridAutoColumn widthBasis={200} spacing="xl">
        <Paper withBorder shadow="md" p={2}> 1 </Paper>
        <Paper withBorder shadow="md" p={2}> 2 </Paper>
        <Paper withBorder shadow="md" p={2}> 3 </Paper>
        <Paper withBorder shadow="md" p={2}> 3 </Paper>
        <Paper withBorder shadow="md" p={2}> 3 </Paper>
        <Paper withBorder shadow="md" p={2}> 3 </Paper>
      </GridAutoColumn>
    </div>
  );
}