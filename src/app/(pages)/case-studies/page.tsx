// import SignIn from "@components/SignIn";
// import Image from "next/image";
import Clients from "@/components/Clients";

export default function Cases() {
  return (
    <>
      <section>
        <h1 className="heading-1">Case studies</h1>
        <h2 className="heading-2">Our clients</h2>
        <section className="layout--large">
          <Clients />
        </section>
      </section>
    </>
  );
}
