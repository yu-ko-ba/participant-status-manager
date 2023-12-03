import { RootPageComponent } from "@/components/RootPageComponent";
import { Event } from "@/types/Event";
import { Participant } from "@/types/Participant";
import Head from "next/head";

export default function Home() {
  const events: Event[] = [
    {
      name: "なにかイベント名（○○オフ、など）",
      website: "https://www.example.com",
      participants: [
        new Participant("Arisu"),
        new Participant("Bob"),
      ],
    },
  ];
  return (
    <>
      <Head>
        <title>参加者名簿管理</title>
      </Head>

      <RootPageComponent events={events} />
    </>
  );
}
