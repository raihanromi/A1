import Service from "./Service";

const servicesData = [
  {
    icon: "/portfolio_react/images/icon-dev.svg",
    title: "Web development",
    description: "High-quality development of sites at the professional level.",
  },
];

const About = () => {
  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          My name is Raihan. Currently, I am learning full-stack web development
          and building projects.
        </p>

        <p>
          Highly motivated and skilled Computer Science graduate with a passion
          for problem-solving through code and a strong aptitude for web
          development. Proficient in various programming languages including
          Python, JavaScript, and PHP. Experienced in utilizing different tools
          and technologies.
        </p>
      </section>

      {/* <!--
      - service
    --> */}

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>
        <ul className="service-list">
          {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </ul>
      </section>
    </article>
  );
};

export default About;
