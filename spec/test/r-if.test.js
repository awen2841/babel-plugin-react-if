var React = require('react');
var chai = require('chai');
var chaiEnzyme = require('chai-enzyme');
var shallow = require('enzyme').shallow;
var expect = chai.expect;
var Button = require('../fixtures/Button');

chai.use(chaiEnzyme());

describe('React if with children', function () {
  it('should be rendered div when r-if = true', function () {
    var wrapper = shallow(
      <div r-if={true} className="test" />
    );

    expect(wrapper.html()).to.equal('<div class="test"></div>');
  });

  it('should be rendered with children div when r-if = true', function () {
    const render = true;

    var wrapper = shallow(
      <div className="test">
        <div r-if={render} className="a" />
        <div className="b" />
      </div>
    );

    expect(wrapper.html()).to.equal('<div class="test"><div class="a"></div><div class="b"></div></div>');
  });

  it('should not render with children div when r-if = false', function () {
    const render = false;

    var wrapper = shallow(
      <div className="test">
        <div r-if={render} className="a" />
      </div>
    );

    expect(wrapper.html()).to.equal('<div class="test"></div>');
  });

  it('should be rendered with children h1 when r-if = true', function () {
    const render = true;

    var wrapper = shallow(
      <div className="test">
        <h1 r-if={render} className="a" />
      </div>
    );

    expect(wrapper.html()).to.equal('<div class="test"><h1 class="a"></h1></div>');
  });

  it('should not render with children h1 when r-if = false', function () {
    const render = false;

    var wrapper = shallow(
      <div className="test">
        <h1 r-if={render} className="a" />
      </div>
    );

    expect(wrapper.html()).to.equal('<div class="test"></div>');
  });

  it('should be rendered when there are a lot of children h1 when r-if = true', function () {
    const render = true;

    var wrapper = shallow(
      <div className="test">
        <div r-if={render} className="title" >
          <p r-if={render} className="p" >
            title
          </p>
        </div>
        <div r-if={render} className="title" >
          <p r-if={render} className="p" >
            title
          </p>
        </div>
      </div>
    );

    expect(wrapper.html()).to.equal('<div class="test"><div class="title"><p class="p">title</p></div><div class="title"><p class="p">title</p></div></div>');
  });

  it('should not render when there are a lot of children h1 when r-if = false', function () {
    const render = false;

    var wrapper = shallow(
      <div className="test">
        <div r-if={render} className="title" >
          <p r-if={render} className="p" >
            title
          </p>
        </div>
        <div r-if={render} className="title" >
          <p r-if={render} className="p" >
            title
          </p>
        </div>
      </div>
    );

    expect(wrapper.html()).to.equal('<div class="test"></div>');
  });

  it('should be rendered with children Button when r-if = true', function () {
    const render = true;

    var wrapper = shallow(
      <div className="test">
        <Button r-if={render} >Button</Button>
      </div>
    );

    expect(wrapper.html()).to.equal('<div class="test"><button>Button</button></div>');
  });

  it('should not render with children Button when r-if = false', function () {
    const render = false;

    var wrapper = shallow(
      <div className="test">
        <Button r-if={render} className="a" />
      </div>
    );

    expect(wrapper.html()).to.equal('<div class="test"></div>');
  });
});
