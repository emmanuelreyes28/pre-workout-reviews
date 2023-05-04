import { useRouter } from "next/router";
import ReviewForm from "components/ReviewForm";

const NewReview = () => {
  const router = useRouter();
  const { id } = router.query;

  const reviewForm = {
    user: "JohnDoe",
    content: "",
    rating: 0,
    helpfulContent: 0,
  };

  return <ReviewForm productId={id} reviewForm={reviewForm} />;
};

export default NewReview;
