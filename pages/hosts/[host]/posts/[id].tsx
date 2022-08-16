import Head from "next/head";

import { useRouter } from "next/router";

type Props = {
  host: string;
  id: string;
  time: string;
};

export default function Post({ host, id, time }: Props) {
  return (
    <div>
      <p>post {host}</p>
      <p>ID {id}</p>
      <p>Time {time}</p>
    </div>
  );
}

export async function getStaticProps(context: any) {
  // Available on server render
  console.log("getStaticProps", context);

  const host = context.params.host;
  const id = context.params.id;

  const time = Date.now();

  if (id == "servererror") {
    throw new Error("Server Error Test");
  }

  return {
    props: {
      host,
      id,
      time,
    },
    // revalidate: 10,
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      // Include host in static params!
      { params: { id: "a", host: "localhost" } },
      { params: { id: "b", host: "domain1.localhost" } },
      { params: { id: "a", host: "multisite.com" } },
    ],
    fallback: "blocking",
  };
}
