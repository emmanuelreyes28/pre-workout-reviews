import { star } from "@heroicons/react/outline";

function StarRating({ rating }) {
  const fullStar = <star className="h-5 w-5 text-yellow-500" />;

  const emptyStar = <star className="h-5 w-5 text-gray-300" />;

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((index) => {
        const icon = index <= rating ? fullStar : emptyStar;
        return <span key={index}>{icon}</span>;
      })}
      <span className="ml-2">{rating}/5</span>
    </div>
  );
}

export default StarRating;
