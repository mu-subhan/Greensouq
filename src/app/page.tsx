import Categories from "@/components/Categories";
import Hero from "../components/Hero";
import Indoor from "../components/Indoor";
import Outdoor from "@/components/Outdoor";
import Arrival from "../components/Arrival";
import Gardening from "../components/Gardening";
import Pots from "../components/Pots";
import Fertilizer from "../components/Fertilizer";

export default function Home() {
  return (
   <>
  <Hero/>
  <Categories/>
  <Indoor/>
  <Outdoor/>
  <Arrival/>
  <Gardening/>
  <Pots/>
  <Fertilizer/>
   </>
  );
}
