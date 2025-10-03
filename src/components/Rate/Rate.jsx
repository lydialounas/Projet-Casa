import "./Rate.css";

export default function Rate({ rate }) {
  const range = [1, 2, 3, 4, 5];

  return (
    <div className="rate">
      {range.map((star) =>
        rate >= star ? (
          <span key={star} className="star red">★</span>
        ) : (
          <span key={star} className="star grey">★</span>
        )
      )}
    </div>
  );
}
