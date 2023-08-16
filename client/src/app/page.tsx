import Image from "next/image";

export default function Home() {
  return (
    <div className="px-5 py-5">
      <article className="text-xl flex flex-col gap-3">
        <p>
          Welcome to our coding theory calculator webpage! This webpage is
          designed to help you solve a variety of coding theory related
          problems, including calculating the Hamming distance, decoding Hamming
          codes, C24 decoding, syndrome decoding, and more.
        </p>
        <p>
          I made this website because I could not find any online tools to help
          me solve coding theory related computational problems when I was
          taking the Coding Theory course CO331 at the University of Waterloo.
        </p>
        <p>
          I have obtained the permission of Professor Alfred Menezes to publish
          this website. Apart from the calculators themselves, this website
          contains some basic definitions on each page.
        </p>
      </article>
    </div>
  );
}
