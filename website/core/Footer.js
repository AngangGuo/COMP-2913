/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    const { d2lId } = this.props.config;
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div>
            <h5>BCIT</h5>
            <a href={`https://learn.bcit.ca/d2l/home/${d2lId}`}>
              D2L Course Home
            </a>
            <a href="https://www.bcit.ca/study/courses/comp2913">
              Course sign up
            </a>
          </div>
          <div>
            <h5>Helpful Resources</h5>
            <a href="https://reactjs.org/">
              React Docs
            </a>
            <a href="https://github.com/getify/You-Dont-Know-JS">
              You don't know JS Book Series
            </a>
            <a
              href="http://es6-features.org"
              target="_blank"
              rel="noreferrer noopener">
              ECMAScript 6 Features
            </a>
          </div>
          <div>
            <h5>Instructor</h5>
            <div className="footer_instructor">
              <img className="footer__instructor-avatar" src={`${this.props.config.baseUrl}img/daniel_takeuchi.jpg`} />
              <address className="footer__instructor-details">
                <h5>Daniel Takeuchi</h5>
                Software Engineer @ <a href="https://flipboard.com">Flipboard</a>
                <br />
                Instructor @ <a href="https://flipboard.com">BCIT</a>
                <br />
                <a href="mailto:dtakeuchi@bcit.ca">dtakeuchi@bcit.ca</a>
              </address>
            </div>
          </div>
        </section>
        <a
          href="https://bcit.ca/"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={`${this.props.config.baseUrl}img/bcit-logo.png`}
            alt="BCIT"
          />
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
