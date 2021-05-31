class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 40,
    };
  }

  mount = () => {
    console.log('\n\n');
    this.setState({ mount: true });
  };
  unmount = () => {
    console.log('\n\n');
    this.setState({ mount: false });
  };

  ignoreProp = () => {
    console.log('\n\n');
    this.setState({ ignoreProp: Math.round(Math.random() * 10) });
    console.log('ignoreProp : ' + this.state.ignoreProp);
  };

  generateSeed = () => {
    console.log('\n\n');
    this.setState({ seed: Number.parseInt(Math.random() * 100) });
  };

  render() {
    return (
      <div>
        <button onClick={this.mount} disabled={this.state.mount}>
          Mount Counter
        </button>
        <button onClick={this.unmount} disabled={!this.state.mount}>
          UnMount Counter
        </button>
        <button onClick={this.ignoreProp}>IgnoreProp</button>
        <button onClick={this.generateSeed}>GenerateSeed</button>
        {this.state.mount ? (
          <Counter ignoreProp={this.state.ignoreProp} seed={this.state.seed} />
        ) : null}
      </div>
    );
  }
}

// Counter Component

class Counter extends React.Component {
  constructor(props) {
    console.log('Counter Constructor ...');
    super(props);
    this.state = {
      counter: 0,
      seed: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    console.log(props);
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed,
      };
    }
    return null;
  }

  increment = () => {
    console.log('\n\n');
    this.setState({ counter: this.state.counter + 1 });
  };

  decrement = () => {
    console.log('\n\n');
    if (this.state.counter > 0)
      this.setState({ counter: this.state.counter - 1 });
  };

  componentDidMount() {
    console.log('Component Did Mount -------------');
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.group('Component Did Update --------------');
    console.log(prevProps);
    console.log(prevState);
    // console.log(snapShot);
    console.groupEnd();
  }

  componentWillUnmount() {
    console.log('Component Will Unmount ---------------');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.group('Should Component Update --------------');
    console.log(`prevProps : ${this.props.ignoreProp}`);
    console.log(`nextProps : ${nextProps.ignoreProp}`);

    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp === nextProps.ignoreProp
    ) {
      console.log('Should Component Update - NOT RE-RENDER');
      console.groupEnd();
      return false;
    }

    console.log('Should Component Update - RE-RENDER');
    console.groupEnd();
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    return null;
  }

  componentDidCatch(error, info) {
    console.log('%c Component Did CATCH', 'color: yellow');
    this.setState({ error: 'Something Went Wrong 👎' });
  }

  render() {
    console.log('Counter RENDER()');

    if (this.state.error) {
      return <div>{this.state.error}</div>;
    }
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <h3>Counter : {this.state.counter}</h3>
        {/* <ErrorComponent /> */}
      </div>
    );
  }
}

function ErrorComponent() {
  return <div>{props.ignoreProp}</div>;
}

ReactDOM.render(<App />, document.getElementById('root'));
