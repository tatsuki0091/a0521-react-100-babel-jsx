let categories = data.map((result, index) => {
  return <Category key={index} data={result} />;
});

ReactDOM.render(
  <div className="row">
    <div class="row">
      <ul class="cat-nav center-align">{categories}</ul>
    </div>
  </div>,
  document.getElementById('root')
);
