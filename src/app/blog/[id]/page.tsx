

import BlogDetailsPage from "../../../Components/BlogDetailsPage/BlogDetailsPage";


interface BlogDetailsProps {
  params: {
    id: string;
  };
}

const page = ({ params }: BlogDetailsProps) => {
  return (
    <BlogDetailsPage params={params}/>
  );
};

export default page;
