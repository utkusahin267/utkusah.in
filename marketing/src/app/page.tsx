import { getLanding, landingCollection } from "@/api/queries/getLanding";

const Home = async () => {
  const { data, loading } = await getLanding();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      marketing 2 {JSON.stringify(data)}
    </main>
  );
}

export default Home;
