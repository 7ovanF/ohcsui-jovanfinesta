import type { Route } from "./+types/home";
import { AboutMe } from "../pages/Aboutme";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jovan Finesta - About Me" },
    { name: "description", content: "OH CSUI -- IT Development!" },
  ];
}

export default function Home() {
  return <AboutMe />;
}
