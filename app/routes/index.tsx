import { Link } from "remix";
import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  retu