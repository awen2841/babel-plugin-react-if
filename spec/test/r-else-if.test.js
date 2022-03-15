const React = require('react');
const chai = require('chai');
const chaiEnzyme = require('chai-enzyme');
const { shallow } = require('enzyme');

const { expect } = chai;
const Button = require('../fixtures/Button');

chai.use(chaiEnzyme());

describe('React else with children', () => {
  it('should be rendered div when r-if = true and r-else-if = false and r-else = false', () => {
    const component = 'a';

    const Component = () => <>
      <div r-if={component === 'a'} className="a" />
      <div r-else-if={component === 'b'} className="b" />
      <div r-else className="c" />
    </>;

    const wrapper = shallow(<Component/>);

    expect(wrapper.html()).to.equal('<div class="a"></div>');
  });

  it('should be rendered div when r-if = false and r-else-if = true and r-else = false', () => {
    const component = 'b';

    const Component = () => <>
      <div r-if={component === 'a'} className="a" />
      <div r-else-if={component === 'b'} className="b" />
      <div r-else className="c" />
    </>;

    const wrapper = shallow(<Component/>);

    expect(wrapper.html()).to.equal('<div class="b"></div>');
  });

  it('should be rendered div when r-if = false and r-else-if = false and r-else = true', () => {
    const component = 'c';

    const Component = () => <>
      <div r-if={component === 'a'} className="a" />
      <div r-else-if={component === 'b'} className="b" />
      <div r-else className="c" />
    </>;

    const wrapper = shallow(<Component/>);

    expect(wrapper.html()).to.equal('<div class="c"></div>');
  });

  it('should be rendered h1 when r-if = true and r-else-if = false and r-else = false', () => {
    const component = 'a';

    const Component = () => <>
      <h1 r-if={component === 'a'} className="a" />
      <h1 r-else-if={component === 'b'} className="b" />
      <h1 r-else className="c" />
    </>;

    const wrapper = shallow(<Component/>);

    expect(wrapper.html()).to.equal('<h1 class="a"></h1>');
  });

  it('should be rendered h1 when r-if = false and r-else-if = true and r-else = false', () => {
    const component = 'b';

    const Component = () => <>
      <h1 r-if={component === 'a'} className="a" />
      <h1 r-else-if={component === 'b'} className="b" />
      <h1 r-else className="c" />
    </>;

    const wrapper = shallow(<Component/>);

    expect(wrapper.html()).to.equal('<h1 class="b"></h1>');
  });

  it('should be rendered h1 when r-if = false and r-else-if = false and r-else = true', () => {
    const component = 'c';

    const Component = () => <>
      <h1 r-if={component === 'a'} className="a" />
      <h1 r-else-if={component === 'b'} className="b" />
      <h1 r-else className="c" />
    </>;

    const wrapper = shallow(<Component/>);

    expect(wrapper.html()).to.equal('<h1 class="c"></h1>');
  });

  it('should be rendered Button when r-if = true and r-else-if = false and r-else = false', () => {
    const component = 'Button1';

    const Component = () => <>
      <Button r-if={component === 'Button1'}>Button1</Button>
      <Button r-else-if={component === 'Button2'}>Button2</Button>
      <Button r-else>Button3</Button>
    </>;

    const wrapper = shallow(<Component/>);

    expect(wrapper.html()).to.equal('<button>Button1</button>');
  });

  it('should be rendered Button when r-if = false and r-else-if = true and r-else = false', () => {
    const component = 'Button2';

    const Component = () => <>
      <Button r-if={component === 'Button1'}>Button1</Button>
      <Button r-else-if={component === 'Button2'}>Button2</Button>
      <Button r-else>Button3</Button>
    </>;

    const wrapper = shallow(<Component/>);

    expect(wrapper.html()).to.equal('<button>Button2</button>');
  });

  it('should be rendered Button when r-if = false and r-else-if = false and r-else = true', () => {
    const component = 'Button3';

    const Component = () => <>
      <Button r-if={component === 'Button1'}>Button1</Button>
      <Button r-else-if={component === 'Button2'}>Button2</Button>
      <Button r-else>Button3</Button>
    </>;

    const wrapper = shallow(<Component/>);

    expect(wrapper.html()).to.equal('<button>Button3</button>');
  });

  it('should be rendered div when r-if = true and r-else-if = false and r-else = false', () => {
    const component = 'a';

    const wrapper = shallow(
      <div className="test">
        <div r-if={component === 'a'} className="a" />
        <div r-else-if={component === 'b'} className="b" />
        <div r-else className="c" />
      </div>,
    );

    expect(wrapper.html()).to.equal('<div class="test"><div class="a"></div></div>');
  });

  it('should be rendered div when r-if = false and r-else-if = true and r-else = false', () => {
    const component = 'b';

    const wrapper = shallow(
      <div className="test">
        <div r-if={component === 'a'} className="a" />
        <div r-else-if={component === 'b'} className="b" />
        <div r-else className="c" />
      </div>,
    );

    expect(wrapper.html()).to.equal('<div class="test"><div class="b"></div></div>');
  });

  it('should be rendered div when r-if = false and r-else-if = false and r-else = true', () => {
    const component = 'c';

    const wrapper = shallow(
      <div className="test">
        <div r-if={component === 'a'} className="a" />
        <div r-else-if={component === 'b'} className="b" />
        <div r-else className="c" />
      </div>,
    );

    expect(wrapper.html()).to.equal('<div class="test"><div class="c"></div></div>');
  });

  it('should be rendered h1 when r-if = true and r-else-if = false and r-else = false', () => {
    const component = 'a';

    const wrapper = shallow(
      <div className="test">
        <h1 r-if={component === 'a'} className="a" />
        <h1 r-else-if={component === 'b'} className="b" />
        <h1 r-else className="c" />
      </div>,
    );

    expect(wrapper.html()).to.equal('<div class="test"><h1 class="a"></h1></div>');
  });

  it('should be rendered h1 when r-if = false and r-else-if = true and r-else = false', () => {
    const component = 'b';

    const wrapper = shallow(
      <div className="test">
        <h1 r-if={component === 'a'} className="a" />
        <h1 r-else-if={component === 'b'} className="b" />
        <h1 r-else className="c" />
      </div>,
    );

    expect(wrapper.html()).to.equal('<div class="test"><h1 class="b"></h1></div>');
  });

  it('should be rendered h1 when r-if = false and r-else-if = false and r-else = true', () => {
    const component = 'c';

    const wrapper = shallow(
      <div className="test">
        <h1 r-if={component === 'a'} className="a" />
        <h1 r-else-if={component === 'b'} className="b" />
        <h1 r-else className="c" />
      </div>,
    );

    expect(wrapper.html()).to.equal('<div class="test"><h1 class="c"></h1></div>');
  });

  it('should be rendered Button when r-if = true and r-else-if = false and r-else = false', () => {
    const component = 'Button1';

    const wrapper = shallow(
      <div className="test">
        <Button r-if={component === 'Button1'}>Button1</Button>
        <Button r-else-if={component === 'Button2'}>Button2</Button>
        <Button r-else>Button3</Button>
      </div>,
    );

    expect(wrapper.html()).to.equal('<div class="test"><button>Button1</button></div>');
  });

  it('should be rendered Button when r-if = false and r-else-if = true and r-else = false', () => {
    const component = 'Button2';

    const wrapper = shallow(
      <div className="test">
        <Button r-if={component === 'Button1'}>Button1</Button>
        <Button r-else-if={component === 'Button2'}>Button2</Button>
        <Button r-else>Button3</Button>
      </div>,
    );

    expect(wrapper.html()).to.equal('<div class="test"><button>Button2</button></div>');
  });

  it('should be rendered Button when r-if = false and r-else-if = false and r-else = true', () => {
    const component = 'Button3';

    const wrapper = shallow(
      <div className="test">
        <Button r-if={component === 'Button1'}>Button1</Button>
        <Button r-else-if={component === 'Button2'}>Button2</Button>
        <Button r-else>Button3</Button>
      </div>,
    );

    expect(wrapper.html()).to.equal('<div class="test"><button>Button3</button></div>');
  });
});
