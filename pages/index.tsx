import { useBarangayContext } from "providers/barangay";

export default function Home() {
  const { state } = useBarangayContext();
  console.log(state);

  return (
    <div>Home</div>
  );
}
