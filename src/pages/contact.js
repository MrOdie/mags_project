import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import SingleColumn from '../components/singleColumn';

import classes from '../assets/scss/modules/contact.module.scss';

import { useSiteMetadata } from "../hooks/use-site-metadata"
import ParallaxContainer from '../components/Parallax/ParallaxContainer';

const Contact = () => {
  const { title } = useSiteMetadata();
  return (
    <Layout page="contactPage">
      <SEO title="Contact" />
      <ParallaxContainer imageName="contact_parallax_bg_"></ParallaxContainer>
      <SingleColumn sectionId="contactContent">
        <div className={classes.contact__col}>
          <div className={classes.info}>

            <h2 className="h1">Contact the <br /> {title}</h2>
            <h3>If you are interested in chatting anything related to Catholicism or Disney Princesses, feel free to reach out!</h3>
          </div>
          <div className={classes.contact__form}>
            <form className={classes.form} method="post" netlify-honeypot="bot-field" data-netlify="true">
              <div className={classes.fields}>
                <div className={classes.field}>
                  <input type="hidden" name="bot-field" />
                  <input
                    className={classes.input}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className={classes.field}>
                  <input
                    className={classes.input}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className={classes.field}>
                  <input
                    className={classes.input}
                    type="tel"
                    id="phone-number"
                    name="phone-number"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className={classes.field}>
                  <textarea
                    className={classes.message}
                    name="message"
                    id="message"
                    rows="7"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className={classes.field}>
                  <div data-netlify-recaptca></div>
                </div>
                <input type="submit" value="Send Message" className={classes.submit} />
              </div>
            </form>
          </div>
        </div>

      </SingleColumn>
    </Layout>

  )
}

export default Contact;