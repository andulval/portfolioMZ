import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Michał Żądło</GradientText> 👋
        </>
      }
      description={
        <>
          Almost{' '}
          <span className="text-cyan-400">
            one year of professional programming experience in e-commerce Web development
          </span>{' '}
          and <span className="text-cyan-400">4 years of experience</span> as a
          member of <span className="text-cyan-400">multinational teams</span>.
          <br />
          Responsible for{' '}
          <span className="text-cyan-400">project execution</span> and{' '}
          <span className="text-cyan-400">team management</span> for{' '}
          <span className="text-cyan-400">global clients</span>.
          <br />
          <span className="text-cyan-400">Master of Science</span> in{' '}
          <span className="text-cyan-400">Automation and Robotics</span>{' '}
          conferred.
          <br />
          Eager to embrace new development opportunities.
          {/* <a className="text-cyan-400 hover:underline" href="/">
            consectetur
          </a>{' '} */}
        </>
      }
      avatar={
        <img
          className="h-80 w-64 rounded-3xl drop-shadow-[0_10px_10px_#02eeff38]"
          src="/assets/images/Michal_small.jpg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://www.linkedin.com/in/michal-zadlo">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://www.youtube.com/@michazado2993">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
          <a href="https://www.github.com/andulval">
            <HeroSocial
              src="/assets/images/github-mark.png"
              alt="github icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
