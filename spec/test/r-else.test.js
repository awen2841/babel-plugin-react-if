var React = require('react');
var chai = require('chai');
var chaiEnzyme = require('chai-enzyme');
var shallow = require('enzyme').shallow;
var expect = chai.expect;
var Button = require('../fixtures/Button');

chai.use(chaiEnzyme());

describe('React else with children', function () {
  it('should be rendered div when r-if = true and r-else = false', function () {
    const render = true;

    var wrapper = shallow(
      <div className="test">
        <div r-if={render} className="a" />
        <div r-else className="b" />
      </div>
    );

    expect(wrapper.html()).to.equal('<div class="test"><div class="a"></div></div>');
  });

  it('should not render div when r-if = false and r-else = true', function () {
    const render = false;

    var wrapper = shallow(
      <div className="test">
        <div r-if={render} className="a" />
        <div r-else className="b" />
        <div className="c" />
      </div>
    );

    expect(wrapper.html()).to.equal('<div class="test"><div class="b"></div><div class="c"></div></div>');
  });

  it('should be rendered h1 when r-if = true and r-else = false', function () {
    const render = true;

    var wrapper = shallow(
      <div className="test">
        <h1 r-if={render} className="a" />
        <h1 r-else={render} className="b" />
      </div>
    );

    expect(wrapper.html()).to.equal('<div class="test"><h1 class="a"></h1></div>');
  });

  it('should not render h1 when r-if = false and r-else = true', function () {
    const render = false;

    var wrapper = shallow(
      <div className="test">
        <h1 r-if={render} className="a" />
        <h1 r-else={render} className="b" />
      </div>
    );

    expect(wrapper.html()).to.equal('<div class="test"><h1 class="b"></h1></div>');
  });

  it('should be rendered when there are a lot of children h1 when r-if = true and r-else = false', function () {
    const render = true;

    var wrapper = shallow(
      <div className="test">
        <div r-if={render} className="title" >
          <p r-if={render} className="p" >
            title
          </p>
          <p r-else className="p-else" >
            title
          </p>
        </div>
        <div r-else className="title-else" >
          <p className="p-else" >
            title
          </p>
        </div>
        <div r-if={render} className="title" >
          <p r-if={render} className="p" >
            title
          </p>
          <p r-else className="p-else" >
            title
          </p>
        </div>
        <div r-else className="title-else" >
          <p className="p-else" >
            title
          </p>
        </div>
      </div>
    );

    expect(wrapper.html()).to.equal('<div class="test"><div class="title"><p class="p">title</p></div><div class="title"><p class="p">title</p></div></div>');
  });

  it('should not render when there are a lot of children h1 when r-if = false and r-else = true', function () {
    const render = false;

    var wrapper = shallow(
      <div className="test">
        <div r-if={render} className="title" >
          <p r-if={render} className="p" >
            title
          </p>
          <p r-else className="p-else" >
            title
          </p>
        </div>
        <div r-else className="title-else" >
          <p className="p-else" >
            title
          </p>
        </div>
        <div r-if={render} className="title" >
          <p r-if={render} className="p" >
            title
          </p>
          <p r-else className="p-else" >
            title
          </p>
        </div>
        <div r-else className="title-else" >
          <p className="p-else" >
            title
          </p>
        </div>
      </div>
    );

    expect(wrapper.html()).to.equal('<div class="test"><div class="title-else"><p class="p-else">title</p></div><div class="title-else"><p class="p-else">title</p></div></div>');
  });

  it('should be rendered with children Button when r-if = true and r-else = false', function () {
    const render = true;

    var wrapper = shallow(
      <div className="test">
        <Button r-if={render}>Button1</Button>
        <Button r-else>Button2</Button>
      </div>
    );

    expect(wrapper.html()).to.equal('<div class="test"><button>Button1</button></div>');
  });

  it('should not render with children Button when r-if = false and r-else = true', function () {
    const render = false;

    var wrapper = shallow(
      <div className="test">
        <Button r-if={render}>Button1</Button>
        <Button r-else>Button2</Button>
      </div>
    );

    expect(wrapper.html()).to.equal('<div class="test"><button>Button2</button></div>');
  });
});
