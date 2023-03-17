import { useSelector } from "react-redux";
import Form from "../components/Forms";
import Header from "../components/Header";

export default function Home() {
  const state = useSelector((state) => state);
  return (
    <div className="home-page">
      <Header />
      <Form />
    </div>
  );
}
