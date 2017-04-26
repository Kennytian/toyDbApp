import { NavigationActions } from 'react-navigation';

export default class RouteDispatcher {
  static navigate(props, name, subName = '', params = {}) {
    if (props && props.navigation && props.navigation.dispatch && name) {
      const navigateAction = NavigationActions.navigate({
        routeName: name,
        params: params,
        action: subName ? NavigationActions.navigate({routeName: subName}) : null
      });
      props.navigation.dispatch(navigateAction);
    }
  }
}
