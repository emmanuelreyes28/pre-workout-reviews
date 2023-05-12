import { useRouter } from "next/router";
import ReviewForm from "components/ReviewForm";
import Layout from "components/Layout";

const NewReview = () => {
  const router = useRouter();
  const { id } = router.query;

  const reviewForm = {
    user: "JohnDoe",
    content: "",
    rating: 0,
    helpfulContent: 0,
  };

  return (
    <Layout>
      <ReviewForm productId={id} reviewForm={reviewForm} />
    </Layout>
  );
};

export default NewReview;
