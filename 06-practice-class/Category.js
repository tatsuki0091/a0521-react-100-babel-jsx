class Category extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <li class="cat-link left valign-wrapper">
        <i class="material-icons">{this.props.data.icon}</i>
        {this.props.data.title}
      </li>
    );
  }
}
