import Image from "next/image";

export default function Home() {
  return (
    <div className="px-5 py-5">
      <article className="text-xl flex flex-col gap-3">
        <h1 className="text-4xl font-bold text-center mb-6">
          Coding Theory Calculator
        </h1>
        <p>
          Welcome to our coding theory calculator webpage! This webpage is
          designed to help you solve a variety of coding theory related
          problems, including calculating the Hamming distance, decoding Hamming
          codes, C24 decoding, syndrome decoding, and more.
        </p>
        <h2 className="text-3xl font-bold mt-6 mb-3">About Us</h2>
        <p>
          I made this website because I could not find any online tools to help
          me solve coding theory related computational problems when I was
          taking the Coding Theory course CO331 at the University of Waterloo. I
          have obtained the permission of Professor Alfred Menezes to publish
          this website. Apart from the calculators themselves, this website
          contains some basic definitions on each page.
        </p>
        <p>
          This website is created using Next.js and TailwindCSS, with the
          backend created using Express and Node.js.
        </p>
        <h2 className="text-3xl font-bold mt-6 mb-3">Contribute</h2>
        <p>
          Feel free to contribute by visiting the github page{" "}
          <a
            className="underline text-blue-600"
            href="https://github.com/pl3lee/coding-theory-calculator"
            target="_blank"
          >
            https://github.com/pl3lee/coding-theory-calculator
          </a>{" "}
          and creating a pull request, or contact me directly through email at
          billy.pl.lee@gmail.com.
        </p>
      </article>
    </div>
  );
}
