const React = require('react');
const chai = require('chai');
const chaiEnzyme = require('chai-enzyme');
const { shallow } = require('enzyme');

const { expect } = chai;
const Button = require('../fixtures/Button');

chai.use(chaiEnzyme());

describe('React else with children', () => {
  it('should be rendered div when r-if = true and r-else = false', () => {
    const render = true;

    const Component = () => <>
      <div r-if={render} className="a" />
      <div r-else className="b" />
    </>;

    const wrapper = shallow(<Component/>);

    expect(wrapper.html()).to.equal('<div class="a"></div>');
  });

  it('should not render div when r-if = false and r-else = true', () => {
    const render = false;

    const Component = () => <>
      <div r-if={render} className="a" />
      <div r-else className="b" />
      <div className="c" />
    </>;

    const wrapper = shallow(<Component/>);

    expect(wrapper.html()).to.equal('<div class="b"></div><div class="c"></div>');
  });

  it('should be rendered h1 when r-if = true and r-else = false', () => {
    const render = true;

    const Component = () => <>
      <h1 r-if={render} className="a" />
      <h1 r-else={render} className="b" />
    </>;

    const wrapper = shallow(<Component/>);

    expect(wrapper.html()).to.equal('<h1 class="a"></h1>');
  });

  it('should not render h1 when r-if = false and r-else = true', () => {
    const render = false;

    const Component = () => <>
      <h1 r-if={render} className="a" />
      <h1 r-else={render} className="b" />
    </>;

    const wrapper = shallow(<Component/>);

    expect(wrapper.html()).to.equal('<h1 class="b"></h1>');
  });

  it('should be rendered when there are a lot of children h1 when r-if = true and r-else = false', () => {
    const render = true;

    const Component = () => <>
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
    </>;

    const wrapper = shallow(<Component/>);

    expect(wrapper.html()).to.equal('<div class="title"><p class="p">title</p></div><div class="title"><p class="p">title</p></div>');
  });

  it('should not render when there are a lot of children h1 when r-if = false and r-else = true', () => {
    const render = false;

    const Component = () => <>
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
    </>;

    const wrapper = shallow(<Component/>);

    expect(wrapper.html()).to.equal('<div class="title-else"><p class="p-else">title</p></div><div class="title-else"><p class="p-else">title</p></div>');
  });

  it('should be rendered with children Button when r-if = true and r-else = false', () => {
    const render = true;

    const Component = () => <>
      <Button r-if={render}>Button1</Button>
      <Button r-else>Button2</Button>
    </>;

    const wrapper = shallow(<Component/>);

    expect(wrapper.html()).to.equal('<button>Button1</button>');
  });

  it('should not render with children Button when r-if = false and r-else = true', () => {
    const render = false;

    const Component = () => <>
      <Button r-if={render}>Button1</Button>
      <Button r-else>Button2</Button>
    </>;

    const wrapper = shallow(<Component/>);

    expect(wrapper.html()).to.equal('<button>Button2</button>');
  });

  it('should be rendered div when r-if = true and r-else = false', () => {
    const render = true;

    const wrapper = shallow(
      <div className="test">
        <div r-if={render} className="a" />
        <div r-else className="b" />
      </div>,
    );

    expect(wrapper.html()).to.equal('<div class="test"><div class="a"></div></div>');
  });

  it('should not render div when r-if = false and r-else = true', () => {
    const render = false;

    const wrapper = shallow(
      <div className="test">
        <div r-if={render} className="a" />
        <div r-else className="b" />
        <div className="c" />
      </div>,
    );

    expect(wrapper.html()).to.equal('<div class="test"><div class="b"></div><div class="c"></div></div>');
  });

  it('should be rendered h1 when r-if = true and r-else = false', () => {
    const render = true;

    const wrapper = shallow(
      <div className="test">
        <h1 r-if={render} className="a" />
        <h1 r-else={render} className="b" />
      </div>,
    );

    expect(wrapper.html()).to.equal('<div class="test"><h1 class="a"></h1></div>');
  });

  it('should not render h1 when r-if = false and r-else = true', () => {
    const render = false;

    const wrapper = shallow(
      <div className="test">
        <h1 r-if={render} className="a" />
        <h1 r-else={render} className="b" />
      </div>,
    );

    expect(wrapper.html()).to.equal('<div class="test"><h1 class="b"></h1></div>');
  });

  it('should be rendered when there are a lot of children h1 when r-if = true and r-else = false', () => {
    const render = true;

    const wrapper = shallow(
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
      </div>,
    );

    expect(wrapper.html()).to.equal('<div class="test"><div class="title"><p class="p">title</p></div><div class="title"><p class="p">title</p></div></div>');
  });

  it('should not render when there are a lot of children h1 when r-if = false and r-else = true', () => {
    const render = false;

    const wrapper = shallow(
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
      </div>,
    );

    expect(wrapper.html()).to.equal('<div class="test"><div class="title-else"><p class="p-else">title</p></div><div class="title-else"><p class="p-else">title</p></div></div>');
  });

  it('should be rendered with children Button when r-if = true and r-else = false', () => {
    const render = true;

    const wrapper = shallow(
      <div className="test">
        <Button r-if={render}>Button1</Button>
        <Button r-else>Button2</Button>
      </div>,
    );

    expect(wrapper.html()).to.equal('<div class="test"><button>Button1</button></div>');
  });

  it('should not render with children Button when r-if = false and r-else = true', () => {
    const render = false;

    const wrapper = shallow(
      <div className="test">
        <Button r-if={render}>Button1</Button>
        <Button r-else>Button2</Button>
      </div>,
    );

    expect(wrapper.html()).to.equal('<div class="test"><button>Button2</button></div>');
  });
});
