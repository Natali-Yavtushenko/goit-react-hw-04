const LoadMoreBtn = ({ handleLoadMore, isActive }) => {
  return (
    <div className={s.container}>
      <button className={s.btn} onClick={handleLoadMore} type="button" disabled={isActive}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
