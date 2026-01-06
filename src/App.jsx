import MainPage from "./pages/MainPage";
import { Analytics } from "@vercel/analytics/next"


export default function App() {
  return (
    <div>
      <MainPage/>
      <Analytics/>
    </div>
  );
}
