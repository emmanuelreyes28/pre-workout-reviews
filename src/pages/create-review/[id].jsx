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

// export default function CreateReview() {
//   const router = useRouter();
//   const { id } = router.query;
//   return (
//     <>
//       <ReviewForm productId={id} />
//     </>
//   );
// }
