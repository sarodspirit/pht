import '../src/styles/tailwind.css'
import './theme.css'
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
export const decorators = [(Story) => <div className="root overflow-hidden"><Story/></div>];
