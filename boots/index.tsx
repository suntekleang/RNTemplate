import App from "./setup.store";
import config from "./config.store"

function boot() {
	const stores = config();
	return App(stores);
}

export default boot