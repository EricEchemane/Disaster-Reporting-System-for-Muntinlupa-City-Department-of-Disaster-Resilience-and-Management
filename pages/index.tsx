import Head from "next/head";

const sendMessage = async () => {
  const res = await fetch('/api/send-sms', {
    method: 'POST',
    body: JSON.stringify({ to: '+639695948292', body: 'Sample message from twilio and nextjs' })
  });
  if (res.ok) {
    const data = await res.json();
    console.log(data);
    return;
  }
  console.log(res);
};

export default function Home() {

  return <>
    <Head> <title> Disaster Resilience and Management for Muntinlupa City Department </title> </Head>
    <div>
      <button onClick={sendMessage}> send message </button>
    </div>
  </>;
}
