import { RootPageComponent } from "@/components/RootPageComponent";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>参加者名簿管理</title>
      </Head>

      <RootPageComponent />
    </>
  );
}
