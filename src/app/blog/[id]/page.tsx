import BlogDetailsPage from "../../../Components/BlogDetailsPage/BlogDetailsPage";

type PageProps = {
  params: {
    id: string;
  };
};

export default function Page({ params }: PageProps) {
  return <BlogDetailsPage params={params} />;
}
