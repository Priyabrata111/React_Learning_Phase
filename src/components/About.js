import React from "react";

export default function About(props) {
  return (
    <>
      <div className="hero-unit">
        <h1 className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
          About Me
        </h1>
        <p className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
          Hi, I'm Priyabrata Mondal — a passionate and curious technologist with
          a strong foundation in software development and a growing expertise in
          full-stack web technologies and data-driven solutions. A graduate from
          IIT Mandi, I thrive on solving complex problems, whether it's building
          scalable applications, crafting intuitive user experiences, or
          optimizing systems for performance. With experience in both
          service-based and startup environments, I bring a balance of
          precision, adaptability, and a relentless drive to learn. I'm
          currently focused on sharpening my skills in DSA, system design, and
          modern web technologies like React.js and Node.js, aiming to
          transition into a product-based company where innovation and impact go
          hand in hand. Beyond code, I enjoy exploring ideas around personal
          growth, fitness, and storytelling — always looking for ways to grow
          both professionally and personally. Let’s build something meaningful
          together.
        </p>
        <p>
          <a
            class="btn btn-primary btn-large"
            target="_blank"
            href="https://drive.google.com/file/d/1RTDWQJAeFad9aJJBcefKYFJTwUDsnhMB/view?usp=sharing"
          >
            Learn more
          </a>
        </p>
      </div>
    </>
  );
}
