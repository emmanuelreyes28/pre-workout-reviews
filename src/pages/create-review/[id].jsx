import { useRouter } from "next/router";
import ReviewForm from "components/ReviewForm";

export default function CreateReview() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <ReviewForm productId={id} />
    </>
  );
}
