import { Provider } from 'jotai';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import Routes from '../app/routes';


export interface Props { }

export interface State {
    ready: boolean;
}

function App(stores: any) {
    return class Setup extends React.Component<Props, State> {
        constructor(props: any) {
            super(props);
            this.state = {
                ready: true,
            };
        }

        render() {
            const { ready } = this.state
            if (!ready) return <ActivityIndicator />
            return (
                <Provider>
                    <Routes/>
                </Provider>
            );
        }
    };
}

export default App