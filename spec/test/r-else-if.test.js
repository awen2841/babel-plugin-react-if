var React = require('react');
var chai = require('chai');
var chaiEnzyme = require('chai-enzyme');
var shallow = require('enzyme').shallow;
var expect = chai.expect;
var Button = require('../fixtures/Button');

chai.use(chaiEnzyme());

describe('React else with children', function () {
  it('should be rendered div when r-if = true and r-else-if = false and r-else = false', function () {
    const component = 'a';

    var wrapper = shallow(
      <div className="test">
        <div r-if={component === 'a'} className="a" />
        <div r-else-if={component === 'b'} className="b" />
        <div r-else className="c" />
      </div>
    );

    expect(wrapper.html()).to.equal('<div class="test"><div class="a"></div></div>');
  });

  it('should be rendered div when r-if = false and r-else-if = true and r-else = false', function () {
    const component = 'b';

    var wrapper = shallow(
      <div className="test">
        <div r-if={component === 'a'} className="a" />
        <div r-else-if={component === 'b'} className="b" />
        <div r-else className="c" />
      </div>
    );

    expect(wrapper.html()).to.equal('<div class="test"><div class="b"></div></div>');
  });

  it('should be rendered div when r-if = false and r-else-if = false and r-else = true', function () {
    const component = 'c';

    var wrapper = shallow(
      <div className="test">
        <div r-if={component === 'a'} className="a" />
        <div r-else-if={component === 'b'} className="b" />
        <div r-else className="c" />
      </div>
    );

    expect(wrapper.html()).to.equal('<div class="test"><div class="c"></div></div>');
  });

  it('should be rendered h1 when r-if = true and r-else-if = false and r-else = false', function () {
    const component = 'a';

    var wrapper = shallow(
      <div className="test">
        <h1 r-if={component === 'a'} className="a" />
        <h1 r-else-if={component === 'b'} className="b" />
        <h1 r-else className="c" />
      </div>
    );

    expect(wrapper.html()).to.equal('<div class="test"><h1 class="a"></h1></div>');
  });

  it('should be rendered h1 when r-if = false and r-else-if = true and r-else = false', function () {
    const component = 'b';

    var wrapper = shallow(
      <div className="test">
        <h1 r-if={component === 'a'} className="a" />
        <h1 r-else-if={component === 'b'} className="b" />
        <h1 r-else className="c" />
      </div>
    );

    expect(wrapper.html()).to.equal('<div class="test"><h1 class="b"></h1></div>');
  });

  it('should be rendered h1 when r-if = false and r-else-if = false and r-else = true', function () {
    const component = 'c';

    var wrapper = shallow(
      <div className="test">
        <h1 r-if={component === 'a'} className="a" />
        <h1 r-else-if={component === 'b'} className="b" />
        <h1 r-else className="c" />
      </div>
    );

    expect(wrapper.html()).to.equal('<div class="test"><h1 class="c"></h1></div>');
  });

  it('should be rendered Button when r-if = true and r-else-if = false and r-else = false', function () {
    const component = 'Button1';

    var wrapper = shallow(
      <div className="test">
        <Button r-if={component === 'Button1'}>Button1</Button>
        <Button r-else-if={component === 'Button2'}>Button2</Button>
        <Button r-else>Button3</Button>
      </div>
    );

    expect(wrapper.html()).to.equal('<div class="test"><button>Button1</button></div>');
  });

  it('should be rendered Button when r-if = false and r-else-if = true and r-else = false', function () {
    const component = 'Button2';

    var wrapper = shallow(
      <div className="test">
        <Button r-if={component === 'Button1'}>Button1</Button>
        <Button r-else-if={component === 'Button2'}>Button2</Button>
        <Button r-else>Button3</Button>
      </div>
    );

    expect(wrapper.html()).to.equal('<div class="test"><button>Button2</button></div>');
  });

  it('should be rendered Button when r-if = false and r-else-if = false and r-else = true', function () {
    const component = 'Button3';

    var wrapper = shallow(
      <div className="test">
        <Button r-if={component === 'Button1'}>Button1</Button>
        <Button r-else-if={component === 'Button2'}>Button2</Button>
        <Button r-else>Button3</Button>
      </div>
    );

    expect(wrapper.html()).to.equal('<div class="test"><button>Button3</button></div>');
  });
});
