import { Dimensions } from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const layout = {
    VIEW_PORT_WIDTH: viewportWidth,
	VIEW_PORT_HEIGHT: viewportHeight,
    BODY_HORIZONTAL: 15,
}

export default layout