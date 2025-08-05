import type { Route } from "./+types/home";
import { Projects } from "../pages/Projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jovan Finesta - Projects" },
    { name: "description", content: "OH CSUI -- IT Development!" },
  ];
}

export default function Home() {
  return <Projects />;
}
