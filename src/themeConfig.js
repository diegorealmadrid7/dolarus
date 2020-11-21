import { createMuiTheme } from "@material-ui/core/styles"
import blue from "@material-ui/core/colors/blue"
import orange from "@material-ui/core/colors/orange"

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: orange,
  },
  textfield: {
    background: "red",
  },
})

export default theme
