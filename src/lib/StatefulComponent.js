import React from 'react'
import { get, isEmpty } from 'lodash'

export default class StatefulComponent extends React.PureComponent {
  get = get;

  isEmpty = isEmpty;

  onChangeState = name => (value) => {
    this.setState({ [name]: value })
  };

  toggleBooleanState = (name, value = undefined) => () => {
    this.setState(state => ({
      [name]: value !== undefined ? value : !state[name],
    }))
  };
}
