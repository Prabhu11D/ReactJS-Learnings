/**
 *  often we need to subscribe to callbacks
 *  and get the data from store
 *
 */

function connect(mapStateToProps, mapDispatchToProps) {
  return function (wrapperComponent) {
    return class ConnectWrapper extends React.Component {
      render() {
        return (
          <wrapperComponent
            {...this.props}
            {...mapStateToProps(store.getState(), this.props)}
            {...mapDispatchToProps(store.dispatch, this.props)}
          />
        );
      }
    };
  };
}
