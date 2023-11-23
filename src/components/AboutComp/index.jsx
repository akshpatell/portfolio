import React from "react";
import styles from "./scifi-scroll.module.css";

const App = () => {
  return (
    <body className={styles.body}>
      <div className={styles.coverviewport}>
        <article className={styles.article}>
          <div className="text-green">
            <p className="flex justify-center text-4xl pb-5">
              welcome to the page
            </p>
            <p>
              HI🙋‍♂️, I AM AKSH PATEL PASSIONATE SOFTWARE DEVELOPER FROM INDIA
            </p>
            <p>
              We (I and my teammates) specialize in crafting innovative digital
              solutions that cater to the ever-evolving tech landscape. With a
              passion for technology and an entrepreneurial spirit, I have
              consistently pushed the boundaries of what is possible.
            </p>
            <p>
              💡 What We Do: We create websites and digital products that not
              only meet your unique needs but also exceed your expectations. Our
              expertise extends to various tech-related areas, including web
              development, e-commerce, mobile applications, and more.
            </p>
            <p>
              💼 Our Mission: Our mission is simple yet ambitious: to take
              businesses to new heights in the online world. We believe in the
              power of technology to transform the way companies operate,
              connect with customers, and achieve their goals.
            </p>
            <p>
              🌟 Why Choose Us: Innovation: We stay at the forefront of
              technology trends to provide you with cutting-edge solutions.
              Experience: My experience as a software developer and entrepreneur
              ensure top-notch services. Customer-Centric: Your success is our
              priority; we tailor solutions to your specific business needs.
            </p>
          </div>
        </article>
      </div>
    </body>
  );
};

export default App;
