import BlogDetailsPage from "../../../Components/BlogDetailsPage/BlogDetailsPage";

export default function Page({
  params,
}: {
  params: { id: string };
}) {
  return <BlogDetailsPage params={params} />;
}


export async function generateStaticParams() {
  const ids = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return ids.map((id) => ({
    id,
  }));
}
