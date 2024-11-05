import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";

export default function Budget() {
  return (
    <>
      <ThemedText
        darkColor="#000000"
        type="title"
      >
        budget planner
      </ThemedText>
      <Link href="/Explore">Want more places to spend in?</Link>
    </>
  );
}
