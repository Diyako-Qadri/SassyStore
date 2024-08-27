const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1 ; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? 'active' : ''}`}>
          &#9733;
        </span>
      );
    }
    return stars;
  };

  export default renderStars;