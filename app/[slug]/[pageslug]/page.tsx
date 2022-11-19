import { NextPage } from "next";

type Props = {
  params: any;
};

const Page: NextPage<Props> = ({ params }) => {
  return (
    <div>
      {params.slug}/{params.pageslug}
    </div>
  );
};

export default Page;
