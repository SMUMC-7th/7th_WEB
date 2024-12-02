import React, { useState } from "react";
import { getPostList } from "../apis/api";
import { useQuery } from "@tanstack/react-query";
import { Card } from "../components/Card";

export const Home = () => {
  const [title, settTitle] = useState("");
  //게시글 조회
  const { data: contentCard } = useQuery({
    queryFn: () => getPostList(),
    queryKey: ["get", title],
  });
  console.log(contentCard?.data[0]);

  return (
    <section className="grid grid-cols-5 gap-36">
      {contentCard?.data ? (
        contentCard.data.map((post) => {
          return <Card key={post.id} {...post} />;
        })
      ) : (
        <h1>데이터 안 보임</h1>
      )}
    </section>
  );
};
