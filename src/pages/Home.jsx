import { useSelector } from "react-redux";

export default function Home() {
  const state = useSelector((state) => state);
  return (
    <>
      <h1>Home</h1>
    </>
  );
}
