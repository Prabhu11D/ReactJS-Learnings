const log = console.log;
const globalState = [];
let stateCursor = 0;

let React = {
  createElement: (type, configObject, ...args) => {
    if (typeof type == "function") {
      try {
        return type(configObject);
      } catch ({ promise, key }) {
        promise.then((data) => {
          promiseCache.set(key, data);
          rerender();
        });
        return { tag: "h2", props: { children: ["I AM LOADING"] } };
      }
    }

    const props = Object.assign({}, configObject);
    const hasChildren = args.length > 0;
    const nodeChildren = hasChildren ? [...args] : [];
    props.children = nodeChildren.filter(Boolean);
    return { tag: type, props };
  },
};

const useState = (initialState) => {
  const FROZENCURSOR = stateCursor;
  globalState[FROZENCURSOR] = globalState[FROZENCURSOR] || initialState;

  const setState = (newState) => {
    globalState[FROZENCURSOR] = newState;
    rerender();
  };
  stateCursor++;

  return [globalState[FROZENCURSOR], setState];
};

const promiseCache = new Map();
const createResource = (promiseToCall, key) => {
  if (promiseCache.has(key)) {
    return promiseCache.get(key);
  }

  throw { promise: promiseToCall(), key };
};

const render = (reactElement: any, container: HTMLElement) => {
  if (["string", "number"].includes(typeof reactElement)) {
    container.appendChild(document.createTextNode(String(reactElement)));
    return;
  }

  const actualDomElement = document.createElement(reactElement.tag);

  if (reactElement.props) {
    Object.keys(reactElement.props)
      .filter((p) => p !== "children")
      .forEach((prop) => {
        actualDomElement[prop] = reactElement.props[prop];
      });
  }
  if (reactElement.props?.children) {
    reactElement.props.children.forEach((child) => {
      render(child, actualDomElement);
    });
  }

  container.appendChild(actualDomElement);
};

function rerender() {
  stateCursor = 0;
  document.getElementById("root").firstChild.remove();
  render(<App message="Message from APP" />, document.getElementById("root"));
}


// React APP
const App = (props) => {
  const [habit, setHabit] = useState("sleeping");
  const [count, setCount] = useState(0);
  const dogImg = createResource(
    () =>
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          return data.message;
        }),
    "randomDogImage"
  );

  return (
    <div className="home">
      <h1>Welcome React</h1>
      <p>Learning React Now</p>
      <p>{props.message}</p>
      <p>My Habit is {habit}</p>
      <input
        type="text"
        value={habit}
        onchange={(e) => setHabit(e.target.value)}
        placeholder="habits"
      />
      <h2>Count is : {String(count)}</h2>
      <button onclick={() => setCount(count + 1)}>+</button>
      <button onclick={() => setCount(count - 1)}>-</button>
      <img alt="dog" src={dogImg} />
    </div>
  );
};

render(<App message="Message from APP" />, document.getElementById("root"));