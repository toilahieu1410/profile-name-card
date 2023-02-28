import CardName from "../components/card/nameCard"
import Page from "../components/card/homepage"

export const routes = [
  {path: "/:slug", Component: CardName},
  {path: "/", Component: Page},
]