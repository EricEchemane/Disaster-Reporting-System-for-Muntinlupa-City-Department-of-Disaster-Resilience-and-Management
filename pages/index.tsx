import useUser from 'hooks/useUser';
import React from 'react';

export default function HomePage() {
  const { error, user } = useUser({
    whenNotFoundRedirectTo: '/sign-in'
  });

  if (error) return <div>An Error occured in the request</div>;
  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome, {user.name}</p>
    </div>
  );
}
