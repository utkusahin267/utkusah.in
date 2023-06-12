import React from 'react';

import { getLanding } from '@/api/queries/getLanding';

const Home = async () => {
  const { data } = await getLanding();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      marketing 2 {JSON.stringify(data)}
    </main>
  );
};

export default Home;
