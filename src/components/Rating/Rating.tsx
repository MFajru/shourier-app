import React, { useState } from "react";

type TRating = {
  review: number;
  isReadOnly?: boolean;
  selectedRating?: number;
  setSelectedRating?: React.Dispatch<React.SetStateAction<number>>;
  name: string;
};

const Rating = ({
  review,
  isReadOnly = false,
  name,
  selectedRating,
  setSelectedRating,
}: TRating) => {
  // const [selectedRating, setSelectedRating] = useState<number>(review);
  const stars = [0, 1, 2, 3, 4, 5];
  return (
    <div className="rating">
      {isReadOnly &&
        stars.map((star) =>
          star === 0 ? (
            <input
              key={star}
              type="radio"
              name={name}
              className="rating-hidden"
              disabled
              checked
            />
          ) : star === review ? (
            <input
              key={star}
              type="radio"
              name={name}
              className="mask mask-star-2 bg-orange-400"
              checked
              disabled
            />
          ) : (
            <input
              key={star}
              type="radio"
              name={name}
              className="mask mask-star-2 bg-orange-400"
              disabled
            />
          )
        )}
      {!isReadOnly &&
        stars.map(
          (star) => (
            <input
              key={star}
              type="radio"
              name={name}
              className={
                star === 0 && review === 0
                  ? "rating-hidden"
                  : "mask mask-star-2 bg-orange-400"
              }
              checked={star === selectedRating ? true : false}
              disabled={star === 0 ? true : false}
              onChange={() => setSelectedRating && setSelectedRating(star)}
            />
          )
          // ) : (
          //   <input
          //     key={star}
          //     type="radio"
          //     name={name}
          //     className="mask mask-star-2 bg-orange-400"
          //   />
          // )
        )}
    </div>
  );
};

export default Rating;
