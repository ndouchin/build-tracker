// @flow
import * as React from 'react';
import ArtifactSwitch from '../ArtifactSwitch';
import styles from './styles';
import { Th } from '../Table';

const emptyObject = {};

type Props = React.ElementConfig<typeof ArtifactSwitch> & {
  hoverColor?: string,
  isHovered?: boolean,
  style?: mixed
};

export default class ArtifactCell extends React.PureComponent<Props> {
  render() {
    const { hoverColor, isHovered, style, ...otherProps } = this.props;
    return (
      <Th
        style={[
          styles.cell,
          styles.rowHeader,
          styles.stickyColumn,
          isHovered ? { backgroundColor: hoverColor } : emptyObject,
          style
        ]}
      >
        <ArtifactSwitch {...otherProps} />
      </Th>
    );
  }
}
