const ReactDOM = require('react-dom')
const React = require('react')

class Index extends React.Component {
  render() {
    return (
      <div>
        <p>Hello World</p>
      </div>
    );
  }
}
ReactDOM.render(
  <Index />,
  document.getElementById('content')
)
